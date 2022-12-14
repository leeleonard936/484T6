
import './Footer.css';
import React from "react";

//bootstrap dependencies
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Footer = () => {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("/reportData")
          .then((res) => res.json())
          .then((data) => setData(data));
      }, []);
    return(
        <>
        <Container>
        <Row>
        <Col>
            <Nav.Link href = '/Contact'>Contact Us!</Nav.Link>
        </Col>
        <Col> | </Col>
        <Col>
        <p>
        {/* add reports numbers here */}
        Reports: {!data ? "Null" : data}
        </p>
        </Col>
      </Row>
      </Container>
        </>
    )
}
export default Footer