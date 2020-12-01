import React, { Component } from "react"
import UserDataService from "../../services/UserService"
import { Button, Modal } from 'react-bootstrap' 
import { Link } from "react-router-dom"

export default class UserList extends Component{
    constructor(props){
        super(props)
        this.onChangeSeacrhUsername = this.onChangeSeacrhUsername.bind(this)
        this.retrieveUser = this.retrieveUser.bind(this)
        this.refreshList = this.refreshList.bind(this)
        this.setActiveUser = this.setActiveUser.bind(this)
        this.searchUsername = this.searchUsername.bind(this)
        // keperluan modal edit
        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.updateUser = this.updateUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)

        this.state = {
            users: [],
            currentUser:null,
            currentUserEdit: {
                username: "",
                email: "",
                password: ""
            },
            message: "",
            currentIndex: -1,
            searchUsername: "",
            show:false,
            setShow: false,
        }
    }

    componentDidMount(){
        this.retrieveUser()
    }
    
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.currentIndex !== this.state.currentIndex) {
    //         console.log(
    //             "test did update",
    //             true,
    //             prevState.currentIndex,
    //             this.state.currentIndex,
    //             prevProps
    //         )
    //         UserDataService.getAllUsers(this.state.users).then(
    //             (response) => {
    //                 this.setState({ users: response.data })
    //             }
    //         )
    //     } else {
    //         console.log('Component DID UPDATE!', false)
    //     }
    // }

    handleClose = () => {
        console.log(this.state.setShow)
        this.setState({setShow: false, show: false})
    }
    handleShow = () => {
        console.log(this.state.setShow)
        this.setState({setShow: true, show: true})
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
            currentUserEdit: user,
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

    // keperluan modal edit

    onChangeUsername(e){
        const username = e.target.value
        this.setState(function(prevState){
            return {
                currentUserEdit:{
                    ...prevState.currentUserEdit,
                    username: username
                }
            }
        })
            
    }

    onChangeEmail(e){
        const email = e.target.value
        this.setState(prevState => ({
            currentUserEdit:{
                ...prevState.currentUserEdit,
                email: email
            }
        }))
    }

    onChangePassword(e){
        const password = e.target.value
        this.setState(prevState => ({
            currentUserEdit:{
                ...prevState.currentUserEdit,
                password: password
            }
        }))
    }

    updateUser(){
        UserDataService.updateUser(
            this.state.currentUserEdit.id,
            this.state.currentUserEdit
        )
        .then(response => {
            console.log(response.data)
            this.setState({
                message: "The player was updated successfully"
            })
            this.props.history.push('/users')
        })
        .catch(e => {
            console.log(e)
        })
    }

    deleteUser(){
        UserDataService.deleteUser(
            this.state.currentUserEdit.id
        )
        .then(response => {
            console.log(response.data)
            this.props.history.push('/users')
        })
        .catch(e => {
            console.log(e)
        })
    }

    render(){
        const { searchUsername, users, currentUser, currentUserEdit, currentIndex } = this.state
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
                            {/* <Link to={"/users/" + currentUser.id}
                            className="badge badge-warning" onClick={this.handleShow}>
                                Edit
                            </Link> */}
                            <Link className="badge badge-danger" onClick={this.deleteUser}>
                                Delete
                            </Link> 

                            <Link className="badge badge-warning" onClick={this.handleShow}>
                                Edit
                            </Link>
                            <div>
                                <Modal show={this.state.show} onHide={this.handleClose}>
                                    <Modal.Header closeButton>
                                    <Modal.Title>Edit User</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        {/* hanya edit doang */}
                                        <div className="edit-form">
                                            <h4>Edit User</h4>
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="username">Username</label>
                                                    <input type="text" className="form-control" id="username" name="username" value={currentUserEdit.username} onChange={this.onChangeUsername}/>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="email">Email</label>
                                                    <input type="email" className="form-control" id="email" name="email" value={currentUserEdit.email} onChange={this.onChangeEmail}/>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="password">Password</label>
                                                    <input type="password" className="form-control" id="password" name="password" value={currentUserEdit.password} onChange={this.onChangePassword}/>
                                                </div>
                                            </form>

                                            <button className="badge badge-success" onClick={this.updateUser}>Update</button>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={this.handleClose}>
                                        Save Changes
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
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