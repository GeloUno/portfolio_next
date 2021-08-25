import Typewriter from 'typewriter-effect';
import Button, { ButtonClassEnum } from '../button/button';

function HeaderDescription() {
    return (
        <div className='flex flex-col justify-center text-center min-w-screen min-h-screen max-w-md pt-48 '>

            <div className=' text-white'>

                <div className='flex flex-row justify-center'>

                    <div className='flex justify-center w-32' >
                        <h2 className='text-3xl'>I'm your</h2>
                    </div>
                    <div className='flex justify-center w-32' >
                        <h1 className='text-5xl start'>
                            <Typewriter
                                options={{
                                    strings: ['React', 'Next', 'Node'],
                                    autoStart: true,
                                    loop: true,
                                    cursor: ''
                                }}
                            />
                        </h1>
                    </div>
                </div>

                <div className='flex flex-row justify-center' >

                    <div className='flex justify-center  w-32' >
                        <h2 className='text-3xl'>friendly</h2>
                    </div>
                    <div className='flex justify-center  w-32' >
                        <h3 className='text-2xl text-blue-500 self-end'>Developer</h3>
                    </div>
                </div>
                <hr className=' block m-5 border-t-4 blue-600 ml-0 w-1/2 border-blue-500' />
            </div>
            <div className='flex flex-col'>
                <Button
                    classButton={ButtonClassEnum.PRIMARY}
                    labelButton='Projects'
                    link='/projects'
                    className='w-1/2 self-center my-10'
                />
                <Button
                    classButton={ButtonClassEnum.SECONDARY}
                    labelButton='Contact'
                    link='/contact'
                    className='w-1/2 self-center my-10'
                />
            </div>
        </div>

    );
}

export default HeaderDescription;