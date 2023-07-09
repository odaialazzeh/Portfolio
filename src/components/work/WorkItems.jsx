import React from 'react';
import PropTypes from 'prop-types';

const WorkItems = ({ item }) => (
  <div>
    <div className="work_card" key={item.id}>
      <img src={item.image} alt="" className="work_img" />
      <h3 className="work_title">{item.title}</h3>
      <div className="project-link">
        {item.link
        && (
        <a href={item.link} className="work_button">
          Website
          <i className="bx bx-right-arrow-alt work_button-icon" />
        </a>
        )}
        <a href={item.github} className="work_button">
          Github
          <i className="bx bx-right-arrow-alt work_button-icon" />
        </a>
      </div>
    </div>
  </div>
);

WorkItems.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
};

export default WorkItems;
