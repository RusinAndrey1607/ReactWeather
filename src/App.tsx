import React, { createContext, useState } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import { AboutPage } from './components/AboutPage/AboutPage';
import { AppHeader } from './components/AppHeader';
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import { ForecastPage } from './components/ForecastPage/ForecastPage';
import { SearchPage } from './components/SearchPage/SearchPage';
import "./App.css"

export const Context = createContext(null)

const App = () => {
  const [city, setCity] = useState('')
  return (
    <HashRouter>
      {/* @ts-ignore */}
      <Context.Provider value={{ city, setCity }}>
        <AppHeader />
        <div className="container">
          <Switch>
            <Route path="/about" component={AboutPage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/forecast" component={ForecastPage} />
            <Route path="/error" component={ErrorPage} />
            <Redirect to="/search" />
          </Switch>
        </div>
      </Context.Provider>

    </HashRouter>

  )
}

export default App;
