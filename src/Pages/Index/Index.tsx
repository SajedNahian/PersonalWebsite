import * as React from 'react';
import './Index.scss';
import { Technology } from '../../Components/Technology/Technology';

interface Props {}

export const Index: React.FC<Props> = () => {
  return (
    <div className="index">
      <div className="intro">
        <h1>Hey There!</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          dolorem rem qui magni optio repellat, officiis blanditiis nisi?
          Nesciunt sapiente dolorum doloribus! Ut aperiam repellat rerum
          pariatur deleniti et, laudantium dolores eius expedita nisi? Expedita
          est dolorum fugiat excepturi sit.
        </p>
      </div>
      <h1>Technologies</h1>
      <div className="technologies">
        <Technology />
        <Technology />
        <Technology />
        <Technology />
        <Technology />
        <Technology />
      </div>
    </div>
  );
};
