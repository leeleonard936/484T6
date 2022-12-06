import React from "react";
import Container from 'react-bootstrap/Container';
import Collapse from 'react-bootstrap/Collapse';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const LoginLand = () => {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("/allReports")
          .then((res) => res.json())
          .then((data) => setData(data));
      }, []);
return (
    <div className="div-container">
    <Container fluid style={{padding: 40}}>
        <h1> Current Data Submissions </h1>
        {!data ? "Null" : data}
    </Container>

</div>
);
};

export default LoginLand;