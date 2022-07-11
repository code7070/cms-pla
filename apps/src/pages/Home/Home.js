import { isLocalLogin, isLogin } from "../../helpers/util";
import { parseUrl } from "query-string";
import { useLocation } from "react-router-dom";
import HomeNoLogin from "./HomeNoLogin";
// import NotAlone from "./NotAlone";

const LinkItem = ({ path, text }) => {
  const { pathname: route } = useLocation();
  const clsActive =
    route === path ? "bg-sky-500 text-white" : "hover:bg-sky-100";
  const classes = `p-2 text-center ${clsActive}`;
  const click = () => {
    window.parent.location.href = `/dashboard/gold${path}`;
  };
  return (
    <a href={path} className={classes} to={path} onClick={click}>
      {text}
    </a>
  );
};

export const Menubar = () => {
  const linklist = [
    { path: "/", text: "Dashboard" },
    { path: "/transactions", text: "Transactions" },
    // { path: "/settlement", text: "Settlement" },
    { path: "/user", text: "User List" },
    { path: "/login-info", text: "Login Info" },
  ];

  return (
    <div className="grid grid-cols-4 divide-x rounded-xl border-2 border-gray-200 bg-slate-100 max-w-2xl mx-auto overflow-hidden">
      {linklist.map((item) => (
        <LinkItem key={item.path} {...item} />
      ))}
    </div>
  );
};

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

  let view = <HomeNoLogin localLogin={localLogin} query={query} />;

  if (login)
    view = (
      <>
        <Menubar />
        <h2>Hello this is Dashboard GOLD CMS</h2>
      </>
    );

  return (
    // <NotAlone>
    <div className="text-center mx-auto rounded-lg">
      <PageSubtitle text="Dashboard" />
      {view}
    </div>
    // </NotAlone>
  );
};

export default Home;
