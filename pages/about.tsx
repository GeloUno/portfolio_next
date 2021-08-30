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
                From child I was interesting everything about computers. Many of people come to me and consult what a solution choose. But me live was go in another way. Few years ago I decided, it is time to join passion with work. Firest step was start second study of computer sience.
            </h3>
            <h3 className='p-7'>
                Now I'm programer form passion and education.
            </h3>
            <h3 className='p-7'>
                About TypeScript,I don't like it, I love it !
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