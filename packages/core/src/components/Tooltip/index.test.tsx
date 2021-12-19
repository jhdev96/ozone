import React from "react";
import { 
  render, 
  screen, 
  fireEvent
} from "@testing-library/react";  
import { act } from "react-dom/test-utils";
import Tooltip from ".";
import Button from '../Button';


beforeEach(() => {
  /** 
   * <Tooltip /> uses 'setTimeout' in 
   * its useEffect hook. This ensures
   * that 'setTimeout' gets mocked by
   * jest.
   */
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

describe('<Tooltip />', () => {
  it('renders the target element', () => {
    render(
      <Tooltip>
        <Button dataTestId="button">
          Hover over me
        </Button>
      </Tooltip>
    );

    expect(screen.getByTestId('button'))
      .toBeInTheDocument;
  });

  it('renders an invisible tooltip by default', () => {
    render(
      <Tooltip>
        <span>text</span>
      </Tooltip>
    );

    const tooltip = document.querySelector('.tooltip');

    expect(tooltip).not.toBeInTheDocument();
  });

  it('renders a visible tooltip when `isVisible` is true', () => {
    render(
      <Tooltip isVisible>
        <span>text</span>
      </Tooltip>
    );

    const tooltip = document.querySelector('.tooltip');

    expect(tooltip).toBeInTheDocument();
  });

  it('renders a tooltip with some content', () => {
    render(
      <Tooltip content="tooltip" isVisible>
        <span>text</span>
      </Tooltip>
    );

    const tooltip = document.querySelector('.tooltip');

    expect(tooltip).toHaveTextContent('tooltip')
  });

  it('renders the tooltip when the mouse hovers over the target', () => {
    act(() => {
      render(
        <Tooltip 
          dataTestId="test" 
          content="tooltip" 
        >
          <span>text</span>
        </Tooltip>
      );

      fireEvent.mouseEnter(screen.getByTestId('test'));
      jest.runAllTimers();
    });

    const tooltip = document.querySelector('.tooltip');
  
    expect(tooltip).toBeInTheDocument();
  });

  it('calls `onShow` when the tooltip is visible', () => {
    const onShow = jest.fn();

    act(() => {
      render(
        <Tooltip 
          dataTestId="test" 
          content="tooltip" 
          onShow={onShow}
        >
          <span>text</span>
        </Tooltip>
      );

      fireEvent.mouseEnter(screen.getByTestId('test'));
      jest.runAllTimers();
    });

    expect(onShow).toBeCalled();
  });

  it('calls `onHide` when the tooltip loses visibility', () => {
    const onHide = jest.fn();

    act(() => {
      render(
        <Tooltip 
          dataTestId="test" 
          content="tooltip" 
          onHide={onHide}
          isVisible
        >
          <span>text</span>
        </Tooltip>
      );

      fireEvent.mouseLeave(screen.getByTestId('test'));
      jest.runAllTimers();
    });

    expect(onHide).toBeCalled();
  });

  it('sets the correct position', () => {
    const {container} = render(
      <>
        <Tooltip position="top" isVisible>text</Tooltip>
        <Tooltip position="bottom" isVisible>text</Tooltip>
        <Tooltip position="left" isVisible>text</Tooltip>
        <Tooltip position="right" isVisible>text</Tooltip>
      </>
    );

    expect(container).toMatchSnapshot();
  });
});