import React, { useState } from "react";
import { useRef } from "react";
import dots from "../../assets/svg1/dots.svg";
const Uploadcv = ({ label, id }) => {
  // const [filename, setfilename] = useState("Resume - Muruts…2022.pdf");
  const [filename, setfilename] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setfilename(file.name);
      onUpload(file);
    } else {
      setfilename("");
    }
  };
  const fileInputRef = useRef(null);
  function handleclick() {
    fileInputRef.current.click();
  }
  return (
    <div className="space-y-5 font-kantumruy">
      <label htmlFor={id} className="font-medium font-kantumruy">
        {label}
      </label>
      {/* section for the inputs */}
      <div className="flex items-center w-fit flex-wrap   ">
        <span className="font-kantumruy   pt-1 text-xl rounded-lg  rounded-r-none bg-custom-tags flex-grow overflow-hidden border-4 border-custom-purple ">
          {filename ? (
            <div className="px-32">{filename}</div>
          ) : (
            <div className="flex justify-center gap-1 items-center px-32 py-2">
              <img src={dots} alt="" />
              <img src={dots} alt="" />
              <img src={dots} alt="" />
            </div>
          )}
        </span>
        <button
          className="bg-custom-purple px-3 py-1 rounded-lg rounded-l-none  border-4 border-custom-purple font-kantumruy font-semibold text-white"
          onClick={handleclick}
        >
          Upload CV <span className="font-normal">[.pdf]</span>
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={handleFileChange}
          id={label}
        />
      </div>
    </div>
  );
};

export default Uploadcv;
