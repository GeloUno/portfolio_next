import { IProject } from '../../../models/IProject';
import Image from 'next/image';
import Link from 'next/link';

interface IDetailProjectProps {
    project: IProject
}
function DetailProject({ project: {
    title,
    description,
    technology,
    github,
    image,
    web
} }: IDetailProjectProps) {
    return (
        <div className='flex 
        flex-col        
        text-cyan-600 
        bg-cyan-100 
        my-5  
        mt-12
        rounded-lg        
        w-full
        h-full
        max-w-2xl
        items-center  
       
        '>
            {image &&
                <div className='flex w-28 h-28 relative -top-14 mt-4'>
                    <Image
                        src={`/images/projects/${image}`}
                        width={112}
                        height={112}
                        // placeholder={'blur'}
                        // blurDataURL={`/images/projects/${image}`}
                        className='rounded-lg object-cover'
                        alt={`Project image ${image}`}
                    />
                </div>
            }
            <div className='uppercase font-bold mb-4 -m-4'>
                {title}
            </div>
            <div className=' px-6'>
                {Array.isArray(description) ? (description.map((des) => (<h3 key={des} className={`pb-2`}>{des}</h3>))) : (<h3>{description}</h3>)}
            </div>
            <div className=' flex flex-wrap m-5 justify-around'>
                {technology.map(tech => {
                    return (
                        <div key={tech} className='flex flex-col w-20 h-20 p-2 m-2 items-center'>
                            <div className='flex text-center w-8 h-8'>

                                <Image
                                    src={`/images/technology/${tech}.svg`}
                                    height={32}
                                    width={32}
                                    alt={`Technology image ${tech}`}
                                />
                            </div>
                            <h3>
                                {tech}
                            </h3>
                        </div>

                    )
                })}
            </div>
            <div className='flex flex-row bg-cyan-600 text-cyan-100  h-16 w-full rounded-b-lg justify-around items-center  '>
                {github &&
                    <Link href={``}>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={`${github}`}
                        >
                            <div className='h-10 w-10 cursor-pointer'>
                                <Image src='/icons/github.svg'
                                    height={100}
                                    width={100}
                                    alt={`github icon link`}
                                />
                            </div>
                        </a>
                    </Link>
                }
                {web &&
                    <Link href={``}>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={`${web}`}
                        >
                            <div className='h-10 w-10 cursor-pointer'>
                                <Image src='/icons/web.svg'
                                    height={100}
                                    width={100}
                                    alt={`web icon link`}
                                />
                            </div>
                        </a>
                    </Link>
                }
            </div>
        </div>
    );
}

export default DetailProject;