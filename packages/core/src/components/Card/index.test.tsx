import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '.';
import Dropdown from '../Dropdown';


describe('<Card />', () => {
  it('renders a `primary` card by default', () => {
    const {container} = render(
      <Card>This is a card</Card>
    );

    expect(container).toMatchSnapshot();
  });

  it('renders a card with padding', () => {
    const {container} = render(
      <Card pad dataTestId="test"></Card>
    );

    expect(container).toMatchSnapshot();
  });

  it('renders the correct width', () => {
    render(<Card width="narrow" dataTestId="narrow"></Card>);
    render(<Card width="wide" dataTestId="wide"></Card>);
    render(<Card width="full" dataTestId="full"></Card>);

    expect(screen.getByTestId('narrow')).toMatchSnapshot();
    expect(screen.getByTestId('wide')).toMatchSnapshot();
    expect(screen.getByTestId('full')).toMatchSnapshot();
  });

  it('renders a card with a dark theme', () => {
    render(
      <Card theme="dark" dataTestId="test">text</Card>
    );

    expect(screen.getByTestId('test')).toMatchSnapshot();
  });

  it('renders a card with a dropdown', () => {
    render(
      <Card 
        variation="basic"
        dataTestId="card"
      >
        <Card.Header>
          <Card.Title>Title</Card.Title>
          <Dropdown 
            variation="basic"
            dataTestId="dropdown"
          >
            <Dropdown.Item>A</Dropdown.Item>
            <Dropdown.Item>B</Dropdown.Item>
            <Dropdown.Item>C</Dropdown.Item>
          </Dropdown>
        </Card.Header>
        text
      </Card>
    );

    const card = screen.getByTestId('card');
    const dropdown = screen.getByTestId('dropdown');
    expect(card).toContainElement(dropdown);
  });
});