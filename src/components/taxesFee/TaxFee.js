import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class TaxFee extends Component {
    render() {
        return (
            <Row className="show-grid">
                <Col md={6}>Est. taxes & fees (Based on 94805)</Col>
                <Col md={6}>{`$${this.props.taxes}`}</Col>
            </Row>
        )
    }
}

export default TaxFee