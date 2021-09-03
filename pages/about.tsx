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
                I have been interested in everything related to computers since I was a child. Many people came to me and asked me for help in choosing the best solution. But my life went into a different way, not related to the passion. A few years ago I made a decision that it was time to relate work with passion. The first step was to complete additional computer science studies
            </h3>
            <h3 className='p-7'>
                Now I am a developer with passion and background.
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