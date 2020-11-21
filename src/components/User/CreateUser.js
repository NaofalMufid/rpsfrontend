import React, { Component } from "react"
import UserDataService from "../../services/UserService"

export default class CreateUser extends Component{
    constructor(props){
        super(props)
        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.saveUser = this.saveUser.bind(this)
        this.newUser = this.newUser.bind(this)

        this.state = {
            username: "",
            email: "",
            password: "",

            submitted: false
        }
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }

    saveUser(){
        var data = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        UserDataService.createUser(data)
        .then(response => {
            this.setState({
                username: response.data.username,
                email: response.data.email,
                password: response.data.password,

                submitted: true
            })
            console.log(response)
        })
        .catch(e => {
            console.log(e)
        })
    }

    newUser(){
        this.setState({
            username: "",
            email: "",
            password: "",

            submitted: false
        })
    }

    render(){
        return(
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>You submitted successfully</h4>
                        <button className="btn btn-success" onClick={this.newUser}>Add</button>
                    </div>
                ):(
                    <div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" name="username" required value={this.state.username} onChange={this.onChangeUsername}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" name="email" required value={this.state.email} onChange={this.onChangeEmail}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" name="password" required value={this.state.password} onChange={this.onChangePassword}/>
                        </div>

                        <button className="btn btn-success" onClick={this.saveUser}>Submit</button>
                    </div>   
                )}
            </div>
        )
    }
}