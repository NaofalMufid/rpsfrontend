import React from 'react'

const CreateUser = ({onChangeForm, createUser}) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                    <h2>Create User</h2>
                    <form>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="exampleInputUsername">Username</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="username" id="username" aria-describedby="usernameHelp" placeholder="First Name"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="exampleInputEmail">Email</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="exampleInputPassword">Password</label>
                                <input type="password" onChange={(e) => onChangeForm(e)} className="form-control" name="password" id="password" aria-describedby="passwordHelp" placeholder="Password"/>
                            </div>
                            <div className="form-group col-md-6">
                                <button type="button" onClick={(e) => createUser()} className="btn btn-danger">Create</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser