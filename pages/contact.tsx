

import { Fragment } from 'react';
import Button, { ButtonClassEnum } from '../components/button/button';
import Link from 'next/link';
import Container from '../components/shared/container';
import { IMailTo } from '../components/button/button';

const mailto: IMailTo = {
    email: 'ge.kedziora@gmail.com',
    subject: 'Contact to make cooperation'
}
const contact =
    (<div className="flex-col        
    text-cyan-600 
    bg-cyan-100 
    my-5  
    mt-12
    rounded-lg        
    w-full
    h-full
    max-w-2xl
    items-center  
    "
    // bg-opacity-60
    // style={{ backdropFilter: "blur(20px)" }}
    >
        <h3 className='p-7'>I am always open to make new business relationships. Please just send me an email. I guarantee I will send You an answer.
        </h3>

        <div className='flex justify-center p-7'>

            <Button
                classButton={ButtonClassEnum.PRIMARY}
                labelButton='Send email'
                mailto={mailto}
            />
        </div>

        <p className='p-7 text-xs'>
            *if you have trouble sending an email.
            For example the email client doesn't want to open. Please make sure you have set your default email client in windows 10.
        </p>
    </div>
    )

function ContactPage() {
    return (
        <Container
            title={'Contact'}
            children={contact}
            switchHorizontalView={true}
        />
    );
}

export default ContactPage;