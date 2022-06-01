import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Stiatica from './views/stiatica'
import Obiectiveturistice from './views/obiectiveturistice'
import Home from './views/home'
import Istoric from './views/istoric'
import Contact from './views/contact'
import Biodiversitate from './views/biodiversitate'
import Problemeecologice from './views/problemeecologice'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Stiatica} path="/stiatica" />
        <Route
          exact
          component={Obiectiveturistice}
          path="/obiectiveturistice"
        />
        <Route exact component={Home} path="/" />
        <Route exact component={Istoric} path="/istoric" />
        <Route exact component={Contact} path="/contact" />
        <Route exact component={Biodiversitate} path="/biodiversitate" />
        <Route exact component={Problemeecologice} path="/problemeecologice" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
