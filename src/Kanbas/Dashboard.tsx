/*import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import * as db from "./Database";
import { useState, useEffect } from "react";
import * as courseClient from "./Courses/client";
export default function Dashboard({
    courses,
    course,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse,
}: {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [enrolledCourses, setEnrolledCourses] = useState<string[]>([]);
    const [showAllCourses, setShowAllCourses] = useState(false);
    const [allCourses, setAllCourses] = useState<any[]>([]);
    const navigate = useNavigate();

    const handleEnrollmentToggle = async () => {
        if (!showAllCourses) {
            try {
                const fetchedCourses = await courseClient.fetchAllCourses();
                setAllCourses(fetchedCourses);
            } catch (error) {
                console.error(error);
            }
        }
        setShowAllCourses(!showAllCourses);
    };

    const handleNavigate = (courseId: string) => {
        navigate(`/Kanbas/Courses/${courseId}/Home`);
    };

    const displayedCourses = currentUser?.role === "FACULTY"
        ? courses
        : showAllCourses
        ? allCourses
        : courses;

    const toggleEnrollment = (courseId: string) => {
        const isEnrolled = enrolledCourses.includes(courseId);
        const updatedEnrollments = isEnrolled
            ? enrolledCourses.filter((id) => id !== courseId) // Remove from enrolled
            : [...enrolledCourses, courseId]; // Add to enrolled

        setEnrolledCourses(updatedEnrollments);
    };
    return (
        <div className="p-4" id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            {currentUser?.role === "FACULTY" && ( // only faculty can add or update courses
                <>
                    <h5>
                        New Course
                        <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={addNewCourse}>
                            Add
                        </button>
                        <button className="btn btn-warning float-end me-2" onClick={updateCourse} id="wd-update-course-click">
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
            {currentUser?.role === "STUDENT" && ( // only student can see all courses and their enrollments
                <button className="btn btn-primary float-end" onClick={handleEnrollmentToggle}>
                    {showAllCourses ? "My Enrollments" : "All Courses"}
                </button>
            )}
            <h2 id="wd-dashboard-published">Published Courses ({displayedCourses.length})</h2>
            <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {displayedCourses.map((course) => (
                        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <div
                                    className="wd-dashboard-course-link text-decoration-none text-dark"
                                    onClick={() => handleNavigate(course._id)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <img src={course.image} width="100%" height={160} alt="Course logo" />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                            {course.description}
                                        </p>
                                        <button className="btn btn-primary">Go</button>
                                        {currentUser?.role === "FACULTY" && ( // only faculty can edit or delete courses
                                            <>
                                                <button
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        deleteCourse(course._id);
                                                    }}
                                                    className="btn btn-danger float-end"
                                                    id="wd-delete-course-click"
                                                >
                                                    Delete
                                                </button>
                                                <button
                                                    id="wd-edit-course-click"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        setCourse(course);
                                                    }}
                                                    className="btn btn-warning me-2 float-end"
                                                >
                                                    Edit
                                                </button>
                                            </>
                                        )}
                                        {currentUser?.role === "STUDENT" && ( // only student can enroll or unenroll courses
                                            <button
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    toggleEnrollment(course._id);
                                                }}
                                                className={`btn float-end ${
                                                    enrolledCourses.includes(course._id) ? "btn-danger" : "btn-success"
                                                }`}
                                            >
                                                {enrolledCourses.includes(course._id) ? "Unenroll" : "Enroll"}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}*/

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
}: {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [enrolledCourses, setEnrolledCourses] = useState<string[]>([]);
    const [showAllCourses, setShowAllCourses] = useState(false);
    const [allCourses, setAllCourses] = useState<any[]>([]); 
    //const [myEnrolledCourses, setMyEnrolledCourses] = useState<any[]>([]); // Dynamically updated enrolled courses
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
    /*
    useEffect(() => {
        const enrolledCourseIds = courses.map((course) => course._id);
        setEnrolledCourses(enrolledCourseIds);
        setMyEnrolledCourses(courses); // Start with the initial list of enrolled courses
    }, [courses]);*/

  /*  const handleEnrollmentToggle = async () => {
        if (!showAllCourses) {
            try {
                const fetchedCourses = await courseClient.fetchAllCourses();
                setAllCourses(fetchedCourses);
            } catch (error) {
                console.error("Failed to fetch all courses:", error);
            }
        }
        setShowAllCourses(!showAllCourses);
    };

    const toggleEnrollment = (courseId: string) => {
        const isEnrolled = enrolledCourses.includes(courseId);

        if (isEnrolled) {
            // Unenroll
            setEnrolledCourses((prev) => prev.filter((id) => id !== courseId));
            setMyEnrolledCourses((prev) => prev.filter((course) => course._id !== courseId));
        } else {
            // Enroll
            const newlyEnrolledCourse = allCourses.find((course) => course._id === courseId);
            if (newlyEnrolledCourse) {
                setEnrolledCourses((prev) => [...prev, courseId]);
                setMyEnrolledCourses((prev) => [...prev, newlyEnrolledCourse]);
            }
        }
    };*/
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
/*
    const displayedCourses = showAllCourses ? allCourses : myEnrolledCourses;*/
    const displayedCourses = showAllCourses ? allCourses : enrolledCourses;
    return (
        <div className="p-4" id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            {currentUser?.role === "FACULTY" && (
                <>
                    <h5>
                        New Course
                        <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={addNewCourse}>
                            Add
                        </button>
                        <button className="btn btn-warning float-end me-2" onClick={updateCourse} id="wd-update-course-click">
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
            {currentUser?.role === "STUDENT" && (
                <button className="btn btn-primary float-end" onClick={handleFetchAllCourses}>
                    {showAllCourses ? "My Enrollments" : "All Courses"}
                </button>
            )}
            <h2 id="wd-dashboard-published">Published Courses ({displayedCourses.length})</h2>
            <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {displayedCourses.map((course) => {
                        const isEnrolled = enrolledCourses.includes(course._id); // Check if the course is already enrolled
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
                                            <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
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
                                                            deleteCourse(course._id);
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
                                            {currentUser?.role === "STUDENT" && (
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
                                            )}
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
                                            