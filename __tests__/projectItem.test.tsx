import React from 'react';
import { render, screen } from '@testing-library/react'

import { ETechnology } from '../models/ETechnology';
import { IProject } from '../models/IProject';
import ProjectItem from '../components/projects/item/projectItem';


beforeEach(() => {
    jest.clearAllMocks()
})

describe('projectItem', () => {
    describe('with image project', () => {

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
            image: 'Events.jpg'
        }

        it(`should render`, () => {
            expect(render(<ProjectItem
                project={projectMock}
                index={0}
            />)).toBeTruthy()
        })
        it(`should be in document`, () => {
            render(<ProjectItem
                project={projectMock}
                index={0}
            />)

            const result = screen.getByTestId('ProjectItemContainer')
            expect(result).toBeInTheDocument()
        })
        it(`should be visible`, () => {
            render(<ProjectItem
                project={projectMock}
                index={0}
            />)

            const result = screen.getByTestId('ProjectItemContainer')
            expect(result).toBeVisible()
        })
        it(`should have body`, () => {
            render(<ProjectItem
                project={projectMock}
                index={0}
            />)

            const result = screen.getByTestId('ProjectItemBody')
            expect(result).toBeInTheDocument()
        })
        it(`body should be visible`, () => {
            render(<ProjectItem
                project={projectMock}
                index={0}
            />)

            const result = screen.getByTestId('ProjectItemBody')
            expect(result).toBeVisible()
        })
        it(`should have image of project`, () => {
            render(<ProjectItem
                project={projectMock}
                index={0}
            />)

            const result = screen.getByTestId('ProjectItemImage')
            expect(result).toBeInTheDocument()
        })
        it(`image of project should be visible `, () => {
            render(<ProjectItem
                project={projectMock}
                index={0}
            />)

            const result = screen.getByTestId('ProjectItemImage')
            expect(result).toBeVisible()
        })

        it(`should have title`, () => {
            render(<ProjectItem
                project={projectMock}
                index={0}
            />)

            const result = screen.getByTestId('ProjectItemTitle')
            expect(result).toBeInTheDocument()
        })
        it(`title should have be visible`, () => {
            render(<ProjectItem
                project={projectMock}
                index={0}
            />)

            const result = screen.getByTestId('ProjectItemTitle')
            expect(result).toBeVisible()
        })
        it(`should have first four technology body`, () => {
            render(<ProjectItem
                project={projectMock}
                index={0}
            />)

            const result = screen.getByTestId('ProjectItemTechnologyImagesBody')
            expect(result).toBeInTheDocument()
        })
        it(`first four technology body should be visible`, () => {
            render(<ProjectItem
                project={projectMock}
                index={0}
            />)

            const result = screen.getByTestId('ProjectItemTechnologyImagesBody')
            expect(result).toBeVisible()
        })
        it(`should have link more`, () => {
            render(<ProjectItem
                project={projectMock}
                index={0}
            />)

            const result = screen.getByTestId('ProjectItemTechnologyImagesBody')
            expect(result).toBeInTheDocument()
        })
        it(`link more should be visible`, () => {
            render(<ProjectItem
                project={projectMock}
                index={0}
            />)
            const result = screen.getByTestId('ProjectItemTechnologyImagesBody')
            expect(result).toBeVisible()
        })
        it(`should have don't have no image of project`, () => {
            render(<ProjectItem
                project={projectMock}
                index={0}
            />)

            const result = screen.queryByTestId('ProjectItemNoImage')
            expect(result).not.toBeInTheDocument()
        })
        it(`no image of project should not be visible `, () => {
            render(<ProjectItem
                project={projectMock}
                index={0}
            />)

            const result = screen.queryByTestId('ProjectItemNoImage')
            expect(result).toBeFalsy()
        })


    })
    describe('without image project ', () => {

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
            expect(render(<ProjectItem
                project={projectMock}
                index={0}
            />)).toBeTruthy()
        })
        it(`should be in document`, () => {
            render(<ProjectItem
                project={projectMock}
                index={0}
            />)

            const result = screen.getByTestId('ProjectItemContainer')
            expect(result).toBeInTheDocument()
        })
        it(`should be visible`, () => {
            render(<ProjectItem
                project={projectMock}
                index={0}
            />)

            const result = screen.getByTestId('ProjectItemContainer')
            expect(result).toBeVisible()
        })
        it(`should have body`, () => {
            render(<ProjectItem
                project={projectMock}
                index={0}
            />)

            const result = screen.getByTestId('ProjectItemBody')
            expect(result).toBeInTheDocument()
        })
        it(`body should be visible`, () => {
            render(<ProjectItem
                project={projectMock}
                index={0}
            />)

            const result = screen.getByTestId('ProjectItemBody')
            expect(result).toBeVisible()
        })
        it(`should have image of project`, () => {
            render(<ProjectItem
                project={projectMock}
                index={0}
            />)

            const result = screen.queryByTestId('ProjectItemImage')
            expect(result).not.toBeInTheDocument()
        })
        it(`image of project should be visible `, () => {
            render(<ProjectItem
                project={projectMock}
                index={0}
            />)

            const result = screen.queryByTestId('ProjectItemImage')
            expect(result).toBeFalsy()
        })

        it(`should have title`, () => {
            render(<ProjectItem
                project={projectMock}
                index={0}
            />)

            const result = screen.getByTestId('ProjectItemTitle')
            expect(result).toBeInTheDocument()
        })
        it(`title should have be visible`, () => {
            render(<ProjectItem
                project={projectMock}
                index={0}
            />)

            const result = screen.getByTestId('ProjectItemTitle')
            expect(result).toBeVisible()
        })
        it(`should have first four technology body`, () => {
            render(<ProjectItem
                project={projectMock}
                index={0}
            />)

            const result = screen.getByTestId('ProjectItemTechnologyImagesBody')
            expect(result).toBeInTheDocument()
        })
        it(`first four technology body should be visible`, () => {
            render(<ProjectItem
                project={projectMock}
                index={0}
            />)

            const result = screen.getByTestId('ProjectItemTechnologyImagesBody')
            expect(result).toBeVisible()
        })
        it(`should have link more`, () => {
            render(<ProjectItem
                project={projectMock}
                index={0}
            />)

            const result = screen.getByTestId('ProjectItemTechnologyImagesBody')
            expect(result).toBeInTheDocument()
        })
        it(`link more should be visible`, () => {
            render(<ProjectItem
                project={projectMock}
                index={0}
            />)
            const result = screen.getByTestId('ProjectItemTechnologyImagesBody')
            expect(result).toBeVisible()
        })
        it(`should have have no image of project`, () => {
            render(<ProjectItem
                project={projectMock}
                index={0}
            />)

            const result = screen.queryByTestId('ProjectItemNoImage')
            expect(result).toBeInTheDocument()
        })
        it(`no image of project should be visible `, () => {
            render(<ProjectItem
                project={projectMock}
                index={0}
            />)

            const result = screen.queryByTestId('ProjectItemNoImage')
            expect(result).toBeVisible()
        })


    })
});