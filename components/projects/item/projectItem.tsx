import { IProject } from '../../../models/IProject';
import FirstFourTechnologyImage from '../../firstFourTechnology/firstFourTechnologyImage';
import Image from 'next/image';
import Link from 'next/link';


interface IProjectItemProps {
    project: IProject,
    index: number
}

function ProjectItem(
    { project: {
        title,
        description,
        image,
        technology,
        github,
        web

    }, index }: IProjectItemProps) {
    return (
        <div
            data-testid="ProjectItemComponent"
            className='
        flex 
        flex-row        
        bg-cyan-700 
        even:bg-cyan-100  
        even:text-cyan-700 
        my-5  
        rounded-lg 
        uppercase  
        w-full
        max-w-2xl
        font-medium        
        '>
            <div
                data-testid="ProjectItemBody"
                className='h-32 w-28  rounded-l-lg  '>
                {image && (<Image
                    src={`/images/projects/${image}`}
                    alt={`image of project ${title}`}
                    width={112}
                    height={128}
                    className='rounded-l-lg object-cover'
                    data-testid="ProjectItemImage"
                // placeholder='blur'
                // blurDataURL={`/images/projects/${image}`}
                />)}
                {!image && (<Image
                    src={`/images/projects/noImage.jpg`}
                    alt={`image of project ${title}`}
                    width={112}
                    height={128}
                    className='rounded-l-lg object-cover'
                    data-testid="ProjectItemNoImage"
                // placeholder='blur'
                // blurDataURL={`/images/projects/noImage.jpg`}
                />)}
            </div>
            <div className='h-32 flex flex-col flex-grow p-1 '>
                <div
                    data-testid="ProjectItemTitle"
                    className='flex self-auto justify-center'>
                    {title}
                </div>
                <div
                    data-testid="ProjectItemTechnologyImagesBody"
                    className='flex flex-grow  items-center self-auto'>
                    <FirstFourTechnologyImage technology={technology} />
                </div>
                <div
                    data-testid="ProjectItemLinkMore"
                    className='flex justify-end lowercase pr-6 pb-1'>
                    <Link href={`/projects/${index}`}>
                        Read more...
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;