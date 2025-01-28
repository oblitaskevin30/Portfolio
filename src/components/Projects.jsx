
import ProjectCards from "./ProjectCards";
import { Link } from 'react-router-dom';

const Projects = () => {
    const works = [
        {
          imgSrc: '/images/SellCarApp.png',
          title: 'Sell Car App - Full Stack',
          tags: ['Spring',"MySQL", 'MVC', 'Angular',"TypeScript",'Bootstrap', 'API REST'],
          description : "I made this project using SpringBoot for backend and Angular to make the Fronted part with some of Bootstrap to make styles. In this application you can create your own user account, login into the application  and post a car to sell it . Also you can see all de cars that others users has posted. In Fact its a proyect where i could applied what I'ver learned about JAVA , JavaScript , and frameworks.",
          projectLinkFront: 'https://github.com/oblitaskevin30/Angular/tree/main/sellCar-angular',
          projectLinkBack : 'https://github.com/oblitaskevin30/JAVASpring/tree/main/SpringJava/SellCar_Spring'
        },
        {
          imgSrc: '/images/HeroesApp.png',
          title: 'Heores App',
          description : "In this Angular project you could see a Heroes CRUD , where yu can add, read, update and delete a hero object . Also , it has a Login modulo where you'll put your credentials to login. The project has a local backend , so to run it first has to run 'npm run backend' , then in another terminal run 'ng serve' ",
          tags: ['Angular', 'Bootstrap', 'typeSript'],
          projectLinkFront: 'https://github.com/oblitaskevin30/Angular/tree/main/heroesApp',
          projectLinkBack : 'https://github.com/oblitaskevin30/Angular/tree/main/heroesApp'
        },
        {
          imgSrc: '/images/project-3.jpg',
          title: 'Recipe app',
          description : "",
          tags: ['Development', 'API'],
          projectLinkFront: '/',
          projectLinkBack : '/'
        }

    ];
    return (
        <section id="projects" className=" container" >
            <div className="">                
                <h2 className="tittle">
                    My Projects
                </h2>
            </div>

            <div className="grid  gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,1fr))]">
                {works.map(({imgSrc,title,description,tags,projectLinkFront,projectLinkBack}, key)=>{
                    return(
                      <Link
                        to={`/project/${title}`}
                        state={{ project: { imgSrc, title, description, tags, projectLinkFront, projectLinkBack } }}
                        
                        key={key}
                      >
                        
                        <ProjectCards 
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        />
                      </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects