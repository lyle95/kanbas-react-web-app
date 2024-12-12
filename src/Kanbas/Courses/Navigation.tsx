import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as courseClient from "../Courses/client";
//import { courses } from "../Database";
export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();
  const [course, setCourse] = useState<any | null>(null);
  //const course = courses.find((course) => course._id === cid);
  useEffect(() => {
    const fetchCourse = async () => {
      if (cid) {
        try {
          const fetchedCourse = await courseClient.fetchAllCourses();
          const currentCourse = fetchedCourse.find((course: any) => course._id === cid);
          setCourse(currentCourse);
        } catch (error) {
          console.error("Error fetching course:", error);
        }
      }
    };
    fetchCourse();
  }, [cid]);
  // Debugging Logs
  console.log("Courses Navigation - Course ID:", cid);
  console.log("Found Course:", course);
  if (!course) {
    return <div>Course not found</div>;
  }
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((label) => {
        const path = `/Kanbas/Courses/${course._id}/${label}`;
        const isActive = pathname.includes(label);
        return(
          <Link key={label} to={path} className={`list-group-item text-danger border border-0
            ${isActive ? "text-black" : "text-danger"}`}>
              {label}
          </Link>
        );
      })}
    </div>
  );
}