import React from "react";
import { render } from "@testing-library/react";
import Pill from '.';


describe('<Pill />', () => {
  it('renders a pill with text', () => {
    const {container} = render(<Pill>text</Pill>);

    expect(container).toHaveTextContent("text");
  });

  it('renders a pill of type `routine` by default', () => {
    const {container} = render(<Pill>text</Pill>);
    
    expect(container).toMatchSnapshot();
  });

  it('renders the correct variations', () => {
    const {container} = render(
      <>
        <Pill variation="info">text</Pill>
        <Pill variation="success">text</Pill>
        <Pill variation="warning">text</Pill>
        <Pill variation="error">text</Pill>
        <Pill variation="routine">text</Pill>
      </>
    );

    expect(container).toMatchSnapshot();
  });
});