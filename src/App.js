// Backend removed for hosting on GitHub
// Data Object used instead of server / DB

// import APIUrl from "./APIUrl";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Project from "./Project";
import ProjectsData from "./ProjectsData";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home projects={ProjectsData} />} />
                    <Route path="/project/:currentIndex" element={<Project />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
