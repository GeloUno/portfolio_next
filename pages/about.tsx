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
                I have been interested in everything related to computers since I was a child. Many people came to me and asked what solution to choose. But my way of life went in a different direction, not related to the passion of life. A few years ago I made a decision that it was time to combine work with passion. The first step was to completed second computer science studies
            </h3>
            <h3 className='p-7'>
                Now I am a programmer with passion and education.
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