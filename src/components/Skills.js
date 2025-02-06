import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skillImage1 from '../assets/img/skillimage1.jpg';
import skillImage2 from '../assets/img/skillimage2.jpg';
import skillImage3 from '../assets/img/skillimage3.jpg';
import skillImage4 from '../assets/img/skillimage4.jpg';
import skillImage5 from '../assets/img/skillimage5.jpg';
import texts from '../assets/texts/texts.json';

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
    };

    const images = [skillImage1, skillImage2, skillImage3, skillImage4, skillImage5];
    const items = texts.services.categories.map((service, index) => ({
        src: images[index],
        alt: 'image',
        title: service.name
    }));

    return (
        <>
            <div id="skills" style={{ height: "100px" }}></div>
            <section className="skill" >
                <Container>
                    <Row>
                        <Col>
                            <div className="skill-bx bordered" >
                                <h2>Servicios</h2>
                                <p>Hacemos muchas cosas y molamos mucho de verdad, creeme</p>
                                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                    {items.map((item, index) => (
                                        <div className="item" key={index}>
                                            <img src={item.src} alt={item.alt} />
                                            <h5>{item.title}</h5>
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}