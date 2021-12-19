import React from 'react';
import { render } from '@testing-library/react';
import ButtonRow from '.';
import Button from '../Button';


describe('<ButtonRow />', () => {
  it('renders a button row with `left` placement', () => {
    const {container} = render(
      <ButtonRow placement="left">
        <Button variation="basic">Back</Button>
        <Button variation="primary">Continue</Button>
      </ButtonRow>
    );

    expect(container).toMatchSnapshot();
  });

  it('renders a button row with `center` placement', () => {
    const {container} = render(
      <ButtonRow placement="center">
        <Button variation="basic">Back</Button>
        <Button variation="primary">Continue</Button>
      </ButtonRow>
    );

    expect(container).toMatchSnapshot();
  }); 
  
  it('renders a button row with `right` placement', () => {
    const {container} = render(
      <ButtonRow placement="left">
        <Button variation="basic">Back</Button>
        <Button variation="primary">Continue</Button>
      </ButtonRow>
    );

    expect(container).toMatchSnapshot();
  });
});