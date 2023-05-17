import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from './components/landing/Landing';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/welcome' exact={true}>
          <Landing />
        </Route>
        <Route path='/dashboard' exact={true}>
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
