import React from "react";
import { 
  render, 
  screen,
  fireEvent 
} from "@testing-library/react";
import * as icons from 'icons';
import TextInput from ".";


describe('<TextInput /> basic props', () => {
  it('renders a text input with a placeholder', () => {
    render(
      <TextInput placeholder="text" />
    );

    const input = document.querySelector('input') as HTMLInputElement;
    
    expect(input.placeholder).toBe('text');
  });

  it('renders a required text input', () => {
    render(
      <TextInput isRequired />
    );

    const input = document.querySelector('input') as HTMLInputElement;
    
    expect(input.required).toBe(true);
  });

  it('renders a disabled text input', () => {
    render(
      <TextInput isDisabled />
    );

    const input = document.querySelector('input') as HTMLInputElement;
    
    expect(input.disabled).toBe(true);
  });

  it('sets the `autoComplete` attribute', () => {
    render(
      <TextInput autoComplete="apple" />
    );

    const input = document.querySelector('input') as HTMLInputElement;

    expect(input.autocomplete).toBe('apple');
  });

  it('renders a text input with an icon', () => {
    render(
      <TextInput icon={<icons.MapMarker />} />
    );

    const iconSpan = document.querySelector('.icon');

    expect(iconSpan).not.toBeEmptyDOMElement();
  });

  it('renders an input with the specified value', () => {
    render(
      <TextInput value="hello" />
    );

    const input = document.querySelector('input') as HTMLInputElement;

    expect(input.value).toBe('hello');
  });

  it('renders an input with a name attribute', () => {
    render(
      <TextInput name="name" />
    );

    const input = document.querySelector('input') as HTMLInputElement;

    expect(input.name).toBe('name');
  });
});

describe('<TextInput /> types', () => {
  it('renders an input of type `email`', () => {
    render(
      <TextInput type="email" />
    );

    const input = document.querySelector('input') as HTMLInputElement;

    expect(input.type).toBe('email');
  });

  it('renders an input of type `password`', () => {
    render(
      <TextInput type="password" />
    );

    const input = document.querySelector('input') as HTMLInputElement;

    expect(input.type).toBe('password');
  });

  it('renders an input of type `number`', () => {
    render(
      <TextInput type="number" />
    );

    const input = document.querySelector('input') as HTMLInputElement;

    expect(input.type).toBe('number');
  });
});

describe('<TextInput /> password functionality', () => {
  it('renders a password toggle button', () => {
    render(
      <TextInput type="password" />
    );

    expect(document.querySelector('.togglePassword'))
      .toBeInTheDocument();
  });

  it('changes the input type to `text` when the toggle is clicked', () => {
    render(
      <TextInput type="password" />
    );

    const input = document.querySelector('input') as HTMLInputElement;
    const passwordToggle = document.querySelector('.togglePassword');

    fireEvent.click(passwordToggle!);

    expect(input.type).toBe('text');
  });
});

describe('<TextInput /> change events', () => {
  it('changes the value during change events', () => {
    render(<TextInput />);

    const input = document.querySelector('input') as HTMLInputElement;

    fireEvent.change(input, {target: {value: 'hello'}});

    expect(input.value).toBe('hello');
  });

  it('calls `onChange` during change events', () => {
    const onChange = jest.fn();

    render(<TextInput onChange={onChange} />);

    const input = document.querySelector('input') as HTMLInputElement;

    fireEvent.change(input, {target: {value: 'hello'}});

    expect(onChange).toBeCalled();
  });

  it('leaves the value unchanged if the max boundary is hit', () => {
    render(
      <TextInput type="number" maxValue={10} value={10} />
    );

    const input = document.querySelector('input') as HTMLInputElement;

    fireEvent.change(input, {target: {value: 11}});

    expect(input.value).toBe("10");
  });

  it('leaves the value unchanged if the min boundary is hit', () => {
    render(
      <TextInput type="number" minValue={1} value={1} />
    );

    const input = document.querySelector('input') as HTMLInputElement;

    fireEvent.change(input, {target: {value: 0}});

    expect(input.value).toBe("1");
  });

  it('renders an input whose value can be cleared', () => {
    render(
      <TextInput withClearButton />
    );

    const clearBtn = document.querySelector('.clearBtn');
    const input = document.querySelector('input');

    expect(clearBtn).toBeInTheDocument();

    fireEvent.change(input!, {target: {value: 'hello'}});
    fireEvent.click(clearBtn!);
    
    expect(input!.value).toBe('');
  });

  it('validates the input value during change events', () => {
    const validate = jest.fn();

    render(
      <TextInput 
        pattern={/[0-9]/} 
        validate={validate} 
      />
    );

    const input = document.querySelector('input');
    fireEvent.change(input!, {target: {value: 'a'}});

    expect(validate).toBeCalledWith(false);
  });
});

describe('<TextInput /> focus events', () => {
  it('adds a css class called `focus` when the input is focused', () => {
    render(
      <TextInput dataTestId="test" />
    );

    const wrapper = screen.getByTestId('test');

    fireEvent.focus(wrapper!);

    expect(wrapper!).toHaveClass('focus');
  });

  it('removes the `focus` class when the input loses focus', () => {
    render(
      <TextInput dataTestId="test" />
    );

    const wrapper = screen.getByTestId('test');

    fireEvent.focus(wrapper!);
    fireEvent.blur(wrapper!);

    expect(wrapper!).not.toHaveClass('focus');
  });

  it('auto-focuses the input', () => {
    render(
      <TextInput 
        dataTestId="test" 
        autoFocus 
      />
    );

    const wrapper = screen.getByTestId('test');
    expect(wrapper!).toHaveClass('focus');
  });

  it('calls `onFocus` when the input is focused', () => {
    const onFocus = jest.fn();
    
    render(
      <TextInput 
        dataTestId="test" 
        onFocus={onFocus} 
      />
    );

    const wrapper = screen.getByTestId('test');
    fireEvent.focus(wrapper!);

    expect(onFocus).toBeCalled();
  });

  it('calls `onBlur` when the input loses focus', () => {
    const onBlur = jest.fn();
    
    render(
      <TextInput 
        dataTestId="test" 
        onBlur={onBlur} 
      />
    );

    const wrapper = screen.getByTestId('test');
    fireEvent.blur(wrapper!);

    expect(onBlur).toBeCalled();
  });
});

describe('<TextInput /> error handling', () => {
  it('renders an input with an error', () => {
    render(
      <TextInput
        dataTestId="test" 
        type="email" 
        hasError 
      />
    );

    expect(screen.getByTestId('test')).toHaveClass('error');
  });

  it('renders an input with a validation message', () => {
    render(
      <TextInput type="password" hasError>
        Password must be at least 10 characters
      </TextInput>
    );

    expect(document.querySelector('.validationMssg')!)
      .not.toBeEmptyDOMElement();
  });
});