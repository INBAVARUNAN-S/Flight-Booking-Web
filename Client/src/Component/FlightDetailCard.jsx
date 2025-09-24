import React from 'react'
import { Card } from 'react-bootstrap'
import { BsThreeDots } from "react-icons/bs";
import Main from '../Component/Main';

const FlightDetailCard = ({flight}) => {
    return (
        <div>
            <Card className='mx-2'>
                <Card.Body>
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <Card.Title className='text-primary fs-6 mb-0'><time>{flight.departure.time} - </time> <time>{flight.arrival.time}</time></Card.Title>
                        <span><BsThreeDots className='fs-6' /></span>
                    </div>

                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center gap-3'>
                            <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACUCAMAAADhypYgAAAAb1BMVEX///8BAQEAAAD8/PwFBQX09PTk5OTx8fH4+Pi7u7vMzMydnZ2amprf39+hoaEJCQnV1dUQEBDr6+t5eXlBQUFubm6UlJRiYmJQUFAVFRWxsbGCgoLBwcFXV1dHR0eIiIg6OjosLCweHh4lJSUzMzMsyMpfAAAHEElEQVR4nO1ca5eqOgzFFOShIII8RAFH/f+/8aZFkUdBmLnSuk73h7PWmfGRTXbaJE1H0xQUFBQUFBQUFBQUFBQUFBQUFBT+BGIEa9vz7ICItuRPMP0svALFwRVtyx/g2uGNsVitVpB9rUuCLK84MEBsiTbol3CiBo0vJUKIRrJ7kwYS8b5SWmQLbR4rOIu26TcwTgB6m8fOWfD7g8xz1uYfJYC6MsquP1aQrP8fG6cgoKvMLcqc9V/iEuOjBL3DY8FYJ5qbg66zZT+PbSd4+3ptwHXWFlZ6l4du/+8WD8FNKA/2rYhLFNvuL0SGuopRVp1AR2UttrEjj5rIijnmloYbZ1AQ63M/eilxI9Z78YE/iT9pexN+3vt6xP6ehhkVGWk7h2jZ5ede2B114ausuBceK3wuh8XWLDNmORH0uMD+etj2dJGxX12zNhOM8033eVSfEw4F1AcQREcqrp4NFaKzab1sydgrAe4dhhjn0P0E+hnFgmsvwkmPfTvq8Idi464NjemKLW90l2tL3+rt59VH7LIladDnvWH5an8XQJmz+L+XdJPJno4DODXfT/OSPg18Wbkkjwru9kJV05dHrbNrVNYKhP228V7i8WjgU4msBSOktsY51cvwIJmHgJraH/QHhlfQXfSW4EE000nGqOgvf8EleLKg+e6OK0mIlg30Joxszxd792HfyrOhPTYZb8ePD+QhrBBBr5TAXX+6qoHdNfeYWzKZdNXEOuIsxT07HxFTOh5//4DIFEmigp1wRd9h8toyuf4wxemKgX276aWTQmVFQ5rzsxWE5mCuvyz88v5eX0POwvXKkIMG7YU4oT6gm7dE4CQ6zlswzynb6mf6BfehkwRx3oJBU/a5+gLKQx53UFBropnywhefLJl0VcPPjzOIUB4SkmAgWbqbTIVl93IyQauCbTGNSdVpkFFXT/jxrt+w4ulqsY7Jr4BP2DpHQ9lIk0hMJNVVA6Z9GC+7KJHvaLsHtP82zkTaFasJGvWJPqougK85mnIOt7GtHr7l/Ba9Eo40J3TJV60mnGLYI0jkLtq+qXB+xvYTvQ4S2YPeOYzGOq7OthZ4ZeyLNnQUhOrqXSUfWukedpet1E6hPN4RuRVVBrDccdt8OJdJ/S6dJQBHQ7S5g/AnpcDMZ/jPUVqXOOmE/PdFZ7/oucgM+AfcPyYT0WEn6R6PuuJ0UwakRmPEk3PV8qmu9K65Q/UJ8tjIWSe6vAaqDgUdkuP4Q9q5Jjfn1CEAd0dLOfUJOsqzpCTippzSENgggH/keATjQ0qsEyqW9kgcPvWCDTREHCKhnHuhceKe46RVXmj2T90gl3HlJZrHW5qgeOa3m942CUcJWxBEs/fteIamPxBm0Y13kHLNMq/tOKfRsWrw0LQz7dc3qej0FFQ69DcQ5FU06yYj7O75cJOvrupPWrZ0pVHxdZdgZHoWlp8Ya9MgD8MasK+9DQ96k33dOS18SylqQ8Ste5/TcdnOj9PuONqKN6FIX9Z+TSEoSGhLgU1lhpmzfj1L68SZUORNWnrH9lYDgvp0WIo/vh/roSTOfOYYQrJrV/wDs8hm0lEgCKmqaCn+NINm5vsi2tpor3voPGf8JXfcBzebW5sHJCJihA7Lrp5cqqN1+Emjslva0uOoIe1HLRHiB4g4nybW+d5Jb3kjJgDH4Ys57r7jkiXH+mugedtetdf/L6btw4KJOy+PFrT/iWqKJrmNHeIA7EanlojW5S2uZD8n18E+Iq7M48USxju0pSlqeI7e/KguePWKD1pVJW80TzSStxNHoV0U1ztwp+Fug6tVA04z3nVIP2/uCIgfVy3Plqzys/W+t06sVrzDVXC9azl5eyAIZTUxcfIvTSKiy0QMFbuVmbQnrkfhNVzSmjgXACagVjZLr01MxDppXAaFVHy9257jnSwtfOOrfMEF2xfd/Q3avSq4T1Y7rXqf74XjRjQRB9hFq5dINhPfSDSnvtuKjCZL8kMgGcuFk9dFkXB6Ktuo8YX36QguPtfScW81k3R6U8Tc10zgR/Th2xrrXdzN7PrR7iZbRPuSz94QwOR1+1OoYjTI6wVoMzVq8XWv8n2OJD+Eym6nFsnkS8OYevqvIFnuAuI4jPIhEzjO6RzW00MgpgXBgX94umRO2Lp1I0KWv5BA6itgcJqeyhLLq/sYubgrVm08ki4d7tM7h0Rb16vEon9ZYBSYPFXnIbPa69nu0WmFTJYzaiuvkqd5RzdmxPoYuo5BIgcRQutXRmRe59D+eVy69GTxyPPUFmBe4XqqRoTo/b0P2TUbxmNqad7f58Cqd6hRLAhEY6c4EJJ5WwK9Ex658vhDe5zaJnM1YhSy8WCntrP/QAvRbGk2wxpG+AubCBF433gIgYwTGf8yvuCOjoKCgoKCgoKCgoKCgoKCgsK/i/8A44BG3OAsm9IAAAAASUVORK5CYII="} alt="" width={50} />
                            <div>
                                <h5 className='mb-1'>{flight.airline}</h5>
                                <p className='mb-1 text-success'>{flight.flight_id} - {flight.flight_duration} - {flight.cabin_class}</p>
                            </div>  
                        </div>
                        <div className='text-end'>
                            <h5 className='mb-1'>{flight.price.currency} {flight.price.amount}</h5>
                            <p className='mb-1 text-secondary fs-6'>Price</p>
                        </div> 
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default FlightDetailCard