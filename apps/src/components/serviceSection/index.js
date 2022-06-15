import { Link } from "react-router-dom";
import Button from "../button";

const ServiceSection = ({ children, content, title }) => {
  return (
    <div className="max-w-sm lg:max-w-xl mx-auto border-2 border-gray-200 rounded-lg my-20">
      <div className="my-4"></div>
      <p className="my-10 text-center">
        <Link to={-1}>
          <Button type="button"> &lt; BACK </Button>
        </Link>
        <div className="text-2xl text-gray-800 font-bold ">{title}</div>
      </p>
      {children || content}
    </div>
  );
};

export default ServiceSection;
