import React from 'react';
import { UserItem } from './UserItem.js';



export const UserList = (props) => {

    return (
        <div className="container users-holder">


            {props.listOfUsers.map((user, index) => {
                return <UserItem key={index} user={user} />
            })}
        </div>
    )
}