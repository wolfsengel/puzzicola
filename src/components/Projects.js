import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectsCard";
import projImg1 from "../assets/img/A TABERNA DE ÁLVARO.png";
import projImg2 from "../assets/img/CAFÉ PARÍS.png";
import projImg3 from "../assets/img/ESCUELA DE MÚSICOS.png";
import projImg4 from "../assets/img/KICKSTRICKER1.png";
import projImg5 from "../assets/img/MACALA1.png";
import projImg6 from "../assets/img/NVOGUE.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Kickstricker',
      description: '',
      imgUrl: projImg4,
    },
    {
      title: 'Escuela de Músicos',
      description: '',
      imgUrl: projImg3,
    },
    {
      title: 'Macala',
      description: '',
      imgUrl: projImg5,
    },
    {
      title: 'A taberna de Álvaro',
      description: '',
      imgUrl: projImg1,
    },
    {
      title: 'Nvogue',
      description: '',
      imgUrl: projImg6,
    },
    {
      title: 'Café Bar París',
      description: '',
      imgUrl: projImg2,
    },
  ]

  return (
    <>

      <section className="project bordered"  >
        <div style={{ height: "20vh" }}id="projects"></div>
        <Container >
          <Row >
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div>
                    <h2 style={{ fontSize: "5rem" }}>Projects</h2>
                    <p></p>
                    <div className="project-bx">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </div>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <div style={{ height: "20vh" }}></div>
      </section>
    </>
  )
}