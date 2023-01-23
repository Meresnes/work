import React from "react"
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import SanityBlockContent from "@sanity/block-content-to-react";

export default function DetectivePostPage(props) {
    const [curentData, setCurentData] = React.useState(null)
    const { slug } = useParams()
    console.log(props)
    React.useEffect(() => {

        if (props.data) {
            setCurentData(props.data.filter(item => (item.slug.current === slug)))
        }
        console.log(curentData)
    }, [props])

    return (
        <>{curentData && <section className="main-section">
            {console.log(curentData[0].mainImage.asset.url)}
            <img className="main-section-img" src={curentData[0].mainImage.asset.url} alt={curentData[0].mainImage.asset._id} />
            <div className="main-section-title section-title-text">{curentData[0].title}</div>
            <div className="main-section-text">
                {/* {serviceData.body[0].children[0].text} */}
                <SanityBlockContent blocks={curentData[0].body} />

            </div>
            <div className="main-section-price">
                <Button className="section-price-button" >Связаться с нами для консультации</Button>
            </div>
        </section>}

        </>
    )
}