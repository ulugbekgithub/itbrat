import { NotificationData } from "../constants";
import notification from "../assets/notification.png";

export default function Notification() {
  return (
    <div className="text-main-white px-10 h-full">
      <h1 className="text-main-white text-3xl">Уведомления</h1>
      <div className="w-full h-full flex justify-center items-center">
        {NotificationData && NotificationData.length>0 ? (
          NotificationData.map((item) => <div key={item.id}></div>)
        ) : (
          <div className="w-[204px] h-[131px] flex justify-center items-center">
            <img className="" src={notification} />
          </div>
        )}
      </div>
    </div>
  );
}
