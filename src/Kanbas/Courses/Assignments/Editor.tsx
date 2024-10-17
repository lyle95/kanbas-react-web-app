import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";
export default function AssignmentEditor() {
    const { aid, cid } = useParams();
    const assignment = db.assignments.find((assignment) => assignment._id === aid);
    return (
    <div>
        {assignment && (
            <>
                <label htmlFor="wd-name">Assignment Name</label>
                <input id="wd-name" className="form-control mb-3" value={assignment.title} />
        
                <div className="mb-3">
                    <textarea id="wd-description" className="form-control mb-3" rows={10} 
                    value={assignment.description || ''} />
                </div>
            
                <div className="col-md-6 mb-3">
                    <label htmlFor="wd-points" className="form-label">Points</label>
                    <input id="wd-points" className="form-control" value={assignment.points} />
                </div>
                
                <div className="col-md-6 mb-3">
                    <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                    <select id="wd-select-one-group" className="form-control">
                        <option value="ASSIGNMENTS" selected>ASSIGNMENT</option>
                        <option value="QUIAZZES">QUIZZESS</option>
                        <option value="EXAMS">EXAMS</option>
                        <option value="PROJECTS">PROJECTS</option>
                    </select>
                </div>
        
                <div className="col-md-6 mb-3">
                    <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
                    <select id="wd-select-one-display-grade-as" className="form-control">
                        <option value="Percentage" selected>Percentage</option>
                        <option value="ActualScores">Actual Scores</option>
                    </select>
                </div>
        
                <div className="col-md-6 mb-3">
                    <label htmlFor="wd-submission type" className="form-label">Submissiont Type</label>
                    <select id="wd-select-one-submissiont-type" className="form-control">
                        <option value="Online" selected>Online</option>
                        <option value="OnCampus">On Campus</option>
                    </select>
                </div>
        
                <div className="mb-3">
                    <label className="form-label">Online Entry Options</label>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="wd-textentry" />
                        <label className="form-check-label" htmlFor="wd-textentry">Text Entry</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="wd-website-url" />
                        <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
                        <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
                        <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="fileuploads" />
                        <label className="form-check-label" htmlFor="fileuploads">File Uploads</label>
                    </div>
                </div>
        
                <div className="mb-3">
                    <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
                    <input id="wd-assign-to" className="form-control mb-3" value={"Everyone"} />
        
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="wd-due-date">Due</label>
                            <input className="form-control" type="date" id="wd-due-date" value={new Date(assignment.due).toISOString().split("T")[0]} />
                        </div>
                    </div>
        
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="wd-available-from">Available from</label>
                            <input className="form-control" type="date" id="wd-available-from" value={new Date(assignment.available).toISOString().split("T")[0]} />
                        </div> 
                        <div className="col-md-6">
                            <label htmlFor="wd-available-until">Until</label>
                            <input className="form-control" type="date" id="wd-available-until" value="" />
                        </div> 
                    </div>
                </div>
                <br />
                <hr />
                <div className="d-flex justify-content-end mt-3">
                    <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
                    <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger">Save</Link>
                </div><br />
            </>
        )}
    </div>
);}