import { useState, useEffect } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { updateUserStatus, setLocalStatus } from "../app/reducers/statusSlice";
import { getCurrentUser } from "../app/reducers/authSlice";

export default function StatusComponent({ userId }) {
  const dispatch = useDispatch();
  const storedStatus = useSelector((state) => state.status.status[userId]);
  const currentUser = useSelector((state) => state.auth.currentUser);

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(storedStatus || null);

  // Retrieve status from localStorage on mount
  useEffect(() => {
    const savedStatus = localStorage.getItem(`userStatus-${userId}`);
    if (savedStatus) {
      setSelectedStatus(JSON.parse(savedStatus));
    } else if (storedStatus) {
      setSelectedStatus(storedStatus);
    }
  }, [userId, storedStatus]);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const toggleAccordion = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  const handleStatusChange = (index, statusValue) => {
    setSelectedStatus(statusValue); // Update UI immediately

    // Persist status in localStorage
    localStorage.setItem(`userStatus-${userId}`, JSON.stringify(statusValue));

    // Update Redux state
    dispatch(setLocalStatus({ userId, status: statusValue }));

    // Make API call to update status in the backend
    dispatch(updateUserStatus({ userId, status: statusValue }));
  };

  const accordionData = [
    {
      statuses: [
        { label: "Активно ищу работу", value: 1 },
        { label: "Работаю над проектом", value: 2 },
      ],
    },
  ];

  return (
    <div className="w-full max-w-xl mx-auto mt-3">
      {currentUser?.groups?.map((item) => (
        <div key={item.id} className={`${item.id === 2 ? "hidden" : "block"}`}>
          {accordionData.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full flex items-center justify-between ${
                    selectedIndex === index ? "text-main-red" : ""
                  }`}
                >
                  <h3 className="text-lg font-medium">
                    <span className="text-sm font-light text-main-red">
                      {selectedStatus === 1
                        ? "Активно ищу работу"
                        : selectedStatus === 2
                        ? "Работаю над проектом"
                        : "выберите статус"}
                    </span>
                  </h3>
                  {selectedIndex === index ? (
                    <IoMdArrowDropup size={24} />
                  ) : (
                    <IoMdArrowDropdown size={24} />
                  )}
                </button>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  selectedIndex === index ? "max-h-screen p-4" : "max-h-0"
                }`}
              >
                <div className="mt-4">
                  {item.statuses.map((status) => (
                    <label
                      key={status.value}
                      className="flex items-center mb-2 text-main-red"
                    >
                      <input
                        type="radio"
                        name={`status-${index}`}
                        value={status.value}
                        checked={selectedStatus === status.value}
                        onChange={() => handleStatusChange(index, status.value)}
                        className="mr-2"
                      />
                      {status.label}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
