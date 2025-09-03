import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FlightSearchCard = () => {


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
                            <Form>
                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label>From</Form.Label>
                                    <Form.Control type="text" placeholder="Coimbatore" />
                                </Form.Group>

                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                    <Form.Label>To</Form.Label>
                                    <Form.Control type="text" placeholder="Delhi" />
                                </Form.Group>

                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type="date" />
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

export default FlightSearchCard