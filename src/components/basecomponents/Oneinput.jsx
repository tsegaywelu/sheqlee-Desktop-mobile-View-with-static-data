import React from "react";
import eye from "../../assets/direction/eye.svg";
const Oneinput = ({
  smalltext,
  iconmyimage,
  labeltext,
  placeholder,
  type,
  id,
  warn,
  showeyeicon,
  formData,
  updateFormData,
  correctvalue,
  nopaddingleft,
}) => {
  return (
    <div className="flex flex-col flex-grow  ">
      <label className="text-xl   my-3 font-kantumruy font-medium" htmlFor={id}>
        {labeltext}{" "}
        {smalltext && <span className="text-sm px-2">{smalltext}</span>}{" "}
        {warn && <span className="text-red-600">*</span>}
      </label>
      <div className="relative  ">
        {iconmyimage && (
          <img
            src={iconmyimage}
            className="absolute left-0 top-0 bg-black rounded-l-lg p-4   "
            style={{ width: 48, height: 48 }}
          />
        )}
        <input
          type={type}
          className={`bg-custom-tags  rounded-lg ${
            nopaddingleft ? "pl-5" : " pl-16"
          } h-full outline-none p-3 w-full text-xl font-kantumruy placeholder:text-custom-placeholder`}
          id={id}
          placeholder={placeholder}
          value={formData[correctvalue] || ""}
          onChange={(e) => updateFormData(correctvalue, e.target.value)}
        />
        {showeyeicon && (
          <div className=" absolute right-4 bottom-5 ">
            <img src={eye} alt="" width={16} height={16} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Oneinput;
