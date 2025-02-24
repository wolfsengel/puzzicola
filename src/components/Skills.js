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

    const CustomLeftArrow = ({ onClick }) => {
        return (
            <button 
                onClick={onClick} 
                className="custom-arrow custom-arrow-left"
                style={{
                    position: 'absolute',
                    left: '0',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 1
                }}
            >
                <span style={{ color: 'white', fontSize: '1.5rem' }}>&#9664;</span>
            </button>
        );
    };
    
    const CustomRightArrow = ({ onClick }) => {
        return (
            <button 
                onClick={onClick} 
                className="custom-arrow custom-arrow-right"
                style={{
                    position: 'absolute',
                    right: '0',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 1
                }}
            >
                <span style={{ color: 'white', fontSize: '1.5rem' }}>&#9654;</span>
            </button>
        );
    };
    const images = [skillImage1, skillImage2, skillImage3, skillImage4, skillImage5];
    const items = texts.services.categories.map((service, index) => ({
        src: images[index],
        alt: 'image',
        title: service.name
    }));

    return (
        <>
            <div id="skills" style={{ height: "20vh" }}></div>
            <section className="skill">
                <Container>
                    <Row>
                        <Col>
                            <div className="skill-bx">
                                <h2 style={{ fontSize: "5rem" }}>Servicios</h2>
                                <p style={{ fontSize: "1.25rem" }}>Hacemos muchas cosas y más...</p>
                                <Carousel 
                                    responsive={responsive} 
                                    infinite={true} 
                                    autoPlay={true} 
                                    autoPlaySpeed={1000} 
                                    transitionDuration={1000} 
                                    className="skill-slider"
                                    customLeftArrow={<CustomLeftArrow />}
                                    customRightArrow={<CustomRightArrow />}
                                >
                                    {items.map((item, index) => (
                                        <div key={index} className="item">
                                            <img src={item.src} alt={item.alt} style={{ width: "100%", height: "auto", maxHeight: "300px" }} />
                                            <h5 style={{ fontSize: "1.5rem", marginTop: "10px" }}>{item.title}</h5>
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div  style={{ height: "30vh" }}></div>
        </>
    );
}