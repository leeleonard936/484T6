import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Radio, RadioGroup} from 'react-radio-group'
import {markers} from './../Data/markers'
import Axios from 'axios';
const MakeReport = () => {

const url = "http://localhost:3000/submitReport"
const [data, setData] = useState({
	school: "",
	// oncampus: "",
	// wasstudent: "",
	// employed: "",
	// campusreport: "",
	campusreporttext:"",
	// policereport: "",
	policereporttext:""
});
function handle(e){
	const newData = {...data};
	newData[e.target.id] = e.target.value;
	setData(newData);
	console.log(newData);
}
function submit(e){
	e.preventDefault();
	Axios.post(url, {
		school: data.school,
		//
		campusreporttext: data.campusreporttext,
		//
		policereporttext: data.policereporttext
	})
	.then(res => {
		console.log(res.data);
	});

	//somehow you must clear the fields again!
}

return (
	<div className="div-container">
        <Container fluid style ={{padding: 40}}>
            <h1>
		        Make A Report
	        </h1>
			<p className = "verify">
				By filling out this form you verify that you, an anonymous individual, were a victim of sexual assault on a Maryland college campus.
			</p>

			{/*Nodemailer, make sock gmail acct*/}
			<Form /*method = "post"*/ /*action = "/submitReport"*/ onSubmit={(e) => submit(e)}>
				<div>
					<p>What school do you or your assaulter attend?</p>
					<Form.Select label="schoolName" onChange={(e) => handle(e)} id ="school" >
						<option></option>
						{markers.map(({ id, Name}) => (
      						<option name={Name} value={data.name}>{Name}</option>
						))}
    				</Form.Select>
				</div>
				<br/>

				<div>
					<p>Did the incident occur on the campus of that institution? </p>
          			<Form.Check 
						// value = {data.oncampus}
            			inline
            			label="Yes"
            			name= "oncampus"
            			type="radio"
            			id="oncampus-yes"
          			/>
          			<Form.Check
						// onChange= {(e) => handle(e)}
						// value = {data.oncampus}
            			inline
            			label="No"
            			name="oncampus"
            			type="radio"
            			id="oncampus-no"
          			/>

					{/* <RadioGroup id="oncampus" onChange={(e) => handle(e)}>
						<div className="radio-button-background">
							<Radio name="oncampus-yes" value = {data.oncampus} className="radio-button" />Yes
						</div>

						<div className="radio-button-background">
							<Radio name="oncampus-no" value = {data.oncampus} className="radio-button" />No
						</div>
					</RadioGroup> */}

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
				<p>If you did not report the incident to campus authorities, why not? If you did, what was your experience?</p>
				<div>
        			<Form.Control
						onChange= {(e) => handle(e)} 
						as="textarea" 
						rows={3} 
						name = "campusreporttext"
						id = "campusreporttext"
						value = {data.campusreporttext}
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
				<p>If you did not report the incident to police, why not? If you did, what was your experience?</p>
				<div>
        			<Form.Control 
						onChange= {(e) => handle(e)} 
						as="textarea" 
						rows={3} 
						name = "policereporttext"
						id = "policereporttext"
						value = {data.policereporttext}
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

export default MakeReport;

