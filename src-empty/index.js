import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

export default class App extends React.Component {
  debug = 1;
  render() {
    return (
      <div>
        UappModule
      </div>
    )
  }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
