import Image from "next/image";
import React from "react";

const Thinking = () => {
  return (
    <div className="bg-[#EAEAEA]">
      <div className="text-center">
        <div className="flex justify-center">
          <Image src="/WhyWorkForce/upfront.png" width={200} height={200}className="mt-10" alt="upfront"/>
        </div>
        <div className="flex justify-center items-center container mx-auto lg:mt-7 mt-3">
          <p className="lg:text-3xl text-2xl secondary-title lg:w-[55vw] lg:p-0 p-2">
            The workforce is integral to the global and local economies but
            stays largely at the bottom of the pyramid, with skewed
            participation of women and trans people facing issues related to
            inequity, bias, discrimination, harassment, and violence.
          </p>
        </div>
        <div className="flex justify-center items-center container mx-auto lg:mt-10 mt-5">
          <p className="para-color lg:w-[40vw] p-3 lg:p-0">
            Systems generally tend to transact rather than engage with the
            workforce. Their wellbeing is mostly considered a ‘cost’ not an
            ‘investment’.
          </p>
        </div>
        <div className="container mx-auto flex items-center lg:gap-5 lg:mt-12 mt-5">
          <p className="bg-red-600 h-1 lg:w-20 w-32 lg:-mt-12  -mt-28 mx-5 lg:mx-0"></p>
          <p className="text-left para-color lg:w-[46vw] lg:p-0 p-3">
            A large number of the workforce are migrants, experiencing exclusion
            and poverty as a result of inadequate resources, and support, and a
            lack of inclusive infrastructure, leadership, practices, policies,
            and systems.
          </p>
        </div>
      </div>

      <div className="bg-black  flex lg:flex-row flex-col justify-center items-center container mx-auto lg:p-5 p-7 mt-12">
        <p className="text-white lg:w-[55vw] lg:pe-10">
          With rising climate, health, and occupational risks threatening
          millions of lives and livelihoods, the world is transitioning from
          being Volatile, Uncertain, Complex, and Ambiguous (VUCA) to being
          Brittle, Anxious, Non-Linear, and Incomprehensible (BANI), where the
          workforce tend to get caught in a vicious loop of poverty,
          unemployment, precarious work, and living conditions. In both
          VUCA/BANI-led labour markets, employers and industries too are caught
          up between businesses, growth, and production at one end and
          attrition, absenteeism, and productivity at the other end.
        </p>
        <Image
          width={500}
          height={300}
          src="/WhyWorkForce/img-1.png"
          className="lg:float-end lg:w-72 w-52 lg:mt-0 mt-5"
          alt="upfront"
        />
      </div>

      <div className="lg:flex gap-24 items-center container mx-auto lg:p-10 p-5 mt-5">
       
        <Image
          width={500}
          height={300}
          src="/WhyWorkForce/img-2.png"
          className="lg:w-full mx-auto w-56"
          alt="upfront"
        />
       
        <div className="container mx-auto lg:mt-0 mt-5">
          <h2 className="lg:text-3xl text-2xl secondary-title lg:w-[30vw] ">
            So why should we invest in making wellbeing a reality for the
            workforce?
          </h2>
          <p className="para-color lg:w-[50vw] mt-5 text-left">
            Research substantiates that an empowered workforce fosters economic
            growth, which can be backed by comprehensive efforts and good
            practices. With an investment of $10 trillion projected by 2035, the
            benefits can only be realised if we invest in our workforce (Centre
            for Economics and Business Research (CEBR)).
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="flex justify-between items-center gap-4 bg-[#2F2F2F] text-white py-2 px-2 w-48 my-10 rounded-full hover:bg-gray-900">
          <span className="px-3">Download Now</span>
          <span className="bg-[#5C5C5C] p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16l8 8m0 0l8-8m-8 8V4"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Thinking;
