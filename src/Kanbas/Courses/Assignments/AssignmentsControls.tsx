import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Dispatch, SetStateAction } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AssignmentsControls(
    {assignmentName, setAssignmentName, addAssignment} : 
    {assignmentName: string; setAssignmentName: Dispatch<SetStateAction<string>>; addAssignment: (assignment: any) => void }
) {
    const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
    const navigate = useNavigate();
    const { cid } = useParams();

    return (
    <div id="wd-assignments-controls" className="d-flex justify-content-between align-items-center">
        <div className="wd-search-assignment position-relative d-flex align-items-center" style={{ width: "300px" }}>
            <FaSearch className="position-absolute" style={{ left: "10px"}} />
            <input type="text" placeholder="Search..." className="form-control" style={{ paddingLeft: "30px" }} />
        </div>
        <div className="float-end">
            <button className="btn btn-lg btn-secondary me-1 float-end">
                <FaPlus className="me-1" />
                Group
            </button>
            {currentUser.role === "FACULTY" && ( // add assignment
                <button className="btn btn-lg btn-danger me-1 float-end" id="wd-add-assignment-btn"
                    onClick={() => navigate(`/Kanbas/Courses/${cid}/assignments/new`)}>
                    <FaPlus className="me-1" />
                    Assignment
                </button>
            )}
        </div>
    </div>
);}