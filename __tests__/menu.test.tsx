import React from 'react';
import { render, screen } from '@testing-library/react'

import Menu from '../components/menu/menu';

describe('Menu', () => {

    it('should render', async () => {
        expect(render(<Menu />)).toBeTruthy()
    })
    it('should be in document', async () => {
        render(<Menu />)
        expect(screen.getByTestId('menuBody')).toBeInTheDocument()
    })
    it('should be visible', async () => {
        render(<Menu />)
        expect(screen.getByTestId('menuBody')).toBeVisible()
    })
    it('should have Home link', async () => {
        render(<Menu />)
        expect(screen.getByTestId('menuLinkHome')).toBeInTheDocument()
    })
    it('should Home link be visible', async () => {
        render(<Menu />)
        expect(screen.getByTestId('menuLinkHome')).toBeVisible()
    })
    it('should have Projects link', async () => {
        render(<Menu />)
        expect(screen.getByTestId('menuLinkProjects')).toBeInTheDocument()
    })
    it('should Projects link be visible', async () => {
        render(<Menu />)
        expect(screen.getByTestId('menuLinkProjects')).toBeVisible()
    })
    it('should have About Me link', async () => {
        render(<Menu />)
        expect(screen.getByTestId('menuLinkAboutMe')).toBeInTheDocument()
    })
    it('should About Me link be visible', async () => {
        render(<Menu />)
        expect(screen.getByTestId('menuLinkAboutMe')).toBeVisible()
    })
    it('should have Contact link', async () => {
        render(<Menu />)
        expect(screen.getByTestId('menuLinkContact')).toBeInTheDocument()
    })
    it('should Contact link be visible', async () => {
        render(<Menu />)
        expect(screen.getByTestId('menuLinkContact')).toBeVisible()
    })

});