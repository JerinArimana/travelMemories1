import React from "react";
import SectionTitle from "../../../components/sectionTitle";
import { Col, Container, Row } from "react-bootstrap";

const GroupTous = () => {
  return (
    <section className="travel-group-tours">
      <Container>
        <SectionTitle
          headtitle="Our Group Tours"
          subTitle="There are many variations of passages of Lorem Ipsum available"
        />
        <Row>
          <Col md={3}>1</Col>
          <Col md={3}>1</Col>
          <Col md={6}>1</Col>
        </Row>
      </Container>
    </section>
  );
};

export default GroupTous;
