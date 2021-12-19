import React from "react";
import { 
  render, 
  screen, 
  fireEvent 
} from "@testing-library/react";
import Tabs, { Tab, TabPanel } from '.';


describe('<Tabs />', () => {
  it('renders 3 tabs', () => {
    render(
      <Tabs dataTestId="test" selectedTab="apple">
        <Tab title="apple" />
        <Tab title="banana" />
        <Tab title="orange" />
      </Tabs>
    );

    expect(screen.getByTestId('test').children)
      .toHaveLength(3);
  });

  it('renders 3 tabs and a panel', () => {
    const {container} = render(
      <>
        <Tabs selectedTab="apple">
          <Tab title="apple" />
          <Tab title="banana" />
          <Tab title="orange" />
        </Tabs>
        <TabPanel>
          This is a panel
        </TabPanel>
      </>
    );

    expect(container).toMatchSnapshot();
  });

  it('selects the first tab', () => {
    render(
      <Tabs selectedTab="apple" dataTestId="test">
        <Tab title="apple" />
        <Tab title="banana" />
        <Tab title="orange" />
      </Tabs>
    );

    expect(screen.getByTestId('test').firstChild)
      .toHaveClass('active');
  });

  it('changes the selected tab when a new tab is clicked', () => {
    render(
      <Tabs selectedTab="apple" dataTestId="test">
        <Tab title="apple" />
        <Tab title="banana" />
        <Tab title="orange" />
      </Tabs>
    );

    const firstTab = screen.getByTestId('test').firstChild;
    const secondTab = screen.getByTestId('test').children[1];

    fireEvent.click(secondTab);

    expect(secondTab).toHaveClass('active');
    expect(firstTab).not.toHaveClass('active');
  });

  it('calls `onChange` when a new tab is selected', () => {
    const onChange = jest.fn();

    render(
      <Tabs 
        selectedTab="apple" 
        onChange={onChange}
        dataTestId="test"
      >
        <Tab title="apple" />
        <Tab title="banana" />
        <Tab title="orange" />
      </Tabs>
    );

    const secondTab = screen.getByTestId('test').children[1];
    fireEvent.click(secondTab);

    expect(onChange).toBeCalled();
  });
});