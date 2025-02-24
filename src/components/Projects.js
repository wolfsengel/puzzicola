import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectsCard";
import projImg1 from "../assets/img/horse-caring.jpg";
import projImg2 from "../assets/img/horse-caring.jpg";
import projImg3 from "../assets/img/horse-caring.jpg";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Joyería Paquita',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imgUrl: projImg1,
    },
    {
      title: 'Escuela de Musica Josefinos',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imgUrl: projImg2,
    },
    {
      title: 'Pim Pam Toma Lacasitos.com',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imgUrl: projImg3,
    }
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
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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