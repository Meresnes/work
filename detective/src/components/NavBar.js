import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import LogoImg from "../img/logo1.png";
import "../styles/Navbar.css";

export default function NavBar() {

    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <header>
                <Nav className="navbar flex justify-content-around " activeKey="/">
                    <Link to='/work' >
                        <Nav.Item >
                            <Nav>  <img src={LogoImg} alt="logo" width={"170px"} height={"150px"} /> </Nav>
                        </Nav.Item>
                    </Link>
                    <Link to='/work' className='desctop-ver'>
                        <Nav.Item className='nav-text' >
                            <Nav className=''><p>Домашняя страница</p> </Nav>
                        </Nav.Item>
                    </Link>
                    <div className="vr"></div>
                    <Link to='/work/service' className='desctop-ver'>
                        <Nav.Item className='nav-text' >
                            <Nav className=''><p>Услуги</p> </Nav>
                        </Nav.Item>
                    </Link>
                    <div className="vr"></div>
                    <Link to='/work/life' className='desctop-ver'>
                        <Nav.Item className='nav-text'>
                            <Nav className=''><p>Блог детектива</p></Nav>
                        </Nav.Item>
                    </Link>
                    <div className="vr"></div>
                    <Link to='/work/contacts' className='desctop-ver'>
                        <Nav.Item>
                            <Nav className='nav-text' eventkey="link-2">Контакты</Nav>
                        </Nav.Item>
                    </Link>
                    <div className="vr"></div>
                    <Nav.Item className='desctop-ver'>
                        <Nav className='phone'>
                            <a href={'tel:+79210999007'}>+7(921)099-90-07</a>
                        </Nav>
                    </Nav.Item>
                    <div className="mobile-ver">

                        <Navbar.Toggle className='mobile-toggler' onClick={handleShow} />
                        <Offcanvas show={show} onHide={handleClose} className="mobile-offcanv" >
                            <Offcanvas.Header closeButton>
                                {/* <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title> */}
                            </Offcanvas.Header>
                            <Offcanvas.Body className="mobile-offcanv-body">


                                <Nav className="mobile-navbar" >
                                    <Link to='/work' className='' onClick={handleClose} >
                                        <Nav.Item className='nav-text text' >
                                            <Nav className=''><p>Домашняя страница</p> </Nav>
                                        </Nav.Item>
                                    </Link>

                                    <Link to='/work/service' className='' onClick={handleClose}>
                                        <Nav.Item className='nav-text text' >
                                            <Nav className=''><p>Услуги</p> </Nav>
                                        </Nav.Item>
                                    </Link>

                                    <Link to='/work/life' className='' onClick={handleClose}>
                                        <Nav.Item className='nav-text text'>
                                            <Nav className=''><p>Блог детектива</p></Nav>
                                        </Nav.Item>
                                    </Link>

                                    <Link to='/work/contacts' className='' onClick={handleClose}>
                                        <Nav.Item>
                                            <Nav className='nav-text text' eventkey="link-2">Контакты</Nav>
                                        </Nav.Item>
                                    </Link>
                                    <Nav.Item className='text'>
                                        <Nav className='phone'>
                                            <a href={'tel:+79210999007'}>+7(921)099-90-07</a>
                                        </Nav>
                                    </Nav.Item>
                                </Nav>

                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                </Nav>


            </header>
        </>
    )
}