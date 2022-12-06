import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { markers } from './../Data/markers'
import Axios from 'axios';

const MakeReport = () => {


	//make sure to change this URL for production model
	const url = "http://localhost:3000/submitReport"
	const [data, setData] = useState({
		school: "",
		oncampus: "",
		wasstudent: "",
		employed: "",
		campusreport: "",
		campusreporttext: "",
		policereport: "",
		policereporttext: ""
	});
	function handle(e) {
		const newData = { ...data };
		newData[e.target.id] = e.target.value;
		setData(newData);
		console.log(newData);
	}
	function submit(e) {
		e.preventDefault();
		Axios.post(url, {
			school: data.school,
			oncampus: data.oncampus,
			wasstudent: data.wasstudent,
			employed: data.employed,
			campusreport: data.campusreport,
			campusreporttext: data.campusreporttext,
			policereport: data.policereport,
			policereporttext: data.policereporttext
		})
			.then(res => {
				console.log(res.data);
			});
	}

	return (
		<div className="div-container">
			<Container fluid style={{ padding: 40 }}>
				<h1>
					Make A Report
				</h1>
				<p className="verify">
					By filling out this form you verify that you, an anonymous individual, were a victim of sexual assault on a Maryland college campus.
				</p>

				{/*Nodemailer, make sock gmail acct*/}
				<Form /*method = "post"*/ action="/" onSubmit={(e) => submit(e)}>
					<div>
						<p>What school do you or your assaulter attend?</p>
						<Form.Select label="schoolName" onChange={(e) => handle(e)} id="school" >
							<option></option>
							{markers.map(({ id, Name }) => (
								<option name={Name} value={data.name}>{Name}</option>
							))}
						</Form.Select>
					</div>
					<br />

					<div>
						<p>Did the incident occur on the campus of that institution? </p>



						<div class="form-check">
							<label>
								<input class="form-check-input" type="radio" name="oncampus" id="oncampus" value="true" onChange={(e) => handle(e)} />
								Yes
							</label>
						</div>
						<div class="form-check">
							<label>
								<input class="form-check-input" type="radio" name="oncampus" id="oncampus" value="false" onChange={(e) => handle(e)} />
								No
							</label>
						</div>



					</div>
					<br />
					<div>
						<p>Was your assailant a student at that institution? </p>
						<div class="form-check">
							<label>
								<input class="form-check-input" type="radio" name="wasstudent" id="wasstudent" value="true" onChange={(e) => handle(e)} />
								Yes
							</label>
						</div>
						<div class="form-check">
							<label>
								<input class="form-check-input" type="radio" name="wasstudent" id="wasstudent" value="false" onChange={(e) => handle(e)} />
								No
							</label>
						</div>
					</div>
					<br />
					<div>
						<p>Was your assailant a member of the faculty or otherwise employed by that institution? </p>

						<div class="form-check">
							<label>
								<input class="form-check-input" type="radio" name="employed" id="employed" value="true" onChange={(e) => handle(e)} />
								Yes
							</label>
						</div>
						<div class="form-check">
							<label>
								<input class="form-check-input" type="radio" name="employed" id="employed" value="false" onChange={(e) => handle(e)} />
								No
							</label>
						</div>

					</div>
					<br />
					<div>
						<p>Did you report this incident to the institution? </p>

						<div class="form-check">
							<label>
								<input class="form-check-input" type="radio" name="campusreport" id="campusreport" value="true" onChange={(e) => handle(e)} />
								Yes
							</label>
						</div>
						<div class="form-check">
							<label>
								<input class="form-check-input" type="radio" name="campusreport" id="campusreport" value="false" onChange={(e) => handle(e)} />
								No
							</label>
						</div>

					</div>
					<br />
					<p>If you did not report the incident to campus authorities, why not? If you did, what was your experience?</p>
					<div>
						<Form.Control
							onChange={(e) => handle(e)}
							as="textarea"
							rows={3}
							name="campusreporttext"
							id="campusreporttext"
							value={data.campusreporttext}
						/>
					</div>
					<br />
					<div>
						<p>Did you report this incident to the Police? </p>

						<div class="form-check">
							<label>
								<input class="form-check-input" type="radio" name="policereport" id="policereport" value="true" onChange={(e) => handle(e)} />
								Yes
							</label>
						</div>
						<div class="form-check">
							<label>
								<input class="form-check-input" type="radio" name="policereport" id="policereport" value="false" onChange={(e) => handle(e)} />
								No
							</label>
						</div>

					</div>
					<br />
					<p>If you did not report the incident to police, why not? If you did, what was your experience?</p>
					<div>
						<Form.Control
							onChange={(e) => handle(e)}
							as="textarea"
							rows={3}
							name="policereporttext"
							id="policereporttext"
							value={data.policereporttext}
						/>
					</div>
					<br />
					<div>

						<Button type="submit">Submit</Button>
						
					


					</div>
					<br />
				</Form>

			</Container>

		</div>
	);
};

export default MakeReport;

