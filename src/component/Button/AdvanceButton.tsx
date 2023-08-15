import React, { useState } from "react";

interface AdvanceButtonOptions {
  advanceButtonText: string;
  advanceButtonClass: string;
  handleOpenModal: () => void;
}
const AdvanceButton = ({
  advanceButtonText,
  advanceButtonClass,
  handleOpenModal,
}: AdvanceButtonOptions) => {
  return (
    <>
      <div className={`${advanceButtonClass} clearfix`}>
        <a className="fr yuyue" onClick={handleOpenModal}>
          {advanceButtonText}
        </a>
      </div>
    </>
  );
};

export default AdvanceButton;
