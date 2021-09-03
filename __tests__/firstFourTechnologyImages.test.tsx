import React from 'react';
import { render, screen } from '@testing-library/react'
import FirstFourTechnologyImage from '../components/firstFourTechnology/firstFourTechnologyImage';
import { ETechnology } from '../models/ETechnology';

describe('First Four Technology Images', () => {
    describe('with four technology data', () => {
        const technologyMock: ETechnology[] = [
            ETechnology.REACT,
            ETechnology.ANGULAR,
            ETechnology.CYPRESSIO,
            ETechnology.FIGMA
        ]

        it('should rendre'
            , async () => {
                expect(render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />
                )).toBeTruthy()
            }
        );
        it('should be in html document'
            , async () => {
                const { getByTestId } = render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />)
                const result = getByTestId('firstFourTechnology')
                expect(result).toBeInTheDocument()
            }
        );
        it('should be visible'
            , async () => {
                const { getByTestId } = render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />)
                const result = getByTestId('firstFourTechnology')
                expect(result).toBeVisible()
            }
        );
        it('should render maximum four divs body'
            , async () => {
                const { getAllByTestId } = render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />)
                const result = getAllByTestId('firstFourTechnologyBody')

                result.map(res => {
                    expect(res).toBeTruthy()
                    expect(res).toBeInTheDocument()
                    expect(res).toBeVisible()
                })
                expect(result.length).toBe(4)
                expect(result.length).toBeLessThan(5)
                expect(result.length).not.toBeGreaterThan(5)
            }
        );
        it('should render maximum four images'
            , async () => {
                const { getAllByTestId } = render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />)
                const result = getAllByTestId('firstFourTechnologyImage')
                expect(result.length).toBe(4)
                expect(result.length).toBeLessThan(5)
                expect(result.length).not.toBeGreaterThan(5)

                result.map((res, index) => {
                    expect(res).toBeTruthy()
                    expect(res).toBeInTheDocument()
                    expect(res).toBeVisible()
                    expect(res).toHaveAttribute('alt', `technology image ${technologyMock[index]}`)
                })
            }
        );
    })
    describe('with three technology data', () => {
        const technologyMock: ETechnology[] = [
            ETechnology.REACT,
            ETechnology.ANGULAR,
            ETechnology.CYPRESSIO,
        ]

        it('should rendre'
            , async () => {
                expect(render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />
                )).toBeTruthy()
            }
        );
        it('should be in html document'
            , async () => {
                const { getByTestId } = render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />)
                const result = getByTestId('firstFourTechnology')
                expect(result).toBeInTheDocument()
            }
        );
        it('should be visible'
            , async () => {
                const { getByTestId } = render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />)
                const result = getByTestId('firstFourTechnology')
                expect(result).toBeVisible()
            }
        );
        it('should render maximum three divs body'
            , async () => {
                const { getAllByTestId } = render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />)
                const result = getAllByTestId('firstFourTechnologyBody')

                result.map(res => {
                    expect(res).toBeTruthy()
                    expect(res).toBeInTheDocument()
                    expect(res).toBeVisible()
                })
                expect(result.length).toBe(3)
                expect(result.length).toBeLessThan(5)

            }
        );
        it('should render maximum three images'
            , async () => {
                const { getAllByTestId } = render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />)
                const result = getAllByTestId('firstFourTechnologyImage')
                expect(result.length).toBe(3)
                expect(result.length).toBeLessThan(5)


                result.map((res, index) => {
                    expect(res).toBeTruthy()
                    expect(res).toBeInTheDocument()
                    expect(res).toBeVisible()
                    expect(res).toHaveAttribute('alt', `technology image ${technologyMock[index]}`)
                })
            }
        );
    })
    describe('with two technology data', () => {
        const technologyMock: ETechnology[] = [
            ETechnology.REACT,
            ETechnology.ANGULAR,
        ]

        it('should rendre'
            , async () => {
                expect(render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />
                )).toBeTruthy()
            }
        );
        it('should be in html document'
            , async () => {
                const { getByTestId } = render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />)
                const result = getByTestId('firstFourTechnology')
                expect(result).toBeInTheDocument()
            }
        );
        it('should be visible'
            , async () => {
                const { getByTestId } = render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />)
                const result = getByTestId('firstFourTechnology')
                expect(result).toBeVisible()
            }
        );
        it('should render maximum two divs body'
            , async () => {
                const { getAllByTestId } = render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />)
                const result = getAllByTestId('firstFourTechnologyBody')

                result.map(res => {
                    expect(res).toBeTruthy()
                    expect(res).toBeInTheDocument()
                    expect(res).toBeVisible()
                })
                expect(result.length).toBe(2)
                expect(result.length).toBeLessThan(5)

            }
        );
        it('should render maximum two images'
            , async () => {
                const { getAllByTestId } = render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />)
                const result = getAllByTestId('firstFourTechnologyImage')
                expect(result.length).toBe(2)
                expect(result.length).toBeLessThan(5)


                result.map((res, index) => {
                    expect(res).toBeTruthy()
                    expect(res).toBeInTheDocument()
                    expect(res).toBeVisible()
                    expect(res).toHaveAttribute('alt', `technology image ${technologyMock[index]}`)
                })
            }
        );
    })
    describe('with one technology data', () => {
        const technologyMock: ETechnology[] = [
            ETechnology.REACT,
        ]

        it('should rendre'
            , async () => {
                expect(render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />
                )).toBeTruthy()
            }
        );
        it('should be in html document'
            , async () => {
                const { getByTestId } = render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />)
                const result = getByTestId('firstFourTechnology')
                expect(result).toBeInTheDocument()
            }
        );
        it('should be visible'
            , async () => {
                const { getByTestId } = render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />)
                const result = getByTestId('firstFourTechnology')
                expect(result).toBeVisible()
            }
        );
        it('should render maximum one div body'
            , async () => {
                const { getAllByTestId } = render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />)
                const result = getAllByTestId('firstFourTechnologyBody')

                result.map(res => {
                    expect(res).toBeTruthy()
                    expect(res).toBeInTheDocument()
                    expect(res).toBeVisible()
                })
                expect(result.length).toBe(1)
                expect(result.length).toBeLessThan(5)

            }
        );
        it('should render maximum one image'
            , async () => {
                const { getAllByTestId } = render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />)
                const result = getAllByTestId('firstFourTechnologyImage')
                expect(result.length).toBe(1)
                expect(result.length).toBeLessThan(5)

                result.map((res, index) => {
                    expect(res).toBeTruthy()
                    expect(res).toBeInTheDocument()
                    expect(res).toBeVisible()
                    expect(res).toHaveAttribute('alt', `technology image ${technologyMock[index]}`)
                })
            }
        );
    })
    describe('with zero technology data', () => {
        const technologyMock: ETechnology[] = []

        it('should rendre'
            , async () => {
                expect(render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />
                )).toBeTruthy()
            }
        );
        it('should be in html document'
            , async () => {
                const { getByTestId } = render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />)
                const result = getByTestId('firstFourTechnology')
                expect(result).toBeInTheDocument()
            }
        );
        it('should be visible'
            , async () => {
                const { getByTestId } = render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />)
                const result = getByTestId('firstFourTechnology')
                expect(result).toBeVisible()
            }
        );
        it('should not render div body'
            , async () => {
                const { queryAllByTestId } = render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />)
                const result = queryAllByTestId('firstFourTechnologyBody')

                result.map(res => {
                    //should never run
                    expect(false).toBe(true)
                })
                expect(result).toHaveLength(0)

            }
        );
        it('should not render images'
            , async () => {
                render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />)
                const result = screen.queryAllByTestId('firstFourTechnologyImage')
                result.map(res => {
                    //should never run
                    expect(true).toBe(false)
                })
                expect(result).toHaveLength(0)
            }
        );
    })
    describe('with ten technology data', () => {
        const technologyMock: ETechnology[] = [
            ETechnology.ADOBEXD,
            ETechnology.ANGULAR,
            ETechnology.CLEANCODE,
            ETechnology.ENZYME,
            ETechnology.EXPRESS,
            ETechnology.FIGMA,
            ETechnology.FIREBASE,
            ETechnology.FIREBASEAUTH,
            ETechnology.FORMIK,
            ETechnology.HEROKU,
        ]

        it('should rendre'
            , async () => {
                expect(render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />
                )).toBeTruthy()
            }
        );
        it('should be in html document'
            , async () => {
                const { getByTestId } = render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />)
                const result = getByTestId('firstFourTechnology')
                expect(result).toBeInTheDocument()
            }
        );
        it('should be visible'
            , async () => {
                const { getByTestId } = render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />)
                const result = getByTestId('firstFourTechnology')
                expect(result).toBeVisible()
            }
        );
        it('should render maximum four divs body'
            , async () => {
                const { getAllByTestId } = render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />)
                const result = getAllByTestId('firstFourTechnologyBody')

                result.map(res => {
                    expect(res).toBeTruthy()
                    expect(res).toBeInTheDocument()
                    expect(res).toBeVisible()
                })
                expect(result.length).toBe(4)
                expect(result.length).toBeLessThan(5)
                expect(result.length).toBeGreaterThan(3)
            }
        );
        it('should render maximum four images'
            , async () => {
                const { getAllByTestId } = render(<FirstFourTechnologyImage
                    technology={technologyMock}
                />)
                const result = getAllByTestId('firstFourTechnologyImage')
                expect(result.length).toBe(4)
                expect(result.length).toBeLessThan(5)
                expect(result.length).toBeGreaterThan(3)

                result.map((res, index) => {
                    expect(res).toBeTruthy()
                    expect(res).toBeInTheDocument()
                    expect(res).toBeVisible()
                    expect(res).toHaveAttribute('alt', `technology image ${technologyMock[index]}`)
                })
            }
        );
    })

});