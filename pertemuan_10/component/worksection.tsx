"use client";
import Button from 'react-bootstrap/Button'; //4.2k (gzipped: 1.9k)
import Card from 'react-bootstrap/Card'; //4.4k (gzipped: 1.7k)
import { Container, Row, Col } from 'react-bootstrap'; //3.5k (gzipped: 1.6k)

function WorkSection() {
  return (
    // Menambahkan padding atas dan bawah untuk memberikan ruang
    <Container className="py-5">
      <Row className="mb-4">
        <Col md={12} className="text-center">
          <h2 className="display-5 fw-bold">What We Work</h2>
          <p className="lead text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Col>
      </Row>

      <Row>
        {/* Kolom Pertama */}
        <Col md={4} className="mb-4 d-flex">
          <Card className="h-100 shadow-sm">
            {/* 1. Menambahkan style untuk menyamakan tinggi gambar */}
            <Card.Img 
              variant="top" 
              src="/images/image-44.jpeg" 
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>Rice with wild boar liver and cutted cheese</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" className="mt-auto">Read More</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Kolom Kedua */}
        <Col md={4} className="mb-4 d-flex">
          <Card className="h-100 shadow-sm">
            <Card.Img 
              variant="top" 
              src="/images/image-46.jpeg" 
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>Rice with wild boar liver and cutted cheese from texas</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" className="mt-auto">Read More</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Kolom Ketiga */}
        <Col md={4} className="mb-4 d-flex">
          <Card className="h-100 shadow-sm">
            <Card.Img 
              variant="top" 
              src="/images/image-45.jpeg" 
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>Rice with wild boar liver and cutted cheese from texas</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the 
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary" className="mt-auto">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </Container>
  );
}

export default WorkSection;