import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Header } from './components/Header'
import { Users } from './components/Users'
import { ResultSearch } from './components/ResultSearch'
import { DisplayBoard } from './components/DisplayBoard'
import { SearchUser } from './components/SearchUser'
import CreateUser from './components/CreateUser'
import { getAllUsers, createUser , fetchSearchUsers} from './services/UserService'
import Modal from 'react-bootstrap/Modal'

class App extends Component{
    // onChangeSearch = this.onChangeSearchTitle.bind(this);
    state = {
        user: {},
        users: [],
        search: "",
        results: [],
        numberOfUsers: 0
    }

    // search
    onChangeSearchTitle = (e) => {
      const search = e.target.value
      this.setState({search: search})
    }

    createUser = (e) => {
        createUser(this.state.user)
        .then(response => {
            console.log(response)
            this.setState({numberOfUsers: this.state.numberOfUsers + 1})
        })
    }
    
    
    getAllUsers = () => {
      getAllUsers()
      .then(users => {
        console.log(users)
        this.setState({users: users, numberOfUsers: users.length})
      })
    }
    
    onChangeForm = (e) => {
      let user = this.state.user
      if (e.target.name === 'username') {
        user.username = e.target.value;
      } else if(e.target.name === 'password'){
        user.password = e.target.value;
      } else if(e.target.name === 'email'){
        user.email = e.target.value;
      }
      this.setState({user})
    }

    searchingUser = () => {
      fetchSearchUsers(this.state.search)
      .then(results => {
          console.log(results)
          this.setState({results: results})
      })
    }

    render(){
        return(
            <div className="App">
                <Header></Header>
                <div className="container mrgnbtm">
                    <div className="row">
                        <div className="col-md-8">
                            <CreateUser
                            user={this.state.user}
                            onChangeForm={this.onChangeForm}
                            createUser={this.createUser}>
                            </CreateUser>
                        </div>
                        <div className="col-md-4">
                            <DisplayBoard
                            numberOfUsers={this.state.numberOfUsers}
                            getAllUsers={this.getAllUsers}>
                            </DisplayBoard>
                            <SearchUser
                            search={this.state.search}
                            onChangeSearchTitle={this.onChangeSearchTitle}
                            searchingUser={this.searchingUser}>
                            </SearchUser>
                        </div>
                        <div className="col-md-4">
                        </div>
                    </div>
                </div>
                <div className="row mrgnbtm">
                    <Users users={this.state.users}></Users>
                </div>
                <div className="row mrgnbtm">
                    <ResultSearch results={this.state.results}></ResultSearch>
                </div>
            </div>
        )
    }
}

// nyobain component life cycle

export default App;
