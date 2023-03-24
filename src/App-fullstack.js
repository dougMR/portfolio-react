import APIUrl from "./APIUrl";
import "./App.css";
import {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Project from "./Project";

function App() {
    const [projects, setProjects] = useState([]);
    const [projectIDs,setProjectIDs] = useState([]);
    useEffect(() => {
        const getProjects = async () => {
            const response = await fetch(`${APIUrl}/projects`);
            const data = await response.json();
            setProjects(data.projects);
            const IDs = data.projects.map((project) => project.id);
            setProjectIDs(IDs);
        };
        getProjects();
    }, []);

    if(projects.length === 0 || projectIDs.length === 0 ){
        return <h1>Loading Data...</h1>
    }
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home projects={projects} />} />
                    <Route path="/project/:id" element={<Project projectIDs={projectIDs}/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
