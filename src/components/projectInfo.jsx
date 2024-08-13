import axios from "axios";
import { useSelector } from "react-redux";
import { baseURL } from "../app/api/baseUrl";
import { FaTelegramPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ProjectInfo() {
  const { projectInfo } = useSelector((state) => state.projects);
  const navigate = useNavigate();

  const token = localStorage.getItem("accessToken");

  const createWebSocket = (id, dataToSend) => {
    const socket = new WebSocket(
      `wss://api.itbratrf.ru/ws/chat/${id}/?token=${token}`
    );
    socket.onopen = () => socket.send(JSON.stringify(dataToSend));
    socket.onmessage = (event) => console.log("Received message:", event.data);
    socket.onerror = (error) => console.error("WebSocket error:", error);
    socket.onclose = () => console.log("WebSocket closed");
  };

  // let chatId;
  const handleCreateChat = async () => {
    try {
      const { data } = await axios.post(
        `${baseURL}/chat/create_room/`,
        { email: projectInfo.owner.email },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      
      createWebSocket(data?.id, { message: "Valekum", info: projectInfo });
    } catch (error) {
      const id = error.response?.data?.id;
      if (id) {
        createWebSocket(id, { message: "Valekum", info: projectInfo });
      }
    }
    navigate(`/profile/chat`);
  };

  return (
    <div className="w-full min-h-screen bg-[#1E1E1E] rounded-lg mt-2 p-3">
      <button
        onClick={handleCreateChat}
        className="bg-red-700 text-main-white font-bold px-10 py-2 rounded-md flex items-center gap-2"
      >
        Chat
        <FaTelegramPlane color="white" />
      </button>
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
