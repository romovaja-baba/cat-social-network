interface Props {
    social: Array<string | any>,
    editMode: boolean
}

const ProfileSocials : React.FC<Props> = ({ social, editMode }: Props) => {

    if (!editMode) {
        const socialName = social[0];
        const socialLink = social[1];
        return (
            <div className="socials-area">
                <span className="bold-text">{socialName}</span>
                : {socialLink || <span className="gray-italic-text">no data</span>}
            </div>
        ) as any;
    }
}

export default ProfileSocials;