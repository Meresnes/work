import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../styles/NotFoundPage.css'
export default function NotFoundPage() {
    return (
        <>
            <Alert className='main-alert-section' variant="danger" >
                <Alert.Heading className='main-alert-title' >Что-то пошло не так !</Alert.Heading>
                <p className='main-alert-description'>
                    Страница не найдена
                </p>
                <hr />
                <Link to="/work">
                    <Button className='main-alert-button ' variant="dark">
                        На главную
                    </Button>
                </Link>
            </Alert>
        </>
    )
}