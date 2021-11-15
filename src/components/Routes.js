import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { HomePage,CryptoCurrencies,Exchanges,News,CryptoDetails } from '../components';
const Routes = () => {
    return (
        <div className="routes">
            <Switch>
              <Route exact path='/'>
                <HomePage />
              </Route>
              <Route exact path='/cryptocurrencies'>
                <CryptoCurrencies />
              </Route>
              <Route exact path='/exchanges'>
                <Exchanges />
              </Route>
              <Route exact path='/news'>
                <News />
              </Route>
              <Route exact path='/cryptodetails/:coinId'>
                <CryptoDetails />
              </Route>
            </Switch>
          </div>
    )
}

export default Routes
