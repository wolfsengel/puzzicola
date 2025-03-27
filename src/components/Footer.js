import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo_aitana_bgless.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <>
            <footer className="footer bordered">
                <Container>
                    <Row className="align-items-center">
                        <Col size={12} sm={6}>
                            <img src={logo} alt="Logo" />
                        </Col>
                        <Col size={12} sm={6} className="text-center text-sm-end ">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/company/puzzi-cola-publi"><img src={navIcon1} alt="Icon" /></a>
                                <a href="https://www.facebook.com/share/1A8sU7nHyB/?mibextid=wwXIfr"><img src={navIcon2} alt="Icon" /></a>
                                <a href="https://www.instagram.com/puzzi.cola.publi/"><img src={navIcon3} alt="Icon" /></a>
                            </div>
                        </Col>
                        <Col className="text-center text-sm-end">
                            <span className="pPeroConOtroTono">Copyright 2022. All Rights Reserved</span>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}