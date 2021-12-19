import React from "react";
import { render } from '@testing-library/react';
import * as icons from 'icons';
import Navbar from ".";


describe('<Navbar />', () => {
  it('renders a navbar with 3 links', () => {
    render(
      <Navbar dataTestId="test">
        <Navbar.Nav>
          <Navbar.Item>
            <Navbar.Link to="#">Link 1</Navbar.Link>
          </Navbar.Item>
          <Navbar.Item>
            <Navbar.Link to="#">Link 2</Navbar.Link>
          </Navbar.Item>
          <Navbar.Item>
            <Navbar.Link to="#">Link 3</Navbar.Link>
          </Navbar.Item>
        </Navbar.Nav>
      </Navbar>
    );

    expect(document.querySelectorAll('.navLink'))
      .toHaveLength(3);
  });

  it('renders a navbar with horizontal orientation by default', () => {
    const {container} = render(
      <Navbar dataTestId="test">
        <Navbar.Nav>
          <Navbar.Item>
            <Navbar.Link to="#">Link 1</Navbar.Link>
          </Navbar.Item>
        </Navbar.Nav>
      </Navbar>
    );

    expect(container).toMatchSnapshot();
  });

  it('sets the `justify` prop to `start` by default', () => {
    const {container} = render(
      <Navbar dataTestId="test" />
    );

    expect(container).toMatchSnapshot();
  });

  it('renders a navbar with a brand link', () => {
    const {container} = render(
      <Navbar>
        <Navbar.Brand>Brand</Navbar.Brand>
      </Navbar>
    );

    expect(container).toMatchSnapshot();
  });

  it('centers the navbar items', () => {
    const {container} = render(
      <Navbar justify="center">
        <Navbar.Brand>Brand</Navbar.Brand>
      </Navbar>
    );

    expect(container).toMatchSnapshot();
  });

  it('places the navbar items at the end', () => {
    const {container} = render(
      <Navbar justify="end">
        <Navbar.Brand>Brand</Navbar.Brand>
      </Navbar>
    );

    expect(container).toMatchSnapshot();
  });

  it('adds space between the brand and the links', () => {
    const {container} = render(
      <Navbar justify="space-between">
        <Navbar.Brand>Brand</Navbar.Brand>
        <Navbar.Nav>
          <Navbar.Item>Item 1</Navbar.Item>
          <Navbar.Item>Item 2</Navbar.Item>
          <Navbar.Item>Item 3</Navbar.Item>
        </Navbar.Nav>
      </Navbar>
    );

    expect(container).toMatchSnapshot();
  });

  it('sets the `orientation` prop to `vertical`', () => {
    const {container} = render(
      <Navbar orientation="vertical" />
    );

    expect(container).toMatchSnapshot();
  });

  it('renders a navbar with a collapse', () => {
    const {container} = render(
      <Navbar>
        <Navbar.Brand>Brand</Navbar.Brand>
        <Navbar.Collapse id="collapse">
          <Navbar.Nav>
            <Navbar.Item>A</Navbar.Item>
            <Navbar.Item>B</Navbar.Item>
            <Navbar.Item>C</Navbar.Item>
          </Navbar.Nav>
        </Navbar.Collapse>
      </Navbar>
    );

    expect(container).toMatchSnapshot();
  });

  it('renders a navbar with a toggle button', () => {
    const {container} = render(
      <Navbar>
        <Navbar.Brand>Brand</Navbar.Brand>
        <Navbar.Toggle targetId="navCollapse">
          <icons.Hamburger />
        </Navbar.Toggle>
        <Navbar.Collapse id="collapse">
          <Navbar.Nav>
            <Navbar.Item>A</Navbar.Item>
            <Navbar.Item>B</Navbar.Item>
            <Navbar.Item>C</Navbar.Item>
          </Navbar.Nav>
        </Navbar.Collapse>
      </Navbar>
    );

    expect(container).toMatchSnapshot();
  });
});