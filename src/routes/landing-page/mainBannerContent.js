import React from "react";
import Image from "next/image";
const MainBannerContent = ({ image, title, paragraph }) => {
  return (
    <React.Fragment>
      <div className="travel-banner--banner-info">
        <Image src={image} width={1920} height={577} alt="" />
        <div className="travel-banner--banner-info-content">
          <h1>{title}</h1>
          <p>{paragraph}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainBannerContent;
