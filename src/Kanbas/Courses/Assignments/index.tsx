import AssignmentsControls from "./AssignmentsControls";
import AssignmentsControlButtons from "./AssignmentsControlButton";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { FaRegEdit } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";
export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;
    return (
        <div>
            <AssignmentsControls /><br /><br />
            <ul id="wd-assignments" className="list-group rounded-0">
                <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <AssignmentsControlButtons />
                    </div>
                    <ul className="wd-assignments list-group rounded-0">
                    {assignments
                        .filter((assignment: any) => assignment.course === cid)
                        .map((assignment: any) => (
                        <li className="wd-assignment list-group-item p-3 ps-1">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <FaRegEdit className="me-2 fs-3" />
                                <div>
                                    <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link" >
                                        {assignment.title}
                                    </Link>
                                    <div className="text-muted small">
                                        <span className="text-danger">Multiple Modules</span> | 
                                        <b> Not available until</b> {new Date(assignment.available).toLocaleString('en-US', {timeZone: 'UTC'})} | 
                                        <b> Due</b> {new Date(assignment.due).toLocaleString('en-US', {timeZone: 'UTC'})} | {assignment.points} pts
                                    </div>
                                </div>
                            </div>
                            <LessonControlButtons />
                        </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
);}  