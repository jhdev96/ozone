import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonGroup from '.';
import Button from '../Button';


describe('<ButtonGroup />', () => {
  it('Renders a button group with 3 buttons', () => {
    render(
      <ButtonGroup dataTestId="test">
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
      </ButtonGroup>
    );

    expect(screen.getByTestId('test')).toMatchSnapshot();
  });

  it('renders a button group with a dark theme', () => {
    render(
      <ButtonGroup dataTestId="test" theme="dark">
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
      </ButtonGroup>
    );

    expect(screen.getByTestId('test')).toMatchSnapshot();
  });
});