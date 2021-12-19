import React, { useState } from 'react';
import {SearchBox, SearchResult } from 'core';


export default function SearchExample(): JSX.Element 
{
  const data = [
    {name: 'apple'}, 
    {name: 'banana'}, 
    {name: 'orange'}, 
    {name: 'avacado'},
    {name: 'grapes'},
    {name: 'mango'},
    {name: 'peach'},
    {name: 'lemon'},
    {name: 'watermelon'},
    {name: 'pear'},
    {name: 'strawberry'},
    {name: 'blueberry'}
  ];

  const [searchResults, setSearchResult] = useState([]);
  const resultsMarkup = searchResults.map((res, idx) => (
    <SearchResult 
      key={idx}
      name={res.name}
      onClick={(e, name) => alert(`you clicked ${name}`)}
    >
      {res.name}
    </SearchResult>
  ))

  const getSearchResults = (keyword: string) => {
    if (keyword) {
      const newResults = data.filter(res => { 
        let name = res.name.toLowerCase();
        let kwLower = keyword.toLowerCase();
        return name.includes(kwLower); 
      });
      setSearchResult(newResults.slice(0, 10));
    } else {
        setSearchResult([]);
    }
  }

  return (
    <SearchBox 
      onChange={(keyword) => getSearchResults(keyword)}
      outline
    >
      {resultsMarkup}
    </SearchBox>
  )
}