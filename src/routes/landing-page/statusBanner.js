import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
const StatusBanner = () => {
  return (
    <section className="travel-status">
      <Container>
        <div className="travel-status--wrapper">
          <div className="travel-status--status-lists">
            <ul>
              <li>
                <Image
                  src="/images/home/sentiment.svg"
                  width={50}
                  height={50}
                  alt=""
                />
                <div className="travel-status--content">
                  <h6>40000+ </h6>
                  <p>Happy Travelers</p>
                </div>
              </li>
              <li>
                <Image
                  src="/images/home/verified_user.svg"
                  width={50}
                  height={50}
                  alt=""
                />
                <div className="travel-status--content">
                  <h6>100% </h6>
                  <p>Money Safe Guarantee</p>
                </div>
              </li>
              <li>
                <Image
                  src="/images/home/where_to_vote.svg"
                  width={50}
                  height={50}
                  alt=""
                />
                <div className="travel-status--content">
                  <h6>70+ </h6>
                  <p>Top Destinations</p>
                </div>
              </li>
              <li>
                <Image
                  src="/images/home/headphones.svg"
                  width={50}
                  height={50}
                  alt=""
                />
                <div className="travel-status--content">
                  <h6>24x7 </h6>
                  <p>Online Booking Support</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StatusBanner;
