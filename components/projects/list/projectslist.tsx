import ProjectItem from "../item/projectItem";
import { Fragment } from 'react';
import { IProject } from '../../../models/IProject';

interface IProjectsListProps {
    projects: Array<IProject>
}
function ProjectsList({ projects }: IProjectsListProps) {

    return (
        <Fragment>
            {projects.map((project, index) => {
                return (
                    <ProjectItem
                        project={project}
                        key={index}
                        index={index} />
                )
            })}
        </Fragment>
    );
}
export default ProjectsList;