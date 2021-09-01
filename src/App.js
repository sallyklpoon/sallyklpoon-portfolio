// ====================================
//              IMPORT
// ====================================

// React
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Styling
import './App.css';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import TopNav from "./components/Layout/TopNav";

// Page Containers
import HomePage from './containers/Home/HomePage';
// import ProjectsPage from './containers/Projects/ProjectsPage';
import PlaygroundPage from './containers/Playground/PlaygroundPage';
import AboutPage from './containers/AboutMe/AboutMe';

// Project Pages
import SproutPage from './containers/Projects/Sprout/SproutPage';
import CapWisePage from './containers/Projects/CapWise/CapWisePage';
import NamuPage from './containers/Projects/Namu/NamuPage';
import BoriyaPage from './containers/Projects/Boriya/BoriyaPage';
import OlaPage from './containers/Projects/Ola/OlaPage';
import ProjectDetailsPage from './containers/Projects/ProjectDetailsPage';


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
          {/* <Route path="/projects" component={ProjectsPage} /> */}
          <Route path="/playground" component={PlaygroundPage} />
          <Route path="/about-sally" component={AboutPage} />
          <Route path="/sprout" component={SproutPage} />
          <Route path="/capwise" component={CapWisePage} />
          <Route path="/namu" component={NamuPage} />
          <Route path="/boriya" component={BoriyaPage} />
          <Route path="/ola-chat" component={OlaPage} />
          <Route path="/test" component={ProjectDetailsPage}/>
        </Switch>
      </Router>

    </>
  );
}

export default App;
