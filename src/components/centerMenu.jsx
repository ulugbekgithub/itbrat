import { Outlet } from "react-router-dom";

import "./css/custom.css";

export default function CenterMenu() {
  return (
    <div className="w-full py-10">
      <div className="md:h-[calc(100vh-140px)] w-full overflow-y-auto scrollbar-thin">
        <Outlet />
      </div>
    </div>
  );
}
