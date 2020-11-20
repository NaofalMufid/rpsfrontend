import React from 'react'

export const Users = ({users}) => {
    console.log('user length:::', users.length)
    if(users.length === 0) return null

    const UserRow = (user, index) => {
        return(
            <tr key= {index} className={index%2 === 0?'odd':'even'}>
                <td>{index +1 }</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                    <a href="#" className="btn btn-info">Edit</a>
                </td>
            </tr>
        )
    }

    const userTable = users.map((user, index) => UserRow(user, index))

    return(
        <div className="container">
            <h2>Users</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Option</th>
                    </tr>
                </thead>
                <tbody>{userTable}</tbody>
            </table>
        </div>
    )
} 