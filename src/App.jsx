import { Route, Routes } from "react-router-dom";
import "./App.css";
import FirstLanding from "./pages/landing/firstLanding";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Projects from "./components/projects";
import Rezume from "./components/rezume";
import Chat from "./components/chat";
import Search from "./components/search";
import Account from "./components/account";
import Notification from "./components/notification";
import NotFound from "./pages/notFound/notFound";
import FavoriteProject from "./components/favoriteProject";
import RoleSelection from "./pages/roll/roleSelection";
import Settings from "./components/settings";
import ChatWindow from "./pages/chats/chatWindow";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FirstLanding />} />
        <Route path="/notFound" element={<NotFound />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/role" element={<RoleSelection />} />
        <Route path="/profile" element={<Profile />}>
          <Route
            path="/profile/favorite-projects"
            element={<FavoriteProject />}
          />
          <Route path="/profile/settings" element={<Settings />} />
          <Route path="/profile/projects" element={<Projects />} />
          <Route path="/profile/resume" element={<Rezume />} />
          <Route path="/profile/chat" element={<Chat />}>
            <Route path="/profile/chat/:id" element={<ChatWindow />} />
          </Route>
          <Route path="/profile/search" element={<Search />} />
          <Route path="/profile/accaunt" element={<Account />} />
          <Route path="/profile/notification" element={<Notification />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
