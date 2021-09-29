import React from 'react';
import { render, screen } from '@testing-library/react'

import { ETechnology } from '../models/ETechnology';
import { IProject } from '../models/IProject';

import Projectslist from '../components/projects/list/projectslist';
import LayoutPage from './../layout/layout';



const pushMock = () => jest.fn()
const backMock = () => jest.fn()

jest.mock('next/router', () => {
    return {
        useRouter() {
            return {
                pathname: '/',
                push: pushMock,
                back: backMock
            }
        }
    }
})

beforeEach(() => {
    jest.clearAllMocks()
})


describe('LayoutPage', () => {

    const childMock = <div
        data-testid="childTest"
    >Some child mock</div>

    it(`should render`, () => {
        expect(render(<LayoutPage
            children={childMock}
        />)).toBeTruthy()
    })
    it(`should have navbar`, () => {
        render(<LayoutPage
            children={childMock}
        />)
        const result = screen.getByTestId('navbaritemBody')
        expect(result).toBeInTheDocument()
    })
    it(`navbar should be visible`, () => {
        render(<LayoutPage
            children={childMock}
        />)
        const result = screen.getByTestId('navbaritemBody')
        expect(result).toBeVisible()
    })
    it(`should have children`, () => {
        render(<LayoutPage
            children={childMock}
        />)
        const result = screen.getByTestId('LayoutChildren')
        expect(result).toBeInTheDocument()
    })
    it(`children should be visible`, () => {
        render(<LayoutPage
            children={childMock}
        />)
        const result = screen.getByTestId('LayoutChildren')
        expect(result).toBeVisible()
    })
    // it(`debug`, () => {
    //     render(<LayoutPage
    //         children={childMock}
    //     />)

    //     screen.debug()
    //     expect(1).toBe(2)
    // })
});