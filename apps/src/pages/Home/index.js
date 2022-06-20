import imkasService from "../../imkas-service";
import Thumbnail from "../../components/thumbnail";
import { isLocalLogin, isLogin, removeCookie } from "../../helpers/util";
import { parseUrl } from "query-string";
import { useLocation } from "react-router-dom";
import HomeNoLogin from "./HomeNoLogin";
import { useEffect, useState } from "react";
import NotAlone from "./SelfDeny";

const Home = () => {
  const login = isLogin();
  const localLogin = isLocalLogin();
  const { search } = useLocation();
  const { query } = parseUrl(search);
  const [messages, setmsg] = useState("false");

  useEffect(() => {
    const listenMessage = (e) => {
      console.log("MESSAGE RECEIVED: ", e);
      if (e && e.data) {
        setmsg(`${messages} ${e.data}`);
        if (e.data === "logout") alert("super-login should be deleted");
        if (e.data === "logout") removeCookie("super-login", "");
      }
    };

    window.addEventListener("message", listenMessage);

    return () => {
      window.removeEventListener("message", listenMessage);
    };
  }, [messages]);

  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  const callCookie = () =>
    window.postMessage(readCookie("super-login"), "http://localhost:3000/");

  let view = (
    <HomeNoLogin
      callCookie={callCookie}
      localLogin={localLogin}
      query={query}
    />
  );

  if (login)
    view = (
      <>
        <div className="my-20 break-words">
          <div className="text-xl font-bold">Login info</div>
          <div className="text-md">{JSON.stringify(login)}</div>
        </div>
        <div className="my-20">
          <div className="max-w-max grid grid-cols-3 gap-4 mx-auto">
            {imkasService.map((item) => (
              <Thumbnail key={item.name} name={item.name} link={item.link} />
            ))}
          </div>
        </div>
      </>
    );

  return (
    // <NotAlone>
    <div className="text-center max-w-xl lg:max-w-5xl mx-auto my-20 border-4 border-gray-300 rounded-lg">
      <p className="text-2xl text-gray-800 font-bold my-10">PLA</p>
      <p>Message: {JSON.stringify(messages)}</p>
      {view}
    </div>
    // </NotAlone>
  );
};

export default Home;
