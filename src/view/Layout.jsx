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

            <Outlet />

        </>
    )
};

export default Layout; 
