import React from 'react';
import { render, screen } from '@testing-library/react'

import NavbarItem from '../components/navbarItem/navbarItem';
import userEvent from '@testing-library/user-event';

const handlerClickOpenMenuMock = jest.fn()
const handlerClickGoBackMock = jest.fn()

beforeEach(() => {
    jest.clearAllMocks()
})

describe('NavbarItem', () => {
    describe(`pathname='/' `, () => {
        const pathname = '/'
        it('should render', async () => {
            expect(render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)).toBeTruthy()
        })
        it('should be in document', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('navbaritemBody')).toBeInTheDocument()
        });
        it('should be visible', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('navbaritemBody')).toBeVisible()
        });
        it('should have navbaritem content', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('navbaritemContent')).toBeInTheDocument()
            expect(screen.getByTestId('navbaritemContent')).toBeVisible()
        });
        it('should have firstName content', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('firstNameContentLinkHomePage')).toBeInTheDocument()
        });
        it('firstName content should be visible ', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)

            expect(screen.getByTestId('firstNameContentLinkHomePage')).toBeVisible()
        });
        it('should have lastName content', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('lastNameContentLinkHomePage')).toBeInTheDocument()
        });
        it('lastName content should be visible ', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('lastNameContentLinkHomePage')).toBeVisible()
        });
        it('should have menu open icon', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('openMenu')).toBeInTheDocument()
        });
        it('menu open icon should be visible ', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('openMenu')).toBeVisible()
        });
        it('menu close icon should be not visible ', async () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('closeMenu')).not.toBeInTheDocument()
            expect(screen.queryByTestId('closeMenu')).toBeFalsy()
        });
        it('back icon should be not visible ', async () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('ArrowGoBackLink')).not.toBeInTheDocument()
            expect(screen.queryByTestId('ArrowGoBackLink')).toBeFalsy()
        });
        it('user click open menu should call function, not call back function', async () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            const menuButton = screen.getByTestId('openMenu');

            userEvent.click(menuButton)

            expect(handlerClickOpenMenuMock).toBeCalled()
            expect(handlerClickOpenMenuMock).toBeCalledTimes(1)
            expect(handlerClickGoBackMock).not.toBeCalled()
            expect(handlerClickGoBackMock).toBeCalledTimes(0)
        });

    })



    describe(`pathname='/menu' `, () => {
        const pathname = '/menu'
        it('should render', async () => {
            expect(render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)).toBeTruthy()
        })
        it('should be in document', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('navbaritemBody')).toBeInTheDocument()
        });
        it('should be visible', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('navbaritemBody')).toBeVisible()
        });
        it('should have navbaritem content', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('navbaritemContent')).toBeInTheDocument()
            expect(screen.getByTestId('navbaritemContent')).toBeVisible()
        });


        it('should not have firstName content', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('firstNameContentLinkHomePage')).not.toBeInTheDocument()
        });
        it('firstName content should not be visible ', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)

            expect(screen.queryByTestId('firstNameContentLinkHomePage')).toBeFalsy()
        });
        it('should have lastName content', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('lastNameContentLinkHomePage')).not.toBeInTheDocument()
        });
        it('lastName content should be visible ', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('lastNameContentLinkHomePage')).toBeFalsy()
        });
        it('should have menu open icon', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('openMenu')).not.toBeInTheDocument()
        });
        it('menu open icon should be visible ', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('openMenu')).toBeFalsy()
        });
        it('menu close icon should be visible ', async () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('closeMenu')).toBeInTheDocument()
            expect(screen.queryByTestId('closeMenu')).toBeVisible()
        });
        it('back icon should be visible ', async () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('ArrowGoBackLink')).toBeInTheDocument()
            expect(screen.queryByTestId('ArrowGoBackLink')).toBeVisible()
        });
        it('user click close menu should call function, not call open menu', async () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            const menuButton = screen.getByTestId('closeMenu');

            userEvent.click(menuButton)

            expect(handlerClickGoBackMock).toBeCalled()
            expect(handlerClickGoBackMock).toBeCalledTimes(1)
            expect(handlerClickOpenMenuMock).not.toBeCalled()
            expect(handlerClickOpenMenuMock).toBeCalledTimes(0)
        });
    })



    describe(`pathname='/about' `, () => {
        const pathname = '/about'
        it('should render', async () => {
            expect(render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)).toBeTruthy()
        })
        it('should be in document', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('navbaritemBody')).toBeInTheDocument()
        });
        it('should be visible', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('navbaritemBody')).toBeVisible()
        });
        it('should have navbaritem content', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('navbaritemContent')).toBeInTheDocument()
            expect(screen.getByTestId('navbaritemContent')).toBeVisible()
        });
        it('should not have firstName content', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('firstNameContentLinkHomePage')).not.toBeInTheDocument()
        });
        it('firstName content should not be visible ', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)

            expect(screen.queryByTestId('firstNameContentLinkHomePage')).toBeFalsy()
        });
        it('should not have lastName content', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('lastNameContentLinkHomePage')).not.toBeInTheDocument()
        });
        it('lastName content should not be visible ', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('lastNameContentLinkHomePage')).toBeFalsy()
        });
        it('should have menu open icon', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('openMenu')).toBeInTheDocument()
        });
        it('menu open icon should be visible ', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('openMenu')).toBeVisible()
        });
        it('menu close icon should be not visible ', async () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('closeMenu')).not.toBeInTheDocument()
            expect(screen.queryByTestId('closeMenu')).toBeFalsy()
        });
        it('back icon should be visible ', async () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('ArrowGoBackLink')).toBeInTheDocument()
            expect(screen.queryByTestId('ArrowGoBackLink')).toBeVisible()
        });
        it('user click open menu should call function, not call back function', async () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            const menuButton = screen.getByTestId('openMenu');

            userEvent.click(menuButton)

            expect(handlerClickOpenMenuMock).toBeCalled()
            expect(handlerClickOpenMenuMock).toBeCalledTimes(1)
            expect(handlerClickGoBackMock).not.toBeCalled()
            expect(handlerClickGoBackMock).toBeCalledTimes(0)
        });
    })



    describe(`pathname='/contact' `, () => {
        const pathname = '/contact'
        it('should render', async () => {
            expect(render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)).toBeTruthy()
        })
        it('should be in document', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('navbaritemBody')).toBeInTheDocument()
        });
        it('should be visible', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('navbaritemBody')).toBeVisible()
        });
        it('should have navbaritem content', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('navbaritemContent')).toBeInTheDocument()
            expect(screen.getByTestId('navbaritemContent')).toBeVisible()
        });
        it('should not have firstName content', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('firstNameContentLinkHomePage')).not.toBeInTheDocument()
        });
        it('firstName content should not be visible ', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)

            expect(screen.queryByTestId('firstNameContentLinkHomePage')).toBeFalsy()
        });
        it('should not have lastName content', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('lastNameContentLinkHomePage')).not.toBeInTheDocument()
        });
        it('lastName content should not be visible ', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('lastNameContentLinkHomePage')).toBeFalsy()
        });
        it('should have menu open icon', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('openMenu')).toBeInTheDocument()
        });
        it('menu open icon should be visible ', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('openMenu')).toBeVisible()
        });
        it('menu close icon should be not visible ', async () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('closeMenu')).not.toBeInTheDocument()
            expect(screen.queryByTestId('closeMenu')).toBeFalsy()
        });
        it('back icon should be visible ', async () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('ArrowGoBackLink')).toBeInTheDocument()
            expect(screen.queryByTestId('ArrowGoBackLink')).toBeVisible()
        });
        it('user click open menu should call function, not call back function', async () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            const menuButton = screen.getByTestId('openMenu');

            userEvent.click(menuButton)

            expect(handlerClickOpenMenuMock).toBeCalled()
            expect(handlerClickOpenMenuMock).toBeCalledTimes(1)
            expect(handlerClickGoBackMock).not.toBeCalled()
            expect(handlerClickGoBackMock).toBeCalledTimes(0)
        });
    })



    describe(`pathname='/projects' `, () => {
        const pathname = '/projects'
        it('should render', async () => {
            expect(render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)).toBeTruthy()
        })
        it('should be in document', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('navbaritemBody')).toBeInTheDocument()
        });
        it('should be visible', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('navbaritemBody')).toBeVisible()
        });
        it('should have navbaritem content', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('navbaritemContent')).toBeInTheDocument()
            expect(screen.getByTestId('navbaritemContent')).toBeVisible()
        });
        it('should not have firstName content', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('firstNameContentLinkHomePage')).not.toBeInTheDocument()
        });
        it('firstName content should not be visible ', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)

            expect(screen.queryByTestId('firstNameContentLinkHomePage')).toBeFalsy()
        });
        it('should not have lastName content', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('lastNameContentLinkHomePage')).not.toBeInTheDocument()
        });
        it('lastName content should not be visible ', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('lastNameContentLinkHomePage')).toBeFalsy()
        });
        it('should have menu open icon', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('openMenu')).toBeInTheDocument()
        });
        it('menu open icon should be visible ', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('openMenu')).toBeVisible()
        });
        it('menu close icon should be not visible ', async () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('closeMenu')).not.toBeInTheDocument()
            expect(screen.queryByTestId('closeMenu')).toBeFalsy()
        });
        it('back icon should be visible ', async () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('ArrowGoBackLink')).toBeInTheDocument()
            expect(screen.queryByTestId('ArrowGoBackLink')).toBeVisible()
        });
        it('user click open menu should call function, not call back function', async () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            const menuButton = screen.getByTestId('openMenu');

            userEvent.click(menuButton)

            expect(handlerClickOpenMenuMock).toBeCalled()
            expect(handlerClickOpenMenuMock).toBeCalledTimes(1)
            expect(handlerClickGoBackMock).not.toBeCalled()
            expect(handlerClickGoBackMock).toBeCalledTimes(0)
        });
    })



    describe(`pathname='/projects/0' `, () => {
        const pathname = '/projects/0'
        it('should render', async () => {
            expect(render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)).toBeTruthy()
        })
        it('should be in document', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('navbaritemBody')).toBeInTheDocument()
        });
        it('should be visible', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('navbaritemBody')).toBeVisible()
        });
        it('should have navbaritem content', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('navbaritemContent')).toBeInTheDocument()
            expect(screen.getByTestId('navbaritemContent')).toBeVisible()
        });
        it('should not have firstName content', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('firstNameContentLinkHomePage')).not.toBeInTheDocument()
        });
        it('firstName content should not be visible ', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)

            expect(screen.queryByTestId('firstNameContentLinkHomePage')).toBeFalsy()
        });
        it('should not have lastName content', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('lastNameContentLinkHomePage')).not.toBeInTheDocument()
        });
        it('lastName content should not be visible ', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('lastNameContentLinkHomePage')).toBeFalsy()
        });
        it('should have menu open icon', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('openMenu')).toBeInTheDocument()
        });
        it('menu open icon should be visible ', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('openMenu')).toBeVisible()
        });
        it('menu close icon should be not visible ', async () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('closeMenu')).not.toBeInTheDocument()
            expect(screen.queryByTestId('closeMenu')).toBeFalsy()
        });
        it('back icon should be visible ', async () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('ArrowGoBackLink')).toBeInTheDocument()
            expect(screen.queryByTestId('ArrowGoBackLink')).toBeVisible()
        });
        it('user click open menu should call function, not call back function', async () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            const menuButton = screen.getByTestId('openMenu');

            userEvent.click(menuButton)

            expect(handlerClickOpenMenuMock).toBeCalled()
            expect(handlerClickOpenMenuMock).toBeCalledTimes(1)
            expect(handlerClickGoBackMock).not.toBeCalled()
            expect(handlerClickGoBackMock).toBeCalledTimes(0)
        });
    })



    describe(`pathname='/projects/3' `, () => {
        const pathname = '/projects/3'
        it('should render', async () => {
            expect(render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)).toBeTruthy()
        })
        it('should be in document', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('navbaritemBody')).toBeInTheDocument()
        });
        it('should be visible', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('navbaritemBody')).toBeVisible()
        });
        it('should have navbaritem content', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('navbaritemContent')).toBeInTheDocument()
            expect(screen.getByTestId('navbaritemContent')).toBeVisible()
        });
        it('should not have firstName content', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('firstNameContentLinkHomePage')).not.toBeInTheDocument()
        });
        it('firstName content should not be visible ', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)

            expect(screen.queryByTestId('firstNameContentLinkHomePage')).toBeFalsy()
        });
        it('should not have lastName content', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('lastNameContentLinkHomePage')).not.toBeInTheDocument()
        });
        it('lastName content should not be visible ', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('lastNameContentLinkHomePage')).toBeFalsy()
        });
        it('should have menu open icon', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('openMenu')).toBeInTheDocument()
        });
        it('menu open icon should be visible ', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('openMenu')).toBeVisible()
        });
        it('menu close icon should be not visible ', async () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('closeMenu')).not.toBeInTheDocument()
            expect(screen.queryByTestId('closeMenu')).toBeFalsy()
        });
        it('back icon should be visible ', async () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('ArrowGoBackLink')).toBeInTheDocument()
            expect(screen.queryByTestId('ArrowGoBackLink')).toBeVisible()
        });
        it('user click open menu should call function, not call back function', async () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            const menuButton = screen.getByTestId('openMenu');

            userEvent.click(menuButton)

            expect(handlerClickOpenMenuMock).toBeCalled()
            expect(handlerClickOpenMenuMock).toBeCalledTimes(1)
            expect(handlerClickGoBackMock).not.toBeCalled()
            expect(handlerClickGoBackMock).toBeCalledTimes(0)
        });
    })



    describe(`pathname='/projects/7' `, () => {
        const pathname = '/projects/7'
        it('should render', async () => {
            expect(render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)).toBeTruthy()
        })
        it('should be in document', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('navbaritemBody')).toBeInTheDocument()
        });
        it('should be visible', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('navbaritemBody')).toBeVisible()
        });
        it('should have navbaritem content', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('navbaritemContent')).toBeInTheDocument()
            expect(screen.getByTestId('navbaritemContent')).toBeVisible()
        });
        it('should not have firstName content', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('firstNameContentLinkHomePage')).not.toBeInTheDocument()
        });
        it('firstName content should not be visible ', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)

            expect(screen.queryByTestId('firstNameContentLinkHomePage')).toBeFalsy()
        });
        it('should not have lastName content', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('lastNameContentLinkHomePage')).not.toBeInTheDocument()
        });
        it('lastName content should not be visible ', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('lastNameContentLinkHomePage')).toBeFalsy()
        });
        it('should have menu open icon', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('openMenu')).toBeInTheDocument()
        });
        it('menu open icon should be visible ', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('openMenu')).toBeVisible()
        });
        it('menu close icon should be not visible ', async () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('closeMenu')).not.toBeInTheDocument()
            expect(screen.queryByTestId('closeMenu')).toBeFalsy()
        });
        it('back icon should be visible ', async () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('ArrowGoBackLink')).toBeInTheDocument()
            expect(screen.queryByTestId('ArrowGoBackLink')).toBeVisible()
        });
        it('user click open menu should call function, not call back function', async () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            const menuButton = screen.getByTestId('openMenu');

            userEvent.click(menuButton)

            expect(handlerClickOpenMenuMock).toBeCalled()
            expect(handlerClickOpenMenuMock).toBeCalledTimes(1)
            expect(handlerClickGoBackMock).not.toBeCalled()
            expect(handlerClickGoBackMock).toBeCalledTimes(0)
        });
    })



    describe(`error pathname='/projects/err' `, () => {
        const pathname = '/projects/err'
        it('should render', async () => {
            expect(render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)).toBeTruthy()
        })
        it('should be in document', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('navbaritemBody')).toBeInTheDocument()
        });
        it('should be visible', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('navbaritemBody')).toBeVisible()
        });
        it('should have navbaritem content', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('navbaritemContent')).toBeInTheDocument()
            expect(screen.getByTestId('navbaritemContent')).toBeVisible()
        });
        it('should not have firstName content', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('firstNameContentLinkHomePage')).not.toBeInTheDocument()
        });
        it('firstName content should not be visible ', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)

            expect(screen.queryByTestId('firstNameContentLinkHomePage')).toBeFalsy()
        });
        it('should not have lastName content', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('lastNameContentLinkHomePage')).not.toBeInTheDocument()
        });
        it('lastName content should not be visible ', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('lastNameContentLinkHomePage')).toBeFalsy()
        });
        it('should have menu open icon', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('openMenu')).toBeInTheDocument()
        });
        it('menu open icon should be visible ', () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.getByTestId('openMenu')).toBeVisible()
        });
        it('menu close icon should be not visible ', async () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('closeMenu')).not.toBeInTheDocument()
            expect(screen.queryByTestId('closeMenu')).toBeFalsy()
        });
        it('back icon should be visible ', async () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            expect(screen.queryByTestId('ArrowGoBackLink')).toBeInTheDocument()
            expect(screen.queryByTestId('ArrowGoBackLink')).toBeVisible()
        });
        it('user click open menu should call function, not call back function', async () => {
            render(<NavbarItem
                handlerClickOpenMenu={handlerClickOpenMenuMock}
                handlerClickGoBack={handlerClickGoBackMock}
                pathname={pathname}
            />)
            const menuButton = screen.getByTestId('openMenu');

            userEvent.click(menuButton)

            expect(handlerClickOpenMenuMock).toBeCalled()
            expect(handlerClickOpenMenuMock).toBeCalledTimes(1)
            expect(handlerClickGoBackMock).not.toBeCalled()
            expect(handlerClickGoBackMock).toBeCalledTimes(0)
        });
    })
});