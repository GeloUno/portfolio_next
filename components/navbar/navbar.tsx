
import { useRouter } from 'next/router';
import NavbarItem from '../navbarItem/navbarItem';


function Navbar() {

    const { pathname, push, back } = useRouter()

    function handlerClickOpenMenu() {
        push('/menu')
    }

    function handlerClickGoBack() {
        back()
    }

    return (
        <NavbarItem
            pathname={pathname}
            handlerClickOpenMenu={handlerClickOpenMenu}
            handlerClickGoBack={handlerClickGoBack}
        />
    );
}

export default Navbar;