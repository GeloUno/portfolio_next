import React from 'react';
import { render, screen } from '@testing-library/react'

import DetailProject from '../components/projects/detail/projectDetail';

import { ETechnology } from '../models/ETechnology';
import { IProject } from '../models/IProject';


beforeEach(() => {
    jest.clearAllMocks()
})

describe('projectDetail', () => {
    describe('without image and web', () => {

        const projectMock: IProject = {
            title: "Some Title Project",
            description: "Example description project",
            github: "www.github.com/example",
            technology: [
                ETechnology.ADOBEXD,
                ETechnology.ANGULAR,
                ETechnology.CYPRESSIO,
                ETechnology.ENZYME
            ],

        }

        it(`should render`, () => {
            expect(render(<DetailProject
                project={projectMock}
            />)).toBeTruthy()
        })
        it(`should be in document`, () => {
            render(<DetailProject
                project={projectMock}
            />)
            expect(screen.getByTestId('DetailProjectContainer')).toBeTruthy()
        })
        it(`should be visible`, () => {
            render(<DetailProject
                project={projectMock}
            />)
            expect(screen.getByTestId('DetailProjectContainer')).toBeVisible()
        })
        it(`should not have image project visible`, () => {
            render(<DetailProject
                project={projectMock}
            />)
            expect(screen.queryByTestId('DetailProjectImage')).not.toBeInTheDocument()
        })
        it(`should have title project`, () => {
            render(<DetailProject
                project={projectMock}
            />)
            expect(screen.queryByTestId('DetailProjectTitle')).toBeInTheDocument()
            expect(screen.queryByTestId('DetailProjectTitle')).toBeVisible()
        })
        it(`title project should have content `, () => {
            render(<DetailProject
                project={projectMock}
            />)
            expect(screen.queryByTestId('DetailProjectTitle')).toHaveTextContent(projectMock.title)
        })
        it(`should have description project`, () => {
            render(<DetailProject
                project={projectMock}
            />)
            expect(screen.queryByTestId('DetailProjectDescription')).toBeInTheDocument()
            expect(screen.queryByTestId('DetailProjectDescription')).toBeVisible()
        })
        it(`description project should have content `, () => {
            render(<DetailProject
                project={projectMock}
            />)
            expect(screen.queryByTestId('DetailProjectDescription')).toHaveTextContent(projectMock.description.toString())
        })
        it(`should have technologys project body`, () => {
            render(<DetailProject
                project={projectMock}
            />)
            expect(screen.queryByTestId('DetailProjectTechnologys')).toBeInTheDocument()
            expect(screen.queryByTestId('DetailProjectTechnologys')).toBeVisible()
        })
        it(`technologys project body should have four technology body `, () => {
            render(<DetailProject
                project={projectMock}
            />)

            const result = screen.getAllByTestId('DetailProjectTechnologyBody')
            expect(result).toHaveLength(4)

            result.forEach(res => {
                expect(res).toBeInTheDocument()
                expect(res).toBeVisible()
            })

        })
        it(`technologys project body should have four description`, () => {
            render(<DetailProject
                project={projectMock}
            />)

            const result = screen.getAllByTestId('DetailProjectImageDescription')
            expect(result).toHaveLength(4)

            result.forEach((res, index) => {
                expect(res).toBeInTheDocument()
                expect(res).toBeVisible()
                expect(res).toHaveTextContent(projectMock.technology[index])
            })
        })
        it(`should have links body github and web`, () => {
            render(<DetailProject
                project={projectMock}
            />)
            const result = screen.getByTestId('DetailProjectLinks')
            expect(result).toBeInTheDocument()
            expect(result).toBeVisible()
        })
        it(`should have link to github`, () => {
            render(<DetailProject
                project={projectMock}
            />)
            const result = screen.queryByTestId('DetailProjectLinkGitHub')
            expect(result).toBeInTheDocument()
            expect(result).toBeVisible()
        })
        it(`should don't have link to web`, () => {
            render(<DetailProject
                project={projectMock}
            />)
            const result = screen.queryByTestId('DetailProjectLinkWeb')
            expect(result).not.toBeInTheDocument()
            expect(result).toBeFalsy()
        })
    })

    describe('with image and web', () => {

        const projectMock: IProject = {
            title: "Some Title Project",
            description: "Example description project",
            github: "www.github.com/example",
            technology: [
                ETechnology.ADOBEXD,
                ETechnology.ANGULAR,
                ETechnology.CYPRESSIO,
                ETechnology.ENZYME
            ],
            image: 'Events.jpg',
            web: "example.com.pl"

        }

        it(`should render`, () => {
            expect(render(<DetailProject
                project={projectMock}
            />)).toBeTruthy()
        })
        it(`should be in document`, () => {
            render(<DetailProject
                project={projectMock}
            />)
            expect(screen.getByTestId('DetailProjectContainer')).toBeTruthy()
        })
        it(`should be visible`, () => {
            render(<DetailProject
                project={projectMock}
            />)
            expect(screen.getByTestId('DetailProjectContainer')).toBeVisible()
        })
        it(`should  have image project visible`, () => {
            render(<DetailProject
                project={projectMock}
            />)
            expect(screen.queryByTestId('DetailProjectImage')).toBeInTheDocument()
        })
        it(`should have title project`, () => {
            render(<DetailProject
                project={projectMock}
            />)
            expect(screen.queryByTestId('DetailProjectTitle')).toBeInTheDocument()
            expect(screen.queryByTestId('DetailProjectTitle')).toBeVisible()
        })
        it(`title project should have content `, () => {
            render(<DetailProject
                project={projectMock}
            />)
            expect(screen.queryByTestId('DetailProjectTitle')).toHaveTextContent(projectMock.title)
        })
        it(`should have description project`, () => {
            render(<DetailProject
                project={projectMock}
            />)
            expect(screen.queryByTestId('DetailProjectDescription')).toBeInTheDocument()
            expect(screen.queryByTestId('DetailProjectDescription')).toBeVisible()
        })
        it(`description project should have content `, () => {
            render(<DetailProject
                project={projectMock}
            />)
            expect(screen.queryByTestId('DetailProjectDescription')).toHaveTextContent(projectMock.description.toString())
        })
        it(`should have technologys project body`, () => {
            render(<DetailProject
                project={projectMock}
            />)
            expect(screen.queryByTestId('DetailProjectTechnologys')).toBeInTheDocument()
            expect(screen.queryByTestId('DetailProjectTechnologys')).toBeVisible()
        })
        it(`technologys project body should have four technology body `, () => {
            render(<DetailProject
                project={projectMock}
            />)

            const result = screen.getAllByTestId('DetailProjectTechnologyBody')
            expect(result).toHaveLength(4)

            result.forEach(res => {
                expect(res).toBeInTheDocument()
                expect(res).toBeVisible()
            })

        })
        it(`technologys project body should have four description`, () => {
            render(<DetailProject
                project={projectMock}
            />)

            const result = screen.getAllByTestId('DetailProjectImageDescription')
            expect(result).toHaveLength(4)

            result.forEach((res, index) => {
                expect(res).toBeInTheDocument()
                expect(res).toBeVisible()
                expect(res).toHaveTextContent(projectMock.technology[index])
            })
        })
        it(`should have links body github and web`, () => {
            render(<DetailProject
                project={projectMock}
            />)
            const result = screen.getByTestId('DetailProjectLinks')
            expect(result).toBeInTheDocument()
            expect(result).toBeVisible()
        })
        it(`should have link to github`, () => {
            render(<DetailProject
                project={projectMock}
            />)
            const result = screen.queryByTestId('DetailProjectLinkGitHub')
            expect(result).toBeInTheDocument()
            expect(result).toBeVisible()
        })
        it(`should have link to web`, () => {
            render(<DetailProject
                project={projectMock}
            />)
            const result = screen.queryByTestId('DetailProjectLinkWeb')
            expect(result).toBeInTheDocument()
            expect(result).toBeVisible()
        })
    })
    describe('with one technology ', () => {

        const projectMock: IProject = {
            title: "Some Title Project",
            description: "Example description project",
            github: "www.github.com/example",
            technology: [
                ETechnology.ADOBEXD,
                // ETechnology.ANGULAR,
                // ETechnology.CYPRESSIO,
                // ETechnology.ENZYME
            ],

        }

        it(`should render`, () => {
            expect(render(<DetailProject
                project={projectMock}
            />)).toBeTruthy()
        })
        it(`should be in document`, () => {
            render(<DetailProject
                project={projectMock}
            />)
            expect(screen.getByTestId('DetailProjectContainer')).toBeTruthy()
        })
        it(`should be visible`, () => {
            render(<DetailProject
                project={projectMock}
            />)
            expect(screen.getByTestId('DetailProjectContainer')).toBeVisible()
        })

        it(`technologys project body should have four description`, () => {
            render(<DetailProject
                project={projectMock}
            />)

            const result = screen.getAllByTestId('DetailProjectImageDescription')
            expect(result).toHaveLength(1)

            result.forEach((res, index) => {
                expect(res).toBeInTheDocument()
                expect(res).toBeVisible()
                expect(res).toHaveTextContent(projectMock.technology[index])
            })
        })
    })
    describe('with two technology ', () => {

        const projectMock: IProject = {
            title: "Some Title Project",
            description: "Example description project",
            github: "www.github.com/example",
            technology: [
                ETechnology.ADOBEXD,
                ETechnology.ANGULAR,
                // ETechnology.CYPRESSIO,
                // ETechnology.ENZYME
            ],

        }

        it(`should render`, () => {
            expect(render(<DetailProject
                project={projectMock}
            />)).toBeTruthy()
        })
        it(`should be in document`, () => {
            render(<DetailProject
                project={projectMock}
            />)
            expect(screen.getByTestId('DetailProjectContainer')).toBeTruthy()
        })
        it(`should be visible`, () => {
            render(<DetailProject
                project={projectMock}
            />)
            expect(screen.getByTestId('DetailProjectContainer')).toBeVisible()
        })

        it(`technologys project body should have four description`, () => {
            render(<DetailProject
                project={projectMock}
            />)

            const result = screen.getAllByTestId('DetailProjectImageDescription')
            expect(result).toHaveLength(2)

            result.forEach((res, index) => {
                expect(res).toBeInTheDocument()
                expect(res).toBeVisible()
                expect(res).toHaveTextContent(projectMock.technology[index])
            })
        })
    })
    describe('with three technology ', () => {

        const projectMock: IProject = {
            title: "Some Title Project",
            description: "Example description project",
            github: "www.github.com/example",
            technology: [
                ETechnology.ADOBEXD,
                ETechnology.ANGULAR,
                ETechnology.CYPRESSIO,
                // ETechnology.ENZYME
            ],

        }

        it(`should render`, () => {
            expect(render(<DetailProject
                project={projectMock}
            />)).toBeTruthy()
        })
        it(`should be in document`, () => {
            render(<DetailProject
                project={projectMock}
            />)
            expect(screen.getByTestId('DetailProjectContainer')).toBeTruthy()
        })
        it(`should be visible`, () => {
            render(<DetailProject
                project={projectMock}
            />)
            expect(screen.getByTestId('DetailProjectContainer')).toBeVisible()
        })

        it(`technologys project body should have four description`, () => {
            render(<DetailProject
                project={projectMock}
            />)

            const result = screen.getAllByTestId('DetailProjectImageDescription')
            expect(result).toHaveLength(3)

            result.forEach((res, index) => {
                expect(res).toBeInTheDocument()
                expect(res).toBeVisible()
                expect(res).toHaveTextContent(projectMock.technology[index])
            })
        })
    })
    describe('with five technology ', () => {

        const projectMock: IProject = {
            title: "Some Title Project",
            description: "Example description project",
            github: "www.github.com/example",
            technology: [
                ETechnology.ADOBEXD,
                ETechnology.ANGULAR,
                ETechnology.CYPRESSIO,
                ETechnology.ENZYME,
                ETechnology.EXPRESS,
            ],

        }

        it(`should render`, () => {
            expect(render(<DetailProject
                project={projectMock}
            />)).toBeTruthy()
        })
        it(`should be in document`, () => {
            render(<DetailProject
                project={projectMock}
            />)
            expect(screen.getByTestId('DetailProjectContainer')).toBeTruthy()
        })
        it(`should be visible`, () => {
            render(<DetailProject
                project={projectMock}
            />)
            expect(screen.getByTestId('DetailProjectContainer')).toBeVisible()
        })

        it(`technologys project body should have four description`, () => {
            render(<DetailProject
                project={projectMock}
            />)

            const result = screen.getAllByTestId('DetailProjectImageDescription')
            expect(result).toHaveLength(5)

            result.forEach((res, index) => {
                expect(res).toBeInTheDocument()
                expect(res).toBeVisible()
                expect(res).toHaveTextContent(projectMock.technology[index])
            })
        })
    })
    describe('with six technology ', () => {

        const projectMock: IProject = {
            title: "Some Title Project",
            description: "Example description project",
            github: "www.github.com/example",
            technology: [
                ETechnology.ADOBEXD,
                ETechnology.ANGULAR,
                ETechnology.CYPRESSIO,
                ETechnology.ENZYME,
                ETechnology.EXPRESS,
                ETechnology.FIGMA
            ],

        }

        it(`should render`, () => {
            expect(render(<DetailProject
                project={projectMock}
            />)).toBeTruthy()
        })
        it(`should be in document`, () => {
            render(<DetailProject
                project={projectMock}
            />)
            expect(screen.getByTestId('DetailProjectContainer')).toBeTruthy()
        })
        it(`should be visible`, () => {
            render(<DetailProject
                project={projectMock}
            />)
            expect(screen.getByTestId('DetailProjectContainer')).toBeVisible()
        })

        it(`technologys project body should have four description`, () => {
            render(<DetailProject
                project={projectMock}
            />)

            const result = screen.getAllByTestId('DetailProjectImageDescription')
            expect(result).toHaveLength(6)

            result.forEach((res, index) => {
                expect(res).toBeInTheDocument()
                expect(res).toBeVisible()
                expect(res).toHaveTextContent(projectMock.technology[index])
            })
        })
    })
});