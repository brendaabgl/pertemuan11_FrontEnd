"use client";

import React from "react";

// 1. Impor semua komponen dengan path yang sudah benar
import Navbar from "../../component/navbar";
import HeroSection from "../../component/herosection";
import WorkSection from "../../component/worksection";
import ServiceSection from "../../component/servicesection";
import ContactSection from "../../component/contactsection";
import Footer from "../../component/footer";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main>
        <HeroSection />
        <Container className="my-5 py-5">
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h2 className="h1">What We Do?</h2>
              <p className="lead">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
                ipsam culpa. Commodi aspernatur temporibus placeat libero fugit at
                sequi consequuntur.
              </p>
              <Button variant="info" size="lg">Learn More</Button>
            </Col>
            <Col md={6}>
              <Image
                src="/images/about.jpeg"
                alt="About Us"
                width={500}
                height={500}
                style={{ width: '100%', height: 'auto', borderRadius: '15px' }}
              />
            </Col>
          </Row>
        </Container>
        
        <WorkSection />
        <ServiceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}