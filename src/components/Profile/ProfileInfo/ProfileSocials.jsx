const ProfileSocials = ({ social = null, editMode }) => {

    if (!editMode) {
        const socialName = social[0];
        const socialLink = social[1];
        return (
            <div className="socials-area">
                <span className="bold-text">{socialName}</span>
                : <span className="gray-italic-text">{socialLink || "no data"}</span>
            </div>
        )
    }
}

export default ProfileSocials;