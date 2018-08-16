import './style.css';
import ReactDOM from 'react-dom';
import React from 'react';

console.log('hello-world');
const docHeader = document.createElement('h1');
docHeader.innerText = 'HEADER';
document.body.appendChild(docHeader);

const element = <h1>The JSX element</h1>;


ReactDOM.render(
  // React.createElement('h1', null, 'Hello World Component'),
  element,
  document.getElementById('root')
);
