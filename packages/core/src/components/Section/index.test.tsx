import React from "react";
import { render, screen } from "@testing-library/react";
import Section from ".";
import Button from "../Button";


describe('<Section />', () => {
  it('renders a primary section by default', () => {
    const {container} = render(
      <Section />
    );

    expect(container).toMatchSnapshot();
  });

  it('renders a section with a title', () => {
    render(
      <Section 
        dataTestId="test" 
        title="title" 
      />
    );
    
    expect(document.querySelector('.title'))
      .toHaveTextContent('title');
  });

  it('occupies the full width of its container', () => {
    render(
      <div>
        <Section dataTestId="test" fullWidth />
      </div>
    );

    expect(screen.getByTestId('test'))
      .toHaveClass('fullWidth');
  });

  it('renders children in the section body', () => {
    render(
      <Section dataTestId="test">
        <Button>text</Button>
      </Section>
    );

    expect(document.querySelector('.body'))
      .not.toBeEmptyDOMElement();
  });
});