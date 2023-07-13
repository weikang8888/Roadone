import React from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <>
      <div className="pn">
        <div className="prevNext">
          {prevLink ? (
            <p className="prev">
              {t("other.previous")}:<a href={prevLink}> {prevText}</a>
            </p>
          ) : (
            <p className="prev">{t("other.previous")}: {prevText}</p>
          )}
          {nextLink ? (
            <p className="next">
              {t("other.next")}:<a href={nextLink}> {nextText}</a>
            </p>
          ) : (
            <p className="next">{t("other.next")}: {nextText}</p>
          )}
        </div>
      </div>
    </>
  );
};
export default DetailsPreviousNext;
