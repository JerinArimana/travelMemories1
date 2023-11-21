import React from "react";
import Image from "next/image";
const HolidayPackageContent = ({
  banner,
  label,
  caption,
  numDays,
  numNights,
  price,
  savePrice,
}) => {
  return (
    <>
      <div className="holiday-package--list-item">
        <div className="holiday-package--item-image">
          <Image src={banner} width={377} height={484} alt="" />
        </div>
        <div className="holiday-package--ovelay-pakage"></div>
        <div className="holiday-package--item-content">
          <label>{label}</label>
          <h5>{caption}</h5>
          <div className="holiday-package--package-data">
            <div className="holiday-package--package-rating">
              <p>
                {numDays}DAYS / {numNights}NIGHTS
              </p>
              <div className="holiday-package--rating-image">
                <Image
                  src="/images/home/star.svg"
                  width={15}
                  height={15}
                  alt=""
                />
                <Image
                  src="/images/home/star.svg"
                  width={15}
                  height={15}
                  alt=""
                />
                <Image
                  src="/images/home/star.svg"
                  width={15}
                  height={15}
                  alt=""
                />
                <Image
                  src="/images/home/star.svg"
                  width={15}
                  height={15}
                  alt=""
                />
                <Image
                  src="/images/home/star.svg"
                  width={15}
                  height={15}
                  alt=""
                />
              </div>
            </div>
            <div className="holiday-package--price-data">
              <p>
                AUD<span>${price}</span>
              </p>
              <span className="holiday-package--save-price">
                Save AUD $ {savePrice}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HolidayPackageContent;
