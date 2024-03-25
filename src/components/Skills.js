import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        },
    }

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Services</h2>
                            <p>We provide the best Services for our Horses. Because only a horse  knows what a horse wants</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={''} alt="image" />
                                    <h5>Riders Community</h5>
                                </div>
                                <div className="item">
                                    <img src={''} alt="image" />
                                    <h5>Best Horse Caring</h5>
                                </div>
                                <div className="item">
                                    <img src={''} alt="image" />
                                    <h5>24/7 Client Service</h5>
                                </div>
                                <div className="item">
                                    <img src={''} alt="image" />
                                    <h5>We solve World Hunger</h5>
                                </div>
                                <div className="item">
                                    <img src={''} alt="image" />
                                    <h5>Cure for Cancer</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}