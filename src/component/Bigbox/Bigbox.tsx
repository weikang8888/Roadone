import React from "react";

interface BigboxOptions {
  daymonth: string;
  year: string;
  href: string;
  title: string;
  description: string;
}
const Bigbox = ({
  daymonth,
  year,
  title,
  description,
  href,
}: BigboxOptions) => {
  return (
    <>
      <div className="news-bigbox">
        <div className="bigboxtime">
          <b>{daymonth}</b>
          <span>{year}</span>
        </div>
        <div className="bigboxtxt">
          <a href={href}>
            <h4>{title}</h4>
            <p>{description}</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Bigbox;
