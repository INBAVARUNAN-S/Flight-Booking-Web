import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const FilterSection = () => {
    const [form, setForm] = useState({
        from: '',
        to: '',
        date: ''
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', form);
        // Here you can add API calls or filtering logic
    };

    // Reset form
    const handleReset = () => {
        setForm({ from: '', to: '', date: '' });
    };

    return (
        <div className='h-100'>
            <Card className='card-design mt-3 h-100'>
                <Card.Body>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <h5>Filter</h5>
                        <Button
                            variant="primary"
                            className='btn-s'
                            size='sm'
                            type="button"
                            onClick={handleReset}
                        >
                            Reset
                        </Button>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-2" controlId="formFrom">
                            <Form.Label>From</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Coimbatore"
                                name='from'
                                value={form.from}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formTo">
                            <Form.Label>To</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Delhi"
                                name='to'
                                value={form.to}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                name='date'
                                value={form.date}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Button
                            variant="success"
                            className='w-100 btn-color my-4 py-3'
                            type="submit"
                        >
                            Search
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default FilterSection;
