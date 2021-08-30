import ProjectItem from "../item/projectItem";
import { Fragment } from 'react';
import { IProject } from '../../../models/IProject';

interface IProjectslistProps {
    projects: Array<IProject>
}
function Projectslist({ projects }: IProjectslistProps) {

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
export default Projectslist;