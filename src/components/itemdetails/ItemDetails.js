import React, { Component } from 'react';
import { Button, Collapse, Media, Row, Col } from 'react-bootstrap';

class ItemDetails extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
				open: false
		};
	}   

	render() {
		return (
			<div>
				<Button 
					className="item-details-button"
					bsstyle="link"
					onClick={() => this.setState({open: !this.state.open})}
					>
					{ this.state.open === false ? 'See' : 'Hide' } item details
					{ this.state.open === false ? ' + ' : ' - '} 
				</Button>
				<Collapse in={this.state.open}>
					<div className="item-description">
						<Media>
							<img className="item-image" alt="thumbnail"
								src="https://i5.walmartimages.com/asr/90c1aad2-a3b3-4711-a29f-7b42b25aeadf_1.e83f74dfd7486d797bd0882996d1e3a4.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
							/>
							<Media.Body>
								<p className="item-text">Essentials of OFM ESS-3085 Racing style Leather Gaming Chair, Red</p>
								<Row className="show-gridt">
									<Col md={6}>
										<strong className="item-text">{`$${this.props.price}`}
										</strong>
										<br/>
										<strong className="price-strike item-text">{`$${this.props.price}`}</strong>
									</Col>
									<Col md={6}>Qty: 1</Col>
								</Row>
							</Media.Body>
						</Media>
					</div>
				</Collapse>
			</div>
		)
	}
}

export default ItemDetails