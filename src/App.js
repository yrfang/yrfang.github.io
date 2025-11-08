import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, About, Project, NavBar, Footer } from './components';
import './styles/App.scss';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/project"><Project /></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
