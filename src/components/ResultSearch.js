import React from 'react'

export const ResultSearch = ({results}) => {
    console.log('result search length:::', results.length)
    if(results.length === 0) return null

    const ResultRow = (user, index) => {
        return(
            <tr key= {index} className={index%2 === 0?'odd':'even'}>
                <td>{index +1 }</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
            </tr>
        )
    }

    const resultTable = results.map((user, index) => ResultRow(user, index))

    return(
        <div className="container">
            <h2>Results Search Users</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>{resultTable}</tbody>
            </table>
        </div>
    )
} 