"use client";
import HeroSection from "./herosection";
import WorkSection from "./worksection";
import ServiceSection from "./servicesection";
import ContactSection from "./contactsection";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <HeroSection />
      <Container className="my-5">
        <Row className="my-4">
          <Col md={6} className="align-self-center mb-3">
            <h6>What We Do?</h6>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
              ipsam culpa. Commodi aspernatur temporibus placeat libero fugit at
              sequi consequuntur.
            </p>
            <Button variant="info">Learn More</Button>
          </Col>
          <Col md={6}>
            <Image
              src="/images/about.jpeg"
              alt="About Us"
              width={500}
              height={500}
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
      <section className="py-5">
        <WorkSection />
      </section>
      <ServiceSection />
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
};

export default page;
