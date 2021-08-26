
import { useRouter } from 'next/router';
import NavbarItem from '../navbarItem/navbarItem';


function Navbar() {

    const { pathname, push } = useRouter()

    function handlerClickOpenMenu() {
        push('/menu')
    }
    function handlerClickCloseMenu() {
        push('/')
    }

    return (
        <NavbarItem
            pathname={pathname}
            handlerClickOpenMenu={handlerClickOpenMenu}
            handlerClickCloseMenu={handlerClickCloseMenu}
        />
    );
}

export default Navbar;