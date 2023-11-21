import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
const OurCruises = () => {
  return (
    <section className="travel-our-cruises">
      <Container>
        <div className="travel-our-cruises--wrapper">
          <div className="travel-our-cruises--content">
            <h1>Our Cruises</h1>
            <p>
              {`There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.`}
            </p>
            <div className="travel-our-cruises--International-cruises">
              <ul>
                <li>
                  <Image
                    src="/images/home/national-cruises.svg"
                    width={35}
                    height={35}
                    alt=""
                  />
                  <p>Domestic Cruises</p>
                </li>
                <li>
                  <Image
                    src="/images/home/international-cruises.svg"
                    width={35}
                    height={35}
                    alt=""
                  />
                  <p>Domestic Cruises</p>
                </li>
              </ul>
              <button className="travel--btn travel--btn--blue">
                View More
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurCruises;
