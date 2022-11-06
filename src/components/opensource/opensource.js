import React from "react";
import Abhishek from "../../abhishek/abhishek";
import Layer5 from "../../assets/socials/layer5dark.svg";
import Companies from "./openSourceCard";
import "./opensource.scss";
const OpenSource = () => {
  return (
    <div className="open-source">
      <div className="stats">
        <p className="open-title"><span className='grade' >I love to contribute</span></p>
        <p className="open-para">Look at some of my contributions</p>
        <img
          className="open-img"
          alt="AbhishekTiwari23's GitHub Stats"
          src="https://awesome-github-stats.azurewebsites.net/user-stats/AbhishekTiwari23?cardType=github&theme=github-dark&Background=10101A&Text=FEFEFE&Title=A269DD&Ring=A269DD"
        />
      </div>
      <div className="contribution">
        <h2 className="s">Contributed to</h2>
        <Companies name="Layer5" logo={Layer5} />
      </div>
    </div>
  );
};
export default OpenSource;
