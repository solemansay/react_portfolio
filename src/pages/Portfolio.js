import React from "react";
import "../App.css";
import PortfolioCard from "../components/PortfolioCard";
import { Row, Col } from "react-bootstrap";

function Portfolio() {
  return (
    <div>
      <h1 className="portfolio text-center mt-4 mb-0">Projects</h1>
      <div className="container-fluid">
        <Row className="w-100">
          <Col sm={12} md={6} lg={4}>
            <PortfolioCard
              backDrop="./photos/weatherDash.png"
              description="A dashboard that searches any given cites current weather 
              as well as 5 days in advance using a weather API."
              title="Weather Dashboard"
              githubLink="https://github.com/solemansay/weather-dashboard"
              deployedLink=""
            />
          </Col>

          <Col sm={12} md={6} lg={4}>
            <PortfolioCard
              backDrop="./photos/LifeJuice.png"
              description="An app that when used with, provides a user with joy, wisdom, 
              or a random famous quote."
              title="Life Juice"
              githubLink="https://github.com/solemansay/LifeJuice"
              deployedLink="https://solemansay.github.io/LifeJuice/"
            />
          </Col>

          <Col sm={12} md={6} lg={4}>
            <PortfolioCard
              backDrop="./photos/pandemic-playlist.png"
              description="We're all stuck indoors until we take care of the pandemic, 
              it gets boring to watch the same movies over and over. Want to find some fresh 
              ideas to pass the time? Try the Pandemic Playlist!"
              title="Pandemic Playlist"
              githubLink="https://github.com/oksimone/project2"
              deployedLink="https://thawing-beyond-59803.herokuapp.com/"
            />
          </Col>
          
          <Col sm={12} md={6} lg={4}>
            <PortfolioCard
              backDrop="./photos/HarryQuiz.png"
              description="This Quiz app was created using javascript, html and bootstrap. Test your knowledge 
              on the world of Harry Potter if you dare!"
              title="Harry Potter Quiz"
              githubLink="https://github.com/solemansay/quiz-game"
              deployedLink="https://solemansay.github.io/quiz-game/"
            />
          </Col>
          <Col sm={12} md={6} lg={4}>
            <PortfolioCard
              backDrop="./photos/horiseon.png"
              description="An app that can be utalized to keep track of your work schedule and ensure you 
              complete all of your tasks."
              title="Work Day Schedule "
              githubLink="https://github.com/solemansay/Day-Planner"
              deployedLink="https://solemansay.github.io/Day-Planner/"
            />
          </Col>
          <Col sm={12} md={6} lg={4}>
            <PortfolioCard
              backDrop="./photos/burger.png"
              description="A fun Burger eating app that was my first attemt at using 
              my SQL and handlebars, name a burger, create it and eat it!"
              title="Burger app"
              githubLink="https://github.com/solemansay/burger"
              deployedLink="https://safe-ravine-30053.herokuapp.com/"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Portfolio;
