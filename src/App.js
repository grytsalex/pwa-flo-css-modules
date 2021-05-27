import React, { Component } from "react";
import { Router, Link, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import logo from "./logo.svg";
import styles from "./styles/App.module.css";

const history = createBrowserHistory();

function Page({ title }) {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <h2>{title}</h2>
        <p className="App-intro">This is the {title} page.</p>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/about">About</Link>
        </p>
        <p>
          <Link to="/settings">Settings</Link>
        </p>
      </header>
    </div>
  );
}

const Home = (props) => <Page title="Home" />;

const About = (props) => <Page title="About" />;

const Settings = (props) => <Page title="Settings" />;

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </Router>
    );
  }
}

export default App;
