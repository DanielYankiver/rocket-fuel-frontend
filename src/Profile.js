import React from "react";

function Profile({ currentUser }) {

    // Patch Edit User Form 
    // Delete Request 

    return (
        <div id="profile">
            {currentUser ? 
            <div> 
                <h1>Profile Page</h1>
                <h2>{currentUser.username}</h2>
                <h3>{currentUser.avatar}</h3>
            </div>
            : null}
        </div>

    )

}

export default Profile 