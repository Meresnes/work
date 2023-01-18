import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './ServiceComponents.css'

export default function ServiceComponents(props) {

    const imgSrc = props.data.mainImage.asset.url
    const bodyText = props.data.body
    const componentLink = props.data.slug.current
    const [isHover, setIsHover] = React.useState(false)
    return (
        <Link to={'/service'}>
            <Card className="bg-dark text-white service-card" onMouseLeave={() => setIsHover(false)} onMouseEnter={() => setIsHover(true)}>
                <Card.Img className={`service-image ${isHover ? 'shadow' : ''}`} src={imgSrc} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className={`card-title-text ${isHover ? 'hide' : ''}`}>{props.data.title}</Card.Title>
                    <Card.Text className={`card-body-text ${isHover ? 'visible' : ''}`}>
                        {bodyText}
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Link>
    )
}
