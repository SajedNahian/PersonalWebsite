import * as React from 'react';
import './Project.scss';

interface Props {
  title: string;
  description: string;
  hobby: boolean;
  image: string;
  github?: string;
  website?: string;
  locked?: boolean;
}

export const Project: React.FC<Props> = ({
  title,
  image,
  description,
  hobby,
  github,
  website,
  locked
}) => {
  return (
    <div className="project">
      <img src={image} alt="" />
      <div className="info">
        <div className="info-top">
          <div className="left">
            <h2 className="title">{title}</h2>
            <p>{hobby ? 'Hobby' : 'Paid'}</p>
          </div>
          <div className="icons">
            {website && (
              <a href={website} target="_blank" className="icon">
                <i className="fa fa-globe"></i>
              </a>
            )}
            {github && (
              <a href={github} target="_blank" className="icon">
                <i className="fa fa-github"></i>
              </a>
            )}
            {locked && <i className="fa fa-lock icon" />}
          </div>
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};
