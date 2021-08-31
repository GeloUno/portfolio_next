import { GetStaticProps } from 'next';
import Projectslist from '../../components/projects/list/projectslist'
import Container from '../../components/shared/container'
import { getAllProjects } from '../../data/projects';
import { IProject } from '../../models/IProject';

interface IProjectsPageProps {
    projects: Array<IProject>
}

function ProjectsPage({ projects }: IProjectsPageProps) {
    return (
        <Container
            title={'list of projects'}
            switchHorizontalView={false}
        >
            <Projectslist projects={projects} />

        </Container>
    );
}

export default ProjectsPage;

export const getStaticProps: GetStaticProps = async () => {

    const projects = getAllProjects()

    return {
        props: { projects }
    }
}
