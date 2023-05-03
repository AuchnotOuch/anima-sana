import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from './components/landing/Landing';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/welcome' exact={true}>
          <Landing />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
