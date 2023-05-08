import { Link } from 'react-router-dom'
import '../../styles/SideBar.scss'
import { useAppSelector } from '../../utils/hooks'
import { sideBarFriendsSelector } from '../../utils/selectors'

interface FriendValue {
    id: number
    name: string
    profilePicture: string
}

const SideBar = () => {
    const friends = useAppSelector(sideBarFriendsSelector)

    const friendsElements = friends.map((friend: FriendValue, index: number) => {
        return (
            <Link to={`/dialogs/${friend.id}`} key={friend.id} className='sidebar-item'>
                <img alt={friend.name} src={friend.profilePicture} />
                {friend.name}
            </Link>
        )
    })

    return (
        <div className='sidebar-area'>
            <div className='sidebar-title'>Your Best Friends</div>
            <div className='sidebar-list'>{friendsElements}</div>
        </div>
    )
}

export default SideBar
