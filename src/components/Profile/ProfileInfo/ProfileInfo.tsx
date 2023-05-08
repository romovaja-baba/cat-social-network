import { ChangeEvent, useState } from 'react'
import Preloader from '../../common/Preloader'
import ProfileStatus from './ProfileStatus'
import ProfileInfoForm from '../../common/Forms/ProfileInfoForm'
import ProfileSocials from './ProfileSocials'

import { saveProfilePicture } from '../../../redux/actions/profile-actions'
import defaultProfilePicture from '../../../images/defaultPP.jpg'

import '../../../styles/Profile.scss'
import { useAppDispatch } from '../../../utils/hooks'
import { IProfile } from '../../../interfaces/profile.interface'

interface Props {
    profile: IProfile
    isOwner: boolean
    statusText: string
    id: number
}

const ProfileInfo = ({ profile, isOwner, statusText, id }: Props) => {
    const dispatch = useAppDispatch()
    const [editMode, setEditMode] = useState(false)

    const onProfilePictureSelected = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files
        if (files) {
            dispatch(saveProfilePicture(files[0]))
        }
    }

    if (!profile) return <Preloader />

    return (
        <div className='profile-maininfo-area'>
            <div className='profile-maininfo-profilepicture'>
                <img alt='' src={profile.photos.large || defaultProfilePicture} />
                {isOwner && (
                    <div className='profile-picture-update'>
                        <label htmlFor='file-upload' className='profile=picture-update-button'>
                            Update Picture
                        </label>
                        <input id='file-upload' type='file' onChange={onProfilePictureSelected} />
                    </div>
                )}
                {isOwner && (
                    <div className='profile-maininfo-edit'>
                        <button onClick={() => setEditMode(true)}>Edit Profile</button>
                    </div>
                )}
            </div>

            {editMode ? (
                <ProfileInfoForm disableEditMode={() => setEditMode(false)} profile={profile} />
            ) : (
                <div className='profile-maininfo'>
                    <div className='profile-maininfo-name'>{profile.fullName}</div>

                    <ProfileStatus isOwner={isOwner} statusText={statusText} id={id} />

                    <div className='profile-maininfo-colored'>
                        <div className='profile-maininfo-aboutme'>{profile.aboutMe}</div>
                        <div className='profile-maininfo-job-area'>
                            <div className='profile-maininfo-job-item active-text'>
                                {profile.lookingForAJob ? (
                                    <span className='bold-text'>Looking for a job</span>
                                ) : (
                                    <span className='gray-italic-text'>Not looking for a job</span>
                                )}
                                <div>{profile.lookingForAJobDescription}</div>
                            </div>

                            <div className='profile-maininfo-socials'>
                                {Object.entries(profile.contacts).map((social, index) => {
                                    return (
                                        <ProfileSocials
                                            key={index}
                                            social={social}
                                            editMode={editMode}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProfileInfo
