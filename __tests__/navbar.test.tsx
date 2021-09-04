import React from 'react';
import { render, screen } from '@testing-library/react'

import Navbar from '../components/navbar/navbar';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            push: jest.fn(),
            back: jest.fn(),
            pathname: '/'
        }
    }
}))


describe('NavBar', () => {

    it('should render', async () => {
        expect(render(<Navbar />)).toBeTruthy()
    })

});