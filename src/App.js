import Login from './componentes/Login';
import Register from './componentes/Register';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (

    <Router>
      <Switch>
      <Route exact path='/register' component={Register}/>
        <Route path='/'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

