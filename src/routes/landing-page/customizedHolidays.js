import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "next/image";
const CustomizedHolidays = () => {
  return (
    <section className="travel-holiday">
      <Container>
        <div className="travel-holiday--wrapper">
          <div className="travel-holiday--content-item">
            <h1>Customized Holidays</h1>
            <p>
              {`There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected`}
            </p>
            <Form>
              <Form.Group
                className="travel-holiday--contact-number"
                controlId="formBasicNumber"
              >
                <Form.Control type="number" placeholder="Enter Contact No" />
                <Image
                  src="/images/home/emergency-call.svg"
                  width={28}
                  height={28}
                  alt=""
                />
                <button className="travel--btn travel--btn--blue">
                  {` Let's Go`}
                </button>
              </Form.Group>
            </Form>
            <div className="travel-holiday--destinations">
              <h6>Explore all our destinations</h6>
              <div className="travel-holiday--destinations-item">
                <button>Domestic</button>
                <button>International</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CustomizedHolidays;
