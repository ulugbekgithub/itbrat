import ChatList from "../pages/chats/chatList";
import ChatWindow from "../pages/chats/chatWindow";

export default function Chat() {
  return (
    <div className="flex gap-2 h-screen bg-main-black text-white">
    <ChatList />
    <ChatWindow />
  </div>
  );
}
