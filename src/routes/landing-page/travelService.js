import React from "react";
import Container from "react-bootstrap/Container";
import Image from "next/image";
const TravelService = () => {
  return (
    <section className="travel-service">
      <Container>
        <div className="travel-service--service-wrapper">
          <div className="travel-service--centered-image">
            <Image
              src="/images/home/TravelMemories.png"
              width={638}
              height={638}
              alt=""
            />
            <div className="travel-service--centered-image-content">
              <h1>
                <span>Welcome to </span>Travel Memories
              </h1>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TravelService;
