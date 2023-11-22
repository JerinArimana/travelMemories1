import React from "react";
import Image from "next/image";
const PopularDestinationsContent = ({ image, title, subtitle }) => {
  return (
    <>
      <div className="travel-popularDestinations--item">
        <div className="travel-popularDestinations--item-image --hoverlay">
          <Image src={image} width={351} height={297} alt="" />
        </div>
        <div className="travel-popularDestinations--item-content">
          <h5>{title}</h5>
          <p>{subtitle}</p>
        </div>
      </div>
    </>
  );
};

export default PopularDestinationsContent;
