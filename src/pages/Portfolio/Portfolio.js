import React from "react";
import PortfolioCard from "../../components/PortfolioCard";
import { Row, Col } from "react-bootstrap";
import "./portfolio.css";
import WeatherDash from "../../assets/photos/weatherDash.png";
import HarryQuiz from "../../assets/photos/HarryQuiz.png";
import LifeJuice from "../../assets/photos/LifeJuice.png";
import StudyMate from "../../assets/photos/burger.png";
import WorkSched from "../../assets/photos/workScheduler.png";
import PandemicP from "../../assets/photos/pandemic-playlist.png";

function Portfolio() {
  return (
    <div>
      <h1 className="portfolio text-center mt-4 mb-0">Projects</h1>
      <div className="container-fluid">
        <Row className="w-100">
          <Col sm={12} md={6} lg={4}>
            <PortfolioCard
              title="StudyMate"
              backDrop={StudyMate}
              description="An app that allows students to make an account and organise study 
              groups online! Connect with other students, study together, and learn more today!"
              githubLink="https://github.com/collinlanie12/StudyMate"
              deployedLink="https://floating-journey-44508.herokuapp.com/main"
            />
          </Col>

          <Col sm={12} md={6} lg={4}>
            <PortfolioCard
              title="Life Juice"
              backDrop={LifeJuice}
              description="Life Juice is an app that when used, provides a user with joy, wisdom, 
              or a random famous quote. The perfect app for a quick laugh, pick me up or boost of inspiration
              to get you through the day!"
              githubLink="https://github.com/solemansay/LifeJuice"
              deployedLink="https://solemansay.github.io/LifeJuice/"
            />
          </Col>

          <Col sm={12} md={6} lg={4}>
            <PortfolioCard
              title="Pandemic Playlist"
              backDrop={PandemicP}
              description="We're all stuck indoors until we take care of the pandemic, 
              it gets boring to watch the same movies over and over. Want to find some fresh 
              ideas to pass the time? Try the Pandemic Playlist!"
              githubLink="https://github.com/oksimone/project2"
              deployedLink="https://thawing-beyond-59803.herokuapp.com/"
            />
          </Col>

          <Col sm={12} md={6} lg={4}>
            <PortfolioCard
              title="Harry Potter Quiz"
              backDrop={HarryQuiz}
              description="This Quiz app was created using javascript, html and bootstrap. Test your knowledge 
              on the world of Harry Potter if you dare!"
              githubLink="https://github.com/solemansay/quiz-game"
              deployedLink="https://solemansay.github.io/quiz-game/"
            />
          </Col>
          <Col sm={12} md={6} lg={4}>
            <PortfolioCard
              title="Work Day Schedule"
              backDrop={WorkSched}
              description="An app that can be utalized to keep track of your work schedule and ensure you 
              complete all of your tasks."
              githubLink="https://github.com/solemansay/Day-Planner"
              deployedLink="https://solemansay.github.io/Day-Planner/"
            />
          </Col>
          <Col sm={12} md={6} lg={4}>
            <PortfolioCard
              title="Weather Dashboard"
              backDrop={WeatherDash}
              description="A dashboard that searches any given cites current weather 
              as well as 5 days in advance using a weather API."
              githubLink="https://github.com/solemansay/weather-dashboard"
              deployedLink=""
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Portfolio;
