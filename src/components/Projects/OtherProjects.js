import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


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
          </Col>

          <Col md={4} className="project-card">
          </Col>

          <Col md={4} className="project-card">
          </Col>

          <Col md={4} className="project-card">
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
