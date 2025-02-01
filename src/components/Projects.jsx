import React from 'react';
import ProjectCard from './ProjectCard';
import data from '../data/data.json'; // Import the JSON file directly

const Projects = () => {
    return (
        <div className="projects">
            <h2 className="ptitle">Projects</h2>
            <div className="container">
                {data.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;