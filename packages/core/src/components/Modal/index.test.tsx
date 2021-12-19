import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '.';


describe('<Modal />', () => {
  it('renders a hidden modal by default', () => {
    render(
      <Modal dataTestId="test">
        <Modal.Body>Text</Modal.Body>
      </Modal>
    );

    expect(screen.getByTestId("test"))
      .not.toHaveClass('visible');
  });

  it('renders a modal with a header', () => {
    render(
      <Modal dataTestId="test">
        <Modal.Header>Title</Modal.Header>
      </Modal>
    );

    expect(screen.getByTestId("test"))
      .toMatchSnapshot();
  });

  it('renders a modal with a title', () => {
    render(
      <Modal dataTestId="test">
        <Modal.Header>
          <Modal.Title>Title</Modal.Title>
        </Modal.Header>
      </Modal>
    );

    expect(screen.getByTestId("test"))
      .toMatchSnapshot();
  });

  it('renders a visible modal when `isVisible` is set', () => {
    render(
      <Modal dataTestId="test" isVisible>
        <Modal.Body>Text</Modal.Body>
      </Modal>
    );

    expect(screen.getByTestId("test"))
      .toHaveClass('visible');
  });

  it('hides the modal when the user clicks outside the dialog', () => {
    render(
      <Modal dataTestId="test" isVisible>
        <Modal.Body>Text</Modal.Body>
      </Modal>
    );

    const modalOverlay = document.querySelector('.modal');
    fireEvent.click(modalOverlay!);

    expect(screen.getByTestId("test"))
      .not.toHaveClass('visible');
  });

  it('leaves the modal open when the user clicks inside the modal', () => {
    render(
      <Modal dataTestId="test" isVisible>
        <Modal.Body>Text</Modal.Body>
      </Modal>
    );

    const modalContent = document.querySelector('.modalBody');
    fireEvent.click(modalContent!);

    expect(screen.getByTestId("test"))
      .toHaveClass('visible');
  });

  it('calls `onClose` when the modal is closed', () => {
    const onClose = jest.fn();

    render(
      <Modal 
        onClose={onClose} 
        dataTestId="test" 
        isVisible
      >
        <Modal.Body>Text</Modal.Body>
      </Modal>
    );

    const modalOverlay = document.querySelector('.modal');
    fireEvent.click(modalOverlay!);

    expect(onClose).toBeCalled;
  });
});