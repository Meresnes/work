import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import "../styles/navbar.css"
import LogoImg from "../img/holder.png"

export default function NavBar() {
    const hideStyle = {
        visibility: "hidden",
    }
    return (
        <>
            <header>
                <Nav className="navbar flex justify-content-around " activeKey="/home">
                    <Nav.Item >
                        <Nav.Link href="/home">  <img src={LogoImg} alt="logo" width={"350px"} height={"100px"} /> </Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link className='nav-text' href="/home">Услуги </Nav.Link>
                        {/* Метод show показывает дропдаун , чтобы давать слили нужно прописать класс и !important */}
                        <Dropdown.Menu show>
                            <Nav.Item eventKey="1">Action</Nav.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Nav.Item>
                    <div className="vr"></div>
                    <Nav.Item>
                        <Nav.Link className='nav-text' eventKey="link-1">Жизнь детектива</Nav.Link>
                    </Nav.Item>
                    <div className="vr"></div>
                    <Nav.Item>
                        <Nav.Link className='nav-text' eventKey="link-2">Контакты</Nav.Link>
                    </Nav.Item>
                    <div className="vr"></div>
                    <Nav.Item>+7(921)099-90-07 <Nav.Link className='nav-text' style={hideStyle} ></Nav.Link></Nav.Item>

                </Nav>


            </header>
        </>
    )
}