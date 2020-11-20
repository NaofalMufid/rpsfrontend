import React from 'react'

export const DisplayBoard = ({numberOfUsers, getAllUsers}) => {
    return(
        <div className="display-board">
            <h4>Users Created</h4>
            <div className="number">
                {numberOfUsers}
            </div>
            <div className="btn">
                <button className="btn btn-warning" type="button" onClick={(e) => getAllUsers()}>Get all Users</button>
            </div>
        </div>
    )
}