import React from "react";
import Mybutton from "./Mybutton";
import micro from "../../assets/companysPNG/micro/micro.png";
import { Link } from "react-router-dom";
const Qestion = () => {
  return (
    <div className="  bg-custom-tags flex flex-col text-center md:flex-row justify-center items-center  gap-y-5 gap-x-10 py-5 md:py-10 ">
      <img src={micro} height={45} width={45} />
      <h1 className="font-kantumruy text-2xl font-medium mx-4 md:mx-0">
        Are you a software developer in Ethiopia?
      </h1>
      <Link to={"/sheqlee/company signup"}>
        <Mybutton
          background={
            " border-[2px] border-custom-purple py-[8px] md:py-2 px-7 md:px-3  bg-custom-purple text-white rounded-[10px] font-medium font-kantumruy text-2xl"
          }
        >
          Sign up
        </Mybutton>
      </Link>
    </div>
  );
};

export default Qestion;
