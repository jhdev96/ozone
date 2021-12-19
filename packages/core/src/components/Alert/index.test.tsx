import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Alert from '.';
import { AlertVariation } from './utils';


describe('<Alert />', () => {
  function renderAlerts() {
    const alertVariations: AlertVariation[] = [
      "progress",
      "info",
      "warning",
      "success",
      "error"
    ];

    for (let i = 0; i < alertVariations.length; i++) {
      render(
        <Alert 
          variation={alertVariations[i]} 
          dataTestId={alertVariations[i]}
        >
          Message
        </Alert>
      );
    }
  }

  it('matches snapshots', () => {
    renderAlerts();

    expect(screen.getByTestId('progress')).toMatchSnapshot();
    expect(screen.getByTestId('info')).toMatchSnapshot();
    expect(screen.getByTestId('warning')).toMatchSnapshot();
    expect(screen.getByTestId('success')).toMatchSnapshot();
    expect(screen.getByTestId('error')).toMatchSnapshot();
  });

  it('renders an Alert with a message', () => {
    const message = 'This is a warning';

    render(
      <Alert variation="warning" dataTestId="alert">
        {message}
      </Alert>
    );

    expect(screen.getByTestId('alert').textContent).toBe(message);
  });

  it('renders an alert with a close button', () => {
    const {container} = render(
      <Alert variation="info">Message</Alert>
    );

    expect(container.querySelector('.alertCloseBtn'))
      .toBeInTheDocument;
  });

  it('calls `onClose` when the alert is closed', () => {
    const onClose = jest.fn();
    const {container} = render(
      <Alert onClose={onClose}>Message</Alert>
    );
    const CloseButton = container.querySelector('.closeBtn');

    fireEvent.click(CloseButton!);
    expect(onClose).toBeCalled();
  });

  it('removes the alert from the DOM when `onClose` is clicked', () => {
    const onClose = jest.fn();
    const {container} = render(
      <Alert onClose={onClose}>Message</Alert>
    );
    const CloseButton = container.querySelector('.closeBtn');

    fireEvent.click(CloseButton!);
    expect(container).toBeEmptyDOMElement;
  });

  it('renders a progress alert with a dark theme', () => {
    render(
      <Alert variation="progress" theme="dark" dataTestId="progress">
        Message
      </Alert>
    );

    expect(screen.getByTestId('progress')).toHaveClass('progress--dark');
    expect(screen.getByTestId('progress').firstChild).toHaveClass('light');
  });

  it('renders an animated alert', () => {
    render(
      <Alert animate dataTestId="animated">Message</Alert>
    );

    expect(screen.getByTestId('animated')).toHaveClass('animate');
  });
});