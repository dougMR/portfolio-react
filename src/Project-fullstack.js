import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import APIUrl from "./APIUrl";

const Project = ({ projectIDs }) => {
    const params = useParams();
    const [project, setProject] = useState({});
    useEffect(() => {
        const getProject = async () => {
            const response = await fetch(`${APIUrl}/project/${params.id}`);
            const data = await response.json();
            setProject(data.project);
            console.log("PROJECT: ", data.project);
        };
        getProject();
    }, [params.id]);
    


    const getRelativeProjectID =  (offset) => {
        console.log('  -- ',projectIDs);
        console.log(typeof params.id);
        const currentID = parseInt(params.id);
        const currentIndex = projectIDs.indexOf(currentID);
        const offsetIndex = (currentIndex + offset + projectIDs.length) % projectIDs.length; 
        const offsetID = projectIDs[offsetIndex];
        
        console.log('params.id: ',params.id);
        console.log('currentIndex: ',currentIndex);
        console.log('offset: ',offset);
        console.log('offsetIndex: ',offsetIndex);
        console.log('offsetID: ',offsetID);
        return offsetID;
    };

    if (!project) {
        // Show this until project loads in useEffect above
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html">
                        <img
                            className="nav-logo-img"
                            src="../images/megadoug_bolt_in_circle_cutout.svg"
                            alt="megaDoug logo"
                        />
                        <span className="prefix">(mega)</span>Doug Roussin
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
            <section id="project">
                <h2>{project.name}</h2>
                <div className="row">
                    <div className="col-sm-12 col-md-4 text-center">
                        <a href={`${project.demolink}`} target="_blank" rel="noreferrer">
                            <img
                                // Make IMG clickable/touchable -> link to project demo
                                src={`../images/${project.imageURL}`}
                                alt={`${project.name} screenshot`}
                                className="img-fluid"
                            />
                        </a>
                        <div className="row">
                            <div className="col text-start">
                                <Link to={`/project/${getRelativeProjectID(-1)}`}>
                                    <span className="material-symbols-outlined navigate nav-back">
                                        navigate_before
                                    </span>
                                </Link>
                            </div>
                            <div className="col text-end">
                                <Link to={`/project/${getRelativeProjectID(1)}`}>
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
                                <ul
                                    dangerouslySetInnerHTML={{
                                        __html: project.objectives,
                                    }}
                                />
                            </div>
                            <div className="col">
                                <h3>Future Improvements</h3>
                                <ul
                                    dangerouslySetInnerHTML={{
                                        __html: project.futureImprovements,
                                    }}
                                />
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
                                <ul
                                    className="badges-list"
                                    dangerouslySetInnerHTML={{
                                        __html: project.techStack,
                                    }}
                                />
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
