import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import store from './reducers/store';
import SearchPage from './components/SearchPage/SearchPage';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav className="nav">
            <Link to="/">Search</Link>
            <Link to="/favorites">Favorites</Link>
          </nav>
          <Switch>
            <Route path="/favorites">
              <About />
            </Route>
            <Route path="/">
              <SearchPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;
