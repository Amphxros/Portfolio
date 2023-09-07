import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import aegis from "../../Assets/Projects/project-6-icon.png"
import unityLogo from "../../Assets/Projects/project-11-icon.png"

function OtherProjects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently generally tools and game engines.
        </p>
       <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={aegis}
              isBlog={false}
              title="Aegis Engine"
              description="Aegis Engine is the biggest project I've worked on.
              It's a custom 3D engine built from the ground up available on Windows and Linux.
              It's written on C++ and LUA. 
              Users are able to write the game on LUA in a similar way it's on Unity and they are able to make their games with the assets they desire."
              ghLink="https://github.com/Proyecto3Grupo02/Aegis"
              demoLink="https://amphxros.itch.io/aegis-engine"
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={unityLogo}
              isBlog={false}
              title="Unity Telemetry System"
              description="Custom telemetry system made for any engine but mainly Unity.
               It's imported through a .dll file to your project and it's able to send data to many different endpoints."
              ghLink="https://github.com/Agusmoure/Telemetry"

            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={unityLogo}
              isBlog={false}
              title="Trails"
              description="Custom AI visual programming tool using behaviour trees. The point of this project was learning about Scriptable Objects and the Unity Editor"
              ghLink="https://github.com/Agusmoure/Telemetry"

            />
          </Col>

          <Col md={4} className="project-card">
          </Col>

          <Col md={4} className="project-card">
          

          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default OtherProjects;
