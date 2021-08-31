import { Fragment } from 'react';
import Container from './../components/shared/container';

function About() {
    return (
        <div className='flex-col        
        text-cyan-600 
        bg-cyan-100 
        my-5  
        mt-12
        rounded-lg        
        w-full
        h-full
        max-w-2xl
        items-center  '>

            <h3 className='p-7'>
                Since I was a child, I was interested in everything related to computers. Many people come to me and consult me on what solution to choose. But my way of life has gone the other way. A few years ago, I decided it was time to combine my passion with work. The first step was to start a second computer science study.
            </h3>
            <h3 className='p-7'>
                now I am a programmer by education and passion
            </h3>
            <h3 className='p-7'>
                As for TypeScript, I don't like it, I love it!
            </h3>
        </div>
    )
}


function AboutPage() {

    return (

        <Container
            title={'About Me'}
            switchHorizontalView={false}
        >
            <About />
        </Container>

    );
}

export default AboutPage;