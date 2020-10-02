import React from "react";
import "../App.css";
import PortfolioCard from "../components/PortfolioCard";
import { Row } from "react-bootstrap";

function Portfolio() {
  return (
    <div>
      <h1 className="portfolio text-center mt-4 mb-0">Portfolio</h1>
      <div className="cardContainer">
        <Row>
          <PortfolioCard
            backDrop="../assets/photos/weatherDash.png"
            description="hello"
            title="Weather Dashboard"
            githubLink="https://github.com/solemansay/weather-dashboard"
            deployedLink=""
          />
          <PortfolioCard
            backDrop="../assets/photos/LifeJuice.png"
            description="hello"
            title="Life Juice"
            githubLink="https://github.com/solemansay/weather-dashboard"
            deployedLink=""
          />
          <PortfolioCard
            backDrop="../assets/photos/pandemic-playlist.png"
            description="hello"
            title="Pandemic Playlist"
            githubLink="https://github.com/solemansay/weather-dashboard"
            deployedLink=""
          />
          <PortfolioCard
            backDrop="../assets/photos/HarryQuiz.png"
            description="hello"
            title="Harry Potter Quiz"
            githubLink="https://github.com/solemansay/weather-dashboard"
            deployedLink=""
          />
          <PortfolioCard
            backDrop="../assets/photos/horiseon.png"
            description="hello"
            title="Horiseon"
            githubLink="https://github.com/solemansay/weather-dashboard"
            deployedLink=""
          />
          <PortfolioCard
            backDrop="../assets/photos/burger.png"
            description="hello"
            title="Burger app"
            githubLink="https://github.com/solemansay/weather-dashboard"
            deployedLink=""
          />
        </Row>
      </div>
    </div>
  );
}

export default Portfolio;
