import * as React from 'react';
import './Projects.scss';
import { Project } from '../../Components/Project/Project';

interface Props {}

export const Projects: React.FC<Props> = () => {
  return (
    <div className="projects-container">
      <div className="projects">
        <Project
          title="Test"
          image="https://camo.githubusercontent.com/c1aad1a0b2ff76b16bade98b3a30afe708920078/68747470733a2f2f692e696d6775722e636f6d2f4a516c466a73532e676966"
          description="This is a project description. I really this project"
        />
        <Project
          title="Test"
          image="https://camo.githubusercontent.com/c1aad1a0b2ff76b16bade98b3a30afe708920078/68747470733a2f2f692e696d6775722e636f6d2f4a516c466a73532e676966"
          description="This is a project description. I really this project"
        />
        <Project
          title="Test"
          image="https://camo.githubusercontent.com/c1aad1a0b2ff76b16bade98b3a30afe708920078/68747470733a2f2f692e696d6775722e636f6d2f4a516c466a73532e676966"
          description="This is a project description. I really this project"
        />
      </div>
    </div>
  );
};
