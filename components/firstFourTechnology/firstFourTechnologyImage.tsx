import Image from 'next/image';
import { ETechnology } from '../../models/ETechnology';

interface IFirstFourTechnologyImageProps {
    technology: Array<ETechnology>
}


function FirstFourTechnologyImage({ technology }: IFirstFourTechnologyImageProps) {
    const firstfourTech = technology.slice(0, 4)

    return (
        <div className='flex flex-row justify-around self-auto w-full'>

            {firstfourTech.map(tech => {
                return (
                    <div className='flex p-1 w-10 h-10 sm:w-16 sm:h-16' key={`logo of ${tech}`}>
                        <Image
                            src={`/images/technology/${tech}.svg`}
                            width={40}
                            height={40}
                            alt={`technology image ${tech}`}
                        />
                    </div>
                )
            })}
        </div>
    );
}


export default FirstFourTechnologyImage;