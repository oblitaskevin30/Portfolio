import { useRef , useEffect } from "react"
import { Link } from 'react-router-dom';
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
    
        return () => {
        window.removeEventListener('resize', initActiceBox);
        };
    }, []);



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

    }

    const menuNav = [

        {
            label : 'About Me',
            link : '',
            className : 'nav-link',
        },
        {
            label : 'Habilities',
            link : 'skills',
            className : 'nav-link',
        },
        {
            label : 'My proyects',
            link : 'projects',
            className : 'nav-link',
        },
        {
            label : 'Contact Me',
            link : 'contact',
            className : 'nav-link md:hidden',
        }
    ]
    

    return (
        <nav className={'navbar ' + (navOpen ? 'active' : '')}>
            {
                menuNav.map(({label,link,className} , key )=>{

                    return (
                        <Link
                        to={`/${link}`}
                        className={className}
                        onClick={activeCurrentLink}
                        ref={(el) => linkRefs.current[key] = el}
                        key={key}
                      >
                        {label}
                      </Link>
    
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

