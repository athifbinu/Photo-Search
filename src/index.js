import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'
import SearchBar from './components/SearchBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App/>
  <SearchBar/>
  </React.StrictMode>
);


