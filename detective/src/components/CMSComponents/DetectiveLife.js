import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Holder from '../../img/holder.png'

export default function DetectiveLife(props) {
    const Styles = {
        width: "380px",
        height: '580px',
        margin: "50px 50px"
    }
    return (
        <Card className='medium' style={Styles} center>
            <Card.Img variant="top" src={Holder} height={"350px"} width />
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