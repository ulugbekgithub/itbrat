import Header from "../../components/header";
import "./firstLanding.css";
import "../../components/css/custom.css";
import account from "../../assets/accountIcon.png";
import rezume from "../../assets/rezumeIcon.png";
import search from "../../assets/searchIcon.png";
import commandMan from "../../assets/commandMan.webp";
import bratman from "../../assets/bratman.png";
import bratgirl from "../../assets/bratgirl.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import Footer from "../../components/footer";
import DesktopSwiper from "../../components/desktopSwiper";
import MobileSwiper from "../../components/mobileSwiper";
import ForCompony from "../../components/forCompony";
import ForFreelance from "../../components/forFreelance";
import { useEffect, useState } from "react";
import ScrollComponent from "../../components/scrollComponent";
import SwiperRezume from "../../components/swiperRezume";
import { useDispatch, useSelector } from "react-redux";
import { getProjectsCategory } from "../../app/reducers/projectsSlice";
import { FaCheck } from "react-icons/fa";
import { postFeedback } from "../../app/reducers/statusSlice";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Faq from "../../components/faq";

export default function FirstLanding() {
  const [openComponentCompany, setOpenComponentCompany] = useState(true);
  const [feedback, setFeedback] = useState("");
  const { projectsCategory } = useSelector((state) => state.projects);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjectsCategory());
  }, [dispatch]);

  const handleFeedback = () => {
    console.log(feedback);
    setFeedback("");

    dispatch(postFeedback(feedback));
    toast.success("Подписка на рассылку успешно оформлена", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleSearchProject = () => {
    if (localStorage.getItem("accessToken")) {
      navigate("/profile");
    } else {
      navigate("/sign-up");
    }
  };
  const handleSearchTeam = () => {
    if (localStorage.getItem("accessToken")) {
      navigate("/profile");
    } else {
      navigate("/sign-up");
    }
  };
  const handleCategory = () => {
    if (localStorage.getItem("accessToken")) {
      navigate("/profile");
    } else {
      navigate("/sign-up");
    }
  };
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <div className="w-full min-h-[800px] flex justify-center items-center bg-photo bg-main-black">
        <div
          id="home"
          className="w-full max-w-[1096px] h-full  flex flex-col justify-around md:mt-0 mt-32"
        >
          <div className="md:mt-[-100px] mt-[-300px] md:p-0 p-10">
            <h1 className="w-full md:max-w-[1026px] max-w-[275px]  md:leading-[68px] leading-9 md:text-5xl text-xl font-bold text-main-white">
              НАХОДИТЕСЬ В ПОИСКЕ ИНТЕРЕСНОГО{" "}
              <span className="text-main-red">ПРОЕКТА</span> ИЛИ{" "}
              <span className="text-main-red">КОМАНДЫ</span>?
            </h1>
            <p className="w-full max-w-[446px] leading-[23px] text-lg text-second-color whitespace-normal">
              Объединяйтесь в команды, создавайте проекты, выбирайте лучших из
              лучших. ITBRAT – здесь вы найдете именно то, что вам нужно.
            </p>
          </div>

          <div className="flex flex-col gap-[31px] md:mx-0 mx-20  md:mt-[-350px] mt-[-500px]">
            <button
              onClick={handleSearchProject}
              className="w-full max-w-[346px] h-[70px]  text-main-white border-[3px] border-solid border-main-red  bg-gray-7800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30"
            >
              <span className="font-bold text-[clamp(16px,3vw,24px)]">
                НАЙТИ ПРОЕКТ
              </span>
            </button>
            <button
              onClick={handleSearchTeam}
              className="w-full max-w-[346px] h-[70px] bg-main-red text-main-black rounded box-shadow "
            >
              <span className="font-bold text-[clamp(16px,3vw,24px)]">
                НАЙТИ КОМАНДУ
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full relative min-h-[441px] flex justify-center items-center bg-main-black p-24 py-32">
        <div className="w-full max-w-[1258px] min-h-[323px] mt-[-300px] flex flex-col items-center md:flex-row md:justify-around rounded-xl h-full bg-gray-700 bg-clip-padding backdrop-filter  backdrop-blur-sm bg-opacity-10 saturate-100 backdrop-contrast-100">
          <div className="w-full max-w-[224px] min-h-[226px] text-center ">
            <img
              className="w-full max-w-[100px] min-h-[74px] mx-auto"
              src={account}
              alt="account"
            />
            <h4 className="text-main-white mb-3 text-[clamp(16px,3vw,20px)]">
              СОЗДАЙТЕ АККАУНТ
            </h4>
            <p className="w-full max-w-[220px] text-second-color text-center text-[clamp(12px,3vw,14px)]">
              Зарегистрируйтесь и заполните профиль в личном кабинете
            </p>
          </div>
          <div className="w-full max-w-[224px] h-[226px] text-center">
            <img
              className="w-full max-w-[100px] min-h-[74px] mx-auto"
              src={rezume}
              alt="rezume"
            />
            <h4 className="text-main-white mb-3 text-[clamp(16px,3vw,20px)]">
              ЗАПОЛНИТЕ РЕЗЮМЕ
            </h4>
            <p className="w-full  text-second-color  text-[clamp(12px,3vw,14px)]">
              Укажите свои навыки и предпочтения
            </p>
          </div>
          <div className="w-full max-w-[224px] h-[226px] text-center ">
            <img
              className="w-full max-w-[100px] min-h-[74px] mx-auto"
              src={search}
              alt="search"
            />
            <h4 className="text-main-white mb-3 text-[clamp(16px,3vw,20px)]">
              ИЩИТЕ И СОЗДАВАЙТЕ
            </h4>
            <p className="w-full max-w-[220px] text-second-color text-center text-[clamp(12px,3vw,14px)]">
              Ищите интересные проекты и команду или создавайте свои
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full bg-main-black">
        <h2 className="w-full max-w-[500px] min-h-[122px] text-[clamp(24px,4vw,48px)] font-bold text-main-white text-center md:px-0 px-3">
          НАЙДИТЕ <span className="text-main-red">КОМАНДУ</span>
          <span className="text-main-red"> МЕЧТЫ</span> ЗДЕСЬ
        </h2>
        <div className="w-full max-w-[1196px] flex flex-col items-center justify-center md:p-5 p-5">
          <section
            id="about"
            className="flex flex-col-reverse md:flex-row md:p-5"
          >
            <div className="flex items-end">
              <img
                className="md:w-full md:h-full h-[400px]  object-cover object-left "
                src={commandMan}
                alt="commandMan"
              />
            </div>
            <div>
              <div className="flex flex-col">
                <div className="flex gap-[35px]">
                  <div className="w-full max-w-[188px] p-5 card-shadow">
                    <span className="text-main-red text-[clamp(24px,3vw,48px)] font-extrabold">
                      500+
                    </span>
                    <p className="text-main-white text-[clamp(12px,3vw,20px)] font-light">
                      соискателей
                    </p>
                  </div>
                  <div className="w-full max-w-[295px] min-h-[124px] p-5 card-shadow">
                    <span className="text-main-red text-[clamp(24px,3vw,48px)] font-extrabold">
                      300+
                    </span>
                    <p className="text-main-white text-[clamp(12px,3vw,20px)] font-light">
                      размещенных проектов
                    </p>
                  </div>
                </div>
                <div className="flex gap-[35px] mt-[35px]">
                  <div className="w-full max-w-[159px] p-5 card-shadow">
                    <span className="text-main-red text-[clamp(24px,3vw,48px)] font-extrabold">
                      50+
                    </span>
                    <p className="text-main-white text-[clamp(12px,3vw,20px)] font-light">
                      категорий
                    </p>
                  </div>
                  <div className="w-full max-w-[194px] p-5 card-shadow">
                    <span className="text-main-red text-[clamp(24px,3vw,48px)] font-extrabold">
                      1000+
                    </span>
                    <p className="text-main-white text-[clamp(12px,3vw,20px)] font-light">
                      резюме
                    </p>
                  </div>
                </div>

                <p className="text-second-color text-[clamp(12px,3vw,16px)] font-light w-full min-w-[550px]  min-h-[120px] mt-[35px]">
                  Найти единомышленников-экспертов просто! ITBRAT - надежная
                  платформа для поиска профессионалов и совместной реализации
                  задуманных проектов разных направлений. Наша система
                  обеспечивает простой и эффективный способ объединения
                  фрилансеров, где каждый эксперт может найти идеального
                  партнера для воплощения своих идей.
                </p>

                <p className="text-second-color text-[clamp(12px,3vw,16px)] font-light mnin-w-[550px]  min-h-[100px] mt-[29px]">
                  Ищете другие предложения? <br /> Вы также можете ознакомиться
                  с нашим сервисом{" "}
                  <span className="text-main-red">«ITStock»</span> <br />{" "}
                  «ITStock» - готовая база проектов для специалистов разных
                  направлений. Получите возможность работать с крупной
                  корпорацией, крутую команду и профессиональные проекты.
                </p>
              </div>
            </div>
          </section>
          <section className="w-full md:min-h-[890px] p-5 flex flex-col justify-center items-center">
            <h3 className="text-main-white text-center text-[clamp(24px,3vw,48px)] font-bold">
              ПРЕИМУЩЕСТВА{" "}
              <span className="text-main-red text-[clamp(24px,3vw,48px)]">
                ITBRAT
              </span>
            </h3>
            <div className="w-full max-w-[1196px] flex flex-col justify-between items-center mt-[42px]">
              <div className="w-full max-w-[295px] h-[39px] flex md:hidden items-center justify-between bg-[#424242] rounded p-3">
                <button
                  onClick={() => setOpenComponentCompany(true)}
                  className={`w-full max-w-[141px] min-h-[31px] flex justify-center items-center text-main-white rounded ${
                    openComponentCompany ? "bg-[#560303]" : ""
                  }`}
                >
                  <span className="text-xs">Для компаний</span>
                </button>
                <button
                  onClick={() => setOpenComponentCompany(false)}
                  className={`w-full max-w-[141px] min-h-[31px] flex justify-center items-center text-main-white rounded ${
                    !openComponentCompany ? "bg-[#560303]" : ""
                  }`}
                >
                  <span className="text-xs">Для фрилансеров</span>
                </button>
              </div>
              <div className="block md:hidden">
                {openComponentCompany ? (
                  <div>
                    <ForCompony />
                  </div>
                ) : (
                  <div>
                    <ForFreelance />
                  </div>
                )}
              </div>
              <div className="justify-between hidden w-full md:flex">
                <div className="relative w-full max-w-[491px] min-h-[600px] flex flex-col justify-between items-center pt-5 text-center text-main-white itbrat-box hover:bg-white hover:cursor-pointer hover:text-main-black">
                  <span className="text-3xl font-semibold">Для компаний</span>
                  <ul className="absolute flex flex-col invisible gap-3 transition-opacity duration-300 ease-in-out opacity-0 right-3 top-32 whitespace-nowrap hover-ul">
                    <li className="flex items-center gap-2">
                      <FaCheck size={20} color="red" />
                      <span className="text-main-black text-[16px] font-light text-start">
                        быстрый поиск <br /> профессианальной команды <br /> или
                        специалиста
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck size={20} color="red" />
                      <span className="text-main-black text-[16px] font-light">
                        удобный формат связи и работы
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck size={20} color="red" />
                      <span className="text-main-black text-[16px] font-light">
                        гарантия результата
                      </span>
                    </li>
                  </ul>
                  <div className="w-full max-w-[373px] min-h-[467px] pt-5">
                    <img
                      className="mt-12 transition-transform duration-300 ease-in-out transform boyImg"
                      src={bratman}
                      alt="bratman"
                    />
                  </div>
                </div>

                <div className="relative w-full max-w-[491px] min-h-[600px] flex flex-col justify-between items-center pt-5 text-center text-main-white itbrat-box hover:bg-main-white hover:text-main-black hover:cursor-pointer group">
                  <span className="text-3xl font-semibold">
                    Для фрилансеров
                  </span>
                  <div className="relative w-full ">
                    <ul className="absolute flex flex-col invisible gap-3 px-4 transition-opacity duration-300 ease-in-out opacity-0 right-5 top-10 group-hover:opacity-100 group-hover:visible">
                      <li className="flex items-center gap-2">
                        <FaCheck size={20} color="red" />
                        <span className="text-[16px] font-light text-start">
                          регулярно обновляющаяся <br /> база проектов
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheck size={20} color="red" />
                        <span className="text-[16px] font-light text-start">
                          возможность создавать <br /> команду
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheck size={20} color="red" />
                        <span className="text-[16px] font-light text-start">
                          удобная платформа для <br /> ведения проектов
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="w-full max-w-[373px] h-[467px] pt-5">
                    <img
                      className="mt-10 transition-transform duration-300 ease-in-out transform girlImg"
                      src={bratgirl}
                      alt="bratgirl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full max-w-[283px] h-[62px] bg-main-red text-main-white md:text-2xl text-xs font-bold mt-12  box-shadow md:block hidden">
              Присоединиться
            </button>
          </section>

          <h1 className="text-main-white text-[clamp(24px,3vw,48px)] text-center font-bold">
            ПОСЛЕДНИЕ РАЗМЕЩЕННЫЕ <span className="text-main-red">ПРОЕКТЫ</span>
          </h1>

          <div className="hidden w-full h-full md:block">
            <DesktopSwiper />
          </div>
          <div className="block w-full h-full md:hidden">
            <MobileSwiper />
          </div>

          <div>
            <h1 className="text-main-white text-center text-[clamp(24px,3vw,48px)] font-bold">
              МНОЖЕСТВО{" "}
              <span className="text-main-red text-[clamp(24px,3vw,48px)] font-bold">
                НАПРАВЛЕНИЙ
              </span>
            </h1>
            <p className="text-second-color text-xl font-light text-center mt-[7px]">
              Дизайн, разработка и многое другое
            </p>
          </div>

          <div
            id="services"
            className="flex flex-col items-center justify-center w-full h-screen"
          >
            <div className="w-full h-[500px] grid grid-cols-2 md:grid-cols-4 gap-[44px] mt-[58px] p-5">
              {projectsCategory.map((item) => (
                <div
                  key={item.id}
                  className="bg-center bg-cover direction-box-shadow"
                  style={{
                    backgroundImage: `url(${item.logo})`,
                  }}
                >
                  <div className="flex items-center justify-center w-full h-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter bg-opacity-40">
                    <h4 className="text-main-white text-[clamp(12px,3vw,24px)] w-[170px] h-[62px] font-bold text-center flex justify-center items-center">
                      {item.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={handleCategory} className="w-full md:max-w-[283px] max-w-[184px] md:h-[62px] h-[41px] rounded-md bg-main-red text-main-white text-[clamp(12px,3vw,24px)] font-bold box-shadow">
              Больше категорий
            </button>
          </div>

          <div className="flex flex-col items-center justify-between w-full py-20 md:flex-row">
            <div className="w-full">
              <h1 className="w-full flex justify-center gap-2 text-main-white text-[clamp(24px,3vw,72px)] font-bold">
                ЛУЧШИЕ{" "}
                <span className="text-main-red text-[clamp(24px,3vw,72px)]">
                  РЕЗЮМЕ
                </span>
              </h1>
            </div>
            <div className="hidden md:block">
              <ScrollComponent />
            </div>
            <div className="block md:hidden">
              <SwiperRezume />
            </div>
          </div>
          
          <Faq />

          <div className="w-full h-[567px] ">
            <div
              id="contacts"
              className="w-full max-w-[1128px] min-h-[320px] p-5 bg-[#101010] flex flex-col justify-around rounded-xl mt-[50px]"
            >
              <div className="text-center">
                <h1 className="text-2xl font-bold text-main-white md:text-5xl">
                  БОЛЬШЕ ИНТЕРЕСНЫХ ПРОЕКТОВ
                </h1>
                <p className="mt-10 text-sm font-light text-second-color md:text-xl">
                  Подпишись на рассылку и получай новости одним из первых
                </p>
              </div>
              <div className="flex flex-col gap-5 md:flex-row justify-evenly">
                <input
                  className="w-full max-w-[658px] h-[54px] text-second-color bg-[#343434] rounded-md p-3"
                  type="text"
                  placeholder="Введите Email"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
                <button
                  onClick={handleFeedback}
                  className="w-full  md:max-w-[277px] h-[54px] text-main-white text-xl font-bold bg-main-red rounded-md box-shadow"
                >
                  Подписаться
                </button>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
