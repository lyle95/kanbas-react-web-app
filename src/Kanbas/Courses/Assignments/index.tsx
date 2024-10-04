import AssignmentsControls from "./AssignmentsControls";
import AssignmentsControlButtons from "./AssignmentsControlButton";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { FaRegEdit } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Assignments() {
    return (
        <div>
            <AssignmentsControls /><br /><br /><br /><br />
            <ul id="wd-assignments" className="list-group rounded-0">
                <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <AssignmentsControlButtons />
                    </div>
                    <ul className="wd-assignments list-group rounded-0">
                        <li className="wd-assignment list-group-item p-3 ps-1">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <FaRegEdit className="me-2 fs-3" />
                                <div>
                                    <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">A1</a>
                                    <div className="text-muted small">
                                        <span className="text-danger">Multiple Modules</span> | 
                                        <b> Not available until</b> May 6 at 12:00am | 
                                        <b> Due</b> May 13 at 11:59pm | 100 pts
                                    </div>
                                </div>
                            </div>
                            <LessonControlButtons />
                        </li>
                        <li className="wd-assignment list-group-item p-3 ps-1">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <FaRegEdit className="me-2 fs-3" />
                                <div>          
                                <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">A2</a>
                                    <div className="text-muted small">
                                        <span className="text-danger">Multiple Modules</span> | 
                                        <b> Not available until</b> May 13 at 12:00am | 
                                        <b> Due</b> May 20 at 11:59pm | 100 pts
                                    </div>
                                </div>
                            </div>
                            <LessonControlButtons /> 
                        </li>
                        <li className="wd-assignment list-group-item p-3 ps-1">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <FaRegEdit className="me-2 fs-3" />
                                <div>
                                <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">A3</a>
                                    <div className="text-muted small">
                                        <span className="text-danger">Multiple Modules</span> | 
                                        <b> Not available until</b> May 20 at 12:00am | 
                                        <b> Due</b> May 27 at 11:59pm | 100 pts
                                    </div>
                                </div>
                            </div>
                            <LessonControlButtons /> 
                        </li>
                    </ul>
                </li>
            </ul>
    </div>
);}  