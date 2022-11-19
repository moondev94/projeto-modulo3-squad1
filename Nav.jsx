
import {Nav, NavItem, NavLink} from 'reactstrap';

function NavMenu() {
    return (
    <Nav pills
    justified>
        <NavItem>
            <NavLink
                active
                href="#"
            >
                Link
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#">
                Link
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#">
                Another Link
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink
                disabled
                href="#"
            >
                Disabled Link
            </NavLink>
        </NavItem>
    </Nav>
    )
}

export default NavMenu;