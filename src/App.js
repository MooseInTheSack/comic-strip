import React, { Fragment }  from 'react';
import './App.css';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Carousel from './components/Carousel/Carousel'
import About from './components/About/About'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs centered={true} value={location.pathname}>
                <Tab value="/" label="Home" component={Link} to="/" />
                <Tab value="/carousel" label="Comics" component={Link} to="/carousel" />
                <Tab value="/about" label="About" component={Link} to="/about" />
                
              </Tabs>
              <Switch>
                <Route path="/carousel">
                  <Carousel />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Fragment>
          )}
        />
    </BrowserRouter>
    <br/>
    <br/>
    <hr/>
    <p>All artwork is property of Ryan Kirkpatrick</p>
    <p>The source code of this website is available <a href="https://github.com/MooseInTheSack/comic-strip" target="_blank" rel="noreferrer">here</a></p>
    <p>Site Built By Tyler Kirkpatrick.</p>
    <br/>

    </div>
  )
}

//Copyright © 2021 Tyler Kirkpatrick

export default App;
