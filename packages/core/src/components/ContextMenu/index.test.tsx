import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { mockRefCurrent } from '../../utils/test-utils';
import ContextMenu from '.';


describe('<ContextMenu />', () => {
  afterEach(() => {
    jest.resetAllMocks();
  })

  function renderContextMenu(sibling?: React.ReactElement, targetId?: string)
  {
    render(
      <>
        {sibling}
        <ContextMenu dataTestId="test" targetId={targetId}>
          <ContextMenu.Title>Menu</ContextMenu.Title>
          <ContextMenu.Body>
            <ContextMenu.Item>A</ContextMenu.Item>
            <ContextMenu.Item>B</ContextMenu.Item>
            <ContextMenu.Item>C</ContextMenu.Item>
          </ContextMenu.Body>
        </ContextMenu>
      </>
    );
  }

  function dummyTarget(): JSX.Element 
  {
    return (
      <>
        <div id="target"/>
        <div id="notATarget" />
      </>
    );
  }

  it('renders a context menu with 3 options', () => {
    renderContextMenu();

    expect(screen.getByTestId('test').querySelectorAll('.menuItem'))
      .toHaveLength(3);
  });

  it('shows the context menu when the target is clicked', () => {
    mockRefCurrent({offsetHeight: 100});

    renderContextMenu(dummyTarget(), "target");

    fireEvent.contextMenu(document.querySelector('#target')!);
    expect(screen.getByTestId('test')).toHaveClass('visible');
  });

  it('shows the context menu when no targetId is provided', () => {
    mockRefCurrent({offsetHeight: 100});

    renderContextMenu(dummyTarget());

    fireEvent.contextMenu(document.querySelector('#notATarget')!);
    expect(screen.getByTestId('test'))
      .toHaveClass('visible');
  });

  it('doesn\'t show the context menu when the target is not clicked', () => {
    mockRefCurrent({offsetHeight: 100});

    renderContextMenu(dummyTarget(), "target");

    fireEvent.contextMenu(document.querySelector('#notATarget')!);
    expect(screen.getByTestId('test'))
      .not.toHaveClass('visible');
  });

  it('hides the context menu when another element is clicked', () => {
    mockRefCurrent({offsetHeight: 100});

    renderContextMenu(dummyTarget(), "target");

    fireEvent.contextMenu(document.querySelector('#target')!);
    fireEvent.click(document.querySelector('#notATarget')!)
    expect(screen.getByTestId('test'))
      .not.toHaveClass('visible');
  });

  it('leaves the context menu open when an option is clicked', () => {
    mockRefCurrent({offsetHeight: 100});

    render(
      <ContextMenu dataTestId="test">
        <ContextMenu.Title>Menu</ContextMenu.Title>
        <ContextMenu.Body>
          <ContextMenu.Item id="a">A</ContextMenu.Item>
          <ContextMenu.Item>B</ContextMenu.Item>
          <ContextMenu.Item>C</ContextMenu.Item>
        </ContextMenu.Body>
      </ContextMenu>
    );

    fireEvent.contextMenu(document);
    fireEvent.click(document.querySelector('#a')!);
    expect(screen.getByTestId('test'))
      .toHaveClass('visible');
  });

  it('calls the `onShow` prop when provided', () => {
    const onShow = jest.fn();

    mockRefCurrent({offsetHeight: 100});

    render(
      <>
        {dummyTarget()}
        <ContextMenu 
          dataTestId="test" 
          targetId="target" 
          onShow={onShow}
        >
          <ContextMenu.Body>
            <ContextMenu.Item>A</ContextMenu.Item>
            <ContextMenu.Item>B</ContextMenu.Item>
          </ContextMenu.Body>
        </ContextMenu>
      </>
    );

    fireEvent.contextMenu(document.querySelector('#target')!);
    expect(onShow).toBeCalled();
  });
});