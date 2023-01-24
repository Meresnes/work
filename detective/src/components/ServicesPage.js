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
            {/* <section>
                <div className="section-title-text">СБОР ИНФОРМАЦИИ</div>
                <div className="section-content">
                    <div className="section-content-image">
                        <img src="" alt="" width={"350px"} height={"350px"} />
                    </div>
                    <div className="section-content-services">
                        <Accordion >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Accordion Item #3</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </section> */}
        </>
    )

}