import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
<Row className="Footer">
                <footer class="footer">
                    <Container className="container">
                        <Row className="row">
                            <Col className="footer-col">
                                <h4>Sobre</h4>
                                <ul>
                                    <li><a href="#">Quem Somos</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Política de Privacidade</a></li>
                                    <li><a href="#"></a></li>
                                    <li><a href="#"></a></li>
                                </ul>
                            </Col>
                            <Col className="footer-col">
                                <h4>follow us</h4>
                                <Col className="social-links">

                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                </Col>
                            </Col>
                            <Col className="footer-col">
                                <a>© Popcorn TV (2022). Todos os direitos reservados.</a>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </Row>
    )}
    export default Footer;
