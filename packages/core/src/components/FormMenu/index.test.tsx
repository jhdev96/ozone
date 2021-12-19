import React from "react";
import { render, fireEvent, screen } from '@testing-library/react';
import FormMenu from ".";


describe('<FormMenu />', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('renders a form menu with 3 items', () => {
    render(
      <FormMenu activeItem="A" dataTestId="test">
        <FormMenu.Item id="a">A</FormMenu.Item>
        <FormMenu.Item id="b">B</FormMenu.Item>
        <FormMenu.Item id="c">C</FormMenu.Item>
      </FormMenu>
    );

    expect(document.querySelector('.items')!.children)
      .toHaveLength(3);

    expect(screen.getByTestId("test")).toMatchSnapshot();
  });

  it('calls `onClick` when an item is clicked', () => {
    const onClick = jest.fn();

    render(
      <FormMenu activeItem="A" dataTestId="test">
        <FormMenu.Item>A</FormMenu.Item>
        <FormMenu.Item 
          id="b" 
          onClick={onClick}
        >
          B
        </FormMenu.Item>
        <FormMenu.Item>C</FormMenu.Item>
      </FormMenu>
    );

    fireEvent.click(document.querySelector('#b')!);
    expect(onClick).toBeCalled;
  });
});