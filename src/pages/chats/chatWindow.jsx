import { FiPaperclip } from "react-icons/fi";
import "../../components/css/custom.css";

const messages = [
  {
    id: 1,
    from: "Alex B.",
    content:
      "Доброе утро! Заинтересовал ваш проект, расскажите, пожалуйста, про него поподробнее",
    time: "10:00",
    sent: false,
  },
  {
    id: 2,
    from: "You",
    content:
      "Доброе утро! Завтра состоится онлайн-конференция, где вы сможете узнать подробности о предстоящем проекте и задать свои вопросы. Ссылка:",
    time: "10:00",
    sent: true,
  },
  {
    id: 3,
    from: "Alex B.",
    content: "Отлично, договорились!",
    time: "10:00",
    sent: false,
  },
  {
    id: 4,
    from: "Alex B.",
    content: "Отлично, договорились!",
    time: "10:00",
    sent: true,
  },
  {
    id: 5,
    from: "Alex B.",
    content: "Отлично, договорились!",
    time: "10:00",
    sent: false,
  },
];

const ChatWindow = () => {
  return (
    <div className="w-2/3 bg-[#111111] p-4 flex flex-col rounded-md h-screen">
      <div className="flex items-center border-b border-gray-700 pb-4 mb-4 flex-shrink-0">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-green-500"></div>
          <div className="ml-4">
            <h2 className="font-bold text-lg">Alex B.</h2>
            <span className="text-sm text-gray-400">Online</span>
          </div>
        </div>
        <div className="ml-auto flex items-center space-x-2">
          <button className="p-2 rounded bg-gray-800 hover:bg-gray-700">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.98303 22.4237C4.98303 21.1021 5.50803 19.8347 6.44253 18.9002C7.37704 17.9657 8.6445 17.4407 9.96608 17.4407H19.9322C21.2538 17.4407 22.5212 17.9657 23.4557 18.9002C24.3902 19.8347 24.9152 21.1021 24.9152 22.4237C24.9152 23.0845 24.6527 23.7182 24.1855 24.1855C23.7182 24.6528 23.0845 24.9153 22.4237 24.9153H7.47456C6.81376 24.9153 6.18003 24.6528 5.71278 24.1855C5.24553 23.7182 4.98303 23.0845 4.98303 22.4237Z"
                stroke="#A3A3A3"
              />
              <path
                d="M14.9491 12.4576C17.0131 12.4576 18.6864 10.7844 18.6864 8.72032C18.6864 6.65627 17.0131 4.98303 14.9491 4.98303C12.885 4.98303 11.2118 6.65627 11.2118 8.72032C11.2118 10.7844 12.885 12.4576 14.9491 12.4576Z"
                stroke="#A3A3A3"
              />
            </svg>
          </button>
          <button className="p-2 rounded bg-gray-800 hover:bg-gray-700">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.3348 9.28717L18.7946 2.74692C18.6644 2.6166 18.5099 2.51322 18.3397 2.44268C18.1696 2.37214 17.9872 2.33582 17.803 2.33582H6.59118C5.97168 2.33582 5.37756 2.58191 4.93951 3.01996C4.50146 3.45801 4.25537 4.05213 4.25537 4.67162V25.2267C4.25537 25.8462 4.50146 26.4403 4.93951 26.8784C5.37756 27.3164 5.97168 27.5625 6.59118 27.5625H23.409C24.0285 27.5625 24.6226 27.3164 25.0606 26.8784C25.4987 26.4403 25.7448 25.8462 25.7448 25.2267V10.2776C25.7448 9.90615 25.5973 9.54994 25.3348 9.28717ZM18.7374 6.65705L21.4235 9.34323H18.7374V6.65705ZM7.05834 24.7595V5.13878H15.9344V10.7447C15.9344 11.1164 16.0821 11.4729 16.3449 11.7357C16.6077 11.9985 16.9642 12.1462 17.3359 12.1462H22.9418V24.7595H7.05834Z"
                fill="#A3A3A3"
              />
            </svg>
          </button>
          <button className="p-2 rounded bg-gray-800 hover:bg-gray-700">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0509 21.178C15.7116 21.178 16.3454 21.4405 16.8126 21.9077C17.2799 22.375 17.5424 23.0087 17.5424 23.6695C17.5424 24.3303 17.2799 24.964 16.8126 25.4313C16.3454 25.8985 15.7116 26.161 15.0509 26.161C14.3901 26.161 13.7563 25.8985 13.2891 25.4313C12.8218 24.964 12.5593 24.3303 12.5593 23.6695C12.5593 23.0087 12.8218 22.375 13.2891 21.9077C13.7563 21.4405 14.3901 21.178 15.0509 21.178ZM15.0509 12.4576C15.7116 12.4576 16.3454 12.7201 16.8126 13.1874C17.2799 13.6546 17.5424 14.2884 17.5424 14.9491C17.5424 15.6099 17.2799 16.2437 16.8126 16.7109C16.3454 17.1782 15.7116 17.4407 15.0509 17.4407C14.3901 17.4407 13.7563 17.1782 13.2891 16.7109C12.8218 16.2437 12.5593 15.6099 12.5593 14.9491C12.5593 14.2884 12.8218 13.6546 13.2891 13.1874C13.7563 12.7201 14.3901 12.4576 15.0509 12.4576ZM15.0509 3.73728C15.7116 3.73728 16.3454 3.99978 16.8126 4.46703C17.2799 4.93428 17.5424 5.56799 17.5424 6.22878C17.5424 6.88957 17.2799 7.52328 16.8126 7.99053C16.3454 8.45778 15.7116 8.72028 15.0509 8.72028C14.3901 8.72028 13.7563 8.45778 13.2891 7.99053C12.8218 7.52328 12.5593 6.88957 12.5593 6.22878C12.5593 5.56799 12.8218 4.93428 13.2891 4.46703C13.7563 3.99978 14.3901 3.73728 15.0509 3.73728Z"
                fill="#A3A3A3"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto mb-4 scrollbar-thin">
        {messages.map((message) => (
          <div key={message.id} className="mb-4">
            <div className={`flex ${message.sent ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs p-4 rounded-lg ${
                  message.sent ? "bg-blue-500 text-white" : "bg-gray-700 text-white"
                }`}
              >
                <p className="mb-2">{message.content}</p>
                <div className="text-xs text-gray-400 flex justify-between">
                  <span>{message.time}</span>
                  {message.sent && (
                    <span className="text-blue-200 flex items-center">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative flex items-center border-t border-gray-700 pt-4 mt-4">
      <div className="absolute left-2">
      <label htmlFor="file-upload" className="cursor-pointer">
        <FiPaperclip className="cursor-pointer" />
      </label>
      <input
        id="file-upload"
        type="file"
        className="hidden"
      />
    </div>
        <input
          type="text"
          placeholder="Написать сообщение..."
          className="w-full p-2 px-8 rounded bg-gray-700 placeholder-gray-400 text-white"
        />
        <button className="ml-2 p-2 rounded bg-gray-700 hover:bg-blue-500">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7M12 3v18"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
