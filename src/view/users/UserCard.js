import React from 'react';

const UserCard = ({ user }) => {
    const femaleColor = user.isFemale() ? "is-female" : "";
    return (
        <div className="one-user-card col-sm-6 col-md-6 col-lg-4">
            <div className={`card-holder ${femaleColor}`}>
                <div className="card-image-holder">
                    <img src={user.largeImage} alt="" />
                    <h4 className="user-name">{user.name}</h4>
                </div>
                <div className="card-info-holder">
                    <p className="user-email">

                        {user.hideEmail()}
                    </p>
                    <p className="user-birthday">
                        Birth date: {user.getFormatDate()}
                    </p>
                </div>
            </div>
        </div>
    );
}


export { UserCard };