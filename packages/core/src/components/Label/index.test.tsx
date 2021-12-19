import React from "react";
import { render } from '@testing-library/react';
import Label from '.';


describe('<Label />', () => {
  it('renders a label', () => {
    const {container} = render(
      <Label>Text</Label>
    );

    expect(container).toHaveTextContent('Text');
  });

  it('renders a label with a `htmlFor` attribute', () => {
    render(
      <Label id="label" htmlFor="someInput">Text</Label>
    );

    const label = document.querySelector('#label') as HTMLLabelElement;

    expect(label.htmlFor).toBe("someInput");
  });

  it('renders a required label', () => {
    const {container} = render(
      <Label required>Text</Label>
    );

    expect(container.querySelector('.required'))
      .toBeInTheDocument;
  });

  it('matches snapshot', () => {
    const {container} = render(
      <Label required>Text</Label>
    );

    expect(container).toMatchSnapshot();
  });
})