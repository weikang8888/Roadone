import React, { useEffect } from "react";
import "./submitsuccesspage.css";

const SubmitSuccessPage = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "/";
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="page-container">
      <div className="tips-box">
        <div className="title">
          <p>提示信息</p>
        </div>
        <div className="content">
          <p>
            You have submitted successfully. The operator will handle it as
            quickly as possible.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default SubmitSuccessPage;
