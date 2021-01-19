import React from "react";
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import PortfolioPage from './components/portfolio/PortfolioPage'
import AboutPage from './components/about/AboutPage'
import ResumePage from './components/resume/ResumePage'
import style from './App.module.css';

function App() {
  return (
    <Router>
      <div className={style.pageContainer}>
        <div className={style.contentWrapper}>
          <Header />
          <Switch>
          <Route path="/portfolio">
              <PortfolioPage />
            </Route>
            <Route exact path="/">
              <AboutPage />
            </Route>
            <Route path="/resume">
              <ResumePage />
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
