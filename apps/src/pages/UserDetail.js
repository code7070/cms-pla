import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Menubar } from "./Home/Home";

const UserDetail = () => {
  const [user, setUser] = useState(false);
  const users = useSelector(({ user }) => user.value);
  const [submitted, setSubmitted] = useState(false);
  const { id } = useParams();

  const doSubmit = () => {
    alert("User changes");
    setSubmitted(true);
  };

  useEffect(() => {
    if (id && users && typeof users === "object" && !user) {
      const finds = users.find((i) => i.id === parseInt(id, 10));
      setUser(finds);
    }
  }, [id, users, user]);

  useEffect(() => {
    const fn = (event) => {
      console.log("Event: ", event);
      event.preventDefault();
      return (event.returnValue = "Are you sure?");
    };

    window.addEventListener("beforeunload", fn, { capture: true });

    return () => {
      window.removeEventListener("beforeunload", fn, { capture: true });
    };
  }, [submitted]);

  return (
    <>
      <Menubar />
      <div className="mx-auto my-2 max-w-lg">
        <h2 className="text-xl border-b-2 border-b-gray-200 mb-2">
          Edit User Detail
        </h2>
        {user && (
          <form className="bg-blue-100 p-4" onSubmit={doSubmit}>
            First name
            <input
              className="block w-full my-2 p-2 rounded"
              name="fname"
              defaultValue={user.name.first}
            />
            Last name
            <input
              className="block w-full my-2 p-2 rounded"
              name="lname"
              defaultValue={user.name.last}
            />
            Gender
            <select
              className="block w-full my-2 p-2 rounded"
              defaultValue={user.gender}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="male">Female</option>
            </select>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white rounded px-4 py-2 mt-10 mx-auto w-lg"
              type="button"
              onClick={() => window.confirm("Are you sure?")}
            >
              Test
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white rounded px-4 py-2 mt-10 mx-auto w-lg">
              Save
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default UserDetail;
