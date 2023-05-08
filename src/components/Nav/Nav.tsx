import '../../styles/Nav.scss'
import LogoutButton from '../common/LogoutButton'
import NavDiv from '../common/NavDiv'

const Nav = () => {
    const navLinks = [
        { to: '/feed', name: 'Feed' },
        { to: '/users', name: 'Find Users' },
        { to: '/profile', name: 'Profile' },
        { to: '/dialogs', name: 'Dialogs' },
        { to: '/music', name: 'Music' },
        { to: '/settings', name: 'Settings' },
    ]

    return (
        <nav className='nav-area'>
            {navLinks.map((obj, index) => (
                <NavDiv to={obj.to} name={obj.name} key={index} />
            ))}
            <LogoutButton />
        </nav>
    )
}

export default Nav
