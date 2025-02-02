import React from "react";
import Dashboaredtitle from "../../components/onetimecmponent/Dashboaredtitle";
import Location from "../../components/basecomponents/Location";
import tsegay from "../../assets/tsegay.jpg";
import Reatchtext from "../../components/basecomponents/Reatchtext";
import Mybutton from "../../components/basecomponents/Mybutton";
import Divider from "../../components/basecomponents/Divider";
import building from "../../assets/SVG/company.svg";
import Oneinputfor from "../../components/basecomponents/Oneinputfor";
import blackedit from "../../assets/direction/editblack.svg";
import profilepic from "../../assets/direction/profile.svg";
import profilepic1 from "../../assets/direction/settings - alt2/profile.png";
import Sectionprofile from "../../components/basecomponents/Sectionprofile";
import Dropdownform from "../../components/basecomponents/Dropdownform";
import { useState } from "react";
const Companyprofile = () => {
  const [formData, setFormdata] = useState({
    companyName: "",
    domain: "",
    Description: "",
    companySize: "",
    companyLocation: "",
  });
  const updateFormData = (field, value) => {
    setFormdata((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  return (
    <div>
      <div>
        <Location />
        {/* {Object.entries(formData).map(([key, value]) => (
          <div className="flex justify-around" key={key}>
            {key}: {value}
          </div>
        ))} */}
      </div>
      <div className=" flex  flex-col  items-center   justify-center my-10 mx-3 ">
        <Dashboaredtitle
          text={
            " Provide accurate information about your company to make yourself discoverable."
          }
          css={550}
          heading={"Company profile"}
        >
          <img
            src={building}
            alt="company svg"
            className=" w-[45px] h-[45px] md:w-[50px] md:h-[50px]"
          />
        </Dashboaredtitle>
      </div>
      <div className="mx-4">
        {/* // input parts  */}
        <form
          action=""
          onSubmit={(e) => e.preventDefault()}
          className="max-w-4xl  mx-auto "
        >
          <div className="flex max-sm:flex-col justify-center items-start gap-4  md:gap-8  max-w-4xl  mx-auto">
            <div className="flex flex-col w-full md:w-2/3 gap-2 relative  ">
              <Oneinputfor
                labeltext={"Company name"}
                warn
                placeholder={"Sheqlee Co., Ltd."}
                icon={blackedit}
                id={"name"}
                updateFormData={updateFormData}
                formData={formData}
                correctvalue={"companyName"}
              />
            </div>
            <div className="flex flex-col w-full md:w-2/3 gap-2 relative">
              <Oneinputfor
                labeltext={"Domain"}
                warn
                placeholder={"https://sheqlee.com"}
                icon={blackedit}
                id={"Domain "}
                updateFormData={updateFormData}
                formData={formData}
                correctvalue={"domain"}
              />
            </div>

            <Sectionprofile profilepic1={profilepic1} buttontext={"Upload"} />
          </div>
          {/* //ritch text part */}
          <div className="mt-8 md:mt-0 md:-translate-y-8">
            <div className="  max-w-5xl  mx-auto">
              <Reatchtext
                showtext={"Description"}
                placeholder={"A brief description about your company..."}
                value={formData.Description}
                onChange={(content) => updateFormData("Description", content)}
              />
            </div>
            <div className=" -translate-y-6">
              <div className="flex max-sm:flex-col justify-center items-center  gap-5  max-w-4xl  mx-auto">
                <div className="flex flex-col w-full md:w-2/3 gap-2 relative">
                  <Dropdownform
                    options={["Less than 5", "Less than 10", "Less than 50"]}
                    defaultText="Company size"
                    labeltext={"Company size"}
                    updateFormData={updateFormData}
                    formData={formData}
                    correctvalue2={"companySize"}
                  />
                </div>
                <div className="flex flex-col w-full md:w-2/3 gap-2 relative">
                  <Oneinputfor
                    labeltext={"HQ location"}
                    placeholder={"Seoul, S. Korea"}
                    icon={blackedit}
                    id={"location "}
                    updateFormData={updateFormData}
                    formData={formData}
                    correctvalue={"companyLocation"}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end w-full  mt-10 ">
              <Mybutton
                background={
                  "bg-custom-purple font-medium font-kantumruy  text-custom-white rounded-lg py-2 px-4"
                }
              >
                <h1 className="  text-lg md:text-[20px]">Update profile </h1>
              </Mybutton>
            </div>
            <div className=" max-w-4xl  mx-auto mb-10">
              <Divider></Divider>
              <span className="block font-kantumruy text-start mt-3  text-sm md:text-base">
                <span className="text-red-800">*</span> fields are required.{" "}
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Companyprofile;
