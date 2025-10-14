"use client";
import Button from 'react-bootstrap/Button'; //4.2k (gzipped: 1.9k)
import Card from 'react-bootstrap/Card'; //4.4k (gzipped: 1.7k)
import { Container, Row, Col } from 'react-bootstrap'; //3.5k (gzipped: 1.6k)

function WorkSection() {
  return (
    <Container>
      <Row className="mb-3">
        <Col md={12} className="text-center">
          <h2>What We Work</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Col>
      </Row>

      <Row>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Img variant="top" src="/images/image-44.jpg" />
            <Card.Body>
              <Card.Title>Rice with wild boar liver and cutted cheese</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-3">
          <Card>
            <Card.Img variant="top" src="/images/image-46.jpg" />
            <Card.Body>
              <Card.Title>Rice with wild boar liver and cutted cheese from texas</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-3">
          <Card>
            <Card.Img variant="top" src="/images/image-45.jpg" />
            <Card.Body>
              <Card.Title>Rice with wild boar liver and cutted cheese from texas</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the 
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </Container>
  );
}

export default WorkSection;