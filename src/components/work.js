import React from "react";
import WorkCard from '../components/workCard'
import profiles from "./mocks";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="projec-container">
        {profiles.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              image={val.image}
              title={val.title}
              desc={val.desc}
              url={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
