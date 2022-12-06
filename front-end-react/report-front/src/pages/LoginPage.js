import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const LoginPage = () => {
return (
	<div className="div-container">
		<Container fluid style={{padding: 40}}>
			<h1> Login </h1>
			<hr></hr>
			<Row className="justify-content-md-center flex-fill" md = {2} style={{padding: 40}}>
				<Col>
					<Card className='shadow' md={6}>
						<Card.Body>
						<Row>
							<Col>
								<div className="mb-3 mt-md-4">
									<div className="mb-3">

										<Form style={{fontSize:20}}>
											<Form.Group className="mb-3" controlId="formBasicEmail">
												<Form.Label className="text-center">
													Email address
												</Form.Label>
												<Form.Control type="email" placeholder="Enter email" />
											</Form.Group>

                      						<Form.Group className="mb-3" controlId="formBasicPassword">
												<Form.Label>Password</Form.Label>
												<Form.Control type="password" placeholder="Enter password" />
											</Form.Group>
											
											<div>
                        						<Button variant="primary" type="submit">
                          							Submit
                        						</Button>
                      						</div>

                    					</Form>

                  					</div>
                				</div>
							</Col>
						</Row>
						</Card.Body>
					</Card>
				</Col>
				
      		</Row>

			  <p className="mb-0 text-center">
					<a href="./Contact.js" className="text-primary fw-bold" style={{fontSize: 15}}>  {/* Needs to be linked to the right place; I wasn't sure what to link yet */}
                        Apply for an Account
                    </a>
                </p>

        </Container>
	</div>
);
};

export default LoginPage;