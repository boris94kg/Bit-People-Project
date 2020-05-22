import React from 'react';
import { UserList } from '../users/UserList.js';
import { UserCardList } from '../users/UserCardList.js';

const Main = ({ onInputChange, inputValue, isGrid, users }) => {

    return (
        <div className="container main-holder">
            <div className="row">

                <div className="container-fluid search-holder">
                    <span className="icon-holder"><i className="fas fa-search"></i></span>
                    <input type="search" value={inputValue} onChange={onInputChange} placeholder="Search User" className="search-input" />
                </div>

            </div>
            {isGrid ? <UserCardList listOfUsers={users} /> : <UserList listOfUsers={users} />}
        </div>
    )
}

export { Main }