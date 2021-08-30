// React
import React from 'react';

// Bootstrap
import { Accordion, AccordionToggle, AccordionCollapse, Card } from 'react-bootstrap';

// Styling
import './styles/DoubleAccordion.css';

const DoubleAccordion = () => {
    return (
        <Accordion>
            <Card>
                <AccordionToggle eventKey="0" className="accordion-toggle">Hello</AccordionToggle>

                <AccordionCollapse eventKey="0">
                    <Card.Body>hello</Card.Body>
                </AccordionCollapse>
            </Card>

            <Card>
                <AccordionToggle eventKey="1" className="accordion-toggle">World</AccordionToggle>

                <AccordionCollapse eventKey="1">
                    <Card.Body>world</Card.Body>
                </AccordionCollapse>
            </Card>
        </Accordion>
    )
}

export default DoubleAccordion;