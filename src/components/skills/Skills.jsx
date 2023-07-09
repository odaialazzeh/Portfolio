import React from 'react';
import './skills.css';
import Frontend from './Frontend';
import Backend from './Backend';
import Tools from './Tools';

const Skills = () => (
  <section className="skills section" id="skills">
    <h2 className="section_title">Skills</h2>

    <div className="skills_container container grid">
      <Frontend />
      <Backend />
      <Tools />
    </div>
  </section>
);

export default Skills;
