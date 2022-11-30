import {Outlet} from "react-router-dom";
import { Navbar, NavbarBrand, Button, Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/Layout.css";


const Layout = () => {
    return (
        <>

            <Navbar className="Header">
                <NavbarBrand className="Navlogo" href="/">
                    <img
                        alt="Logo"
                        src=""
                        style={{
                            height: 40,
                            width: 40
                        }} />

                    <Row className="NavMenu">
                        <div className="">
                            <Button outline
                                color="secondary"
                                href="/"
                                tag="a">
                                Home
                            </Button>
                            {' '}
                            <Button outline
                                color="secondary"
                                href="/Filmes"
                                tag="a">
                                Filmes
                            </Button>
                            {' '}
                            <Button outline
                                color="secondary"
                                href="/Sobre"
                                tag="a">
                                Sobre
                            </Button>
                            {' '}
                            <Button outline
                                color="secondary"
                                href="/Contato"
                                tag="a">
                                Contato
                            </Button>
                            {' '}

                        </div>

                    </Row>
                </NavbarBrand>
            </Navbar>




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

            <Outlet />

        </>
    )
};

export default Layout; 