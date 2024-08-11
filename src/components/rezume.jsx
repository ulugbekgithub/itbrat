import { useDispatch, useSelector } from "react-redux";

import { GrLinkNext } from "react-icons/gr";
import { useEffect, useState } from "react";
import { getAllResume, resumeDeleteLike, resumePostLike } from "../app/reducers/resumeSlice";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

export default function Rezume() {
  const dispatch = useDispatch();
  const { allResume} = useSelector((state) => state.resumes);
  const [statuslike, setStatuslike] = useState(false);


  console.log(allResume);
  

  useEffect(() => {
    dispatch(getAllResume());
  }, [statuslike]);



  
  const handleLikeClick = async (id) => {
    await dispatch(resumePostLike(id));
    setStatuslike(!statuslike);
  };

  const handleDeleteLike = async (id) => {
    await dispatch(resumeDeleteLike(id));
    setStatuslike(!statuslike);
  };

  
  return (
    <div className="px-5">
      <div className="">
        <h1 className="text-main-white text-3xl font-semibold">Резюме</h1>

        <div className="w-full h-full grid lg:grid-cols-2 grid-cols-1 gap-5 py-3">
          {allResume.results?.map((item) => (
            <div key={item.id} className="w-full h-full relative">
              <div
                className="flex items-end bg-cover bg-center w-[100%] h-[435px] rounded-xl"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >
                <button className="absolute top-4 right-[20px] flex items-center justify-center w-10 h-10 rounded-full bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40">
                    {item.favorite ? (
                      <IoMdHeart
                        onClick={() => handleDeleteLike(item.id)}
                        className=" cursor-pointer hover:scale-110"
                        color="red"
                        size={30}
                      />
                    ) : (
                      <IoMdHeartEmpty
                        onClick={() => handleLikeClick(item.id)}
                        className="cursor-pointer hover:scale-110"
                        color="white"
                        size={30}
                      />
                    )}
                  </button>
                <div className=" h-[45px] w-full bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-20 backdrop-saturate-50 backdrop-contrast-100 flex justify-between items-center p-6">
                  
                  <div>
                    <h5 className="text-main-white">{item.owner.first_name}</h5>
                    <p className="text-second-color">{item.heading.name}</p>
                  </div>
                  <GrLinkNext
                    className="transform hover:translate-x-2 transition-transform ease-in duration-200 cursor-pointer"
                    size={40}
                    color="white"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
