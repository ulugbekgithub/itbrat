import { useSelector } from "react-redux";

export default function ProjectInfo() {
  const { projectInfo } = useSelector((state) => state.projects);

  return (
    <div className="w-full min-h-screen bg-[#1E1E1E] rounded-lg mt-2 p-3">
      <div className="w-full flex xl:flex-row flex-col">
        <div className="w-1/2">
          <h3 className="text-main-white text-[clamp(16px,3vw,24px)] font-bold mb-4">
            Подробнее
          </h3>
          <div className="w-full relative">
            <div className="w-full max-w-[298px] h-full bg-[#2E2E2E] flex items-center justify-center rounded-xl">
              <img src={projectInfo.image} alt="project" />
            </div>
          </div>
        </div>
        <div className="">
          <div className="p-6 rounded-xl w-full max-w-[400px] text-white">
            <div className="mb-4 flex">
              <label className="block mt-3 text-[clamp(8px,3vw,14px)]">
                Название:
              </label>
              <span className="w-full px-2 py-1 bg-transparent border-b border-gray-500 outline-none">
                {projectInfo.name}
              </span>
            </div>

            <div className="mb-4 flex items-center">
              <label className="w-full block mt-3 text-[clamp(8px,3vw,14px)]">
                Контактные данные:
              </label>
              <span className="w-full px-2  bg-transparent border-b border-gray-500 outline-none">
                {projectInfo.contact}
              </span>
            </div>

            <div className="mb-4 flex items-center">
              <label className="block mt-3 text-[clamp(8px,3vw,14px)]">
                Плата:
              </label>
              <span className="w-full px-2 py-1 bg-transparent border-b border-gray-500 outline-none">
                {projectInfo.price} {projectInfo.valuta}
              </span>
            </div>

            <div className="mb-4 flex items-center">
              <label className="block mt-3 text-[clamp(8px,3vw,14px)]">
                Требуемые навыки:
              </label>
              <span className="w-full px-2 py-1 bg-transparent border-b border-gray-500 outline-none">
                {projectInfo.skils}
              </span>
            </div>

            <div className="mb-4 flex">
              <label className="block mt-3 text-[clamp(8px,3vw,14px)]">
                Категория:
              </label>
              <span className="w-full px-2 py-1 bg-transparent border-b border-gray-500 outline-none">
                {projectInfo.category.name}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-main-white text-[clamp(12px,3vw,20px) font-medium]">
          Описание:
        </h3>
        <div className="flex p-3 bg-[#2E2E2E] w-full max-w-[95%] h-full min-h-[365px] text-main-white mt-2 rounded-lg">
          <span className="w-full max-w-[90%] break-words whitespace-pre-wrap">
            {projectInfo.description}
          </span>
        </div>
      </div>
    </div>
  );
}
