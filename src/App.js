import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import Cars from "./components/cars/Cars";
import CarForm from "./components/carForm/CarForm";



export default function App() {
  return (
      <Router>
        <div>
          <Link to={'/cars-page'}>Cars page</Link>
          <br/>
          <Link to={'/create-car-page'}>Car page</Link>
          <br/>
        </div>
        <hr/>
        <div>
          <Switch>
            <Route path={'/cars-page'} component={Cars}/>
            <Route path={'/create-car-page'} component={CarForm}/>
          </Switch>
        </div>
      </Router>
  );
}

