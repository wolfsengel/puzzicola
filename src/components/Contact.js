import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import contactImg from "../assets/img/aitana_cara.png";

export const Contact = () => {

    return (
        <>
            <section>
                <Container id="connect" style={{ height: "20vh" }} />
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} className="text-center mb-4">
                            <img src={contactImg} alt="contact us" className="img-fluid rounded-circle" style={{ width: "40vh"}} />
                        </Col>
                        <Col md={6}>
                            <h2 className="mb-4 text-center">Háblanos sin compromiso</h2>
                            <form>
                                <Row>
                                    <Col md={12} className="mb-3 text-center">
                                        <h4>Contact Information</h4>
                                    </Col>
                                    <Col id="contactBtns" md={12} className="d-flex flex-column align-items-center">
                                        <button style={{ width: "30vh", marginBottom: "10px" }} className="new-email" onClick={() => window.location.href = 'tel:+1234567890'} onMouseOver={(e) => e.target.innerText = 'Llámanos'} onMouseOut={(e) => e.target.innerText = '+1234567890'}><span>+34 639 758 034</span></button>
                                        <button style={{ width: "30vh", marginBottom: "10px" }} className="mb-2" onClick={() => window.location.href = 'mailto:info@example.com'} onMouseOver={(e) => e.target.innerText = 'Envíanos un email'} onMouseOut={(e) => e.target.innerText = 'info@example.com'}><span>info@puzzicola.com</span></button>
                                        <button style={{ width: "30vh", marginBottom: "10px" }} onClick={() => window.open('https://www.instagram.com/puzzi.cola.publi/', '_blank')} onMouseOver={(e) => e.target.innerText = 'Síguenos en Instagram'} onMouseOut={(e) => e.target.innerText = '@yourprofile'}><span>@puzzi.cola.publi</span></button>
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
                <Container style={{ height: "10vh" }} />
            </section>
        </>
    )
}