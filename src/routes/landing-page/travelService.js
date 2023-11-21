import React from "react";
import Container from "react-bootstrap/Container";
import Image from "next/image";
const TravelService = () => {
  return (
    <section className="travel-service">
      <Container>
        <div className="travel-service--service-wrapper --custom-container">
          <div className="travel-service--border-lite-green"></div>
          <div className="travel-service--border-lite-white"></div>
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
            <div className="travel-service--baloon">
              <Image
                src="/images/home/serviceBaloon.png"
                width={80}
                height={109}
                alt=""
              />
            </div>
          </div>
          <div className="travel-service--service-provid">
            <div className="travel-service--service-list --left">
              <div className="travel-service--service-list-item">
                <div className="travel-service--service-list-item-image">
                  <Image
                    src="/images/home/sun-umbrella.svg"
                    width={77}
                    height={69}
                    alt=""
                  />
                </div>
                <div className="travel-service--service-list-item-content">
                  <h3>Holiday Packages</h3>
                  <p>TRAVEL MEMORIES TOUR PACKAGES</p>
                </div>
              </div>
              <div className="travel-service--service-list-item">
                <div className="travel-service--service-list-item-image">
                  <Image
                    src="/images/home/group.svg"
                    width={87}
                    height={55}
                    alt=""
                  />
                </div>
                <div className="travel-service--service-list-item-content">
                  <h3>Group Tours</h3>
                  <p>TRAVEL MEMORIES TOUR PACKAGES</p>
                </div>
              </div>
            </div>
            <div className="travel-service--service-list --right">
              <div className="travel-service--service-list-item">
                <div className="travel-service--service-list-item-image">
                  <Image
                    src="/images/home/FILLED_OUTLINE.svg"
                    width={77}
                    height={69}
                    alt=""
                  />
                </div>
                <div className="travel-service--service-list-item-content">
                  <h3>Travel Themes</h3>
                  <p>TRAVEL MEMORIES TOUR PACKAGES</p>
                </div>
              </div>
              <div className="travel-service--service-list-item">
                <div className="travel-service--service-list-item-image">
                  <Image
                    src="/images/home/ship.svg"
                    width={72}
                    height={73}
                    alt=""
                  />
                </div>
                <div className="travel-service--service-list-item-content">
                  <h3>Cruises</h3>
                  <p>TRAVEL MEMORIES TOUR PACKAGES</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TravelService;
