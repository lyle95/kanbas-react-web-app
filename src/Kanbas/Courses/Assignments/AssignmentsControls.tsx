import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
export default function AssignmentsControls() {
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
            <button className="btn btn-lg btn-danger me-1 float-end">
                <FaPlus className="me-1" />
                Assignment
            </button>
        </div>
    </div>
);}