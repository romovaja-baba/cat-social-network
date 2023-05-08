import { useFormContext } from 'react-hook-form'
import { useState } from 'react'
import { IContacts } from '../../../interfaces/profile.interface'

interface Props {
    socialName: string
    socialLink: string
}

const SocialsForm: React.FC<Props> = ({ socialName, socialLink }: Props) => {
    const [social, setSocial] = useState<string>(socialLink)
    const { register } = useFormContext<IContacts>()
    let name = `contacts.${socialName}`

    return (
        <div className='profile-editmode-socials-area'>
            <label htmlFor={name}>{socialName}:</label>
            <input
                {...register(name)}
                onChange={(e) => setSocial(e.currentTarget.value)}
                value={social}
                placeholder={socialName}
                className='profile-editmode-socials-input'
            />
        </div>
    )
}

export default SocialsForm
