import React from 'react';
import ReactDOM from 'react-dom';

// Create a new componenet that creates some HTML.

const App = () => {
  return <div>Hi!</div>;
}

// Take this component of generated HTML and show it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
