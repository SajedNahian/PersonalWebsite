import * as React from 'react';
import './Navbar.scss';

interface Props {}

export const Navbar: React.FC<Props> = () => {
  return (
    <nav>
      <div className="logo">
        <a href="">Sajed Nahian</a>
      </div>
      <div className="links">
        <a href="">Projects</a>
        <a href="">Resume</a>
      </div>
    </nav>
  );
};
