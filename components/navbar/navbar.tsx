
import { useRouter } from 'next/router';
import NavbarItem from '../navbarItem/navbarItem';


function Navbar() {

    const { pathname, push, back } = useRouter()

    function handlerClickOpenMenu() {
        push('/menu')
    }
    function handlerClickCloseMenu() {
        push('/')
    }
    function handlerClickGoBack() {
        back()
    }

    return (
        <NavbarItem
            pathname={pathname}
            handlerClickOpenMenu={handlerClickOpenMenu}
            handlerClickCloseMenu={handlerClickCloseMenu}
            handlerClickGoBack={handlerClickGoBack}
        />
    );
}

export default Navbar;