import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { AiOutlineCheckCircle } from "react-icons/ai";
import DetectiveLife from './CMSComponents/DetectiveLife';
import Footer from './Footer';
import DetectivePhoto from "../img/detective-photo.png"
import Holder from "../img/holder.png"
import "../styles/main.css"

export default function Main() {

    return (
        <>
            <div className="topcontainer__main">
                <div className="title-block">
                    <h3>Частный детектив</h3>
                </div>
                <div className="content-block">
                    <div className="row">
                        <div className="service-block col">
                            Lorem ipsum dolor sit amet
                        </div>
                        <div className="service-block col">
                            Lorem ipsum dolor sit amet
                        </div>
                        <div className="service-block col">
                            Lorem ipsum dolor sit amet
                        </div>
                        <div className="service-block col">
                            Lorem ipsum dolor sit amet
                        </div>
                    </div>
                    <div className="row">
                        <div className="service-block col">
                            Lorem ipsum dolor sit amet
                        </div>
                        <div className="service-block col">
                            Lorem ipsum dolor sit amet
                        </div>
                        <div className="service-block col">
                            Lorem ipsum dolor sit amet
                        </div>
                        <div className="service-block col">
                            Lorem ipsum dolor sit amet
                        </div>
                    </div>
                </div>

            </div>
            <div className="main-content">
                <div className="block">
                    <div className="left-block">
                        <img src={DetectivePhoto} height={"550px"} alt="Detective" />
                    </div>
                    <div className="right-block">
                        <div className="title"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <div className="name">Владимир Петрухин </div>
                        <Button variant="outline-primary">Подробнее</Button>{' '}
                    </div>
                </div>

                <div className="block">
                    <div className="right-block">
                        <div className="title"> Визитная карточка</div>
                        <div className="name">Lorem ipsum dolor sit amet consectet</div>
                        <Button variant="outline-primary">Подробнее</Button>{' '}
                    </div>
                    <div className="left-block">
                        <img src={Holder} height={"550px"} alt="Detective" />
                    </div>
                </div>
                <div className="about-block">
                    <div className="title">О нас</div>
                    <div className="main-block">
                        <div className="side-block">
                            <div className="achievement-block">
                                <div className="icon">
                                    <AiOutlineCheckCircle />
                                </div>
                                <div className="achievement-title">Lorem</div>
                                <div className="achievement-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                            </div>
                            <div className="achievement-block">
                                <div className="icon">
                                    <AiOutlineCheckCircle />
                                </div>
                                <div className="achievement-title">Lorem</div>
                                <div className="achievement-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                            </div>
                            <div className="achievement-block">
                                <div className="icon">
                                    <AiOutlineCheckCircle />
                                </div>
                                <div className="achievement-title">Lorem</div>
                                <div className="achievement-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                            </div>
                        </div>
                        <div className="center-block">
                            <iframe width="760" height="515" src="https://www.youtube.com/embed/jt2m440S3Uk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="side-block">
                            <div className="achievement-block">
                                <div className="icon">
                                    <AiOutlineCheckCircle />
                                </div>
                                <div className="achievement-title">Lorem</div>
                                <div className="achievement-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                            </div>
                            <div className="achievement-block">
                                <div className="icon">
                                    <AiOutlineCheckCircle />
                                </div>
                                <div className="achievement-title">Lorem</div>
                                <div className="achievement-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                            </div>
                            <div className="achievement-block">
                                <div className="icon">
                                    <AiOutlineCheckCircle />
                                </div>
                                <div className="achievement-title">Lorem</div>
                                <div className="achievement-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="life-block block">
                <div className="title">Жизнь детектива</div>


                <Carousel className='carousel-block' variant="dark" interval={null}>
                    <Carousel.Item className='carousel-item'>
                        <div className="carousel-inside">
                            <DetectiveLife title={'Title 1'} />
                            <DetectiveLife title={'Title 1.2'} />
                            <DetectiveLife title={'Title 1.3'} />
                        </div>
                    </Carousel.Item>

                    <Carousel.Item className='carousel-item'>
                        <div className="carousel-inside">
                            <DetectiveLife title={'Title 2'} />
                            <DetectiveLife title={'Title 2.2'} />
                            <DetectiveLife title={'Title 2.3'} />
                        </div>
                    </Carousel.Item>

                    <Carousel.Item className='carousel-item'>
                        <div className="carousel-inside">
                            <DetectiveLife title={'Title 3'} />
                            <DetectiveLife title={'Title 3.2'} />
                            <DetectiveLife title={'Title 3.3'} />
                        </div>
                    </Carousel.Item>
                </Carousel>

            </div>
            <Footer />
        </>
    )
} 