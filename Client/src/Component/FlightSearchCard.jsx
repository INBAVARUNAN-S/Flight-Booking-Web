import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import plane_img from './../assets/airplane.png';

const FlightSearchCard = ({ getData,handleChanges,from,to,date }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        getData();
    }

    return (
        <div>
            <Card className='card-design my-3'>
                <Card.Body>
                    <div className="row">
                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12 fs-6'>
                            <Card.Subtitle className="mb-2 ">Where would you want to go ?</Card.Subtitle>
                            <img src={plane_img} alt="" />
                        </div> 
                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                            <Form onSubmit={(e) => handleSubmit(e)}>
                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label>From</Form.Label>
                                    <Form.Control type="text" placeholder="Coimbatore" onChange={handleChanges}  name='from' />
                                </Form.Group>

                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                    <Form.Label>To</Form.Label>
                                    <Form.Control type="text" placeholder="Delhi" onChange={handleChanges}  name='to' />
                                </Form.Group> 

                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type="date" onChange={handleChanges}  name='date' />
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
