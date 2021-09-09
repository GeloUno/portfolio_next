import React from 'react';
import { render } from '@testing-library/react'

import { ETechnology } from '../models/ETechnology';
import { IProject } from '../models/IProject';

import Projectslist from '../components/projects/list/projectslist';


beforeEach(() => {
    jest.clearAllMocks()
})

describe('Projectslist', () => {

    const projectMock: Array<IProject> = [{
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
    }]

    it(`should render`, () => {
        expect(render(<Projectslist projects={projectMock} />)).toBeTruthy()
    })
});