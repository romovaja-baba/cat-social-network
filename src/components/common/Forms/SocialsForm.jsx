import { useState } from "react";

const SocialsForm = ({ socialName, socialLink, register }) => {

    const [social, setSocial] = useState(socialLink);

    return (
        <div className="profile-editmode-socials-area">
            <label htmlFor={`contacts.${socialName}`}>{socialName}:</label>
            <input
                {...register(`contacts.${socialName}`)}
                onChange={e => setSocial(e.currentTarget.value)}
                value={social}
                placeholder={socialName}
                className="profile-editmode-socials-input"
            />
        </div>
    )
};

export default SocialsForm;