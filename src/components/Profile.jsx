import React from "react";

const Profile = () => {
    return (
        <div className='profile'>
            <div className="profile-main-info">
                <div className='content-image'>
                    <img height={"200px"} alt="" src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop" />
                </div>
                <div className="profile-name">
                    Catmond Purrvic
                </div>
            </div>

            <div className='content-posts'>
                <div>
                    new post
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;