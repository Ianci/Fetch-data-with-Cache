import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import Gif from './pages/gif'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:id" component={Gif} />
      </Switch>
    </Router>
  );
}

export default App;
