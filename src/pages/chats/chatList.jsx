import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { baseURL } from "../../app/api/baseUrl";



const ChatList = () => {
  const [chatMemberList, setChatMemberList] = useState([]);
  const getMembersList = () => {
    axios
      .get(`${baseURL}/chat/rooms/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        setChatMemberList(response.data);
      });
  };
  useEffect(() => {
    getMembersList();
  }, []);

  console.log(chatMemberList);
  
  return (
    <div className="w-1/3 bg-[#111111] rounded-md p-4 ">
      <input
        type="text"
        placeholder="Поиск по чатам"
        className="w-full p-2 rounded mb-4 bg-gray-700 placeholder-gray-400 text-white"
      />
      {chatMemberList?.map((member) => (
        <NavLink
          to={`${member?.id}`}
          key={member?.receiver?.id}
          className={`p-2 mb-2 rounded cursor-pointer hover:bg-sky-700   flex gap-2 ${
            member?.active ? "bg-gray-700" : "bg-gray-800"
          }`}
        >
          <div className="">
            <div className="flex items-center justify-center w-12 rounded-full bg-white">
              <img src={member?.receiver?.avatar} alt="Avatar" />
            </div>
          </div>
          <div>
            <div className="">
              <span className="font-bold">{member?.receiver?.first_name}</span>
              {/* <span className="text-sm text-gray-400">10:00</span> */}
            </div>
            <p className="text-gray-400">{member?.message}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default ChatList;
