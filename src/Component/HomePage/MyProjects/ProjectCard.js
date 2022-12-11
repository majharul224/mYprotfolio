import React from 'react';

const ProjectCard = ({ project }) => {
    // console.log(project)
    const { id, img1, name, details,live } = project
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='h-72' src={img1} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Project Name: {name}</h2>
                <div className="card-actions justify-end">
                   <a className="btn btn-primary" href={live}>Live site</a>
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;