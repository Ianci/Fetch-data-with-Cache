import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import SingleGif from './components/SingleGif'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:id" component= {SingleGif} />
      </Switch>
    </Router>
  );
}

export default App;
