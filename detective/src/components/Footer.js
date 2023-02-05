import React from "react";
import vkIcon from '../img/vk.png';
import tgIcon from '../img/telegram.png';
import whatsAppIcon from '../img/whatsapp.png';
import emailIcon from '../img/email.png';
import LogoImg from "../img/logo1.png";
import '../styles/Footer.css';

export default function Footer() {
    return (
        <>
            <footer>
                <div className="row top-row">


                    {/* <div className="col">
                        <div className="title">Жизнь детектива</div>
                        <div className="text">Сведине о Детективе</div>
                        <div className="text">Lorem</div>
                        <div className="text">Lorem</div>
                        <div className="text">Lorem</div>

                    </div> */}
                    <div className="col top-col ">
                        <div className="title">Контакты</div>
                        <div className="text">Санкт-Петербург, ул. Мебельная д. 1 этаж 2 офис 7</div>
                        <div className="text">Санкт-Петербург, Гражданский проспект 41 к.2 "Академ-Парк"</div>
                        <div className="text"><a href={'mailto:detectiveok@ya.ru'}>detectiveok@ya.ru</a></div>
                        <div className="text"><a href={'tel:+79210999007'}>+7(921)099-90-07</a></div>
                    </div>
                    <div className="col top-col">
                        <div className="title"></div>
                        <div className="text"><img src={LogoImg} width={'100px'} alt='logo' /></div>
                        <div className="text copirated">ЛИЦЕНЗИЯ СЕРИИ ЧД №002603 ВЫДАНА ГУ Росгвардии РОССИИ ПО СПБ И ЛО
                            © 2019 Центр Независимых Расследований</div>
                        <div className="text copirated">Все права защищены.
                            Информация, представленная на сайте, не является публичной офертой.
                        </div>
                    </div>




                </div>
                <div className="row top-border">

                    <div className="col social-col">
                        <a href={'mailto:detectiveok@ya.ru'}><img className='about-us-block__text-img' src={emailIcon} alt="emailIcon" /></a>
                        <a href={'https://wa.me/79210999007'}><img className='about-us-block__text-img' src={whatsAppIcon} alt="whatsAppIcon" /></a>
                        <a href={'tg://resolve?domain=DACNR'}><img className='about-us-block__text-img' src={tgIcon} alt="tgIcon" /></a>
                        <a href={'https://vk.com/chastniydetektivspb'}><img className='about-us-block__text-img' src={vkIcon} alt="vkIcon" /></a>
                    </div>

                </div>
            </footer>
        </>
    )
}