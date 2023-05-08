import { NavLink } from 'react-router-dom'

interface Props {
    to: string
    name: string
}

const NavDiv = ({ to, name }: Props) => {
    const SelectedLink = () => (select: { isActive: boolean }) =>
        select.isActive ? 'active-nav-item nav-item' : 'nav-item'

    return (
        <div className='navdiv-area'>
            <NavLink to={to} className={SelectedLink()}>
                {name}
            </NavLink>
        </div>
    )
}

export default NavDiv
