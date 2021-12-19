import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DummyTestComponent } from '../../utils/test-utils';
import ClickManager from '.';


describe('<ClickManager />', () => {
  function setUpComponent(
    onClick: () => void, 
    ref: React.RefObject<any>
  ) 
  {
    render(
      <div data-testid="wrapper">
        <ClickManager onClick={onClick} ref={ref}>
          <DummyTestComponent />
        </ClickManager>
      </div>
    );
  }

  it('calls `onClick` when the mouse clicks an outside element', () => {
    const ref = React.createRef<HTMLSpanElement>();
    const onClick = jest.fn();

    setUpComponent(onClick, ref);

    const wrapper = screen.getByTestId('wrapper');
    fireEvent.click(wrapper);
    
    expect(onClick).toBeCalled;
  });

  it('calls `onClick` for a right-click outside the component', () => {
    const ref = React.createRef<HTMLSpanElement>();
    const onClick = jest.fn();

    setUpComponent(onClick, ref);

    const wrapper = screen.getByTestId('wrapper');
    fireEvent.contextMenu(wrapper);
    
    expect(onClick).toBeCalled;
  });

  it('passes `classNames` to the wrapper component', () => {
    const {container} = render(
      <ClickManager className="testCss">
        <DummyTestComponent />
      </ClickManager>
    );

    expect(container).toMatchSnapshot();
  });
});