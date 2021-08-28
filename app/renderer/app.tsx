import React from 'react';
import ReactDOM from 'react-dom';
import Router from '@src/router';

function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));