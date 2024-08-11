import {
  IoExitOutline,
  IoNotificationsOutline,
  // IoSettingsOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import Charts from "../components/charts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCurrentUserResume } from "../app/reducers/resumeSlice";

export default function ProfileSidebar() {

  const dispatch=useDispatch()
  const { currentResume } = useSelector((state) => state.resumes);

  useEffect(() => {
    dispatch(getCurrentUserResume());
  }, [dispatch]);

  return (
    <div className="bg-main-black">
      <div className="min-h-screen flex flex-row bg-main-black  p-5">
        <div className="flex flex-col max-w-[393px]  h-full w-full bg-gray-700  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 text-main-white rounded-3xl overflow-hidden">
          <div className="flex items-center justify-center h-20 shadow-md">
            <div className="w-full flex justify-between p-5">
              <IoExitOutline
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
            <li>
              <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full border-2 border-main-red mx-auto cursor-pointer">
                <img className="w-[90%] h-[90%] rounded-full" src={currentResume[0]?.image} alt="" />
              </div>
            </li>
            <li>
              <h2 className="text-center">{currentResume[0]?.owner.first_name}</h2>
            </li>
            <li className="text-center">
              <span className="text-second-color">{currentResume[0]?.heading.name}</span>
            </li>
          </ul>

          <div className="p-2">
            <Charts />
          </div>

          <div className="w-full h-20 px-5">
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
