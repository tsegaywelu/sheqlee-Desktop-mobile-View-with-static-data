import React, { useState } from "react";
import Postedjobs from "../components/basecomponents/Postedjobs";
import bell from "../assets/SVG/bell.svg";
import { useParams } from "react-router-dom";
import Mybutton from "../components/basecomponents/Mybutton";
import { FaFacebook, FaTwitter, FaTelegram, FaLinkedin } from "react-icons/fa";
import Location from "../components/basecomponents/Location";
import { Modal } from "../components/basecomponents/Modal";
import Qestion from "../components/basecomponents/Qestion";
import Pagination from "../components/basecomponents/Pagination";
const Tagdetail = () => {
  const { theidtodisplay } = useParams();
  const mytitle = theidtodisplay;
  const logo = mytitle.slice(0, 2);
  const [showModal, setshowModal] = useState(false);
  const openmodal = () => {
    setshowModal(true);
  };
  const closemodal = () => {
    setshowModal(false);
  };
  return (
    <div>
      {showModal && (
        <Modal
          message={
            "Please register or login before  you <br/>could subscribe to tags."
          }
          closewin={closemodal}
        />
      )}
      <div className="">
        <Location />
      </div>
      <div className="">
        <div className="  flex flex-col items-center text-center px-8 font-sans text-black mb-16">
          <div className="  w-20 h-20 bg-yellow-400 flex items-end justify-end text-4xl m-3 p-2  font-kantumruy font-bold uppercase">
            {logo}
          </div>
          <h1 className="text-2xl lg:text-4xl text-custom-black font-semibold font-kantumruy mb-2  capitalize">
            {mytitle}
          </h1>
          <p className="text-base lg:text-2xl text-custom-black font-kantumruy mb-5 md:mb-10 mt-1">
            All job posts with the tag{" "}
            <span className="font-medium  capitalize "> {mytitle}</span>.
          </p>

          <button
            className="flex items-center gap-5  px-4  py-3 bg-custom-purple  text-custom-white font-medium font-kantumruy rounded-[10px]  mt-2 md:mt-4 text-lg md:text-[21px]"
            onClick={openmodal}
          >
            <img
              src={bell}
              className=" h-[19px] w-[19px] md:w-[22px] md:h-[22px]"
              alt="bell icon "
            />
            <div className="pr-2">Subscribe to tag</div>
          </button>

          <p className="text-lg md:text-2xl text-custom-black font-kantumruy mt-5  md:mt-7 gap-4 ">
            Subscribers: <span className="font-semibold">842</span>
          </p>

          <div className="flex gap-3 mt-2 md:mt-3 text-gray-700">
            <FaFacebook
              size={18}
              className="hover:text-purple-400 cursor-pointer w-[15px]  md:w-[24px]"
            />
            <FaTwitter
              size={18}
              className="hover:text-purple-400 cursor-pointer w-[15px] md:w-[24px]"
            />
            <FaTelegram
              size={18}
              className="hover:text-purple-400 cursor-pointer w-[15px] md:w-[24px]"
            />
            <FaLinkedin
              size={18}
              className="hover:text-purple-400 cursor-pointer w-[15px] md:w-[24px]"
            />
          </div>
        </div>
        <Postedjobs totalPages={40} showpaginatin />

        <Qestion />
      </div>
    </div>
  );
};

export default Tagdetail;
