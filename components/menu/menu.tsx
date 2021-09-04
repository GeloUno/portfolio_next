import Link from 'next/link';
import classes from './menu.module.css'

function Menu() {
    return (
        <div
            data-testid="menuBody"
            className='
        min-h-screen        
        flex    
        justify-center         
        w-full 
        h-full 
        bg-gradient-to-r 
        from-blue-700 
        to-blue-900'
        ><div className='
        flex 
        flex-col 
        text-gray-300 
        self-center       
        text-3xl
       '>
                <Link href='/'>
                    <div data-testid="menuLinkHome" className={classes.myLink}>Home</div>
                </Link>
                <Link href='/projects'>
                    <div data-testid="menuLinkProjects" className={classes.myLink}>Projects</div>
                </Link>
                <Link href='/about'>
                    <div data-testid="menuLinkAboutMe" className={classes.myLink}>About Me</div>
                </Link>
                <Link href='/contact'>
                    <div data-testid="menuLinkContact" className={classes.myLink}>Contact</div>
                </Link>
            </div>
        </div>
    );
}

export default Menu;