import classes from '../../styles/globals.module.css'
interface IContainer {
    title: string,
    switchHorizontalView: boolean,
    children: React.ReactNode
}

function Container({
    title,
    switchHorizontalView,
    children
}: IContainer) {

    return (
        <div
            data-testid="container"
            className={classes.myContainer}>
            <div className='flex flex-col w-full h-full pt-20'>
                <div className='flex flex-row w-full h-10 p-10 justify-end pr-20 bg-titlePageBackgroud bg-no-repeat bg-right-top bg-5rem bg-origin-content' >
                    <h3 className='pr-10 text-2xl'>
                        {title}
                    </h3>
                </div>
                <div className='flex flex-col'>
                    <div className='hidden p-10 items-center'>
                        picture
                    </div>
                    <div className='flex flex-col p-10 items-center  
                    
        '>
                        {/* // w-full
                    // max-w-2xl
                    // self-center */}
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container;