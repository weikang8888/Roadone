import React from "react";

interface DetailsPreviousNextOptions {
  prevLink?: string;
  prevText: string;
  nextLink?: string;
  nextText: string;
}
const DetailsPreviousNext = ({
  prevLink,
  prevText,
  nextLink,
  nextText,
}: DetailsPreviousNextOptions) => {
  return (
    <>
      <div className="pn">
        <div className="prevNext">
          {prevLink ? (
            <p className="prev">
              Previous:<a href={prevLink}> {prevText}</a>
            </p>
          ) : (
            <p className="prev">Previous: {prevText}</p>
          )}
          {nextLink ? (
            <p className="next">
              Next:<a href={nextLink}> {nextText}</a>
            </p>
          ) : (
            <p className="next">Next: {nextText}</p>
          )}
        </div>
      </div>
    </>
  );
};
export default DetailsPreviousNext;
