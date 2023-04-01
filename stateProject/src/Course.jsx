import Angular from "./images/angular.jpg";
import Bootstrap from "./images/Bootstrap5.jpg";
import Frontend from "./images/frontend.jpg";
import WebSite from "./images/website.jpg";
import "./Course.css";

const courseMap = {
  Angular,
  Bootstrap,
  Frontend,
  WebSite,
};

function Course({ courseName }) {
  console.log(courseName);
  console.log(courseMap[courseName]);
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt={courseName} />
    </div>
  );
}

export default Course;
