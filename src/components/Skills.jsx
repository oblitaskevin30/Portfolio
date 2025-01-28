
import SkillCard from "./SkillCard";

function Skills(){

    const skillITems = [
        {
            imgSrc: '/images/html-icon.svg',
            label: 'HTML',
            desc: 'User Interface'
        },
        {
            imgSrc: '/images/css3.svg',
            label: 'CSS',
            desc: 'User Interface'
        },
        {
            imgSrc: '/images/javascript.svg',
            label: 'JavaScript',
            desc: 'Interaction'
        },
        {
            imgSrc: '/images/react.svg',
            label: 'React',
            desc: 'Framework'
        },
        {
            imgSrc: '/images/tailwindcss.svg',
            label: 'TailwindCSS',
            desc: 'User Interface'
        },
        
        {
            imgSrc: '/images/java.svg',
            label: 'JAVA',
            desc: 'Backend'
        },
        {
            imgSrc: '/images/spring.svg',
            label: 'Spring',
            desc: 'Backend'
        }
        ,
        
        {
            imgSrc: '/images/angular.svg',
            label: 'Angular',
            desc: 'User Interface'
        },
        {
            imgSrc: '/images/sql.svg',
            label: 'SQL',
            desc: 'DataBase'
        },
        {
            imgSrc: '/images/mongodb.svg',
            label: 'MongoDB',
            desc: 'Database'
        }
    ];

    return(
        <section id="skills" className="container" >
            <div className="">
                <h2 className="tittle">
                    Tecnologies I use 
                </h2>
                <p className="grid grid-3 gap-4 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillITems.map(({imgSrc,label,desc}, key)=>{
                            return(
                                <SkillCard
                                imgSrc={imgSrc}
                                label={label}
                                desc={desc}
                                key={key}
                                />
                            )
                        })
                    }
                </p>
                
            </div>
        </section>
    )
}

export default Skills