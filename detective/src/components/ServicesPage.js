import React from "react";

import ServiceSection from "./CMSComponents/ServiceSection";
import '../styles/Service.css'


export default function ServicesPage(props) {
    const servicePageData = props.data
    return (
        <>
            <section className="main-section">
                <div className="main-section-title section-title-text">Услуги Частного Детектива</div>
                <div className="main-section-text">
                    Услуги частного детектива включают в себя различные виды
                    расследований и отслеживания, которые могут быть проведены
                    частным детективом или частной детективной агентством.
                    Это может включать в себя сбор информации о людях, их местонахождении и действиях,
                    проверку телефона, отслеживание и наблюдение, выявление судебных доказательств,
                    расследование измен и многое другое. Частные детективы могут также предоставлять
                    консультационные услуги и оказывать помощь в различных юридических и бизнес-вопросах.
                </div>
            </section>
            {/* Дальше будет вывод компонентов через ЦМС */}
            {servicePageData && servicePageData.map((item, index) => (
                <ServiceSection key={item.slug.current} number={index + 1} data={item} />
            ))}
        </>
    )

}