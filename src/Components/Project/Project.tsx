import * as React from 'react';
import './Project.scss';

interface Props {
  title: string;
  description: string;
  image: string;
}

export const Project: React.FC<Props> = ({ title, image, description }) => {
  return (
    <div className="project">
      <img src={image} alt="" />
      <div className="info">
        <div className="info-top">
          <h2 className="title">{title}</h2>
          <div className="icons">
            <a href="">
              <i className="fa fa-globe"></i>
            </a>
            <a href="">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};
