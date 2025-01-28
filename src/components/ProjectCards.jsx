import PropTypes from "prop-types"


const ProjectCards = ({imgSrc,title,tags}) => {
    return (
    <div className="relative mb-10 p-6 rounded-2xlS bg-zinc-800
            hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset
            ring-zinc-50/5 transition-colors rounded-lg lg:mb-2">
        <figure className="img-box
        aspect-square rounded-lg mb-4">
            <img 
            src={imgSrc}
            alt={title}
            loading="lazy"
            className="img-cover"/>
        </figure>
        <div className=" felx items-center justify-between gap-5">
            <div className="">
                <h3 className="tittle-2">
                    {title}
                </h3>
            </div>
            <div className=" flex flex-wrap items-center gap-3 ">
                {tags.map((label,key)=>(
                    <span
                    key={key}
                    className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg">
                        {label}
                    </span>
                )                   
                )}
            </div>
            <a
            // href={projectLink}
            target="_blank"
            className="absolute inset-0"
            >
            
            </a>
        </div>

    </div>
    )
}

ProjectCards.propTypes = {
    imgSrc : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    projectLink: PropTypes.string.isRequired
}

export default ProjectCards