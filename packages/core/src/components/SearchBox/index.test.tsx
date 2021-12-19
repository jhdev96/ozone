import React from "react";
import { 
  render, 
  screen, 
  fireEvent
} from "@testing-library/react"; 
import Dropdown from "../Dropdown";
import SearchBox, { SearchResult } from ".";


describe('<Searchbox />', () => {
  it('renders a basic searchbox with a placeholder', () => {

    render(<SearchBox dataTestId="test" />);

    const searchInput = document.querySelector('.searchInput');

    expect(searchInput!.getAttribute('placeholder')).toBe('Search');
  });

  it('renders a search icon inside the searchbox', () => {
    render(<SearchBox dataTestId="test" />);

    expect(screen.getByTestId('test'))
      .toMatchSnapshot();
  });

  it('renders a searchbox with an outline', () => {
    const {container} = render(<SearchBox outline />);

    expect(container).toMatchSnapshot();
  });

  it('renders a searchbox with a filter', () => {
    render(
      <SearchBox
        searchFilter={
          <Dropdown variation="basic" dataTestId="test">
            <Dropdown.Item>A</Dropdown.Item>
            <Dropdown.Item>B</Dropdown.Item>
            <Dropdown.Item>C</Dropdown.Item>
          </Dropdown>
        } 
      />
    );

    expect(screen.getByTestId('test'))
      .toBeInTheDocument();
  });

  it('changes the search input\'s value when a query is entered', () => {
    render(<SearchBox />);

    const searchInput = document.querySelector('.searchInput') as HTMLInputElement;

    fireEvent.change(searchInput!, {
      target: {value: 'hello'}
    });

    expect(searchInput.value).toBe('hello');
  });

  it('calls `onChange` with the input\'s value', () => {
    const onChange = jest.fn();

    render(<SearchBox onChange={onChange} />);

    const searchInput = document.querySelector('.searchInput');

    fireEvent.change(searchInput!, {
      target: {value: 'hello'}
    });

    expect(onChange).toBeCalledWith('hello');
  });

  it('adds a special css class when the searchbox is focused', () => {
    render(<SearchBox />);

    const wrapper = document.querySelector('.searchContainer');
    fireEvent.focus(wrapper!);

    expect(wrapper).toHaveClass('focus');
  });

  it('calls `onFocus` when the searchbox is focused', () => {
    const onFocus = jest.fn();

    render(<SearchBox onFocus={onFocus} />);

    const wrapper = document.querySelector('.searchContainer');
    fireEvent.focus(wrapper!);

    expect(onFocus).toBeCalled();
  });

  it('calls `onBlur` when the searchbox loses focus', () => {
    const onBlur = jest.fn();

    render(<SearchBox onBlur={onBlur} />);

    const wrapper = document.querySelector('.searchContainer');
    fireEvent.blur(wrapper!);

    expect(onBlur).toBeCalled();
  });

  it('calls `onKeyDown` when a keyDown event fires', () => {
    const onKeyDown = jest.fn();

    render(<SearchBox onKeyDown={onKeyDown} />);

    const searchInput = document.querySelector('.searchInput');
    fireEvent.keyDown(searchInput!);

    expect(onKeyDown).toBeCalled();
  });

  it('renders a searchbox with results', () => {
    render(
      <SearchBox>
        <SearchResult>apple</SearchResult>
        <SearchResult>banana</SearchResult>
        <SearchResult>orange</SearchResult>
      </SearchBox>
    );

    const results = document.querySelector('.searchResults');

    expect(results!.children).toHaveLength(3);
  });
});

describe('<SearchResult />', () => {
  it('renders a search result with text', () => {
    render(
      <SearchResult dataTestId="test">
        text
      </SearchResult>
    );

    expect(screen.getByTestId('test'))
      .toHaveTextContent('text');
  });

  it('matches snapshot', () => {
    const {container} = render(
      <SearchResult>text</SearchResult>
    );

    expect(container).toMatchSnapshot();
  });

  it('calls `onClick` when the search result is clicked', () =>{
    const onClick = jest.fn();
    
    render(
      <SearchResult 
        dataTestId="test"
        onClick={onClick}
      >
        text
      </SearchResult>
    );

    fireEvent.click(screen.getByTestId('test'));

    expect(onClick).toBeCalled();
  });
});