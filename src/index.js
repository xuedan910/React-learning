import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import JianShu from './JianShu'
import { GlobalStyle } from './style.js'

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <JianShu />
  </Fragment>, 
  document.getElementById('root')
);