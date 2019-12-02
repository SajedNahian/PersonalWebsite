import * as React from 'react';
import './Technology.scss';

interface Props {
  imageUrl: string;
}

export const Technology: React.FC<Props> = ({ imageUrl }) => {
  return (
    <a className="technology">
      <img src={imageUrl} alt="" />
    </a>
  );
};
