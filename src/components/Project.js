import Tag from "./Tag";


const Project = ({project, reversed}) => {
    return (  
        <div className={ reversed ? "project-card-reversed project-card d-flex" : "project-card d-flex"}   >
            <div className="project__img">
                <img src={project.thumbnail} alt="" />
                <div className="check-it-icon">
                    <img src={process.env.PUBLIC_URL + '/Assets/Icons/arrow.png'} alt="" />
                    <p>Check it Out</p>
                </div>
                <a target='_blank' href={project.link}></a>
            </div>
            
            <div className="project__description">
                <h2 className="project__description-title">{project.title}</h2>
                <p className="project__description-text">{project.description}</p>
                <div className="tag-list d-flex">
                    {
                        project.tags.map((tag, idx) => 
                            <Tag key={idx} name={tag}/>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
 
export default Project;