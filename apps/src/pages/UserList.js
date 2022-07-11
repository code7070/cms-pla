import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Menubar } from "./Home/Home";

const HeadCol = ({ children }) => (
  <div className="border-b-2 border-b-slate-300 p-2 bg-gray-200">
    {children}
  </div>
);

const TableUser = ({ users }) => {
  const navigate = useNavigate();
  const push = (path) => navigate(path);
  return (
    <div>
      <div className="grid grid-cols-5">
        <HeadCol>ID</HeadCol>
        <HeadCol>Fullname</HeadCol>
        <HeadCol>Age</HeadCol>
        <HeadCol>Gender</HeadCol>
        <HeadCol>Act.</HeadCol>
      </div>
      {users.map((user) => {
        const clickEdit = () => push(`/user/${user.id}`);
        return (
          <div
            key={user.id}
            className="grid grid-cols-5 border-b-2 border-b-slate-300"
          >
            <div className="p-2">{user.id}</div>
            <div className="p-2">{`${user.name.first} ${user.name.last}`}</div>
            <div className="p-2">{`${user.age} years old`}</div>
            <div className="p-2">{user.gender}</div>
            <div className="p-2">
              <button
                onClick={clickEdit}
                className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded"
              >
                Edit
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const UserList = () => {
  const users = useSelector(({ user }) => user.value);

  let view = <TableUser users={users} />;

  return (
    <>
      <Menubar />
      <div className="border-2 border-gray-500 rounded my-4 max-w-lg mx-auto">
        {view}
      </div>
    </>
  );
};

export default UserList;
