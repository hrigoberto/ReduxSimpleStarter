import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBQ2w6c9aqrn1Q2BB0a5M2zI6BJvozlimQ';

// Create a new componenet that creates some HTML.

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>  
  );
}

// Take this component of generated HTML and show it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
