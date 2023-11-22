import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../../../components/sectionTitle";
import Image from "next/image";
import PopularDestinationsContent from "./popularDestinationsContent";
const PopularDestinations = () => {
  const popularDestinationsContent = [
    {
      id: "p1",
      image: "/images/home/Destinations.png",
      title: "MERLION PARK",
      subtitle: "SINGAPORE",
    },
    {
      id: "p1",
      image: "/images/home/Destinations2.png",
      title: "MARINA BAY SANDS",
      subtitle: "SINGAPORE",
    },
    {
      id: "p1",
      image: "/images/home/Destinations3.png",
      title: "GARDENS BY THE BAY",
      subtitle: "SINGAPORE",
    },
    {
      id: "p1",
      image: "/images/home/Destinations4.png",
      title: "BOTANIC GARDENS",
      subtitle: "SINGAPORE",
    },
    {
      id: "p1",
      image: "/images/home/Destinations.png",
      title: "BOTANIC GARDENS",
      subtitle: "SINGAPORE",
    },
    {
      id: "p1",
      image: "/images/home/Destinations.png",
      title: "ORCHARD ROAD",
      subtitle: "SINGAPORE",
    },
    {
      id: "p1",
      image: "/images/home/Destinations.png",
      title: "SINGAPORE FLYER",
      subtitle: "SINGAPORE",
    },
    {
      id: "p1",
      image: "/images/home/Destinations.png",
      title: "SENTOSA ISLAND",
      subtitle: "SINGAPORE",
    },
  ];
  return (
    <section className="travel-popularDestinations">
      <Container>
        <div className="travel-popularDestinations--wrapper">
          <SectionTitle
            headtitle="Travel Memories Popular Destinations"
            subTitle="There are many variations of passages of Lorem Ipsum available"
          />
          <div className="travel-popularDestinations--list">
            <Row>
              {popularDestinationsContent.map((data) => (
                <Col md={3} key={data.id}>
                  <PopularDestinationsContent
                    id={data.id}
                    image={data.image}
                    title={data.title}
                    subtitle={data.subtitle}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PopularDestinations;
