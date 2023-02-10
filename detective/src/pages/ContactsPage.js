import React from "react";
import YandexMap from "../components/YandexMap";
import SubmitForm from "../components/SubmitForm";
import vkIcon from "../img/vk.png";
import tgIcon from "../img/telegram.png";
import whatsAppIcon from "../img/whatsapp.png";
import emailIcon from "../img/email.png";
import mapFlagIcon from "../img/mapflag.png";
import clockIcon from "../img/clock.png";
import phoneIcon from "../img/phone-call.png";
import emailContactsIcon from "../img/email-icon.png";
import "../styles/ContactsPage.css";

export default function ContactsPage() {
  return (
    <>
      <section className="main-contacts-section">
        <div className="main-section-title section-title-text">Контакты</div>
        <div className="about-us-block">
          <div className="about-us-left">
            <div className="about-us-block__title">Связаться с нами</div>
            <SubmitForm />
          </div>
          <div className="about-us-right">
            <div className="about-us-block__title">Контактная информация</div>
            <div className="about-us-block__text">
              <p>
                <img
                  className="about-us-block__text-img"
                  src={mapFlagIcon}
                  alt="mapFlag"
                />{" "}
                Санкт-Петербург, ул. Мебельная д. 1 этаж 2 офис 7
              </p>
              <p>
                <img
                  className="about-us-block__text-img"
                  src={mapFlagIcon}
                  alt="mapFlag"
                />{" "}
                Санкт-Петербург, Гражданский проспект 41 к.2 "Академ-Парк"
              </p>
              <p>
                <img
                  className="about-us-block__text-img"
                  src={emailContactsIcon}
                  alt="emailContactsIcon"
                />{" "}
                Наша почта :{" "}
                <a href={"mailto:detectiveok@ya.ru"}>detectiveok@ya.ru</a>{" "}
              </p>
              <p>
                <img
                  className="about-us-block__text-img"
                  src={phoneIcon}
                  alt="phoneIcon"
                />{" "}
                Позвоните нам :{" "}
                <a href={"tel:+79210999007"}>+7(921)099-90-07</a>
              </p>
              <p>
                <b>
                  <img
                    className="about-us-block__text-img"
                    src={clockIcon}
                    alt="clockIcon"
                  />{" "}
                  Работаем круглосуточно
                </b>
              </p>
            </div>
            <div className="about-us-block__title">Социальные сети</div>
            <div className="about-us-block__social">
              <a href={"mailto:detectiveok@ya.ru"}>
                <img
                  className="about-us-block__text-img"
                  src={emailIcon}
                  alt="emailIcon"
                />
              </a>
              <a href={"https://wa.me/79210999007"}>
                <img
                  className="about-us-block__text-img"
                  src={whatsAppIcon}
                  alt="whatsAppIcon"
                />
              </a>
              <a href={"tg://resolve?domain=DACNR"}>
                <img
                  className="about-us-block__text-img"
                  src={tgIcon}
                  alt="tgIcon"
                />
              </a>
              <a href={"https://vk.com/chastniydetektivspb"}>
                <img
                  className="about-us-block__text-img"
                  src={vkIcon}
                  alt="vkIcon"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="maps-section">
        <div className="main-section-title section-title-text">
          Как нас найти?
        </div>
        <YandexMap />
      </section>
    </>
  );
}
