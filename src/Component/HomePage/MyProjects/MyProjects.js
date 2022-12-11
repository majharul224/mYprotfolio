import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const MyProjects = () => {
    const [projects, setProjects]= useState([])
    useEffect(()=>{
        fetch('project.json')
        .then(req=>req.json())
        .then(data => setProjects(data))
    },[])
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-14'>
           {
            projects.map(project=><ProjectCard
            key={project.id}
            project={project}
            ></ProjectCard>)
           }
        </div>
    );
};

export default MyProjects;