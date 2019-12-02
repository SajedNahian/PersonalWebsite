import * as React from 'react';
import './Projects.scss';
import { Project } from '../../Components/Project/Project';
import techtube from '../../GIFs/techtube.gif';
import scisquare from '../../GIFs/scisquare.gif';
import solarsystem from '../../GIFs/solarsystem.gif';
import codeconf from '../../GIFs/codeconf.gif';
import shootio from '../../GIFs/shootio.gif';

interface Props {}

export const Projects: React.FC<Props> = () => {
  return (
    <div className="projects-container">
      <div className="projects">
        <Project
          title="TechTube"
          image={techtube}
          description="Blazing fast YouTube clone made with React, Node, Express, MongoDB and AWS."
          hobby={true}
          github="https://github.com/SajedNahian/TechTube"
        />
        <Project
          title="SciSquare"
          image={scisquare}
          description="Lab management software including live notifications and messaging. Made with React, Node, Express, MongoDB, and Socket.io."
          hobby={false}
          website="http://scisquare.com/"
        />
        <Project
          title="CodeConference"
          image={codeconf}
          description="Web based realtime online code editor. Create a project, collaborate with others live and run code in the comfort of your browser. Made with React, Node, Express, MongoDB and Socket.io."
          website="https://github.com/SajedNahian/CodeConference"
          hobby={true}
        />
        <Project
          title="SolarSystem AR"
          image={solarsystem}
          description="Augmented Reality Solar System Viewer built with Unity, C# and Vuforia. 100+ installs on Google Play."
          website="https://play.google.com/store/apps/details?id=com.ApsisStudios.SolarSystemAR&hl=en_US"
          hobby={true}
        />
        <Project
          title="TwitchVideoCompiler"
          image={
            'https://camo.githubusercontent.com/7f71478885b14baef2f32888afa66dc9bd5837c3/68747470733a2f2f692e696d6775722e636f6d2f51414e363468542e706e67'
          }
          description="Compilation software for popular streaming website Twitch.tv. Made using C# and WPF. Used daily by many YouTubers (Synapse, Fl1pz, SoloMiD, MrMax)"
          github="https://github.com/SajedNahian/TwitchVideoCompiler"
          hobby={true}
        />
        <Project
          title="Shoot.io"
          image={shootio}
          description="Multiplayer first person shooter game. Built using Photon, Unity, and C#. No code available: I do not have a license for distribution of the visual assets used in the game."
          locked={true}
          hobby={true}
        />
      </div>
    </div>
  );
};
