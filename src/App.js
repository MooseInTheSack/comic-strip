import React, { Fragment }  from 'react';
import './App.css';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Container from '@material-ui/core/Container';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Carousel from './components/Carousel/Carousel'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <div className="App">
      <Container maxWidth="md">

        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs centered={true} value={location.pathname}>
                <Tab value="/" label="Home" component={Link} to="/" />
                <Tab value="/carousel" label="Carousel" component={Link} to="/carousel" />
                
              </Tabs>
              <Switch>
                <Route path="/carousel">
                  <Carousel />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Fragment>
          )}
        />
        </Container>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
