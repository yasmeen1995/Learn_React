import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  const styles = {
    border: "4px solid black",
    Height: "700px",
    width: "450px",
  };
  return (
    <div>
      <div clasName="card" style={styles}>
        <Avatar />
        <div clasName="data">
          <Info />
          <SkillList />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="Yasmeen.jpeg" alt="Yasmeen's profile" />;
}

function Info() {
  return (
    <div>
      <h1>Yasmeen Mohammed</h1>
      <p>
        Full-stack developer and a studnet at UB. During my free times I will
        cook tasty food and enjoy it.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" color="pink" />
      <Skill skill="Python" color="orange" />
      <Skill skill="JavaScript" color="khaki" />
      <Skill skill="HTML+CSS" color="rosybrown" />
      <Skill skill="SQL" color="aqua" />
      <Skill skill="ExpressJs" color="mediumslateblue" />
    </div>
  );
}

function Skill(probs) {
  return (
    <div className="skill" style={{ backgroundColor: probs.color }}>
      <span>{probs.skill}</span>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
