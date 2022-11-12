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
				By filling out this form you verify that you, an anonymous individual, were a victim of sexual assault on a maryland college campus.
			</p>
			<Form /*onSubmit={dothing}*/>
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
				<br/>
				<div>
				<p>Was your assailant a student at that institution? </p>
          			<Form.Check
            			inline
            			label="Yes"
            			name="wasstudent"
            			type="radio"
            			id="wasstudent-yes"
          			/>
          			<Form.Check
            			inline
            			label="No"
            			name="wasstudent"
            			type="radio"
            			id="wasstudent-no"
          			/>
		  		</div>
				<br/>
				<div>
				  <p>Was your assailant a member of the faculty or otherwise employed by that institution? </p>
          			<Form.Check
            			inline
            			label="Yes"
            			name="employed"
            			type="radio"
            			id="employed-yes"
          			/>
          			<Form.Check
            			inline
            			label="No"
            			name="employed"
            			type="radio"
            			id="employed-no"
          			/>
		  		</div>
				<br/>
				<div>
				<p>Did you report this incident to the institution? </p>
          			<Form.Check
            			inline
            			label="Yes"
            			name="campusreport"
            			type="radio"
            			id="campusreport-yes"
          			/>
          			<Form.Check
            			inline
            			label="No"
            			name="campusreport"
            			type="radio"
            			id="campusreport-no"
          			/>
		  		</div>
				<br/>
				<p>If you did not report the incidence to campus authorities, why not? If you did, what was your experience?</p>
				<div>
        			<Form.Control 
						as="textarea" 
						rows={3} 
						name = "campusreporttext"
						id = "campusreport-text"
					/>
				</div>
				<br/>
				<div>
				<p>Did you report this incident to the Police? </p>
          			<Form.Check
            			inline
            			label="Yes"
            			name="policereport"
            			type="radio"
            			id="policereport-yes"
          			/>
          			<Form.Check
            			inline
            			label="No"
            			name="policereport"
            			type="radio"
            			id="policereport-no"
          			/>
		  		</div>
				<br/>
				<p>If you did not report the incidence to police, why not? If you did, what was your experience?</p>
				<div>
        			<Form.Control 
						as="textarea" 
						rows={3} 
						name = "policereporttext"
						id = "policereport-text"
					/>
				</div>
				<br/>
				<div>
					<Button type="submit">Submit </Button>
				</div>
				<br/>
			</Form>
        </Container>
	
	</div>
);
};

export default AboutUs;

