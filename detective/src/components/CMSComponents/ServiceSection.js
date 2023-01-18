import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

export default function ServiceSection(props) {

    const imgSrc = props.data.mainImage.asset.url
    const title = props.data.title
    const categories = props.data.categories
    const number = props.number

    const accordionItems = categories.map((item, index) => (
        < Accordion.Item eventKey={index} key={item.slug.current} >
            <Accordion.Header>{item.title}</Accordion.Header>
            <Accordion.Body>
                {item.description}
            </Accordion.Body>
        </Accordion.Item >

    ))
    // console.log(props.number)
    return (
        <section>
            {/* {console.log(categories)} */}
            <div className="section-title-text">{title}</div>
            <div className={`section-content ${(number % 2 == 0) ? 'reverce' : ''}`}>
                <div className="section-content-image">
                    <img src={imgSrc} alt="" width={"400px"} height={"350px"} />
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