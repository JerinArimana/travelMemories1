import React from "react";
import { Container } from "react-bootstrap";

const TravelTipBanner = () => {
  return (
    <section className="travel-tip --hoverlay">
      <Container>
        <div className="travel-tip--wrapper --custom-container">
          <div className="travel-tip--content">
            <label>OUR TRAVEL TIPS</label>
            <div className="travel-tip--content-wrapper">
              <h1>
                There are many variations of passages of Lorem Ipsum available
              </h1>
              <p>{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TravelTipBanner;
