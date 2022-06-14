import imkasService from "../../imkas-service";
import Thumbnail from "../../components/thumbnail";
import { isLocalLogin, isLogin } from "../../helpers/util";
import { parseUrl } from "query-string";
import { useLocation, useParams } from "react-router-dom";

const Home = () => {
  const login = isLogin();
  const localLogin = isLocalLogin();
  const { search } = useLocation();
  const { query } = parseUrl(search);

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

  return (
    <div className="text-center max-w-xl lg:max-w-5xl mx-auto my-20 border-4 border-gray-300 rounded-lg">
      <p className="text-2xl text-gray-800 font-bold my-10">IMKAS</p>
      {login || query.token ? (
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
      ) : (
        <div className="mb-10">
          <div className="text-xl font-bold text-red-500 mb-10">
            You're not logged in
          </div>
          <div className="text-md text-blue-500 mb-10">
            <div className="font-bold text-lg">TOKEN:</div>
            <div>{JSON.stringify(query.token)}</div>
          </div>
          <div className="text-md text-blue-500 mb-10">
            <div className="font-bold text-lg">DOCUMENT COOKIE:</div>
            <div>
              {document.cookie.split("; ").map((item) => (
                <div>{item}</div>
              ))}
            </div>
          </div>
          <div className="text-md text-blue-500 mb-10">
            <div className="font-bold text-lg">WINDOW PARENT:</div>
            <div>{JSON.stringify(Window.parent)}</div>
          </div>
          <div className="text-md text-blue-500 mb-10">
            <div className="font-bold text-lg">CALL COOKIE:</div>
            <div>{JSON.stringify(callCookie())}</div>
          </div>
          <div className="text-md text-blue-500 mb-10">
            <div className="font-bold text-lg">LOCAL LOGIN:</div>
            <div>{JSON.stringify(localLogin)}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
