import React from 'react'
import Card from 'react-bootstrap/Card';

const FlightSearchCard = () => {


    return (
        <div>
            <Card className='card-design'>
                <Card.Body>
                    <div className="row">
                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12 fs-6'>
                            <Card.Title className=''>Book a Flight</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Where would you want to go ?</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </div>

                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </div>
                    </div>

                </Card.Body>
            </Card>
        </div>
    )
}

export default FlightSearchCard