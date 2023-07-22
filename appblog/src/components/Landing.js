import React from "react";
import "./css/Landing.css";
import SideNav from "./SideNav";
import PublicIntrest from "./Public/PublicInterst";
import PublicProgressBar from "./Public/PublicProgressBar";
import PublicQuyalification from "./Public/PublicWorkExperience";
import PublicCertificate from "./Public/PublicCertificate";
import PublicProject from "./Public/PublicProject";
import PublicResume from "./Public/PublicResume";
import PublicSkill from "./Public/PublicSkill";
import PublicHead from "./Public/PublicHead";
import PublicDescription from "./Public/PublicDescription";

function Landing() {
  return (
    <div>
      <PublicDescription />
      <div className="row sample" style={{ display: "flex", flexWrap: "wrap" }}>
        <PublicProgressBar screen="small"/>
        <PublicSkill screen="small"/>
        <PublicQuyalification />
      </div>
      <PublicProject />
      <PublicCertificate />
      <PublicResume status="close" />
      <PublicIntrest />
    </div>
  );
}

export default Landing;
