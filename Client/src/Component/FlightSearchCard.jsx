import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { GiConsoleController } from 'react-icons/gi';

const FlightSearchCard = ({ getData }) => {

    const [userData, setUserData] = useState({
        from: '',
        to: '',   
        date: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);

        setUserData({
            ...userData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getData(userData.from, userData.to, userData.date);
    }


    return (
        <div>
            <Card className='card-design my-3'>
                <Card.Body>
                    <div className="row">
                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12 fs-6'>
                            <Card.Subtitle className="mb-2 ">Where would you want to go ?</Card.Subtitle>
                            {/* <Card.Title className='fs-1'>Book a Flight</Card.Title>    */}
                            <img src={"https://5.imimg.com/data5/CA/HH/FC/SELLER-102861858/flight-booking-500x500.jpg"} className='flight-img' alt="" />
                        </div>
                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                            <Form onSubmit={(e) => handleSubmit(e)}>
                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label>From</Form.Label>
                                    <Form.Control type="text" placeholder="Coimbatore" onChange={handleChange} value={userData.from} name='from' />
                                </Form.Group>

                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                    <Form.Label>To</Form.Label>
                                    <Form.Control type="text" placeholder="Delhi" onChange={handleChange} value={userData.to} name='to' />
                                </Form.Group>

                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type="date" onChange={handleChange} value={userData.date} name='date' />
                                </Form.Group>

                                <Button variant="success" className='w-100 btn-color my-4 py-3' type="submit">
                                    Search
                                </Button>
                            </Form>
                        </div>
                    </div>

                </Card.Body>
            </Card>
        </div>
    )
}

export default FlightSearchCard;