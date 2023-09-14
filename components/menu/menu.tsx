import Link from 'next/link';
import classes from './menu.module.css';

function Menu() {
  return (
    <div
      data-testid="menuBody"
      className="
        min-h-screen        
        flex    
        justify-center         
        w-full 
        h-full 
        bg-gradient-to-r 
        from-blue-700 
        to-blue-900"
    >
      <div
        className="
        flex 
        flex-col 
        text-gray-300 
        self-center       
        text-3xl
       "
      >
        <Link href="/">
          <div data-testid="menuLinkHome" className={classes.myLink}>
            Home
          </div>
        </Link>
        <Link href="/jobs">
          <div data-testid="menuLinkJobs" className={classes.myLink}>
            Jobs
          </div>
        </Link>
        <Link href="/projects">
          <div data-testid="menuLinkProjects" className={classes.myLink}>
            Private Projects
          </div>
        </Link>
        <Link href="/contact">
          <div data-testid="menuLinkContact" className={classes.myLink}>
            Contact
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
