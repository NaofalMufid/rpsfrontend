import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Switch, Route, Link } from 'react-router-dom'

import CreateUser from "./components/User/CreateUser"
import User from "./components/User/User"
import UserList from "./components/User/UserList"

class App extends Component{
    render(){
      return(
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/users" className="navbar brand">
              RPS Game
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/users"} className="nav-link">
                  Players
                </Link>
              </li>
              <Link to={"/add"} className="nav-link">
                  Add Player
              </Link>
            </div>
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/users"]} component={UserList}/>
              <Route exact path="/add" component={CreateUser}/>
              <Route exact path="/users/:id" component={User}/>
            </Switch>
          </div>
        </div>
      )
    }
}

export default App;
