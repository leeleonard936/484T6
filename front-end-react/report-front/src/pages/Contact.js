import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';


const Contact = () => {
return (
	<div className="div-container">
        <Container fluid>
            <Col>
            <h1>
                <Form method = "POST" action="mailto:sampleemail@gmail.com"/*onSubmit={dothing}*/>
                    <Form.Text muted>
                        Please reach out to us with any questions or requests for information!
                    </Form.Text>
                <div>
        			<Form.Control 
						type="email" 
                        placeholder="name@example.com"  
						name = "submissionEmail"
						id = "submissionEmail"
					/>
                </div>
                <div>
        			<Form.Control 
						as="textarea" 
						rows={3} 
						name = "contactSheet"
						id = "contactSheet"
					/>
				</div>
                </Form>
	        </h1>
            </Col>
        </Container>
	
	</div>
);
};

export default Contact;
