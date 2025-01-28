import { useRef , useEffect } from "react"
import PropTypes from "prop-types"


const Navbar = ({navOpen}) =>{

    const lastActiveLink = useRef()
    const activeBox = useRef()
    const linkRefs = useRef([]);

    const initActiceBox = () =>{
        console.log(lastActiveLink.current)
        console.log(activeBox.current)
        if (lastActiveLink.current && activeBox.current) {
            activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
            activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
            activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
            activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
          }

    }
    useEffect(() => {
        initActiceBox();
        window.addEventListener('resize', initActiceBox);
    
        // Cleanup event listener on unmount
        return () => {
          window.removeEventListener('resize', initActiceBox);
        };
      }, []);

    //useEffect(initActiceBox,[])

    window.addEventListener('resize', initActiceBox)

    const activeCurrentLink = (event) =>{
        if (lastActiveLink.current) {
            lastActiveLink.current.classList.remove('active');
          }
          event.target.classList.add('active');
          lastActiveLink.current = event.target;
      
          if (activeBox.current) {
            activeBox.current.style.top = event.target.offsetTop + "px";
            activeBox.current.style.left = event.target.offsetLeft + "px";
            activeBox.current.style.width = event.target.offsetWidth + "px";
            activeBox.current.style.height = event.target.offsetHeight + "px";
          }

        // lastActiveLink.current?.classList.remove('active');
        // event.target.classList.add('active')
        // lastActiveLink.current = event.target;

        // activeBox.current.style.top = event.target.offsetTop + "px";
        // activeBox.current.style.left = event.target.offsetLeft + "px";
        // activeBox.current.style.width = event.target.offsetWidth + "px";
        // activeBox.current.style.height = event.target.offsetHeight + "px";
    }

    const menuNav = [
        {
            label : 'Home',
            link : '#hero',
            className : 'nav-link active',
            ref:lastActiveLink

        },
        {
            label : 'About Me',
            link : '#hero',
            className : 'nav-link',
        },
        {
            label : 'Habilities',
            link : '#skills',
            className : 'nav-link',
        },
        {
            label : 'My proyects',
            link : '#projects',
            className : 'nav-link',
        },
        {
            label : 'Contact Me',
            link : '#contact',
            className : 'nav-link md:hidden',
        }
    ]
    

    return (
        <nav className={'navbar ' + (navOpen ? 'active' : '')}>
            {
                menuNav.map(({label,link,className} , key )=>{

                    return (
                        <a
                        href={link}
                        key = {key}
                        ref={(el) => linkRefs.current[key] = el}
                        className={className}
                        onClick={activeCurrentLink}
                    >
                        {label}
                    </a>    
                    )
                })
            }
            <div className="active-box"
            ref={activeBox}>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    navOpen : PropTypes.bool.isRequired
}


export default Navbar

