import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import nonogram from "../../Assets/Projects/project-2-icon.png";
import treshoras from "../../Assets/Projects/project-1-icon.png";
import pachinko from "../../Assets/Projects/project-12-icon.png";
import fighter from "../../Assets/Projects/project-3-icon.png";
import niles from "../../Assets/Projects/project-5-icon.png";
import apta from "../../Assets/Projects/project-4-icon.png";
import ciensecs from "../../Assets/Projects/project-8-icon.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">games </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few videogames I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nonogram}
              isBlog={false}
              title="Nonograms"
              description="Mobile game made in Android Studio using Java. 
              The idea is was to learn how to program for multiple platforms as well as be familiar with the android features."
              ghLink="https://github.com/Amphxros/VDM-Nonograms"
              //demoLink="https://"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={treshoras}
              isBlog={false}
              title="3 Horas"
              description="Game is an unity game made during the SGD III (Spain game devs 3) game jam where you recruit humans to fight robots.
              I was in the rol of 2D artist as well as some programming. It got in the 12th place in terms of art."
              demoLink="https://blackgamesdev.itch.io/3-horas"
              //ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pachinko}
              isBlog={false}
              title="Physics demo: Pachinko"
              description="Final project of the physics simulation, 
              it's a replica of the japanese machine game using custom physics entirely made by me using C++."
              ghLink="https://github.com/Amphxros/SFV/tree/main/Practica%20final"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fighter}
              isBlog={false}
              title="Fighter Traighter"
              description="Arcade fighter made in C++ using the SDL2 and Box2D libraries. 
              I was in charge of mostly all the art and animations and programming all the basic core."
              ghLink="https://github.com/MoruyankiiFighter/FighterTraighter"
              demoLink="https://amphxros.itch.io/fighter-traighter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
           
               imgPath={niles}
               isBlog={false}
               title="Niles Bubbles"
               description="Niles Bubbles is a unity game made during the FemPowerUp bootcamp with the objective of forming an indie studio.
               However it was a failure because I was the only programmer and I was working in other projects during that time
               but I learn a lot about serialization and teamwork"
               ghLink="https://github.com/Amphxros/Niles-Bubbles"
               
              />
             
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ciensecs}
              isBlog={false}
              title="100 seconds in the sea"
              description="Game made during the indie spain game jam where you have to survive 100 seconds avoiding sea creatures, similar to disc room.
              It's my first almost solo developing (I was with my partner who didn't know anything about unity)."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://amphxros.itch.io/apta"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apta}
              isBlog={false}
              title="APTA"
              description="APTA is a serious game made in Unity with the objective of encouraging women to take computer studies"
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://amphxros.itch.io/apta"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
