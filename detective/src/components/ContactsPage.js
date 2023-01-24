import React from 'react';
import { YMaps, Map, Placemark, FullscreenControl, ZoomControl } from '@pbe/react-yandex-maps';
import ContactImg from '../img/contactPage.png'
import SubmitForm from './SubmitForm';
import vkIcon from '../img/vk.png'
import tgIcon from '../img/telegram.png'
import whatsAppIcon from '../img/whatsapp.png'
import '../styles/ContactsPage.css'


export default function ContactsPage() {
    const defaultState = {
        center: [59.990994, 30.251872],
        zoom: 17,
        controls: [],
        ZoomControl: [false],
    };

    return <>

        <section className="main-contacts-section">
            <div className="main-section-title section-title-text">Контакты</div>
            <div className="contact-info-block">

                <div className="main-contacts-block">
                    <div className="section-content-image">
                        <img className='contact-section-image' src={ContactImg} alt='contact.png' />
                    </div>
                    <div className="contact-us-block">
                        <SubmitForm />
                    </div>

                </div>

            </div>
            <div className="about-us-block">
                <div className="about-us-block__collum">
                    <div className="about-us-block__title">Адрес</div>
                    <div className="about-us-block__text">
                        <p>Санкт-Петербург, ул. Мебельная д. 1 этаж 2 офис 7</p>
                        <p>Санкт-Петербург, Гражданский проспект 41 к.2 "Академ-Парк"</p>
                        <p>Выезжаем для консультации в любой район Санкт-Петербурга</p>
                    </div>
                </div>
                <div className="about-us-block__collum">
                    <div className="about-us-block__title">Работаем круглосуточно</div>
                    <div className="about-us-block__text">
                        <p>Прием ведется исключительно по предварительной записи для обеспечения полной конфиденциальности</p>

                    </div>
                </div>
                <div className="about-us-block__collum">
                    <div className="about-us-block__title">Связаться</div>
                    <div className="about-us-block__text">
                        <p>+7 (921) 099-90-07</p>
                        <p>+7 (812) 997-73-99</p>
                        <p>Почта: detectiveok@yandex.ru</p>

                    </div>
                </div>
            </div>

        </section>
        <section className="maps-section">
            <div className="main-section-title section-title-text">Где мы находимся?</div>


            <YMaps>
                <Map width={"100%"} height={"500px"} defaultState={defaultState} behaviors={{ scrollZoom: false }} >
                    <Placemark geometry={[59.990994, 30.251872]} />
                    <FullscreenControl />
                    <ZoomControl options={{ float: "left", scrollZoom: "false" }} />

                </Map>
            </YMaps>


        </section>
    </>
}