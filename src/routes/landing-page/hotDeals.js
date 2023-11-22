import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../../../components/sectionTitle";
import Image from "next/image";
import HotDeasContent from "./hotDealsContent";
const HotDeals = () => {
  const hotDealsData = [
    {
      id: "d1",
      image: "/images/home/Deals1.png",
      days: 4,
      nights: 3,
      title: "FAMILY HOLIDAY TOUR",
    },
    {
      id: "d2",
      image: "/images/home/Deals2.jpg",
      days: 4,
      nights: 3,
      title: "FAMILY HOLIDAY TOUR",
    },
    {
      id: "d1",
      image: "/images/home/Deals1.png",
      days: 4,
      nights: 3,
      title: "FAMILY HOLIDAY TOUR",
    },
    {
      id: "d1",
      image: "/images/home/Deals1.png",
      days: 4,
      nights: 3,
      title: "FAMILY HOLIDAY TOUR",
    },
    {
      id: "d1",
      image: "/images/home/Deals1.png",
      days: 4,
      nights: 3,
      title: "FAMILY HOLIDAY TOUR",
    },
    {
      id: "d1",
      image: "/images/home/Deals1.png",
      days: 4,
      nights: 3,
      title: "FAMILY HOLIDAY TOUR",
    },
  ];
  return (
    <section className="travel-hot-deals">
      <Container>
        <div className="travel-hot-deals--wrapper">
          <SectionTitle
            headtitle="Travel Memories Hot Deals"
            subTitle="There are many variations of passages of Lorem Ipsum available"
          />
        </div>

        <div className="travel-hot-deals--content-wrapper">
          <Row>
            {hotDealsData.map((data) => (
              <Col md={4} key={data.id}>
                <HotDeasContent
                  id={data.id}
                  image={data.image}
                  days={data.days}
                  nights={data.nights}
                  title={data.title}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default HotDeals;
