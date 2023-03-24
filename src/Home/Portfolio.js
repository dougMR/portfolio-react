import { Link } from "react-router-dom";
import ProjectsData from "../ProjectsData";
const Portfolio = () => {
    const projects = ProjectsData;
    return (
        <section id="portfolio">
            <h1>Portfolio</h1>
            <div className="portfolio-projects">
                {projects.map((project, index) => {
                    return (
                        <div key={index} className="project-preview">
                            <Link
                                // target="_blank"
                                // rel="noreferrer"
                                to={`/project/${index}`}
                            >
                                <div className="card">
                                    {/* <!-- Are my images loading? --> */}
                                    <img
                                        src={`./images/${project.image}`}
                                        className="card-img-top"
                                        alt={`${project.name} screenshot`}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {project.name}
                                        </h5>
                                        <p className="card-text">
                                            {project.summary}
                                        </p>
                                        {/* <ul
                                            dangerouslySetInnerHTML={{
                                                __html: project.techStack,
                                            }}
                                        /> */}
                                        <ul>
                                            {project.techStack.map(
                                                (tech, techIndex) => {
                                                    return (
                                                        <li key={techIndex}>
                                                            {tech}
                                                        </li>
                                                    );
                                                }
                                            )}
                                        </ul>
                                        <button
                                            href="#"
                                            className="btn btn-primary"
                                        >
                                            {project.cta}
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
export default Portfolio;
