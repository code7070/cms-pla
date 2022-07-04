import { isLocalLogin, isLogin } from "../../helpers/util";
import { parseUrl } from "query-string";
import { Link, useLocation } from "react-router-dom";
import HomeNoLogin from "./HomeNoLogin";
import { useState } from "react";
import NotAlone from "./NotAlone";

const linklist = [
  { path: "/", text: "Dashboard" },
  { path: "/transactions", text: "Transactions" },
  { path: "/settlement", text: "Settlement" },
  { path: "/user-info", text: "User Info" },
];

const LinkItem = ({ path, text }) => {
  const { pathname } = useLocation();
  const clsActive =
    pathname === path ? "bg-sky-500 text-white" : "hover:bg-sky-100";
  return (
    <Link className={`p-2 text-center ${clsActive}`} to={path}>
      {text}
    </Link>
  );
};

export const Menubar = () => (
  <div className="grid grid-cols-4 divide-x rounded-xl border-2 border-gray-200 max-w-2xl mx-auto overflow-hidden">
    {linklist.map((item) => (
      <LinkItem {...item} />
    ))}
  </div>
);

export const PageTitle = ({ text }) => (
  <p className="text-center text-3xl text-gray-800 font-bold my-10">{text}</p>
);

export const PageSubtitle = ({ text }) => (
  <p className="text-center text-xl text-gray-800 font-bold my-10">{text}</p>
);

const Home = () => {
  const login = isLogin();
  const localLogin = isLocalLogin();
  const { search } = useLocation();
  const { query } = parseUrl(search);
  const [messages, setmsg] = useState("");

  // useEffect(() => {
  //   const listenMessage = (e) => {
  //     console.log("MESSAGE RECEIVED: ", e);
  //     if (e && e.data) {
  //       setmsg(`${messages} ${e.data}`);
  //       if (e.data === "logout") {
  //         alert("super-login should be deleted");
  //         removeCookie("super-login");
  //         window.location.reload();
  //         document.cookie = "super-login=";
  //         document.cookie = "changes=flafla;";
  //       }
  //     }
  //   };

  //   window.addEventListener("message", listenMessage);

  //   return () => {
  //     window.removeEventListener("message", listenMessage);
  //   };
  // }, [messages]);

  // useEffect(() => {
  //   const listenMessage = (post) => {
  //     console.log("Message received: ", post);
  //     setmsg(post.data);
  //     if (post.data === "logout") removeCookie("super-login");
  //   };

  //   navigator.serviceWorker.controller.addEventListener(
  //     "message",
  //     listenMessage
  //   );
  //   return () =>
  //     navigator.serviceWorker.controller.removeEventListener("message");
  // }, [messages]);

  let view = <HomeNoLogin localLogin={localLogin} query={query} />;

  if (login)
    view = (
      <>
        <Menubar />
        <h2>Hello this is Dashboard PLA service</h2>
        {/* <div className="my-20">
          <div className="max-w-max grid grid-cols-3 gap-4 mx-auto">
            {imkasService.map((item) => (
              <Thumbnail key={item.name} name={item.name} link={item.link} />
            ))}
          </div>
        </div> */}
      </>
    );

  return (
    // <NotAlone>
    <div className="text-center mx-auto rounded-lg">
      <PageSubtitle text="Dashboard" />
      {messages && <p>Message: {JSON.stringify(messages)}</p>}
      {view}
    </div>
    // </NotAlone>
  );
};

export default Home;
