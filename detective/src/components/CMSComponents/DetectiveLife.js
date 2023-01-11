import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Holder from '../../img/holder.png'

import './DetectiveLife.css'

export default function DetectiveLife(props) {

    return (
        <Card className='cart detective-cart' center>
            <Card.Img className='detective-cart-img rounded' variant="top" src={Holder} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}