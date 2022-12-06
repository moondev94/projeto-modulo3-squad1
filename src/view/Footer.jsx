import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/Footer.css"
import FacebookIcon from "./media/facebook.png"
import InstagramIcon from "./media/instagram.png"
import TwitterIcon from "./media/twitter.png"
import YoutubeIcon from "./media/youtube.png"

const Footer = () => {
    return (
        <Row className="Footer">
            <footer class="StickyFooter">
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

                                <a href="#"><img alt="SocialMedia" src={FacebookIcon}
                            style={{
                                height: 25,
                                width: 25,
                            }} /></a> 
                                <a href="#"><img alt="SocialMedia" src={InstagramIcon}
                            style={{
                                height: 25,
                                width: 25,
                            }} /></a>
                                <a href="#"><img alt="SocialMedia" src={TwitterIcon}
                            style={{
                                height: 25,
                                width: 25,
                            }} /></a>
                                <a href="#"><img alt="SocialMedia" src={YoutubeIcon}
                            style={{
                                height: 25,
                                width: 25,
                            }} /></a>
                                {/*<a href="https://www.flaticon.com/free-icons/twitter" title="twitter icons">Twitter icons created by Freepik - Flaticon</a> */}
                            </Col>
                        </Col>
                        <Col className="footer-col">
                            <a>© DevPlay TV (2022). Todos os direitos reservados.</a>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </Row>
    )
}
export default Footer;
