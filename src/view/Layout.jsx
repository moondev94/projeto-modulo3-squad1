import { Outlet } from "react-router-dom";
import { Navbar, NavbarBrand, Button, Row, } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/Layout.css";
import Logo from "./media/logo.png"


const Layout = () => {
    return (
        <>

            <Navbar className="Header">

                <Row className="row">
                    <NavbarBrand className="Navlogo" href="/">
                        <img
                            alt="Logo"
                            src={Logo}
                            style={{
                                height: 205,
                                width: 375,
                            }} />

                        <div className="NavMenu">
                            <Button className="Btn"
                                color="none"
                                href="/"
                                tag="a">
                                <a>Home</a>
                            </Button>
                            {' '}
                            <Button className="Btn"
                                color="none"
                                href="/Filmes"
                                tag="a">
                                <a>Filmes</a>
                            </Button>
                            {' '}
                            <Button className="Btn"
                                color="none"
                                href="/Sobre"
                                tag="a">
                                <a>Sobre</a>
                            </Button>
                            {' '}
                            <Button className="Btn"
                                color="none"
                                href="/Contato"
                                tag="a">
                                <a>Contato</a>
                            </Button>
                            {' '}

                        </div>



                    </NavbarBrand>
                </Row>

            </Navbar>

            <Outlet />
            <main className="Main">

            </main>

        </>
    )
};

export default Layout; 
