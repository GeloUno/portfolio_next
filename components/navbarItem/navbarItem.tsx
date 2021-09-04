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
            <div>
                <XIcon
                    data-testid="closeMenu"
                    className={classes.myIcon}
                    onClick={handlerClickCloseMenu} />
            </div>
        )
    }
    return (
        <div>
            <MenuIcon
                data-testid="openMenu"
                className={classes.myIcon}
                onClick={handlerClickOpenMenu} />
        </div>
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
        <nav
            data-testid="navbaritemBody"
            className='
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

            <div
                data-testid="navbaritemContent"
                className='
            flex 
            flex-col 
            h-20 
            text-lg 
            font-medium
            tracking-widest
            '>
                {pathname === '/' && <Fragment>
                    <Link href='/'>
                        <div
                            data-testid="firstNameContentLinkHomePage"
                            className='h-5 text-blue-500 cursor-pointer'>Grzegorz</div>
                    </Link>
                    <Link href='/'>
                        <div
                            data-testid="lastNameContentLinkHomePage"
                            className='h-5 text-fuchsia-500 cursor-pointer'>Kędziora</div>
                    </Link>
                </Fragment>
                }
                {pathname !== '/' && <Fragment>
                    <ArrowNarrowLeftIcon
                        data-testid="ArrowGoBackLink"
                        className={`${classes.myIcon}`}
                        onClick={handlerClickGoBack} />
                </Fragment>
                }
            </div>
            <div
                data-testid="switchOpenCloseButton"
                className='flex h-10 items-center text-xl'>

                {swichIconMenu(
                    pathname,
                    handlerClickOpenMenu,
                    handlerClickGoBack
                )}

            </div>

        </nav>
    );
}

export default NavbarItem;