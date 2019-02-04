import React from 'react'
import ReactDOM from 'react-dom'


import 'bulma'
import './scss/style.scss'

import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'


import Home from './components/Home'
import CarsNew from './components/cars/CarsNew'
import CarsIndex from './components/cars/CarsIndex'



class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>

          <nav>
            <Link to="/"> Home </Link>
            <Link to="/cars"> Cars Index </Link>
            <Link to="/cars/new"> Cars New </Link>
          </nav>

          <Switch>
            <Route path="/cars/new" component={CarsNew} />
            <Route path="/cars" component={CarsIndex} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
)
