

function HeaderDescription() {
    return (
        <div className='flex flex-col justify-center text-center min-w-screen min-h-screen  '>

            <div className=' text-white'>

                <div className='flex flex-row justify-center'>

                    <div className='flex justify-center w-32' >
                        <h2 className='text-3xl'>I'm your</h2>
                    </div>
                    <div className='flex justify-center w-32' >
                        <h1 className='text-5xl start'>React</h1>
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
            </div>

        </div>
    );
}

export default HeaderDescription;