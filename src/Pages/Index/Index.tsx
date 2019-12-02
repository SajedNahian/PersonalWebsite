import * as React from 'react';
import './Index.scss';
import { Technology } from '../../Components/Technology/Technology';
<<<<<<< HEAD
import reactImg from '../../Images/react.png';
import nodeImg from '../../Images/node.png';
import sassImg from '../../Images/sass.png';
import mongoImg from '../../Images/mdb.png';
import unityImg from '../../Images/unity.png';
import tsImg from '../../Images/typescript.svg';
=======
>>>>>>> fed1e85b4c916d30af13efec5b40cc3c05708027

interface Props {}

export const Index: React.FC<Props> = () => {
  return (
    <div className="index">
      <div className="intro">
        <h1>Hey There!</h1>
        <p>
<<<<<<< HEAD
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
=======
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
>>>>>>> fed1e85b4c916d30af13efec5b40cc3c05708027
      </div>
    </div>
  );
};
