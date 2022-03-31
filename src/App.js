import Login from './componentes/Login';
import Register from './componentes/Register';
import Profile from './componentes/Profile';

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
      <Route exact path='/profile' component={Profile}/>
        <Route path='/'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

