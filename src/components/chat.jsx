import { Outlet } from "react-router-dom";
import ChatList from "../pages/chats/chatList";

export default function Chat() {
  return (
    <div className="flex gap-2 h-screen bg-main-black text-white">
      <ChatList />
      <Outlet />
    </div>
  );
}
