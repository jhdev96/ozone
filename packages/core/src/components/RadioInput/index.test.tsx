import React from "react";
import { 
  render, 
  screen, 
  fireEvent
} from "@testing-library/react"; 
import RadioInput from ".";


describe('<RadioInput />', () => {
  it('renders a radio input with text content', () => {
    render(
      <RadioInput dataTestId="test">
        text
      </RadioInput>
    );

    expect(screen.getByTestId("test"))
      .toHaveTextContent("text");
  });

  it('renders an unchecked radio input by default', () => {
    render(
      <RadioInput dataTestId="test">
        text
      </RadioInput>
    );

    const radio = document.querySelector('.radio');
    expect(radio).toBeEmptyDOMElement();
  });

  it('sets the `required` attribute to true by default', () => {
    render(
      <RadioInput>text</RadioInput>
    );

    const input = document.querySelector('.input') as HTMLInputElement;
    expect(input.required).toBe(true);
  });

  it('sets the `name` attribute when specified', () => {
    render(
      <RadioInput name="hello">text</RadioInput>
    );

    const input = document.querySelector('.input') as HTMLInputElement;
    expect(input.name).toBe('hello');
  });

  it('renders a disabled radio input', () => {
    render(
      <RadioInput isDisabled>
        text
      </RadioInput>
    );

    const input = document.querySelector('.input') as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });

  it('checks the radio input when the component is clicked', () => {
    render(
      <RadioInput dataTestId="test">
        text
      </RadioInput>
    );

    const input = document.querySelector('.input') as HTMLInputElement;

    expect(input.checked).toBe(false);

    fireEvent.click(input);

    expect(input.checked).toBe(true);
  });

  it('renders a transition when the radio input is checked', () => {
    render(
      <RadioInput dataTestId="test">
        text
      </RadioInput>
    );

    const transition = document.querySelector('.radio');
    fireEvent.click(screen.getByTestId('test'));

    expect(transition).not.toBeEmptyDOMElement();
  });

  it('calls `onChange` when the input changes', () => {
    const onChange = jest.fn();

    render(
      <RadioInput 
        onChange={onChange} 
        dataTestId="test"
      >
        text
      </RadioInput>
    );

    fireEvent.click(screen.getByTestId('test'));

    expect(onChange).toBeCalled;
  });

  it('renders a radio input with an error', () => {
    render(
      <RadioInput dataTestId="test" hasError>
        text
      </RadioInput>
    );

    expect(screen.getByTestId('test'))
      .toMatchSnapshot();
  });
});