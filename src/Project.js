import { useParams } from "react-router-dom";
import ProjectsData from "./ProjectsData";
import { HashLink as Link } from 'react-router-hash-link';

const Project = () => {
    // let { currentIndex } = useParams();
    const currentIndex = parseInt(useParams().currentIndex);
    console.log("currentIndex: ", currentIndex);
    const project = ProjectsData[currentIndex];
    const getRelativeProjectIndex = (offset) => {
        return (
            (currentIndex + offset + ProjectsData.length) % ProjectsData.length
        );
    };

    if (!project) {
        // Show this if index param doesn't index a project
        return (
            <div>
                <h1>Project {currentIndex} not found...</h1>
            </div>
        );
    }
    return (
        <div className="container">
            {/* Project page navigation */}
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html">
                        <img
                            className="nav-logo-img"
                            src="../images/megadoug_bolt_in_circle_cutout_blue.svg"
                            alt="megaDoug logo"
                        />
                        <span className="prefix">(<em>mega</em>)</span>Doug Roussin
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/">
                                About
                            </Link>
                            <Link className="nav-link" to="/#contact">
                                Contact
                            </Link>
                            <Link className="nav-link" to="/#portfolio">
                                Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            {/* end Nav */}
            <section id="project">
                <h2>{project.name}</h2>
                <div className="row">
                    <div className="col-sm-12 col-md-4 text-center">
                        <a
                            href={`${project.demolink}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                // Make IMG clickable/touchable -> link to project demo
                                src={`../images/${project.image}`}
                                alt={`${project.name} screenshot`}
                                className="img-fluid"
                            />
                        </a>
                        <div className="row">
                            <div className="col text-start">
                                <Link
                                    to={`/project/${getRelativeProjectIndex(
                                        -1
                                    )}`}
                                >
                                    <span className="material-symbols-outlined navigate nav-back">
                                        navigate_before
                                    </span>
                                </Link>
                            </div>
                            <div className="col text-end">
                                <Link
                                    to={`/project/${getRelativeProjectIndex(
                                        1
                                    )}`}
                                >
                                    <span className="material-symbols-outlined navigate nav-next">
                                        navigate_next
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col project-summary">
                        <h3>Summary</h3>
                        <p>{project.summary}</p>
                        <div className="row">
                            <div className="col">
                                <h3>Objectives</h3>
                                <ul>
                                    {project.objectives.map(
                                        (objective, index) => {
                                            return (
                                                <li key={index}>{objective}</li>
                                            );
                                        }
                                    )}
                                </ul>
                            </div>
                            <div className="col">
                                <h3>Future Improvements</h3>
                                <ul>
                                    {project.futureImprovements.map(
                                        (futureImprovement, index) => {
                                            return (
                                                <li key={index}>
                                                    {futureImprovement}
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h3>Links</h3>
                                <a
                                    href={`${project.demolink}`}
                                    className="btn btn-primary"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Live Demo
                                </a>{" "}
                                <a
                                    href={`${project.githublink}`}
                                    className="btn btn-primary"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {" "}
                                    GitHub{" "}
                                </a>
                            </div>
                            <div className="col">
                                <h3 className="tech-stack-title">Tech Stack</h3>
                                {project.techStack.map((tech, index) => {
                                    return <span className="badge" key={index}>{tech}</span>;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer>© 2022 MegaloMedia / megaDoug</footer>
        </div>
    );
};
export default Project;
