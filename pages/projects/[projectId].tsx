import { useRouter } from 'next/router';
import { getProject, getAllProjects } from '../../data/projects';
import DetailProject from '../../components/projects/detail/projectDetail';
import Container from '../../components/shared/container';
import ErrorView from '../../components/error/errorView';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring'
import { IProject } from '../../models/IProject';

interface IProjectDetailPageProps {
    project?: IProject,
    error?: string
}

function ProjectDetailPage({ project, error }: IProjectDetailPageProps) {

    // const router = useRouter()
   

    // const projectId = (router.query.projectId);

    // if (projectId == undefined) {
    //     return (
    //         <ErrorView description={'project no found'} />
    //     )
    // }

    // if (Array.isArray(projectId)) {
    //     return (
    //         <ErrorView description={'Invalid data'} />
    //     )
    // }

    // const numberProject = +projectId

    // const project = getProject(numberProject)

    if (error) {
        return (
            <ErrorView description={`${error}`} />
        )
    }



    if (project == undefined || project.title == undefined || project.description == undefined || project.technology == undefined) {
        return (
            <ErrorView description={'No found project'} />
        )
    }

    return (
        <Container
            title={'Project detail'}
            switchHorizontalView={false}
        >
            <DetailProject project={project} />
        </Container>
    );
}

export default ProjectDetailPage;


interface IStaticPath extends ParsedUrlQuery {
    projectId: string
}

export const getStaticPaths: GetStaticPaths<IStaticPath> = async () => {

    const paths: Array<{ params: IStaticPath }> = [];


    getAllProjects().map((pro, index) => {
        paths.push({ params: { projectId: `${index}` } })
    })


    return {
        paths: paths,
        fallback: false
    }
}


export const getStaticProps: GetStaticProps<IProjectDetailPageProps, IStaticPath> = async ({ params }) => {

    const param = params?.projectId;
    if (!param) {
        return {
            props: {
                error: "page no found"
            }
        }
    }
    const project = getProject(+param)
    return {
        props: { project }
    }
}