import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const AboutUs = () => {
return (
	<div className="div-container">
        <Container fluid style={{padding: 40}}>
            <h1> About Us </h1>
            <hr></hr>
            <Row style={{padding: 40}}>

                    <h4>54% of sexual assault victims are between the ages 18-34</h4>

                    <p style={{textAlign: "left", fontSize: 20}}>
                        At this age, many are attending college and post-grad studies. As we become adults,
                        we hear of sexual assaults happening around us and in our lives. The statistics surrounding
                        these incidents are mostly shown on a large scale- (country-wide, state-wide, etc). 
                        However, we do not often see the statistics of assaults on a smaller scale, such as
                        within a singular college campus.
                    </p>

                    <p style={{textAlign: "left", fontSize: 20}}>
                        Even if we were able to see the recorded statistics, only a small percentage of 
                        assaults are reported to law enforcement. Unfortunately, only 20% of female student 
                        victims, ages 18-24, report sexual assaults to law enforcement. Measures are being 
                        taken to reduce such statistics and having this available web application is a measure we decide to 
                        take. We hope that creating this web app will allow people to not only be aware of current statistics 
                        regarding assaults, but to be able to comfortably report when they feel that they can’t contact 
                        law enforcement. 
                    </p>

                    <br></br>
                    <h4>Our Solution:</h4>

                    <p style={{textAlign: "left", fontSize: 20}}>
                        SAStat is a free online website where users can safely and anonymously report sexual assaults. 
                        User can view general statistics about reported sexual assaults by school, or make 
                        an anonymous report for that particular school. Through anonymous reporting, students can
                        be sure that their voice is heard, without having to fear consequences from law enforcement 
                        or school officials.
                        
                        SAStat also provides researchers with a tool for viewing sexual assault statistics, and the 
                        popularity of the reporting website on a school to school basis. 
                    </p>
                    </Row>
        </Container>
	
	</div>
);
};

export default AboutUs;