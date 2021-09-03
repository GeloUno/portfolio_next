import React from 'react';
import { render } from '@testing-library/react'
import Container from '../components/shared/container';

describe('Container', () => {
    const title = "some title"
    const childrenMock = (
        <div
            data-testid="childrenMock"
        >
            <h3>
                some children
            </h3>
        </div>)


    it('should rendre'
        , async () => {
            expect(render(<Container
                children={childrenMock}
                title={title}
                switchHorizontalView={false}
            />
            )).toBeTruthy()
        }
    );
    it('should be in html document'
        , async () => {
            const { getByTestId } = render(<Container
                children={childrenMock}
                title={title}
                switchHorizontalView={false}
            />)
            const result = getByTestId('container')
            expect(result).toBeInTheDocument()
        }
    );
    it('should be visible'
        , async () => {
            const { getByTestId } = render(<Container
                children={childrenMock}
                title={title}
                switchHorizontalView={false}
            />)
            const result = getByTestId('container')
            expect(result).toBeVisible()
        }
    );
    it('should have children body in document'
        , async () => {
            const { getByTestId, debug } = render(<Container
                children={childrenMock}
                title={title}
                switchHorizontalView={false}
            />)
            const result = getByTestId('childrenMock')
            expect(result).toBeVisible()
        }
    );
    it(`the child's body should be visible`
        , async () => {
            const { getByTestId, debug } = render(<Container
                children={childrenMock}
                title={title}
                switchHorizontalView={false}
            />)
            const result = getByTestId('childrenMock')
            expect(result).toBeVisible()
        }
    );
});