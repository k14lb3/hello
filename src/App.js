import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AuthProvider from 'contexts/AuthContext';
import Login from 'components/Login';
import Register from 'components/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route component={() => <Redirect to="/login" />} />
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
