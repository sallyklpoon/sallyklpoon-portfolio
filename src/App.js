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
import PlaygroundPage from './containers/Playground/PlaygroundPage';
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
          <Route path="/playground" component={PlaygroundPage} />
          <Route path="/project/:project_name" component={ProjectDetailsPage}/>
        </Switch>
      </Router>

    </>
  );
}

export default App;
