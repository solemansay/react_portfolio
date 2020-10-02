import React from "react";
import "../App.css";
import { Container, Row } from "react-bootstrap";
import WriteUp from "../components/WriteUp";

function AboutMe() {
  return (
    <Container>
      <Row>
        <img
          src="assets/photos/Profile_pic.jpg"
          className="float-left mr-3"
          alt="Soleman"
          width="200"
        />
        <div>
          <WriteUp
            DesOne="Hey there! My name is Soleman Sayeed, I am currently a student at UNC
        Charlotte. I was born in Canada and raised all over the world, I have
        lived in 8 countries and counting! I was raised in a big family of 7
        constantly moving from city to city, school to school. I believe this is
        the reason that I have such good communication skills and have no
        problem going into a large group of people and sparking conversation.
        The reason that I wanted to learn how to code stems from my teen years
        of playing videogames and trying to figure out how they work. My first
        experience with coding was running mods on Minecraft and trying them
        with my friends. Since I started learning more I feel a larger hunger
        for coding knowledge than ever before!"
          />

          <WriteUp
            DesTwo="I have many hobbies that I do outside of coding and video games, many of
        them including outdoor activities such as hiking, camping skiing,
        snowboarding, water skiing/wakeboarding, and biking. I love to travel
        more than anything else experiencing new and exciting cultures, eating
        new foods and seeing the most beautiful parts of our world. This passion
        of mine is a big reason why coding from home on my laptop is the perfect
        career for me."
          />
        </div>
      </Row>
    </Container>
  );
}

export default AboutMe;
