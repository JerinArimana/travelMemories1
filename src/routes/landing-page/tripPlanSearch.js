import React from "react";
import Image from "next/image";
import Dropdown from "react-bootstrap/Dropdown";
import { DatePicker } from "antd";
import { Select } from "antd";

const TripPlanSearch = () => {
  return (
    <section className="travel-search">
      <div className="travel-search--search-wrapper --custom-container">
        <div className="travel-search--search-head">
          <h3>
            <span>Plan Your</span> Own Trips
          </h3>
        </div>
        <div className="travel-search--Choose-plan">
          <div className="travel-search--destination">
            <div className="travel-search--destination-item">
              <div className="travel-search--image">
                <Image
                  src="/images/home/location.svg"
                  width={26}
                  height={31}
                  alt=""
                />
              </div>
              <div className="travel-search--select --destination-select">
                <h4>
                  <span>Traveling to</span>
                </h4>
                <Select
                  showSearch
                  //   style={{
                  //     width: 200,
                  //   }}
                  placeholder="Any Destination"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label ?? "").includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? "")
                      .toLowerCase()
                      .localeCompare((optionB?.label ?? "").toLowerCase())
                  }
                  options={[
                    {
                      value: "1",
                      label: "Not Identified",
                    },
                    {
                      value: "2",
                      label: "Closed",
                    },
                    {
                      value: "3",
                      label: "Communicated",
                    },
                    {
                      value: "4",
                      label: "Identified",
                    },
                    {
                      value: "5",
                      label: "Resolved",
                    },
                    {
                      value: "6",
                      label: "Cancelled",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="travel-search--packages">
            <div className="travel-search--destination-item">
              <div className="travel-search--image --choose-img">
                <Image
                  src="/images/home/choose-packages.svg"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>
              <div className="travel-search--select">
                <h4>
                  <span>Choose</span>
                </h4>
                <Select
                  showSearch
                  //   style={{
                  //     width: 200,
                  //   }}
                  placeholder="Our Packages"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label ?? "").includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? "")
                      .toLowerCase()
                      .localeCompare((optionB?.label ?? "").toLowerCase())
                  }
                  options={[
                    {
                      value: "1",
                      label: "Not Identified",
                    },
                    {
                      value: "2",
                      label: "Closed",
                    },
                    {
                      value: "3",
                      label: "Communicated",
                    },
                    {
                      value: "4",
                      label: "Identified",
                    },
                    {
                      value: "5",
                      label: "Resolved",
                    },
                    {
                      value: "6",
                      label: "Cancelled",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="travel-search--search-btn">
            <button className="travel--btn travel--btn--blue">{`LET'S GO`}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripPlanSearch;
