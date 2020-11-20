import React from 'react'

export const SearchUser = ({onChangeSearchTitle, searchingUser}) => {
    return(
        <div className="SearchUser">
            <form>
                <div className="row">
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control"  onChange={(e) => onChangeSearchTitle(e)} name="keyword" id="keyword" aria-describedby="keywordHelp" placeholder="Seacrh User"/>
                    </div>
                    <div className="form-group col-md-6">
                        <button type="button" onClick={(e) => searchingUser()} className="btn btn-success">Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}