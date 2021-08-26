import Link from 'next/link';
import { classicNameResolver } from 'typescript';
import classes from './menu.module.css'

function Menu() {
    return (
        <div className='
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
                    <div className={classes.myLink}>Home</div>
                </Link>
                <Link href='/projects'>
                    <div className={classes.myLink}>Projects</div>
                </Link>
                <Link href='/about'>
                    <div className={classes.myLink}>About</div>
                </Link>
                <Link href='/contact'>
                    <div className={classes.myLink}>Contact</div>
                </Link>
            </div>
        </div>
    );
}

export default Menu;