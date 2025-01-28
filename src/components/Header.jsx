// react
import {useState} from 'react'
import { useContext } from 'react'
import { Context } from '../App'

// icons
import logo from '/src/assets/LOGOKEVIN2.png'

// Components
import Navbar from  './Navbar'


const Header = () => {
    const socialLinks = useContext(Context)
    const [navOpen, setNavOpen] =useState(false)

    return (<>
    <header className="fixed top-0 left-0 w-full h-20 flex
    items-center z-40 bg-gradient-to-b from-zinc-900
    to-zinc-900/0
    ">
        <div className="max-w-screen-2xl w-full mx-auto px-5
        flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]
        ">
            <div>
                <a href="/"
                className="logo"
                ><img src={logo} alt="Jonathan Oblitas"
                className=''
                width={40}
                height={40}/></a>
            </div>


            <div className="flex items-center gap-2 transition-opacity duration-300  md:opacity-0 md:hidden">
            {
                    socialLinks.map((itemLinks,key)=>{
                        return(
                            <a href={itemLinks.link} alt={itemLinks.alt} key={key}
                            target='_blank'
                            rel="noopener noreferrer"
                            className=''
                            >
                                {itemLinks.icon}
                            </a>
                        )
                    })
            }
            </div>


            <div className="
            relative
            md:justify-self-center
            ">
                <button
                className="menu-btn 
                md:hidden
                
                "
                onClick={()=>setNavOpen((prev)=>!prev)}
                >
                    <span
                    className="material-symbols-outlined"
                    >
                        {navOpen? 'Close' : 'Menu'}
                    </span>
                </button>

                <Navbar navOpen = {navOpen}/>
            </div>

            <a href="#contact"
                className="btn btn-secondary max-md:hidden
                md:justify-self-end
                bg-zinc-800
                border-solid
                border-white
                border-2
                ">
                    Contact Me
            </a>
        
        </div>

    </header>
    </>)
}

export default Header