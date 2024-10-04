import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
  return (
  <div className="d-flex" id="wd-home">
    <div className="flex-fill">
      <Modules />
    </div>
    <div className="wd-status-column ms-5 d-none d-lg-block">
      <CourseStatus />
    </div>
  </div>
  );
}