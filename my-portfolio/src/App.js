// ====================================
//              IMPORT
// ====================================

// React
import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Styling
import './App.css';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import TopNav from "./components/Layout/TopNav";
import BottomNav from './components/Layout/BottomNav';

// Page Containers
import HomePage from './containers/Home/HomePage';
import ProjectsPage from './containers/Projects/ProjectsPage';
import PlaygroundPage from './containers/Playground/PlaygroundPage';
import AboutPage from './containers/AboutMe/AboutMe';


// ====================================
//            APP COMPONENT
// ====================================


function App() {

  return (
    <>
      <TopNav/>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/playground" component={PlaygroundPage} />
          <Route path="/about-sally" component={AboutPage} />
        </Switch>
      </Router>
      <BottomNav/>

    </>
  );
}

export default App;
