import { GrLinkNext } from "react-icons/gr";
import { Rezume1Data, Rezume2Data } from "../constants";
import { v4 as uuidv4 } from "uuid";

import "./css/custom.css";

export default function ScrollComponent() {
  return (
    <div className="flex gap-5 ">
      <div className="w-full h-[950px] flex flex-col gap-7 rounded-xl overflow-y-scroll scrollbar-rezume-thin">
        {Rezume1Data.map((item) => (
          <div className="relative" key={uuidv4()}>
            <img src={item.img} alt="" />
            <div className="w-full absolute bottom-0">
              <div className="h-full w-full bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-20 backdrop-saturate-50 backdrop-contrast-100 flex justify-between items-center p-6">
                <div>
                  <h5 className="text-main-white">{item.name}</h5>
                  <span className="text-second-color">{item.job}</span>
                </div>
                <div className="transform hover:translate-x-2 transition-transform ease-in duration-200 cursor-pointer">
                  <GrLinkNext color="white" size={50} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-[950px] flex flex-col gap-7 rounded-xl overflow-y-scroll scrollbar-rezume-thin">
        {Rezume2Data.map((item) => (
          <div className="relative " key={uuidv4()}>
            <img src={item.img} alt="" />
            <div className="w-full absolute bottom-0">
              <div className="h-full w-full bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-20 backdrop-saturate-50 backdrop-contrast-100 flex justify-between items-center p-2 py-5">
                <div>
                  <h5 className="text-main-white">{item.name}</h5>
                  <span className="text-second-color">{item.job}</span>
                </div>
                <div className="transform hover:translate-x-2 transition-transform ease-in duration-200 cursor-pointer">
                  <GrLinkNext color="white" size={50} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
