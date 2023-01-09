import Log from "./Components/Log";
import Navigation from "./Components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NewLog } from "./Components/NewLog";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  return (
    <div>
       <Navigation />
       <Router>
          <Switch>
          <Route exact path="/" component={Log}/>
				  <Route exact path="/newlog" component={NewLog }/>
          </Switch>
       </Router>
    </div>
  );
}

export default App;
