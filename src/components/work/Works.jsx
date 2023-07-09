import React, { useEffect, useState } from 'react';
import { projectsData, projectsNav } from './Data';
import WorkItems from './WorkItems';

const Works = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'all') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => project.category === item.name);
      setProjects(newProjects);
    }
  }, [item]);

  const handleInteraction = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
    }

    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <div>
      <div className="work_filters">
        {projectsNav.map((item, index) => (
          <span
            onClick={(e) => { handleInteraction(e, index); }}
            className={`${active === index ? 'active-work' : ''} work_item`}
            key={item.id}
            onKeyDown={(e) => handleInteraction(e, index)}
            role="button"
            tabIndex={0}
            aria-label="items"
          >
            {item.name}
          </span>
        ))}
      </div>

      <div className="work_container container grid">
        {projects.map((item) => (
          <WorkItems item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Works;
