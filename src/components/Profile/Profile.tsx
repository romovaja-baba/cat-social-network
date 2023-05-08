import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

import { shallowEqual } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

import { getUserProfile } from '../../redux/actions/profile-actions'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { profileSelector, myProfileIdSelector, statusTextSelector } from '../../utils/selectors'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'

const Profile = () => {
    const profile = useAppSelector(profileSelector, shallowEqual)
    const myProfileId: number = useAppSelector(myProfileIdSelector)
    const statusText: string = useAppSelector(statusTextSelector)
    const dispatch = useAppDispatch()

    let { id } = useParams() as { id: string }
    useEffect(() => {
        dispatch(getUserProfile(id || myProfileId))
    }, [dispatch, id, myProfileId])

    return (
        <div className='profile-area'>
            <ProfileInfo
                profile={profile}
                isOwner={!id}
                statusText={statusText}
                id={parseInt(id) || myProfileId}
            />
            {profile && <MyPosts profilePicture={profile.photos.small} />}
        </div>
    )
}

export default withAuthRedirect(Profile)
