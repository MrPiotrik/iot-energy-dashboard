'use client';

import {
  Navbar,
  Container,
  Nav,
  Row,
  Col,
  Card,
  Button,
  Table,
  ProgressBar,
  Alert,
} from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>IoT Energy Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Sensors</Nav.Link>
            <Nav.Link href="#">Reports</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Alert variant="success">
          System status: Online
        </Alert>

        <Row className="g-4">
          <Col md={3}>
            <Card>
              <Card.Body>
                <Card.Title>Voltage</Card.Title>
                <h3>220 V</h3>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card>
              <Card.Body>
                <Card.Title>Current</Card.Title>
                <h3>15 A</h3>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card>
              <Card.Body>
                <Card.Title>Power</Card.Title>
                <h3>3.3 kW</h3>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card>
              <Card.Body>
                <Card.Title>Battery Level</Card.Title>
                <ProgressBar now={75} label="75%" />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h2 className="mt-5 mb-3">Sensor Data</h2>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Sensor</th>
              <th>Status</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Voltage Sensor</td>
              <td>Active</td>
              <td>220 V</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Current Sensor</td>
              <td>Active</td>
              <td>15 A</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Battery Sensor</td>
              <td>Charging</td>
              <td>75%</td>
            </tr>
          </tbody>
        </Table>

        <Button variant="primary" size="lg">
          Refresh Data
        </Button>
      </Container>
    </>
  );
}