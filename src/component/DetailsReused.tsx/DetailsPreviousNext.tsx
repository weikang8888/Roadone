import React from "react";

interface NewDetailsPreviousNextOptions {
  prevLink?: string;
  prevText: string;
  nextLink?: string;
  nextText: string;
}
const NewDetailsPreviousNext = ({
  prevLink,
  prevText,
  nextLink,
  nextText,
}: NewDetailsPreviousNextOptions) => {
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
export default NewDetailsPreviousNext;