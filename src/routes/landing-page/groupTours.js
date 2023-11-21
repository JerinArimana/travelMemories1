import React from "react";
import SectionTitle from "../../../components/sectionTitle";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
const GroupTous = () => {
  return (
    <section className="travel-group-tours">
      <Container>
        <SectionTitle
          headtitle="Our Group Tours"
          subTitle="There are many variations of passages of Lorem Ipsum available"
        />
        <Row>
          <Col md={3}>
            <div className="travel-group-tours--tours-item --hoverlay">
              <div className="travel-group-tours--image">
                <Image
                  src="/images/home/grup-tour1.png"
                  width={359}
                  height={363}
                  alt=""
                />
              </div>
              <div className="travel-group-tours--content">
                <div className="travel-group-tours--numDays">
                  <span>7 NIGHT</span>
                </div>
                <div className="travel-group-tours--title">
                  <h5>WEEKEND GETAWAYS</h5>
                </div>
                <div className="travel-group-tours--stating-point">
                  <p>STARTING FROM</p>
                </div>
                <div className="travel-group-tours--tours-amount">
                  <h6>
                    {" "}
                    AUD <span>$398</span>
                  </h6>
                </div>
                <button className="travel--btn travel--btn--blue">
                  Read More
                </button>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="travel-group-tours--tours-item --hoverlay">
              <div className="travel-group-tours--image">
                <Image
                  src="/images/home/grup-tour1.png"
                  width={359}
                  height={363}
                  alt=""
                />
              </div>
              <div className="travel-group-tours--content">
                <div className="travel-group-tours--numDays">
                  <span>7 NIGHT</span>
                </div>
                <div className="travel-group-tours--title">
                  <h5>WEEKEND GETAWAYS</h5>
                </div>
                <div className="travel-group-tours--stating-point">
                  <p>STARTING FROM</p>
                </div>
                <div className="travel-group-tours--tours-amount">
                  <h6>
                    {" "}
                    AUD <span>$398</span>
                  </h6>
                </div>
                <button className="travel--btn travel--btn--blue">
                  Read More
                </button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="travel-group-tours--tours-item --hoverlay">
              <div className="travel-group-tours--image">
                <Image
                  src="/images/home/paesi-migliori2.png"
                  width={359}
                  height={363}
                  alt=""
                />
              </div>
              <div className="travel-group-tours--content">
                <div className="travel-group-tours--numDays">
                  <span>7 NIGHT</span>
                </div>
                <div className="travel-group-tours--title">
                  <h5>WEEKEND GETAWAYS</h5>
                </div>
                <div className="travel-group-tours--stating-point">
                  <p>STARTING FROM</p>
                </div>
                <div className="travel-group-tours--tours-amount">
                  <h6>
                    {" "}
                    AUD <span>$398</span>
                  </h6>
                </div>
                <button className="travel--btn travel--btn--blue">
                  Read More
                </button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="items-reverse">
          <Col md={3}>
            <div className="travel-group-tours--tours-item --hoverlay">
              <div className="travel-group-tours--image">
                <Image
                  src="/images/home/grup-tour1.png"
                  width={359}
                  height={363}
                  alt=""
                />
              </div>
              <div className="travel-group-tours--content">
                <div className="travel-group-tours--numDays">
                  <span>7 NIGHT</span>
                </div>
                <div className="travel-group-tours--title">
                  <h5>WEEKEND GETAWAYS</h5>
                </div>
                <div className="travel-group-tours--stating-point">
                  <p>STARTING FROM</p>
                </div>
                <div className="travel-group-tours--tours-amount">
                  <h6>
                    {" "}
                    AUD <span>$398</span>
                  </h6>
                </div>
                <button className="travel--btn travel--btn--blue">
                  Read More
                </button>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="travel-group-tours--tours-item --hoverlay">
              <div className="travel-group-tours--image">
                <Image
                  src="/images/home/grup-tour1.png"
                  width={359}
                  height={363}
                  alt=""
                />
              </div>
              <div className="travel-group-tours--content">
                <div className="travel-group-tours--numDays">
                  <span>7 NIGHT</span>
                </div>
                <div className="travel-group-tours--title">
                  <h5>WEEKEND GETAWAYS</h5>
                </div>
                <div className="travel-group-tours--stating-point">
                  <p>STARTING FROM</p>
                </div>
                <div className="travel-group-tours--tours-amount">
                  <h6>
                    {" "}
                    AUD <span>$398</span>
                  </h6>
                </div>
                <button className="travel--btn travel--btn--blue">
                  Read More
                </button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="travel-group-tours--tours-item --hoverlay">
              <div className="travel-group-tours--image">
                <Image
                  src="/images/home/paesi-migliori2.png"
                  width={359}
                  height={363}
                  alt=""
                />
              </div>
              <div className="travel-group-tours--content">
                <div className="travel-group-tours--numDays">
                  <span>7 NIGHT</span>
                </div>
                <div className="travel-group-tours--title">
                  <h5>WEEKEND GETAWAYS</h5>
                </div>
                <div className="travel-group-tours--stating-point">
                  <p>STARTING FROM</p>
                </div>
                <div className="travel-group-tours--tours-amount">
                  <h6>
                    {" "}
                    AUD <span>$398</span>
                  </h6>
                </div>
                <button className="travel--btn travel--btn--blue">
                  Read More
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GroupTous;
