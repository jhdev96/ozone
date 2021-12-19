import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import Dropdown from '.';


describe('<Dropdown />', () => {
  it('renders a `basic` dropdown by default', () => {
    render(
      <Dropdown dataTestId="test" />
    );

    expect(screen.getByTestId('test')).toMatchSnapshot();
  });

  it('renders a dropdown of type `filter`', () => {
    render(
      <Dropdown variation="filter" dataTestId="test" />
    );

    expect(screen.getByTestId('test')).toMatchSnapshot();
  });

  it('renders a dropdown with options', () => {
    render(
      <Dropdown dataTestId="test">
        <Dropdown.Item>A</Dropdown.Item>
        <Dropdown.Item>B</Dropdown.Item>
        <Dropdown.Item>C</Dropdown.Item>
      </Dropdown>
    );

    expect(screen.getByTestId('test').children)
      .toHaveLength(3);
  });

  it('renders a dropdown with a `defaultValue prop`', () => {
    const defaultValue = "Start";

    render(
      <Dropdown dataTestId="test" defaultValue={defaultValue} />
    );

    expect(document.querySelector('.basic__button'))
      .toHaveTextContent(defaultValue);
  })

  it('adds a visible class when the dropdown button is clicked', () => {
    render(
      <Dropdown dataTestId="test">
        <Dropdown.Item>A</Dropdown.Item>
        <Dropdown.Item>B</Dropdown.Item>
        <Dropdown.Item>C</Dropdown.Item>
      </Dropdown>
    );

    fireEvent.click(document.querySelector('.basic__button')!);
    expect(screen.getByTestId('test')).toHaveClass('visible');
  });

  it('changes the selection when an item is clicked', () => {
    render(
      <Dropdown saveSelection>
        <Dropdown.Item id="a">A</Dropdown.Item>
        <Dropdown.Item id="b">B</Dropdown.Item>
        <Dropdown.Item id="c">C</Dropdown.Item>
      </Dropdown>
    );

    fireEvent.click(document.querySelector('#a')!);
    expect(document.querySelector('.basic__button'))
      .toHaveTextContent('A');

    expect(document.querySelector('#a')!.firstChild)
      .toHaveClass('selected');

    fireEvent.click(document.querySelector('#b')!);
    expect(document.querySelector('.basic__button'))
      .toHaveTextContent('B');

    expect(document.querySelector('#b')!.firstChild)
      .toHaveClass('selected');

    fireEvent.click(document.querySelector('#c')!);
    expect(document.querySelector('.basic__button'))
      .toHaveTextContent('C');

    expect(document.querySelector('#c')!.firstChild)
      .toHaveClass('selected');
  });

  it('calls `onSelection` when an item is clicked', () => {
    const onSelect = jest.fn();

    render(
      <Dropdown onSelection={onSelect}>
        <Dropdown.Item id="a">A</Dropdown.Item>
        <Dropdown.Item>B</Dropdown.Item>
        <Dropdown.Item>C</Dropdown.Item>
      </Dropdown>
    );

    fireEvent.click(document.querySelector('#a')!);
    expect(onSelect).toBeCalledWith("A");
  });
});