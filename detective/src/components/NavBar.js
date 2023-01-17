import Nav from 'react-bootstrap/Nav';
import React from 'react';

import "../styles/navbar.css"
import LogoImg from "../img/holder.png"

export default function NavBar() {
    const hideStyle = {
        visibility: "hidden",
    }
    const [show, setShow] = React.useState(false)
    return (
        <>
            <header>
                <Nav className="navbar flex justify-content-around " activeKey="/">
                    <Nav.Item >
                        <Nav.Link href="/work/">  <img src={LogoImg} alt="logo" width={"350px"} height={"100px"} /> </Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link className='nav-text' href="/work/service/">Услуги </Nav.Link>
                        {/* Метод show показывает дропдаун , чтобы давать слили нужно прописать класс и !important */}
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
                    <Nav.Item className='nav-phone-text'>+7(921)099-90-07 <Nav.Link className='nav-text' style={hideStyle} ></Nav.Link></Nav.Item>

                </Nav>


            </header>
        </>
    )
}