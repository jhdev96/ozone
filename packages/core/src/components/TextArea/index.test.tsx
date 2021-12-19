import React from "react";
import { 
  render, 
  fireEvent 
} from "@testing-library/react";
import TextArea, { TextAreaProps } from ".";


describe('<TextArea />', () => {
  function setUp(props?: TextAreaProps, id="test"): HTMLTextAreaElement | null
  { 
    render(<TextArea id={id} {...props} />);

    return document.querySelector(`#${id}`);
  }

  it('renders a textarea with a placeholder', () => {
    const element = setUp({placeholder: "hello"});

    expect(element!.placeholder).toBe("hello");
  });

  it('renders a required textarea', () => {
    const element = setUp({isRequired: true});

    expect(element!.required).toBe(true);
  });

  it('renders a disabled textarea', () => {
    const element = setUp({isDisabled: true});

    expect(element!.disabled).toBe(true);
  });

  it('renders a textarea with a `name` attribute', () => {
    const element = setUp({name: 'TA'});

    expect(element!.name).toBe('TA');
  });

  it('renders a textarea with 4 rows', () => {
    const element = setUp({minimumRows: 4});

    expect(element!.rows).toBe(4);
  });

  it('sets the textarea\'s value to the `defaultValue` prop', () => {
    const element = setUp({defaultValue: 'hello'});

    expect(element!.value).toBe('hello');
  });

  it('sets the `resize` prop', () => {
    const element = setUp({resize: 'both'});

    expect(element).toHaveClass('both');
  });

  it('changes the textarea\'s value during change events', () => {
    const element = setUp();

    fireEvent.change(element!, {target: {value: 'hello'}});

    expect(element!.value).toBe('hello');
  });

  it('calls `onChange` during change events', () => {
    const onChange = jest.fn();
    const element = setUp({onChange: onChange});

    fireEvent.change(element!, {target: {value: 'hello'}});

    expect(onChange).toBeCalled();
  });

  it('calls `onFocus` when the textarea is focused', () => {
    const onFocus = jest.fn();
    const element = setUp({onFocus: onFocus});

    fireEvent.focus(element!);

    expect(onFocus).toBeCalled();
  });

  it('calls `onBlur` when the textarea loses focus', () => {
    const onBlur = jest.fn();
    const element = setUp({onBlur: onBlur});

    fireEvent.blur(element!);

    expect(onBlur).toBeCalled();
  });

  it('renders a textarea with an error class', () => {
    const element = setUp({hasError: true});

    expect(element).toHaveClass('error');
  });

  it('renders the correct css classes', () => {
    const element = setUp({resize: 'both'});

    expect(element).toMatchSnapshot();
  });
});