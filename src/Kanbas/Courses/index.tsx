import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";
import { Navigate, Route, Routes} from "react-router";
export default function Courses() {
    return (
    <div id="wd-courses">
        <h2>Course 1234</h2>
        <hr />
        <div className="d-flex">
            <div className="d-none d-md-block">
                <CoursesNavigation />
            </div>
            <div className="flex-fill ms-5">
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Modules" element={<Modules />} />
                    <Route path="Assignments" element={<Assignments />} />
                    <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                    <Route path="People" element={<PeopleTable />} />
                </Routes>
            </div>
        </div>         
    </div>
  );}  