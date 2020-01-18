import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Beers from './Beers';
import BeerDetails from '../components/BeerDetails/BeerDetails';
import BeersProvider from '../providers/BeersProvider';

const Root = () => {
  return (
    <BrowserRouter>
      <BeersProvider>
        <h1>Beers</h1>
        <Switch>
          <Route path="/beers/:id" component={BeerDetails}/>
          <Route exact path="/" component={Beers}/>
          <Route path="*">
            <p>Ni ma piwka</p>
          </Route>
        </Switch>
      </BeersProvider>
    </BrowserRouter>
  );
};

export default Root;