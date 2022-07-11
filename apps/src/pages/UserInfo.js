import { decodeToken } from "react-jwt";
import { isLogin } from "../helpers/util";
import { Menubar } from "./Home/Home";

const UserInfo = () => {
  const login = isLogin();
  const x = decodeToken(login);
  return (
    <div className="text-center">
      <Menubar />
      <div className="my-20 break-words max-w-lg mx-auto">
        <div className="text-xl font-bold">User info</div>
        <div className="text-md">
          {(x && x.id) || "id"}-{(x && x.name) || "Name"}
        </div>
        <div className="text-md">{JSON.stringify(x)}</div>
      </div>
      <div className="my-20 break-words max-w-lg mx-auto">
        <div className="text-xl font-bold">Login Token</div>
        <div className="text-md">{JSON.stringify(login)}</div>
      </div>
    </div>
  );
};

export default UserInfo;
