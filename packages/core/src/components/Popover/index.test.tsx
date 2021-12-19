import React from "react";
import { 
  render, 
  screen, 
  fireEvent
} from "@testing-library/react";  
import { act } from "react-dom/test-utils";
import Popover from ".";
import Button from '../Button';


beforeEach(() => {
  /** 
   * <Popover /> uses 'setTimeout' in 
   * its useEffect hook. This ensures
   * that 'setTimeout' gets mocked by
   * jest.
   */
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

describe('<Popover />', () => {
  it('renders the target element', () => {
    render(
      <Popover>
        <Button dataTestId="button">
          Click me
        </Button>
      </Popover>
    );

    expect(screen.getByTestId('button'))
      .toBeInTheDocument;
  });

  it('doesn\'t render the popover by default', () => {
    render(
      <Popover dataTestId="test">
        <span>text</span>
      </Popover>
    );

    const popover = document.querySelector('.popover');

    expect(popover).not.toBeInTheDocument;
  });

  it('renders the popover when `isVisible` is set to true', () => {
    render(
      <Popover isVisible>
        <Button>text</Button>
      </Popover>
    );

    const popover = document.querySelector('.popover');
    
    expect(popover).toBeInTheDocument();
  });

  it('renders a visible popover with text content', () => {
    render(
      <Popover content="text" isVisible>
        <Button />
      </Popover>
    );

    const popover = document.querySelector('.popover');

    expect(popover).toHaveTextContent("text");
  });

  it('renders a visible popover with HTML content', () => {
    const content = (
      <div id="content">
        <h1>Popover</h1>
        <span>content</span>
      </div>
    );

    render(
      <Popover content={content} isVisible>
        <Button />
      </Popover>
    );

    expect(document.querySelector('#content'))
      .toBeInTheDocument();
  });

  it('renders the popover when the target is clicked', () => {
    render(
      <Popover dataTestId="test">
        <Button dataTestId="button">
          Click me
        </Button>
      </Popover>
    );

    fireEvent.click(screen.getByTestId("test").firstChild!);
    const popover = document.querySelector('.popover');

    expect(popover).toBeInTheDocument();
  });

  it('closes the popover when the target element is clicked', () => {
    act(() => {
      render(
        <Popover isVisible>
          <Button dataTestId="target" />
        </Popover>
      );

      fireEvent.click(screen.getByTestId("target"));
      jest.runAllTimers();
    });

    const popover = document.querySelector('.popover');

    expect(popover).not.toBeInTheDocument();
  });
});