import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import JianShu from './JianShu'
import { GlobalStyle } from './style.js'
import { BrowserRouter as Router, Route } from "react-router-dom"

const Home = () => <div>Home</div>
const Detail = () => <div>Detail</div>

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <JianShu />
    <Router>
      <Route path='/' exact component={Home}></Route>
      <Route path='/detail' component={Detail}></Route>
    </Router>
  </Fragment>, 
  document.getElementById('root'));
