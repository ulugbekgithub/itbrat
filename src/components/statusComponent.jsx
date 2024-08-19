import { useState, useEffect } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export default function StatusComponent() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState({});

  // Retrieve stored status from localStorage on component mount
  useEffect(() => {
    const storedStatus = JSON.parse(localStorage.getItem("selectedStatus"));
    if (storedStatus) {
      setSelectedStatus(storedStatus);
    }
  }, []);

  const toggleAccordion = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  const handleStatusChange = (index, status) => {
    // Update the status state
    const updatedStatus = {
      ...selectedStatus,
      [index]: status,
    };
    setSelectedStatus(updatedStatus);

    // Store the updated status in localStorage
    localStorage.setItem("selectedStatus", JSON.stringify(updatedStatus));
  };

  const accordionData = [
    {
      title: "Section 1",
      statuses: ["Active", "Inactive"],
    },
  ];

  return (
    <div className="w-full max-w-xl mx-auto mt-10">
      {accordionData.map((item, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => toggleAccordion(index)}
              className={`w-full flex items-center justify-between ${
                selectedIndex === index ? "text-main-red" : ""
              }`}
            >
              {/* Display Title and Selected Status */}
              <h3 className="text-lg font-medium">
               
                <span className="text-sm font-light text-main-red">
                  {selectedStatus[index]
                    ? ` - ${selectedStatus[index]}`
                    : "(Not Selected)"}
                </span>
              </h3>
              {selectedIndex === index ? (
                <IoMdArrowDropup size={24} />
              ) : (
                <IoMdArrowDropdown size={24} />
              )}
            </button>
          </div>

          {/* Accordion Content with Radio Buttons */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              selectedIndex === index ? "max-h-screen p-4" : "max-h-0"
            }`}
          >
            <div className="mt-4">
              {item.statuses.map((status, idx) => (
                <label key={idx} className="flex items-center mb-2 text-main-red">
                  <input
                    type="radio"
                    name={`status-${index}`}
                    value={status}
                    checked={selectedStatus[index] === status}
                    onChange={() => handleStatusChange(index, status)}
                    className="mr-2"
                  />
                  {status}
                </label>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
