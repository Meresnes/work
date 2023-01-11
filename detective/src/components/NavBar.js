import Nav from 'react-bootstrap/Nav';
import "../styles/navbar.css"
import LogoImg from "../img/logo.svg"

export default function NavBar() {
    const navStyle = {
        color: "black",
        cursor: "pointer",
    }
    return (
        <>
            <header>
                <Nav className="navbar flex justify-content-around " activeKey="/home">
                    <Nav.Item >
                        <Nav.Link style={navStyle} href="/home">  <img src={LogoImg} alt="logo" width={"350px"} height={"100px"} /> </Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link style={navStyle} href="/home">Услуги </Nav.Link>
                    </Nav.Item>
                    <div class="vr"></div>
                    <Nav.Item>
                        <Nav.Link style={navStyle} eventKey="link-1">Жизнь детектива</Nav.Link>
                    </Nav.Item>
                    <div class="vr"></div>
                    <Nav.Item>
                        <Nav.Link style={navStyle} eventKey="link-2">Контакты</Nav.Link>
                    </Nav.Item>
                    <div class="vr"></div>
                    <Nav.Item style={navStyle}>+7(921)099-90-07</Nav.Item>

                </Nav>


            </header>
        </>
    )
}