import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// For some reason, this is having an issue with BrowserRouter
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
