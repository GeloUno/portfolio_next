import React from 'react';
import { render } from '@testing-library/react'
import ErrorView from '../components/error/errorView';



describe('Error View', () => {
    const description = "Some error message"
    it('should rendre'
        , async () => {
            expect(render(<ErrorView description={description} />
            )).toBeTruthy()
        }
    );
    it('should be in html document'
        , async () => {
            const { getByTestId } = render(<ErrorView description={description} />)
            const result = getByTestId('bodyError')
            expect(result).toBeInTheDocument()
        }
    );
    it('should be visible'
        , async () => {
            const { getByTestId } = render(<ErrorView description={description} />)
            const result = getByTestId('bodyError')
            expect(result).toBeVisible()
        }
    );
    it('should have description error'
        , async () => {
            const { getByTestId } = render(<ErrorView description={description} />)
            const result = getByTestId('bodyError')
            expect(result).toHaveTextContent(description)
        }
    );
});