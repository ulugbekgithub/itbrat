import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import ChatList from "../pages/chats/chatList";

export default function Chat() {
  // 1. Add state for toggling between ChatList and ChatWindow
  const [showChatList, setShowChatList] = useState(true);
  const [isMobile, setIsMobile] = useState(false); // Track if the screen is mobile size

  // 2. Use media query to detect screen width below 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setIsMobile(true); // Set to mobile view
        setShowChatList(true); // Show chat list by default on small screens
      } else {
        setIsMobile(false); // Set to desktop view
        setShowChatList(true); // Show both on larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state based on screen size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 3. Function to handle member click (to show chat window on mobile)
  const handleMemberClick = () => {
    if (isMobile) {
      setShowChatList(false); // Hide chat list on small screens
    }
  };

  // 4. Function to go back to chat list (on small screens)
  const handleBackClick = () => {
    setShowChatList(true); // Show chat list again
  };

  return (
    <div className="flex h-screen bg-main-black text-white">
      {/* ChatList is always visible on desktop; conditionally visible on mobile */}
      {showChatList && (
        <ChatList onMemberClick={handleMemberClick} />
      )}

      {/* ChatWindow is hidden on mobile until a chat is clicked, always visible on desktop */}
      {(!isMobile || !showChatList) && (
        <div className="w-full h-full relative">
          {isMobile && (
            <button
              onClick={handleBackClick}
              className="p-2 absolute top-4"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0408 15.1186C10.4527 14.5305 10.4527 13.5695 11.0408 12.9814L15.4979 8.5243C16.086 7.93619 17.047 7.93619 17.6351 8.5243C18.2232 9.11241 18.2232 10.0734 17.6351 10.6615L15.2967 13H23.7487C24.5564 13 25.2487 13.6923 25.2487 14.5C25.2487 15.3077 24.5564 16 23.7487 16H15.1625L17.5481 18.3856C18.1362 18.9737 18.1362 19.9347 17.5481 20.5228C16.96 21.1109 15.999 21.1109 15.4109 20.5228L11.0408 16.1527C10.7467 15.8586 10.5997 15.4293 10.5997 15C10.5997 14.5707 10.7467 14.1414 11.0408 13.8473V15.1186Z"
                  fill="#A3A3A3"
                />
              </svg>
            </button>
          )}
          <Outlet />
        </div>
      )}
    </div>
  );
}
