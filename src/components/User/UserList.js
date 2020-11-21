import React, { Component } from "react"
import UserDataService from "../../services/UserService"
import { Link } from "react-router-dom"

export default class UserList extends Component{
    constructor(props){
        super(props)
        this.onChangeSeacrhUsername = this.onChangeSeacrhUsername.bind(this)
        this.retrieveUser = this.retrieveUser.bind(this)
        this.refreshList = this.refreshList.bind(this)
        this.setActiveUser = this.setActiveUser.bind(this)
        this.searchUsername = this.searchUsername.bind(this)

        this.state = {
            users: [],
            currentUser: null,
            currentIndex: -1,
            searchUsername: ""
        }
    }

    componentDidMount(){
        this.retrieveUser()
    }

    onChangeSeacrhUsername(e){
        const searchUsername = e.target.value

        this.setState({searchUsername: searchUsername})
    }

    retrieveUser(){
        UserDataService.getAllUsers()
        .then(response => {
            this.setState({
                users: response.data
            })
            console.log(response.data)
        })
        .catch(e => {
            console.log(e)
        })
    }

    refreshList(){
        this.retrieveUser()
        this.setState({
            currentUser: null,
            currentIndex: -1
        })
    }

    setActiveUser(user, index){
        this.setState({
            currentUser: user,
            currentIndex: index
        })
    }

    searchUsername(){
        UserDataService.searchUsers(this.state.searchUsername)
        .then(response => {
            this.setState({
                users: response.data
            })
            console.log(response.data)
        })
        .catch(e => {
            console.log(e)
        })
    }

    render(){
        const { searchUsername, users, currentUser, currentIndex } = this.state
        return(
            <div className="list row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input type="text" name="keyword" id="keyword" className="form-control" placeholder="Search by username" value={searchUsername} onChange={this.onChangeSeacrhUsername}/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" onClick={this.searchUsername}>Search</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Users List</h4>

                    <ul className="list-group">
                        {users && 
                        users.map((user, index) => (
                            <li className={"list-group-item " + (index === currentIndex ? "active" : "")}
                            onClick={() => this.setActiveUser(user, index)}
                            key={index}>
                                {user.username}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6">
                    {currentUser ? (
                        <div>
                            <h4>User</h4>
                            <div>
                                <label htmlFor="">
                                    <strong>Username :</strong>
                                </label>{" "}
                                {currentUser.username}
                            </div>
                            <div>
                                <label htmlFor="">
                                    <strong>Email</strong>
                                </label>{" "}
                                {currentUser.email}
                            </div>
                            <Link to={"/users/" + currentUser.id}
                            className="badge badge-warning">
                                Edit
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <br/>
                            <p>Please click on user...</p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}