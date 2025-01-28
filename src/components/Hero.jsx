
import { useState, useEffect, useContext } from "react"
import { Context } from "../App"

const Hero = () => {

    const socialLinks = useContext(Context);
    const [nombre,  setNombre] = useState('')
    const nombreRecorrido = "Jonathan Oblitas"

    useEffect(()=>{

        let index = 0;
        let isActive = true
        console.log(isActive)
        let nombreAux = ''
        const interval = setInterval(() => {
            if(!isActive) return;
            if (index < nombreRecorrido.length) {
                nombreAux = nombreAux + nombreRecorrido[index]
                setNombre(nombreAux);
                index++;
            } else {
                nombreAux = ''
                index  = 0
            }
        }, 250); 

        return () => {
            isActive =false
            clearInterval(interval)
            console.log("Componente desmontado, isActive:", isActive)
        }
    },[])

    return (
    <>
    <section id="hero" className="relative z-10 bg-[url('/src/assets/fondoGloboAerostatico.jpg')] 
    bg-cover bg-center h-screen flex items-center justify-center flex-col gap-4
    md:flex-row
    lg:flex-row
    
    ">
        <div className="absolute  first:inset-0 bg-gradient-to-b from-transparent to-zinc-900 opacity-100"></div>
        <div className="z-100 flex flex-col items-center justify-center">
            <h3 className="z-50 font-semibold">Hi there, Im  
                <span 
                className="underline decoration-yellow-400 decoration-dotted underline-offset-4 z-50 text-yellow-400 p-2 font-bold text-xl ">
                    {nombre} 
                </span>
            </h3>

            <h1 className="z-50 text-white text-3xl font-bold ">
                Web Developer</h1>
            
            <h3 className="z-50 w-full text-white text-center max-w-96  px-4 
            md:max-w-[500px] 
            ">
            Web developer passionate about technology. 
            I enjoy programming in Java, JavaScript, React and Angular
            </h3>
        </div>
        

        <div 
                className="
                relative
                z-30
                w-40 h-40 
                md:w-52 md:h-52 md:mr-10
                lg:w-64 lg:h-64
                border-4
                rounded-2xl
                border-dotte
                border-yellow-500

                ">
                
                <figure
                    className="
                    rounded-2xl
                    bg-cover

                    "
                >
                    <img src="/images/img-jonathan.png" alt="Jonathan Oblitas"
                    width={656}
                    height={800}
                    className="border-b-4  border-yellow-500"
                    />
                </figure>

            <div className="md:fixed md:left-0 md:top-52 md:flex md:flex-col md:items-center md:ml-6 md:pt-3 md:gap-2 hidden">
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
                
        </div>


    </section>
    </>
    )
}

export default Hero