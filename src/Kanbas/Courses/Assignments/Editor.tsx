import { useParams, Link, useNavigate } from "react-router-dom";
import * as db from "../../Database";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addAssignment, updateAssignment } from "./reducer";
import * as assignmentsClient from "./client";
import * as courseClient from "../client";
export default function AssignmentEditor() {
    const { aid, cid } = useParams();
    const isNewAssignment = aid === "new";
    const dispatch = useDispatch();
    const assignments = db.assignments;
    const navigate = useNavigate();
    const saveAssignment = async (assignment: any) => {
        if (!cid) {
            console.error("Course ID is not defined.");
            return;
        }
        if (isNewAssignment) {
            const createdAssignment = await courseClient.createAssignmentForCourse(cid, assignment);
            dispatch(addAssignment(createdAssignment));
        } else {
            await assignmentsClient.updateAssignment(assignment);
            dispatch(updateAssignment(assignment));
        }
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };
    type Assignment = {
        _id: string;
        title: string
        description: string;
        points: number;
        due: string;
        availableFrom: string;
        until: string;
        course: string;
    };

    const defaultAssignment = {
        _id: aid || 'New ID',
        title: '',
        description: '',
        points: 100,
        due: '',
        availableFrom: '',
        until: '',
        course: cid || '',
    };

    const [currentAssignment, setCurrentAssignment] = 
        useState<Assignment>(defaultAssignment);

    useEffect(() => {
        const existingAssignment = assignments.find(a => a._id === aid) as Assignment | undefined;
        if (existingAssignment) {
            setCurrentAssignment({ ...defaultAssignment, ...existingAssignment,});
        }
    }, [aid, assignments]);

    const handleSave = () => {
        if (!cid) {
            console.error("Course ID is not defined.");
            return;
        }
        const updatedAssignment = { ...currentAssignment, course: cid };

        if (!isNewAssignment) {
            dispatch(updateAssignment(updatedAssignment));
        } else {
            dispatch(addAssignment(updatedAssignment));
        }
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    return (
        <div id="wd-assignment-editor">
            <div className="mb-3">
                <label htmlFor="wd-name">Assignment Name</label>
                <input id="wd-name" className="form-control mb-3" value={currentAssignment.title} 
                    placeholder="Assignment Name" onChange={(e) => setCurrentAssignment({ ...currentAssignment, title: e.target.value })} />
            </div>
            <div className="mb-3">
                <textarea id="wd-description" className="form-control mb-3" rows={10} 
                    value={currentAssignment.description} placeholder="New Assignment Description"
                    onChange={(e) => setCurrentAssignment({ ...currentAssignment, description: e.target.value })} />
            </div>
            <div className="col-md-12 mb-3">
                <div className="row align-items-start g-3">
                    <div className="col-md-3 text-end">
                        <label htmlFor="wd-points" className="form-label">Points</label>
                    </div>
                    <div className="col-md-9">
                        <input id="wd-points" className="form-control" value={currentAssignment.points} 
                        placeholder="100" onChange={(e) => setCurrentAssignment({ ...currentAssignment, points: Number(e.target.value) })} />
                    </div>
                </div>
            </div>
            <div className="col-md-12 mb-3">
                <div className="row align-items-start g-3">
                    <div className="col-md-3 text-end">
                    <label htmlFor="wd-submission-type" className="form-label">Assign</label>
                    </div>
                    <div className="col-md-9">
                        <div className="form-control mb-3">                  
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="wd-due-date" className="form-label fw-bold pt-3">Due</label>
                                    <input className="form-control mb-3" type="date" id="wd-due-date" 
                                        value={currentAssignment.due} onChange={(e) => setCurrentAssignment({ ...currentAssignment, due: e.target.value })} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="wd-available-from" className="form-label fw-bold pt-3">Available from</label>
                                    <input className="form-control mb-3" type="date" id="wd-available-from" 
                                        value={currentAssignment.availableFrom} onChange={(e) => setCurrentAssignment({ ...currentAssignment, availableFrom: e.target.value })} />
                                </div> 
                                <div className="col-md-6">
                                    <label htmlFor="wd-available-until" className="form-label fw-bold pt-3">Until</label>
                                    <input className="form-control mb-3" type="date" id="wd-available-until" 
                                        value={currentAssignment.until} onChange={(e) => setCurrentAssignment({ ...currentAssignment, until: e.target.value })} />
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <hr />
            <div className="d-flex justify-content-end mt-3">
                <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
                <button className="btn btn-danger" onClick={() => saveAssignment(currentAssignment)}>Save</button>
            </div>
            <br />
        </div>
);}