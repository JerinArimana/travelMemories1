import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
const OurStory = () => {
  return (
    <section className="travel-ourStory">
      <div className="right-Balloon">
        <Image
          src="/images/home/story-right-Balloon.png"
          width={72}
          height={98}
          alt=""
        />
      </div>
      <div className="left-Balloon">
        <Image
          src="/images/home/story-left-Balloon.png"
          width={108}
          height={174}
          alt=""
        />
      </div>
      <Container>
        <div className="travel-ourStory--story-wrapper --custom-container">
          <div className="travel-ourStory--story-content">
            <span>OUR STORY</span>
            <h1>Luxury Tours and Tailor-Made Holidays by Travel Memories</h1>
            <p>
              {`There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable.`}
            </p>
            <button className="travel--btn travel--btn--blue">
              {`Read More Stroy`}
            </button>
          </div>
          <div className="travel-ourStory--story-image">
            <div className="travel-ourStory--story-image-transparent">
              <Image
                src="/images/home/ourStory-Union.svg"
                width={362}
                height={495}
                alt=""
              />
              <div className="travel-ourStory--status">
                <h4>30k</h4>
                <p>Our Happy Clients</p>
              </div>
              <div className="travel-ourStory--status --experiance">
                <h4>12+</h4>
                <p>Years of Experiences</p>
              </div>
              <div className="top-image">
                <Image
                  src="/images/home/OUR-STORY.png"
                  width={362}
                  height={495}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurStory;
