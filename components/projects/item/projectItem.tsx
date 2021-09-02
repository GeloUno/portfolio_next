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
        <div className='
        flex 
        flex-row        
        bg-cyan-600 
        even:bg-cyan-100  
        even:text-cyan-600 
        my-5  
        rounded-lg 
        uppercase  
        w-full
        max-w-2xl
                     
        '>
            <div className='h-28 w-28  rounded-l-lg  '>
                {image && (<Image
                    src={`/images/projects/${image}`}
                    alt={`image of project ${title}`}
                    width={250}
                    height={250}
                    className='rounded-l-lg object-cover'
                // placeholder='blur'
                // blurDataURL={`/images/projects/${image}`}
                />)}
                {!image && (<Image
                    src={`/images/projects/noImage.jpg`}
                    alt={`image of project ${title}`}
                    width={250}
                    height={250}
                    className='rounded-l-lg object-cover'
                // placeholder='blur'
                // blurDataURL={`/images/projects/noImage.jpg`}
                />)}
            </div>
            <div className='h-28 flex flex-col flex-grow  '>
                <div className='flex self-auto justify-center'>
                    {title}
                </div>
                <div className='flex flex-grow  items-center self-auto'>
                    <FirstFourTechnologyImage technology={technology} />
                </div>
                <div className='flex justify-end lowercase pr-6 pb-1'>
                    <Link href={`/projects/${index}`}>
                        Read more...
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;