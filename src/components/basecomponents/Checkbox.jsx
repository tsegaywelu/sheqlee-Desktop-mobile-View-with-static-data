import React, { useState } from "react";
import checkmark from "../../assets/direction/checkmark.svg";
const Checkbox = () => {
  const [showcheckmark, setshowchekmark] = useState(false);

  return (
    <div>
      <div
        className="w-5 h-5 bg-custom-tags "
        onClick={(e) => setshowchekmark(!showcheckmark)}
      >
        {showcheckmark && (
          <img
            src={checkmark}
            alt="checkmarkicon"
            className=" translate-x-1 rotate-6"
          />
        )}
      </div>
    </div>
  );
};

export default Checkbox;
