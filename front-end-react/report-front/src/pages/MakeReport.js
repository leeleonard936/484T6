import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {markers} from './../Data/markers'

const AboutUs = () => {
return (
	<div className="div-container">
        <Container fluid>
            <h1>
		        Make A Report
	        </h1>
			<p className = "verify">
				By filling out this form you verify that you, an anonymous individual, are a victim of sexual assault on a college campus.
			</p>
			<Form>
				<div>
					<p>What school do you or your assaulter attend?</p>
					<Form.Select label="schoolName">
						<option></option>
						{markers.map(({ id, Name}) => (
      						<option value={id}>{Name}</option>
						))}
    				</Form.Select>
				</div>
				<br/>
				<div>
					<p>Did the incident occur on the campus of that institution? </p>
          			<Form.Check
            			inline
            			label="Yes"
            			name="oncampus"
            			type="radio"
            			id="oncampus-yes"
          			/>
          			<Form.Check
            			inline
            			label="No"
            			name="oncampus"
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

