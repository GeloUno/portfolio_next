import Link from 'next/link';
import { MenuIcon, XIcon, ArrowNarrowLeftIcon } from '@heroicons/react/solid';
import { Fragment, MouseEventHandler } from 'react';
import classes from './navbarItem.module.css'

function swichIconMenu(
    pathname: string,
    handlerClickOpenMenu: MouseEventHandler,
    handlerClickCloseMenu: MouseEventHandler
) {

    if (pathname === '/menu') {
        return (
            <li>
                <XIcon
                    className={classes.myIcon}
                    onClick={handlerClickCloseMenu} />
            </li>
        )
    }
    return (
        <li>
            <MenuIcon
                className={classes.myIcon}
                onClick={handlerClickOpenMenu} />
        </li>
    )
}


interface INavbarItemProps {
    pathname: string,
    handlerClickOpenMenu: MouseEventHandler,
    handlerClickGoBack: MouseEventHandler,
}

function NavbarItem({
    pathname,
    handlerClickOpenMenu,
    handlerClickGoBack
}: INavbarItemProps) {

    return (
        <nav className='
        absolute 
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

            <ul className='
            flex 
            flex-col 
            h-20 
            text-lg 
            font-medium
            tracking-widest
            '>
                {pathname === '/' && <Fragment>
                    <Link href='/'>
                        <li className='h-5 text-blue-500 cursor-pointer'>Grzegorz</li>
                    </Link>
                    <Link href='/'>
                        <li className='h-5 text-fuchsia-500 cursor-pointer'>Kędziora</li>
                    </Link>
                </Fragment>
                }
                {pathname !== '/' && <Fragment>
                    <ArrowNarrowLeftIcon
                        className={`${classes.myIcon}`}
                        onClick={handlerClickGoBack} />
                </Fragment>
                }
            </ul>
            <ul className='flex h-10 items-center text-xl'>

                {swichIconMenu(
                    pathname,
                    handlerClickOpenMenu,
                    handlerClickGoBack
                )}

            </ul>

        </nav>
    );
}

export default NavbarItem;