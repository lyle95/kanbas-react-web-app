import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import * as courseClient from "./Courses/client";
import * as enrollmentClient from "./Courses/client";
export default function Dashboard({
    courses, 
    course,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse,
    enrolling, 
    setEnrolling
}: {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
    enrolling: boolean; 
    setEnrolling: (enrolling: boolean) => void;
}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [enrolledCourses, setEnrolledCourses] = useState<string[]>([]);
    const [showAllCourses, setShowAllCourses] = useState(false);
    const [allCourses, setAllCourses] = useState<any[]>([]); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEnrolled = async () => {
            if (currentUser) {
                const courses = await enrollmentClient.fetchEnrolledCourse(currentUser._id);
                setEnrolledCourses(courses);
            }
        };
        fetchEnrolled();
    }, [currentUser]);
 
    const toggleEnrollment = async (courseId: string) => {
        const isEnrolled = enrolledCourses.some((course: any) => course._id === courseId);
        if (isEnrolled) {
            await enrollmentClient.unenrollFromCourse(currentUser._id, courseId);
            setEnrolledCourses((prev) => prev.filter((course: any) => course._id !== courseId));
        } else {
            await enrollmentClient.enrollInCourse(currentUser._id, courseId);
            const course = allCourses.find((c: any) => c._id === courseId);
            if (course) {
                setEnrolledCourses((prev) => [...prev, course]);
            }
        }
    };

    const handleFetchAllCourses = async () => {
        if (!showAllCourses) {
            const courses = await courseClient.fetchAllCourses();
            setAllCourses(courses);
        }
        setShowAllCourses(!showAllCourses);
    };

    const handleNavigate = (courseId: string) => {
        navigate(`/Kanbas/Courses/${courseId}/Home`);
    };

    const handleUpdateCourse = async () => {
        await courseClient.updateCourse(course);
        const updatedCourses = await enrollmentClient.fetchEnrolledCourse(currentUser._id);
        setEnrolledCourses(updatedCourses);
    }
    const handleDeleteCourse = async (courseId: string) => {
        await courseClient.deleteCourse(courseId);
        const updatedCourses = await enrollmentClient.fetchEnrolledCourse(currentUser._id);
        setEnrolledCourses(updatedCourses);
    }
    const displayedCourses = showAllCourses ? allCourses : enrolledCourses;
    return (
        <div className="p-4" id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard
            </h1> <hr />
            {currentUser?.role === "FACULTY" && (
                <>
                    <h5>
                        New Course
                        <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={addNewCourse}>
                            Add
                        </button>
                        <button className="btn btn-warning float-end me-2" onClick={handleUpdateCourse} id="wd-update-course-click">
                            Update
                        </button>
                    </h5>
                    <br />
                    <input
                        value={course.name}
                        className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })}
                    />
                    <textarea
                        value={course.description}
                        className="form-control"
                        onChange={(e) => setCourse({ ...course, description: e.target.value })}
                    />
                    <hr />
                </>
            )}
            
           
                <button className="btn btn-primary float-end" onClick={handleFetchAllCourses}>
                    {showAllCourses ? "My Enrollments" : "All Courses"}
                </button>
            
            <h2 id="wd-dashboard-published">Published Courses ({displayedCourses.length})</h2>
            <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {displayedCourses.map((course) => {
                        return (
                            <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
                                <div className="card rounded-3 overflow-hidden">
                                    <div
                                        className="wd-dashboard-course-link text-decoration-none text-dark"
                                        onClick={() => handleNavigate(course._id)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <img src={course.image} width="100%" height={160} alt="Course logo" />
                                        <div className="card-body">
                                            <h5 className="wd-dashboard-course-title card-title">
                                                {enrolling && (
                                                    <button className={`btn ${ course.enrolled ? "btn-danger" : "btn-success" } float-end`} >
                                                        {course.enrolled ? "Unenroll" : "Enroll"}
                                                    </button>
                                                )}
                                                {course.name}
                                            </h5>
                                            <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                                {course.description}
                                            </p>
                                            <button className="btn btn-primary">Go</button>
                                            {currentUser?.role === "FACULTY" && (
                                                <>
                                                    <button
                                                        onClick={(event) => {
                                                            //event.preventDefault();
                                                            event.stopPropagation();
                                                            //deleteCourse(course._id);
                                                            handleDeleteCourse(course._id);
                                                        }}
                                                        className="btn btn-danger float-end"
                                                        id="wd-delete-course-click"
                                                    >
                                                        Delete
                                                    </button>
                                                    <button
                                                        id="wd-edit-course-click"
                                                        onClick={(event) => {
                                                            //event.preventDefault();
                                                            event.stopPropagation();
                                                            setCourse(course);
                                                        }}
                                                        className="btn btn-warning me-2 float-end"
                                                    >
                                                        Edit
                                                    </button>
                                                </>
                                            )}
                                            
                                                <button
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        toggleEnrollment(course._id); 
                                                    }}
                                                    className={`btn float-end ${
                                                        enrolledCourses.some((c: any) => c._id === course._id)
                                                         ? "btn-danger" 
                                                         : "btn-success"
                                                    }`}
                                                >
                                                    {enrolledCourses.some((c: any) => c._id === course._id) 
                                                    ? "Unenroll" 
                                                    : "Enroll"}
                                                </button>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
                                            