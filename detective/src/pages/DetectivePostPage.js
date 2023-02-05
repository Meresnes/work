import React from "react"
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import SanityBlockContent from "@sanity/block-content-to-react";
import SubmitForm from "../components/SubmitForm";
import Modal from 'react-bootstrap/Modal';

export default function DetectivePostPage(props) {
    const [curentData, setCurentData] = React.useState(null)
    const { slug } = useParams()
    const [onShow, setOnShow] = React.useState(false);

    React.useEffect(() => {

        if (props.data) {
            setCurentData(props.data.filter(item => (item.slug.current === slug)))
        }

    }, [props, slug])

    return (
        <>
            <Modal show={onShow} onHide={() => setOnShow(false)}>
                <SubmitForm />
            </Modal>
            {curentData && <section className="main-section">
                <img className="main-section-img" src={curentData[0].mainImage.asset.url} alt={curentData[0].mainImage.asset._id} />
                <div className="main-section-title section-title-text">{curentData[0].title}</div>
                <div className="main-section-text">
                    {/* {serviceData.body[0].children[0].text} */}
                    <SanityBlockContent blocks={curentData[0].body} />

                </div>
                <div className="main-section-price">
                    <Button className="section-price-button" onClick={() => setOnShow(true)} >Связаться с нами для консультации</Button>
                </div>
            </section>}

        </>
    )
}