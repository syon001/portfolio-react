import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    return (
        <div className="section">
            <a href={project.livelink} target="_blank" rel="noopener noreferrer">
                <h2>
                    {project.title}
                    <FaExternalLinkAlt />
                </h2>
            </a>
            <p>{project.description}</p>
            <div className="bottom">
                <div className="tags">
                    {project.tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                    ))}
                </div>
                <span className="gitcode">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </span>
            </div>
        </div>
    );
};

export default ProjectCard;