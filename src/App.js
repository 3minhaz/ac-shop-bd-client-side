import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Login from './pages/Shared/Login/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Register from './pages/Shared/Login/Register/Register';
import Navigation from './pages/Shared/Navigation/Navigation';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Shared/Login/PrivateRoute/PrivateRoute';
import PlaceOrder from './pages/ProductBuy/PlaceOrder/PlaceOrder';
import Explore from './pages/Explore/Explore';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          {/* <Navigation></Navigation> */}
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/placeOrder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
