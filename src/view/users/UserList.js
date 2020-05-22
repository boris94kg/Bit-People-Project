import React from 'react';
import { UserItem } from './UserItem.js';


export const UserList = ({ listOfUsers }) => {
    return (
        <div className="container users-holder">
            {listOfUsers.map((user, index) => {
                return <UserItem key={index} user={user} />
            })}
        </div>
    )
}