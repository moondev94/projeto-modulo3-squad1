import { Outlet, Link } from "react-router-dom";
import { Navbar, NavbarBrand, Button, Container, Row, Col } from "reactstrap";
import "./css/Layout.css";


const Layout = () => {
    return (
        <>

            <Navbar className="my-2">
                <NavbarBrand href="/">
                    <img
                        alt="logo"
                        src=""
                        style={{
                            height: 40,
                            width: 40
                        }} />

                    <div className="menu">
                        <ul>
                            <li>
                                <Button className="nm" color="dark"><Link to="/">Home</Link></Button>
                            </li>
                            <li>
                                <Button className="nm" color="dark"><Link to="/Filmes">Filmes</Link></Button>
                            </li>
                            <li>
                                <Button className="nm" color="dark"><Link to="/Sobre">Sobre</Link></Button>
                            </li>
                            <li>
                                <Button className="nm" color="dark"><Link to="/Contato">Contato</Link></Button>
                            </li>
                        </ul>
                    </div>

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
                                    <li><a href="#"></a></li>
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
                        </Row>
                    </Container>
                </footer>
            </Row>

            <Outlet />

        </>
    )
};

export default Layout; 