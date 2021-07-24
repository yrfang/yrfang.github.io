import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, About, Project, Contact, NavBar, Footer } from './components';
import './styles/app.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/project"><Project /></Route>
          <Route path="/contact"><Contact /></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
