import Link from 'next/link';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { Fragment, MouseEventHandler } from 'react';
import classes from './navbarItem.module.css'

function swichIconMenu(
    pathname: string,
    handlerClickOpenMenu: MouseEventHandler,
    handlerClickCloseMenu: MouseEventHandler
) {

    if (pathname === '/menu') {
        return (
            <XIcon
                className={classes.myIcon}
                onClick={handlerClickCloseMenu} />
        )
    }
    return (
        <MenuIcon
            className={classes.myIcon}
            onClick={handlerClickOpenMenu} />
    )
}


interface INavbarItemProps {
    pathname: string,
    handlerClickOpenMenu: MouseEventHandler,
    handlerClickCloseMenu: MouseEventHandler,
}

function NavbarItem({
    pathname,
    handlerClickCloseMenu,
    handlerClickOpenMenu
}: INavbarItemProps) {

    return (
        <div className='
        fixed 
        flex 
        flex-row 
        text-gray-300 
        px-10 pt-5 
        xl:px-20 
        xl-pt-20 
        h-10 
        justify-between 
        content-center 
        w-full'>

            <div className='
            flex 
            flex-col 
            h-20 
            text-lg 
            font-medium
            tracking-widest
            '>
                {pathname !== '/menu' && <Fragment>
                    <Link href='/'>
                        <div className='h-5 text-blue-500 cursor-pointer'>Hello</div>
                    </Link>
                    <Link href='/'>
                        <div className='h-5 text-fuchsia-500 cursor-pointer'>Gello</div>
                    </Link>
                </Fragment>
                }
            </div>
            <div className='flex h-10 items-center text-xl'>

                {swichIconMenu(pathname, handlerClickOpenMenu, handlerClickCloseMenu)}


            </div>
        </div>
    );
}

export default NavbarItem;