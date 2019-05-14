import React, { Component } from 'react'
import Header from './common/header/'
import { Provider } from 'react-redux'
import store from './store'
import Home from './Pages/home'
import Detail from './Pages/detail'
import { BrowserRouter as Router, Route } from "react-router-dom"

class Jianshu extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' component={Detail}></Route>
        </Router>
      </Provider>
    )
  }
}

export default Jianshu