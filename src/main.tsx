import React from 'react'
import ReactDOM from 'react-dom'
import InputProgress from './InputProgress'

ReactDOM.render(
  <React.StrictMode>
    <InputProgress input="a" maxLength={10} />
  </React.StrictMode>,
  document.getElementById('root')
);