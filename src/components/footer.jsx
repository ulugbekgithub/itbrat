import logo from "../assets/logo.png";

import { BiLogoTelegram } from "react-icons/bi";
import { SlSocialVkontakte } from "react-icons/sl";
import { PiInstagramLogoFill } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full max-w-[1196px] flex flex-col-reverse items-center  justify-between md:flex-row  md:mt-[200px] mt-10 pb-12">
       <div className="w-1/2 flex justify-between items-center">
       <div>
          <ul className="flex flex-col gap-2 p-5 text-[clamp(8px,3vw,14px)]">
            <li className="text-main-white">
              <h3>МЕНЮ</h3>
            </li>
            <li className="text-second-color">Главная</li>
            <li className="text-second-color">О нас</li>
            <li className="text-second-color">Контакты</li>
            <li className="text-second-color">FAQ</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-2 p-5 text-[clamp(8px,3vw,14px)]">
            <li className="text-main-white">
              <h3>О ПРОЕКТЕ</h3>
            </li>
            <li className="text-second-color">Пользовательское соглашение</li>
            <li className="text-second-color">Правила</li>
            <li className="text-second-color">Помощь</li>
            <li className="text-second-color">Услуги</li>
          </ul>
        </div>
       </div>
      <div className="flex justify-start">
        <ul className="flex flex-col items-start text-[clamp(8px,3vw,14px)]">
          <li className="md:w-[196px] w-[98px] md:h-[32px] h-[16px]">
            <Link to={"/"}>
            <img onClick={() => window.scrollTo(0, 0)} src={logo} alt="logo" />
            </Link>
          </li>
          <li className="text-second-color mt-[29px]">
            Следи за нами в соц. сетях:
          </li>
          <li className="flex gap-6 mt-[12px]">
            <BiLogoTelegram size={30} color="white" />
            <SlSocialVkontakte size={30} color="white" style={{ fill: "white" }} />
            <PiInstagramLogoFill size={30} color="white" />
          </li>
        </ul>
      </div>
    </div>
  );
}
