import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AboutUs = () => {
return (
	<div className="div-container">
        <Container fluid>
            <h1>
		        Make A Report
	        </h1>
			<Form>
				<div>
          			<Form.Check
            inline
            label="1"
            name="group1"
            type="radio"
            id="oncampus-yes"
          			/>
          			<Form.Check
            inline
            label="1"
            name="group1"
            type="radio"
            id="oncampus-no"
          			/>
		  		</div>
			</Form>
        </Container>
	
	</div>
);
};

export default AboutUs;

