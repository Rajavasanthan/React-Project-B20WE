import logo from './logo.svg';
import './App.css';
import SideBar from "./sidebar";
import TopBar from './topbar';
import Dashboard from './dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import User from './user';
import Home from './home';
import Profile from './profile';
import ManageUsers from './manageusers';
import CreateUser from './createuser';
import { UserProvider } from './usercontext';

function App() {
  return (
    <Router>
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <TopBar />
            <div class="container-fluid">
              <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/users" component={User} />
                <Route path="/profile/:id" component={Profile} />
                
                <UserProvider>
                  <Route path="/manage-users" component={ManageUsers} />
                  <Route path="/create-users" component={CreateUser} />
                </UserProvider>

                <Route path="/" component={Home} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
