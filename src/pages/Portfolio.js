import React from "react";
import "../App.css";
import PortfolioCard from "../components/PortfolioCard";
import { Row } from "react-bootstrap";

function Portfolio() {
  return (
    <div>
      <h1 className="portfolio text-center mt-4 mb-0">Projects</h1>
      <div className="cardContainer">
        <Row>
          <PortfolioCard
            backDrop="../assets/photos/weatherDash.png"
            description="A dashboard that searches any given cites current weather as well as 5 days in advance using a weather API."
            title="Weather Dashboard"
            githubLink="https://github.com/solemansay/weather-dashboard"
            deployedLink=""
          />
          <PortfolioCard
            backDrop="../assets/photos/LifeJuice.png"
            description="An app that when used with, provides a user with joy, wisdom, or a random famous quote."
            title="Life Juice"
            githubLink="https://github.com/solemansay/LifeJuice"
            deployedLink="https://solemansay.github.io/LifeJuice/"
          />
          <PortfolioCard
            backDrop="../assets/photos/pandemic-playlist.png"
            description="hello"
            title="Pandemic Playlist"
            githubLink="https://github.com/oksimone/project2"
            deployedLink="https://thawing-beyond-59803.herokuapp.com/"
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
