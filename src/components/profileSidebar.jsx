import {
  IoExitOutline,
  IoNotificationsOutline,
  // IoSettingsOutline,
} from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
// import Charts from "../components/charts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCurrentUserResume } from "../app/reducers/resumeSlice";
import { baseURL } from "../app/api/baseUrl";
import axios from "axios";
import StatusComponent from "./statusComponent";
import { logout } from "../app/reducers/authSlice";

export default function ProfileSidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentResume, selectedResume } = useSelector(
    (state) => state.resumes
  );

  console.log(selectedResume);
  

  useEffect(() => {
    dispatch(getCurrentUserResume());
  }, [dispatch]);
  const token = localStorage.getItem("accessToken");

  const handleCreateChat = async () => {
    try {
      const { data } = await axios.post(
        `${baseURL}/chat/create_room/`,
        { email: selectedResume.owner.email },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(data);
      navigate(`/profile/chat/${data?.id}`);
    } catch (error) {
      const id = error.response?.data?.id;
      console.log(error);
      if (id) {
        navigate(`/profile/chat/${id}`);
      }
    }
  };

  const logOutProfile = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="bg-main-black">
      <div className=" min-h-screen flex flex-row bg-main-black  p-5">
        <div className="flex flex-col max-w-[393px]  min-h-[600px] w-full bg-gray-700  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 text-main-white rounded-3xl overflow-hidden">
          <div className="flex items-center justify-center h-20 shadow-md">
            <div className="w-full flex justify-between p-5">
              <IoExitOutline
                onClick={logOutProfile}
                size={23}
                className="cursor-pointer hover:text-main-red"
              />
              <div className="flex gap-3">
                <Link to={"/profile/notification"}>
                  <IoNotificationsOutline
                    size={23}
                    className="cursor-pointer hover:text-main-red"
                  />
                </Link>
                {/* <Link to={"/profile/settings"}>
                  <IoSettingsOutline
                    size={23}
                    className="cursor-pointer hover:text-main-red"
                  />
                </Link> */}
              </div>
            </div>
          </div>
          <ul className="flex flex-col py-6 px-12">
            <Link to={"/profile/accaunt"}>
              <li>
                <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full border-2 border-main-red mx-auto cursor-pointer">
                  <img
                    className="w-[90%] h-[90%] rounded-full object-cover"
                    src={selectedResume?.image || currentResume[0]?.image}
                    alt=""
                  />
                </div>
              </li>
            </Link>
            <li>
              <h2 className="text-center">
                {selectedResume?.owner?.first_name ||
                  currentResume[0]?.owner.first_name}
              </h2>
            </li>
            <li className="text-center">
              <span className="text-second-color">
                {selectedResume?.heading?.name ||
                  currentResume[0]?.heading.name}
              </span>
            </li>
            <li className="text-main-red">
              {selectedResume?.owner?.status || <StatusComponent />}
            </li>
          </ul>

          {selectedResume?.id &&
            selectedResume?.id !== currentResume?.[0]?.id && (
              <button
                onClick={handleCreateChat}
                className="mx-6 bg-[#680202] max-w-[223px] min-h-[39px] rounded-md font-light text-main-white"
              >
                Написать сообщение
              </button>
            )}

          {/* <div className="p-2">
            <Charts />
          </div> */}

          <div className="w-full h-20 px-5 py-5">
            <div className="flex justify-between">
              <span className="text-main-white text-xs">Уведомления</span>
              <a href="" className="text-main-red text-xs underline">
                Все
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
