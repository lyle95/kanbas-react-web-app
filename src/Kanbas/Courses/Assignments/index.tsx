import AssignmentsControls from "./AssignmentsControls";
import AssignmentsControlButtons from "./AssignmentsControlButton";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, deleteAssignment } from "./reducer";
export default function Assignments() {
    const { cid } = useParams();
    const [assignmentName, setAssignmentName] = useState("");
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const assignments = useSelector((state: any) => state.assignmentReducer.assignments);
    const courseAssignments = assignments.filter((assignment: any) => assignment.course === cid);

    const addNewAssignment = () => {
        if (!assignmentName.trim()) return;
        const newAssignment = {
            _id: new Date().getTime().toString(),
            title: assignmentName,
            description: "",
            points: 100,
            due: "",
            availableFrom: "",
            until: "",
            course: cid,
        };
        dispatch(addAssignment(newAssignment));
        setAssignmentName("");
    };
    const handleDelete = (assignmentId: string) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this assignment?");
        if (confirmDelete) {
            dispatch(deleteAssignment(assignmentId));
        }
    }
    return (
        <div>
        <AssignmentsControls
        assignmentName={assignmentName}
        setAssignmentName={setAssignmentName}
        addAssignment={addNewAssignment} />
            <br />
            <ul id="wd-assignments" className="list-group rounded-0">
                <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        {currentUser?.role === "FACULTY" && <AssignmentsControlButtons />}
                    </div>
                    <ul className="wd-assignments list-group rounded-0">
                    {courseAssignments
                        .map((assignment: any) => (
                        <li key={assignment._id} className="wd-assignment list-group-item p-3 ps-1">
                            <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <FaRegEdit className="me-3 fs-3" />
                                <div>
                                    <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link" >
                                        {assignment.title}
                                    </Link>
                                    <div className="text-muted small ms-3">
                                        <span className="text-danger">Multiple Modules</span> | 
                                        <b> Not available until</b> {new Date(assignment.available).toLocaleString('en-US', {timeZone: 'UTC'})} | 
                                        <b> Due</b> {new Date(assignment.due).toLocaleString('en-US', {timeZone: 'UTC'})} | {assignment.points} pts
                                    </div>
                                </div>
                            </div>
                            {currentUser?.role === "FACULTY" && (
                                <div className="d-flex align-items-center">
                                    <FaTrash className="me-2" 
                                        onClick={() => 
                                        handleDelete(assignment._id)} id="wd-delete-assignment-click"/>
                                    <LessonControlButtons />
                                </div>
                            )}
                            </div>
                        </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
);} 