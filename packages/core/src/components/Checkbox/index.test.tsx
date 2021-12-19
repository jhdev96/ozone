import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Checkbox from '.';


describe('<Checkbox />', () => {
  it('renders a checkbox with text', () => {
    render(
      <Checkbox dataTestId="test">text</Checkbox>
    );

    expect(screen.getByTestId('test'))
      .toHaveTextContent('text');
  });

  it('sets `checked` attribute to true when clicked', () => {
    
    act(() => {
      render(
        <Checkbox dataTestId="test">text</Checkbox>
      );
    });

    const checkbox = screen.getByTestId('test');
  
    fireEvent.click(checkbox);
    expect(checkbox.querySelector('input')!.checked)
      .toBe(true);
  });

  it('renders a transition when the input is clicked', () => {
    act(() => {
      render(
        <Checkbox dataTestId="test">text</Checkbox>
      );
    });

    const checkbox = screen.getByTestId('test');

    fireEvent.click(checkbox);
    expect(checkbox.querySelector('.checkboxRipple'))
      .toBeInTheDocument;
  });

  it('sets the `required` attribute to true', () => {
    render(
      <Checkbox dataTestId="test" isRequired>text</Checkbox>
    );

    const checkbox = screen.getByTestId('test'); 

    expect(checkbox.querySelector('input')!.required)
      .toBe(true);
  });

  it('renders a disabled checkbox', () => {
    render(
      <Checkbox dataTestId="test" isDisabled>text</Checkbox>
    );

    const checkbox = screen.getByTestId('test');

    expect(checkbox.querySelector('input')!.disabled)
      .toBe(true);
  });

  it('renders a checkbox with an error', () => {
    render(
      <Checkbox 
        dataTestId="test" 
        hasError
      >
        text
      </Checkbox>
    );

    const checkbox = screen.getByTestId('test');

    expect(checkbox).toMatchSnapshot();
  });

  it('calls `onChange` when the checkbox is clicked', () => {
    const onChange = jest.fn();

    act(() => {
      render(
        <Checkbox 
          onChange={onChange} 
          dataTestId="test"
        >
          text
        </Checkbox>
      );
    });

    const checkbox = screen.getByTestId('test');

    fireEvent.click(checkbox);
    expect(onChange).toBeCalled;
  });
});