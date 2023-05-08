import { IUser } from '../../interfaces/users.interface'
import '../../styles/Users.scss'
import User from './User/User'

interface Props {
    users: IUser[]
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
}

const Users = ({ users, followUser, unfollowUser }: Props) => {
    return (
        <div className='users-area'>
            <div className='users-items-area'>
                {users.map((user: IUser, index: number) => (
                    <User
                        user={user}
                        key={index}
                        followUser={followUser}
                        unfollowUser={unfollowUser}
                    />
                ))}
            </div>
        </div>
    )
}

export default Users
