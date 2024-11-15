import '../css/Projects.css';
import Project from './Project';
import projects from '../constants/projects';

const Projects = () => {
    return (
        <div className='projects container' id='projects'>
            <hr style={{ width: '100%' }} />

            <h2 className='section-title text-center animated-sections'>Personal Projects</h2>
            <p className='projects__description text-center animated-sections'>
                I love transforming residential design into interactive interface that is tempting
                to interact with.
            </p>

            <div className='projects-list d-flex flex-column animated-sections'>
                {projects.map((project, idx) => (
                    <Project key={project.id} project={project} reversed={idx % 2 !== 0} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
