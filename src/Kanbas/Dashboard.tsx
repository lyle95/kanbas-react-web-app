import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">
            {/* Course 1 */}
            <div className="wd-dashboard-course">
                <img src="/images/reactjs.jpg" width={200} alt="Logo of React JS"/>
                <div>
                    <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/1234/Home">
                        CS1234 React JS
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Full Stack software developer
                    </p>
                    <Link to="/Kanbas/Courses/1234/Home"> Go </Link><br />
                    <br />
                </div>
            </div>
            {/* Course 2 */}
            <div className="wd-dashboard-course">
                <img src="/images/nodejs.jpg" width={200} alt="Logo of Node JS"/>
                <div>
                    <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/1002/Home">
                        CS1002 Node JS
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Backend Development
                    </p>
                    <Link to="/Kanbas/Courses/1002/Home"> Go </Link><br />
                    <br />
                </div>
            </div>
            {/* Course 3 */}
            <div className="wd-dashboard-course">
                <img src="/images/javascript.jpg" width={200} alt="Logo of Javascript"/>
                <div>
                    <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/1003/Home">
                        CS1003 Java Script
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Web Development with JavaScript
                    </p>
                    <Link to="/Kanbas/Courses/1003/Home"> Go </Link><br />
                    <br />
                </div>
            </div>
            {/* Course 4 */}
            <div className="wd-dashboard-course">
                <img src="/images/netlify.jpg" width={200} alt="Logo of Netlify"/>
                <div>
                    <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/1004/Home">
                        CS1004 Netlify
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Deploying Websites with Netlify
                    </p>
                    <Link to="/Kanbas/Courses/1004/Home"> Go </Link><br />
                    <br />
                </div>
            </div>
            {/* Course 5 */}
            <div className="wd-dashboard-course">
                <img src="/images/html.jpg" width={200} alt="Logo of HTML"/>
                <div>
                    <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/1005/Home">
                        CS1005 HTML
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Front-end Development with HTML
                    </p>
                    <Link to="/Kanbas/Courses/1005/Home"> Go </Link><br />
                    <br />
                </div>
            </div>
            {/* Course 6 */}
            <div className="wd-dashboard-course">
                <img src="/images/css.jpg" width={200} alt="Logo of CSS"/>
                <div>
                    <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/1006/Home">
                        CS1006 CSS
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Front-end Development with CSS
                    </p>
                    <Link to="/Kanbas/Courses/1006/Home"> Go </Link><br />
                    <br />
                </div>
            </div>
            {/* Course 7 */}
            <div className="wd-dashboard-course">
                <img src="/images/bootstrap.jpg" width={200} alt="Logo of Bootstrap"/>
                <div>
                    <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/1007/Home">
                        CS1007 Bootstrap
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Responsive Design with Bootstrap
                    </p>
                    <Link to="/Kanbas/Courses/1007/Home"> Go </Link><br />
                    <br />
                </div>
            </div>
            {/* Course 8 */}
            <div className="wd-dashboard-course">
                <img src="/images/github.jpg" width={200} alt="Logo of github"/>
                <div>
                    <Link className="wd-dashboard-course-link"
                    to="/Kanbas/Courses/1008/Home">
                        CS1008 Github
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Version Control with Github
                    </p>
                    <Link to="/Kanbas/Courses/1008/Home"> Go </Link><br />
                    <br />
                </div>
            </div>
        </div>
    </div>
  );
}