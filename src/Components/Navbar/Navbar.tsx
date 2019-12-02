import * as React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

interface Props {}

export const Navbar: React.FC<Props> = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Sajed Nahian</Link>
      </div>
      <div className="links">
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
      </div>
    </nav>
  );
};
