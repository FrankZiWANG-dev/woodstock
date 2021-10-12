import React from 'react';
import '../css/team.css';

const Team = () => {
  return (
   <div id="team">
      <div id="team-img"></div>

      <div id="team-text">
        <div id="team-title-box1">
          <h2 id="team-title1"> CREATIVE TEAM </h2>
        </div>
        
        <div id="team-title-box2">
          <h2 id="team-title2"> GOOD MINDSET </h2>
        </div>
        
        <div id="team-text-content">
          <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>

        <div id="team-link"> 
         <a href="www.github.com" id="meet-the-team">
            Meet the team
          </a> 
        </div>
        
      </div>
    </div>
  );
}

export default Team;
