import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../Button';
import Badge, { BadgeProps } from '.';


describe('<Badge />', () => {
  function renderBadgeWithPlacement(
    placement: BadgeProps["placement"], 
    testId: string
  ) 
  {
    render(
      <Button>
        Inbox
        <Badge 
          placement={placement} 
          dataTestId={testId}
          absolute
        >
          10
        </Badge>
      </Button>
    );
  }

  it('renders a badge with children', () => {
    const text = "This is some text";
    render(
      <Badge dataTestId="badge">{text}</Badge>
    );

    expect(screen.getByTestId('badge'))
      .toHaveTextContent(text)
  });

  it('renders a circular badge', () => {
    render(
      <Badge dataTestId="badge" circular>1</Badge>
    );

    expect(screen.getByTestId('badge'))
      .toMatchSnapshot();
  });

  it('renders a badge with the correct placement', () => {
    renderBadgeWithPlacement('topLeft', 'test1');
    renderBadgeWithPlacement('topRight', 'test2');
    renderBadgeWithPlacement('bottomLeft', 'test3');
    renderBadgeWithPlacement('bottomRight', 'test4');

    expect(screen.getByTestId('test1')).toMatchSnapshot('topLeft');
    expect(screen.getByTestId('test2')).toMatchSnapshot('topRight');
    expect(screen.getByTestId('test3')).toMatchSnapshot('bottomLeft');
    expect(screen.getByTestId('test4')).toMatchSnapshot('bottomRight');
  });

  it('renders a badge with an `aria-label` attribute', () => {
    render(
      <Badge 
        variation="primary" 
        ariaLabel="unread messages"
        dataTestId="badge"
      >
        200
      </Badge>
    );

    expect(screen.getByTestId('badge').getAttribute('aria-label'))
      .toEqual('unread messages');
  });
});