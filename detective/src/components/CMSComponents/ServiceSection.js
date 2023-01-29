import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

export default function ServiceSection(props) {

    const imgSrc = props.data.mainImage.asset.url || ' '
    const title = props.data.title || ' '
    const categories = props.data.categories || []
    const number = props.number || ' '
    let accordionItems = 'Нет категорий'
    try {
        accordionItems = categories.map((item, index) => (
            <Accordion.Item eventKey={index} key={item.slug.current} >
                <Accordion.Header>
                    <div className="accordion-title">
                        {item.title}
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <div className="accordion-text">
                        {item.description}
                    </div>
                    <div className="accordion-button-field"><Link to={`curent-service/${item.slug.current}`}>
                        <Button className='accordion-link-button' >
                            Подробнее...
                        </Button>
                    </Link></div>

                </Accordion.Body>
            </Accordion.Item>

        ))
    } catch (err) {
        console.log(err)

    }

    return (
        <section>

            <div className="section-title-text">{title}</div>
            <div className={`section-content ${(number % 2 === 0) ? 'reverce' : ''}`}>
                <div className="section-content-image">
                    <img className='section-image' src={imgSrc} alt={props.data.mainImage.asset._id} />
                </div>
                <div className="section-content-services">
                    <Accordion >
                        {accordionItems}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}