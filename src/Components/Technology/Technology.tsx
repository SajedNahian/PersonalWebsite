import * as React from 'react';
import './Technology.scss';

<<<<<<< HEAD
interface Props {
  imageUrl: string;
}

export const Technology: React.FC<Props> = ({ imageUrl }) => {
  return (
    <a className="technology">
      <img src={imageUrl} alt="" />
=======
interface Props {}

export const Technology: React.FC<Props> = () => {
  return (
    <a href="">
      <img src="https://cdn.auth0.com/blog/react-js/react.png" alt="" />
>>>>>>> fed1e85b4c916d30af13efec5b40cc3c05708027
    </a>
  );
};
