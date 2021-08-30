// React
import React from 'react';

// Bootstrap
import Accordion from'react-bootstrap/Accordion';

// Styling
import './styles/DoubleAccordion.css';

// Components
import BulletContent from './BulletContent';

// Data

const DoubleAccordion = ( {content}) => {
    return (
        <Accordion flush>
        <Accordion.Item eventKey="0">
            <Accordion.Header>Successes</Accordion.Header>
            <Accordion.Body>
                <BulletContent bullets={content.successes}/>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Project Potential</Accordion.Header>
            <Accordion.Body>
                <BulletContent bullets={content.potentials}/>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    )
}

export default DoubleAccordion;