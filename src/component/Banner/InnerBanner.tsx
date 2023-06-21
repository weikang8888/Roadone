import React from "react";

interface InnerBannerOptions {
  bannerimage: string;
}
const InnerBanner = ({ bannerimage }: InnerBannerOptions) => {
  return (
    <>
      <div className="inner-banner">
        <img src={bannerimage} />
      </div>
    </>
  );
};

export default InnerBanner;
