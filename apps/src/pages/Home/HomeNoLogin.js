const HomeNoLogin = ({ query, localLogin }) => {
  return (
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
        <div className="font-bold text-lg">LOCAL LOGIN:</div>
        <div>{JSON.stringify(localLogin)}</div>
      </div>
    </div>
  );
};

export default HomeNoLogin;
