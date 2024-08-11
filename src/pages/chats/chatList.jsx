

const chats = [
  { id: 1, name: 'Alex B.', message: 'Отлично, договорились!', time: '10:00', active: true },
  { id: 2, name: 'Чат 2', message: 'Сообщение', time: '', active: false },
  // Add more chat data as needed
];

const ChatList = () => {
  return (
    <div className="w-1/3 bg-[#111111] rounded-md p-4 ">
      <input
        type="text"
        placeholder="Поиск по чатам"
        className="w-full p-2 rounded mb-4 bg-gray-700 placeholder-gray-400 text-white"
      />
      {chats.map(chat => (
        <div
          key={chat.id}
          className={`p-2 mb-2 rounded cursor-pointer hover:bg-sky-700   flex gap-2 ${chat.active ? 'bg-gray-700' : 'bg-gray-800'}`}
        >
          <div className="avatar online">
            <div className="w-12 rounded-full bg-white">

            </div>
          </div>
          <div>

          <div className="">
            <span className="font-bold">{chat.name}</span>
            <span className="text-sm text-gray-400">{chat.time}</span>
          </div>
          <p className="text-gray-400">{chat.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
