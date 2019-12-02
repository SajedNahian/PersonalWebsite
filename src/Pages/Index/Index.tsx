import * as React from 'react';
import './Index.scss';
import { Technology } from '../../Components/Technology/Technology';
import reactImg from '../../Images/react.png';
import nodeImg from '../../Images/node.png';
import sassImg from '../../Images/sass.png';
import mongoImg from '../../Images/mdb.png';
import unityImg from '../../Images/unity.png';
import tsImg from '../../Images/typescript.svg';

interface Props {}

export const Index: React.FC<Props> = () => {
  return (
    <div className="index">
      <div className="intro">
        <h1>Hey There!</h1>
        <p>
          I'm Sajed Nahian, a sophomore studying Computer Science at Stony Brook
          University. I'm a software engineer who is always learning and keeping
          up with the industry. My specialty is web development and backend
          programming. Feel free to reach out to me at:
          contactsajednahian(at)gmail.com. Hope to hear from you soon.
        </p>
      </div>
      <h1 className="technologies-title">Technologies I Love</h1>
      <div className="technologies">
        <Technology imageUrl={reactImg} />
        <Technology imageUrl={nodeImg} />
        <Technology imageUrl={sassImg} />
        <Technology imageUrl={mongoImg} />
        <Technology imageUrl={tsImg} />
        <Technology imageUrl={unityImg} />
      </div>
    </div>
  );
};
