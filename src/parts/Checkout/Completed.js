import React from "react";
import Fade from "react-reveal/Fade";

import CompletedIlustration from "assets/images/completed.jpg";

const Checkout = () => {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center text-center">
          <div className="col-4">
            <img
              src={CompletedIlustration}
              alt="completed checkout apartement"
              className="img-fluid"
            />
            <p className="text-gray-500">
              We will inform you via email later once the transaction has been
              accepted
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Checkout;
