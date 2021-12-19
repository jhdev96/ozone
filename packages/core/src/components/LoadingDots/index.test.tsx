import React from "react";
import { render } from '@testing-library/react';
import LoadingDots from ".";


describe('<LoadingDots />', () => {
  it('renders 4 loading dots', () => {
    render(
      <LoadingDots />
    );

    expect(document.querySelectorAll('.box'))
      .toHaveLength(4);
  });

  it('renders loading dots in the specified position', () => {
    const {container} = render(
      <>
        <LoadingDots position="left" />
        <LoadingDots position="center" />
        <LoadingDots position="right" />
      </>
    );

    expect(container).toMatchSnapshot();
  });

  it('sets the `dotSize` prop', () => {
    render(
      <LoadingDots dotSize={5} />
    );

    const box = document.querySelector('.box') as HTMLElement;

    expect(box.style.minHeight).toBe("5px");
    expect(box.style.minWidth).toBe("5px");
  });
});