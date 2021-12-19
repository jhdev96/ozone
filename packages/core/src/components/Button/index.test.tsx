import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '.';


describe('<Button />', () => {
  it("renders a button with text", () => {
    const {container} = render(
      <Button variation="primary">Hello</Button>
    );
  
    expect(container.textContent).toBe("Hello");
  });

  it('renders a `primary` button by default', () => {
    render(
      <Button dataTestId="test">text</Button>
    );
    
    expect(screen.getByTestId('test'))
      .toMatchSnapshot();
  });

  it('renders a `flat` button', () => {
    render(
      <Button dataTestId="test" flat>text</Button>
    );

    expect(screen.getByTestId('test').classList)
      .toContain('flat')
  });

  it('renders a `submit` button', () => {
    render(
      <Button type="submit" dataTestId="test">
        text
      </Button>
    );

    expect(screen.getByTestId('test').getAttribute('type'))
      .toEqual('submit');
  });

  it('calls `onClick` when the button is clicked', () => {
    const onClick = jest.fn();

    render(
      <Button onClick={onClick} dataTestId="test">Hello</Button>
    );

    fireEvent.click(screen.getByTestId('test'));
    expect(onClick).toBeCalled();
  });

  it('skips the call to `onClick` when the button is disabled', () => {
    const onClick = jest.fn();

    render(
      <Button 
        onClick={onClick} 
        dataTestId="test"
        isDisabled
      >
        Hello
      </Button>
    );

    fireEvent.click(screen.getByTestId('test'));
    expect(onClick).not.toBeCalled();
  });

  it('calls `onMouseEnter` when the mouse hovers over', () => {
    const onMouseEnter = jest.fn();

    const {container} = render(
      <Button onMouseEnter={onMouseEnter}>Hello</Button>
    );    

    fireEvent.mouseEnter(container);
  });

  it('calls `onMouseLeave` when the mouse hovers away', () => {
    const onMouseLeave = jest.fn();

    const {container} = render(
      <Button onMouseLeave={onMouseLeave}>Hello</Button>
    );    

    fireEvent.mouseLeave(container);
  });

  it('renders a button with the `aria-busy` attribute', () => {
    render(
      <Button dataTestId="test" isLoading>text</Button>
    );

    expect(screen.getByTestId('test').getAttribute('aria-busy'))
      .toBe("true");
  });
});