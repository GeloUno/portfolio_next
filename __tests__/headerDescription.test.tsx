import React from 'react';
import { render, screen } from '@testing-library/react'
import HeaderDescription from '../components/header/headerDescription';


beforeEach(() => {
    jest.clearAllMocks()
})

describe('headerDescription', () => {
    it('should render', () => {
        expect(render(<HeaderDescription />)).toBeTruthy()
    });
    it('should be in document', () => {
        render(<HeaderDescription />)
        expect(screen.getByTestId('headerContainer')).toBeInTheDocument()
    });
    it('should be visible', async () => {
        render(<HeaderDescription />)
        expect(screen.getByTestId('headerContainer')).toBeVisible()
    });
    it('should have first description', async () => {
        render(<HeaderDescription />)
        expect(screen.getByTestId('firstDecription')).toBeInTheDocument()
        expect(screen.getByTestId('firstDecription')).toBeVisible()
    });
    it('first description should have content', async () => {
        render(<HeaderDescription />)
        expect(screen.getByTestId('firstDecription')).toHaveTextContent(`I'm your`)

    });
    it('should have typewriten elements', async () => {
        render(<HeaderDescription />)
        expect(await screen.findByTestId('typewriter-wrapper')).toBeInTheDocument()
        expect(await screen.findByTestId('typewriter-wrapper')).toBeVisible()
    });
    it('should have second description', async () => {
        render(<HeaderDescription />)
        expect(screen.getByTestId('secondDescription')).toBeInTheDocument()
        expect(screen.getByTestId('secondDescription')).toBeVisible()
    });
    it('second description should have content ', async () => {
        render(<HeaderDescription />)
        expect(screen.getByTestId('secondDescription')).toHaveTextContent('friendly')
    });
    it('should have third description', async () => {
        render(<HeaderDescription />)
        expect(screen.getByTestId('thirdDescription')).toBeInTheDocument()
        expect(screen.getByTestId('thirdDescription')).toBeVisible()
    });
    it('third description should have content ', async () => {
        render(<HeaderDescription />)
        expect(screen.getByTestId('thirdDescription')).toHaveTextContent('Developer')
    });
    it('should have two buttons link', async () => {
        render(<HeaderDescription />)
        const result = screen.getAllByTestId(/buttonLink/i)

        expect(result).toHaveLength(2)
        result.forEach(res => {
            expect(res).toBeInTheDocument()
            expect(res).toBeVisible()
        })
    });

});