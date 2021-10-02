import React from 'react';
import './style.css';
import { searchResult } from './utils';
import CategoryList from './components/CategoryList';
import SearchBar from './components/SearchBar';
import debounce from 'lodash.debounce';

const fetchData = async (query, cb) => {
  console.warn('fetching ' + query);
  const res = await searchResult(query);
  cb(res);
};

const debouncedFetchData = debounce((query, cb) => {
  fetchData(query, cb);
}, 300);

export default function App() {
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    debouncedFetchData(query, res => {
      setResults(res);
    });
  }, [query]

  );

  return (
    <div>
      <SearchBar
        value={query}
        onChangeText={e => {
          setQuery(e.target.value);
        }}
      />
      {results.length > 0 ?
        <div>
          <CategoryList results={results} category="Photos" type="photo" />
          <CategoryList results={results} category="Live events" type="live" />
        </div> : <></>
      }
    </div>
  );
}
