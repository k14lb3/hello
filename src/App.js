import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from 'components/Login';
import Register from 'components/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/register" children={Register} />
          <Route path="/login" children={Login} />
          <Route children={() => <Redirect to="/login" />}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
