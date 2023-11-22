import React from "react";
import Image from "next/image";
const HotDeasContent = ({ image, days, nights, title }) => {
  return (
    <>
      <div className="travel-hot-deals--item">
        <div className="travel-hot-deals--image --hoverlay">
          <Image src={image} width={88} height={9} alt="" />
        </div>
        <div className="travel-hot-deals--content">
          <span>
            {days}DAYS / {nights}NIGHTS
          </span>
          <h5>{title}</h5>
        </div>
      </div>
    </>
  );
};

export default HotDeasContent;
