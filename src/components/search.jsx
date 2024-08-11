import { GrNext } from "react-icons/gr";
import { ServiceData } from "../constants";
import "./css/custom.css";
import { useEffect } from "react";
import { getProjectsCategory } from "../app/reducers/projectsSlice";
import { useDispatch, useSelector } from "react-redux";
export default function Search() {
  const dispatch = useDispatch();
  const { projectsCategory } = useSelector((state) => state.projects);
  console.log(projectsCategory);
  useEffect(() => {
    dispatch(getProjectsCategory());
  }, [dispatch]);

  return (
    <div className=" p-5 flex flex-col">
      <div className="h-1/2 overflow-x-auto scrollbar-thin">
        <div className="flex items-center gap-3">
          <h2 className="text-main-white text-2xl">Категории</h2>
          <GrNext size={16} color="white" />
        </div>
        <div className="flex gap-5 py-5 overflow-x-auto w-full scrollbar-x-thin">
          {projectsCategory.map((item) => (
            <div key={item.id}>
              <div
                className="w-[366px] h-[195px] bg-cover bg-center rounded-xl"
                style={{
                  backgroundImage: `url(${item.logo})`,
                }}
              >
                <div className="h-full w-full flex justify-center items-center bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
                  <h4 className="text-main-white text-sm md:text-2xl w-[170px] h-[62px] font-bold text-center">
                    {item.name}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-1/2 py-3">
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <h2 className="text-main-white text-2xl">Проекты</h2>
            <GrNext size={16} color="white" />
          </div>
          <div className="flex gap-5 py-5 overflow-x-auto w-full scrollbar-x-thin">
            {ServiceData.map((item) => (
              <div key={item.id} className="w-full h-full ">
                <div
                  className="w-[298px] h-[335px] bg-cover bg-center rounded-xl flex items-end"
                  style={{
                    backgroundImage: `url(${item.backgroundImage})`,
                  }}
                >
                  <div className="w-full flex flex-col gap-10 p-3">
                    <h1 className="text-xl text-main-white font-semibold lg:text-2xl">
                      {item.title}
                    </h1>
                    <div className="flex items-end justify-between">
                      <p className="lg:text-[18px] text-second-color">
                        от <br />
                        {item.price} р.
                      </p>
                      <a className="text-main-red underline" href="">
                        Подробнее
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
