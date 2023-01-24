import Nav from 'react-bootstrap/Nav';
import React from 'react';
import { Link } from "react-router-dom";
import LogoImg from "../img/holder.png"
import "../styles/Navbar.css"

export default function NavBar() {


    return (
        <>
            <header>
                <Nav className="navbar flex justify-content-around " activeKey="/">
                    <Link to='/work'>
                        <Nav.Item >
                            <Nav>  <img src={LogoImg} alt="logo" width={"350px"} height={"100px"} /> </Nav>
                        </Nav.Item>
                    </Link>
                    <Link to='/work/service'>
                        <Nav.Item className='nav-text' >
                            <Nav className=''><p>Услуги</p> </Nav>
                        </Nav.Item>
                    </Link>
                    <div className="vr"></div>
                    <Link to='/work/life'>
                        <Nav.Item className='nav-text'>
                            <Nav className=''><p>Блог детектива</p></Nav>
                        </Nav.Item>
                    </Link>
                    <div className="vr"></div>
                    <Link to='/work/contacts'>
                        <Nav.Item>
                            <Nav className='nav-text' eventkey="link-2">Контакты</Nav>
                        </Nav.Item>
                    </Link>
                    <div className="vr"></div>
                    <Nav.Item ><Nav className='phone'><a href={'tel:+79210999007'}>+7(921)099-90-07</a></Nav></Nav.Item>

                </Nav>


            </header>
        </>
    )
}