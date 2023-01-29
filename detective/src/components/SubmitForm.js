import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputMask from 'react-input-mask';


export default function SubmitForm() {
    const [userName, setUserName] = React.useState('')
    const [userEmail, setUserEmail] = React.useState('')
    const [userPhoneNumber, setUserPhoneNumber] = React.useState('+7')

    const submitHandler = () => {
        if (userName.length > 1 && userPhoneNumber.length === 18) {
            alert("Тут будет отправка запроса")
            // Здесь будет отправка сообщения на почту 
        } else {
            alert("Введите коректные данные")
        }
    }
    return (
        <>
            <Form className='contact-us-block__form'>
                <Form.Group className="mb-3 form-field" controlId="formBasicText">
                    <Form.Label>Ваше имя</Form.Label>
                    <Form.Control type="text" value={userName} onChange={e => setUserName(prev => e.target.value)} placeholder="Введите ваше имя *" />

                </Form.Group>
                <Form.Group className="mb-3 form-field" controlId="formBasicEmail">
                    <Form.Label>Почта</Form.Label>
                    <Form.Control type="email" value={userEmail} onChange={e => setUserEmail(prev => e.target.value)} placeholder="Введите ваш e-mail" />
                    {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3 form-field" controlId="phoneNumber">
                    <Form.Label>Номер телефона</Form.Label>
                    <InputMask
                        mask="+7 (999) 999-99-99"
                        maskChar={null}
                        value={userPhoneNumber}
                        onChange={e => setUserPhoneNumber(prev => e.target.value)}
                    >
                        {(inputProps) => <Form.Control {...inputProps} type="tel" placeholder="Введите номер телефона" required />}
                    </InputMask>
                </Form.Group>
                <div className="form-submit-btn">
                    <Button className='submit-btn' onClick={submitHandler}  >
                        Нанять детектива
                    </Button>
                </div>
            </Form>
        </>
    )
}