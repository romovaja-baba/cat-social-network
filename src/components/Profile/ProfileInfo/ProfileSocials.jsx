const ProfileSocials = ({ social = null, editMode }) => {

    if (!editMode) {
        const socialName = social[0];
        const socialLink = social[1];
        return (
            <div className="socials-area">
                <span className="bold-text">{socialName}</span>
                : {socialLink || <span className="gray-italic-text">"no data"</span>}
            </div>
        )
    }
}

export default ProfileSocials;