import React from "react";

function PortfolioCard(props) {
  return (
    <div className="mx-4 float-left" id="moviemargin">
      <div id="f1_container">
        <div id="f1_card" className="shadow">
          <div className="front face">
            <img
              src={props.backDrop}
              width="380px"
              height="230px"
              alt="project backdrop"
            />
          </div>
          <div className="back face center">
            <p className="watchP title">
              <strong>{props.title}</strong>
            </p>

            <p className="mb-1">{props.description}</p>
            <p className="my-0 mt-0">
              <a href={props.githubLink}> Github repo </a>
            </p>
            <p>
              <a href={props.deployedLink}> Deployed link </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
