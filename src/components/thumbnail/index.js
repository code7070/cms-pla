import { Link } from "react-router-dom";

const Thumbnail = ({ name, type, link }) => {
  const wrapClass =
    "p-5 m-auto rounded-md border-2 border-gray-200 w-full hover:bg-gray-300 hover:border-gray-400";
  const innerContent = (
    <>
      <div className="bg-gray-500 w-full h-20 rounded-md" />
      <div className="text-md my-5">{name}</div>
    </>
  );

  let view = <div className={wrapClass}>{innerContent}</div>;

  if (type === "button")
    view = <button className={wrapClass}>{innerContent}</button>;
  else if (type === "href")
    view = (
      <a href={link} className={wrapClass}>
        {innerContent}
      </a>
    );
  else if (link || type === "link")
    view = (
      <Link to={link} className={wrapClass}>
        {innerContent}
      </Link>
    );

  return view;
};

export default Thumbnail;
