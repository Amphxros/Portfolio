import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amparo Rubio </span> also known as <span className="purple">Amph </span> 
             and I am from <span className="purple"> Madrid, Spain.</span>
            <br /> I am a student pursuing a degree
            in game programming at the Complutense University of Madrid.
            <br />
            Additionally, I am currently employed as a Robotics teacher at
            Rockbotic.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Making digital art
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Clean code always looks like it was written by someone who cares, and I care a lot about many things"{" "}
          </p>
          <footer className="blockquote-footer">Amph</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
