import React, { Component } from "react"
import UserDataService from "../../services/UserService"

export default class User extends Component{
    constructor(props){
        super(props)
        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.getUser = this.getUser.bind(this)
        this.updateUser = this.updateUser.bind(this)

        this.state = {
            currentUser: {
                username: "",
                email: "",
                password: ""
            },
            message: ""
        }

    }
    componentDidMount(){
        this.getUser(this.props.match.params.id)
    }

    onChangeUsername(e){
        const username = e.target.value
        this.setState(function(prevState){
            return {
                currentUser:{
                    ...prevState.currentUser,
                    username: username
                }
            }
        })
            
    }

    onChangeEmail(e){
        const email = e.target.value
        this.setState(prevState => ({
            currentUser:{
                ...prevState.currentUser,
                email: email
            }
        }))
    }

    onChangePassword(e){
        const password = e.target.value
        this.setState(prevState => ({
            currentUser:{
                ...prevState.currentUser,
                password: password
            }
        }))
    }

    getUser(id){
        UserDataService.getOneUser(id)
        .then(response => {
            this.setState({
                currentUser: response.data
            })
            console.log(response.data)
        })
        .catch(e => {
            console.log(e)
        })
    }

    updateUser(){
        UserDataService.updateUser(
            this.state.currentUser.id,
            this.state.currentUser
        )
        .then(response => {
            console.log(response.data)
            this.setState({
                message: "The player was updated successfully"
            })
        })
        .catch(e => {
            console.log(e)
        })
    }

    render(){
        const { currentUser } = this.state
        return(
            <div>
                {currentUser ? (
                    <div className="edit-form">
                        <h4>Edit User</h4>
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" id="username" name="username" value={currentUser.username} onChange={this.onChangeUsername}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" name="email" value={currentUser.email} onChange={this.onChangeEmail}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" name="password" value={currentUser.password} onChange={this.onChangePassword}/>
                            </div>
                        </form>

                        <button className="badge badge-success" onClick={this.updateUser}>Update</button>
                    </div>    
                ) : (
                    <div>
                        <br/>
                        <p>Please click on user...</p>
                    </div>                            
                )}    
            </div>
        )
    }
}