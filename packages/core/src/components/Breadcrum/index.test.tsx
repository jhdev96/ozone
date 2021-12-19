import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Breadcrum from '.';


describe('<Breadcrum />', () => {
  it('renders a breadcrum with 3 links', () => {
    const {container} = render(
      <Breadcrum dataTestId="test">
        <Breadcrum.Link>Link 1</Breadcrum.Link>
        <Breadcrum.Link>Link 2</Breadcrum.Link>
        <Breadcrum.Link isActive>Link 3</Breadcrum.Link>
      </Breadcrum>
    );

    expect(container.querySelectorAll('[data-testid="test"] .link'))
      .toHaveLength(3);

    expect(container).toMatchSnapshot();
  });

  it('calls `onClick` when a link is clicked', () => {
    const onClick1 = jest.fn();
    const onClick2 = jest.fn();

    render(
      <Breadcrum dataTestId="test">
        <Breadcrum.Link 
          onClick={onClick1}
          dataTestId="link1"
        >
          Link 1
        </Breadcrum.Link>
        <Breadcrum.Link 
          onClick={onClick2}
          dataTestId="link2"
        >
          Link 2
        </Breadcrum.Link>
        <Breadcrum.Link isActive>Link 3</Breadcrum.Link>
      </Breadcrum>
    );

    fireEvent.click(screen.getByTestId('link1'));
    fireEvent.click(screen.getByTestId('link2'));

    expect(onClick1).toBeCalled();
    expect(onClick2).toBeCalled();
  });

  it('displays the links when Breadcrum.Overflow is clicked', () => {
    render(
      <Breadcrum>
        <Breadcrum.Overflow dataTestId="test">
          <Breadcrum.Link>Root</Breadcrum.Link>
          <Breadcrum.Link>Folder1</Breadcrum.Link>
          <Breadcrum.Link>Folder2</Breadcrum.Link>
        </Breadcrum.Overflow>
      </Breadcrum>
    );

    const overflow = screen.getByTestId('test');

    expect(overflow.querySelector('.menu'))
      .not.toHaveClass('visible');

    // clicks the overflow button with the 3 dots.
    fireEvent.click(overflow.querySelector('.dots')!);

    expect(overflow.querySelector('.menu'))
      .toHaveClass('visible');
  });

  it('renders a breadcrum with a dark theme', () => {
    render(
      <Breadcrum dataTestId="test">
        <Breadcrum.Link>Home</Breadcrum.Link>
        <Breadcrum.Overflow theme="dark">
          <Breadcrum.Link>Documents</Breadcrum.Link>
          <Breadcrum.Link>Shared</Breadcrum.Link>
          <Breadcrum.Link>Downloads</Breadcrum.Link>
        </Breadcrum.Overflow>
        <Breadcrum.Link>Folder1</Breadcrum.Link>
        <Breadcrum.Link isActive>Folder2</Breadcrum.Link>
      </Breadcrum>
    );

    expect(screen.getByTestId('test')).toMatchSnapshot();
  });
});