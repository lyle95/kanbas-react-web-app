import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses" className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4">
                {/* Course 1 */}
                <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark" 
                        to="/Kanbas/Courses/1234/Home">
                            <img src="/images/reactjs.jpg" width="100%" height={160} alt="logo of React JS"/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">
                                    CS1234 React JS
                                </h5>
                                <p className="wd-dashboard-course-title card-text">
                                    Full Stack software developer
                                </p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </Link>
                    </div>
                </div>
                {/* Course 2 */}
                <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/1002/Home">
                            <img src="/images/nodejs.jpg" width="100%" height={160} alt="Logo of Node JS"/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">
                                    CS1002 Node JS
                                </h5>
                                <p className="wd-dashboard-course-title card-text">
                                    Backend Development
                                </p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </Link>
                    </div>
                </div>
                {/* Course 3 */}
                <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/1003/Home">
                            <img src="/images/javascript.jpg" width="100%" height={160} alt="Logo of JavaScript"/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">
                                    CS1003 Java Script
                                </h5>
                                <p className="wd-dashboard-course-title card-text">
                                    Web Development with JavaScript
                                </p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </Link>
                    </div>
                </div>
                {/* Course 4 */}
                <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/1004/Home">
                            <img src="/images/netlify.jpg" width="100%" height={160} alt="Logo of Netlify"/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">
                                    CS1004 Netlify
                                </h5>
                                <p className="wd-dashboard-course-title card-text">
                                    Deploying Websites with Netlify
                                </p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </Link>
                    </div>
                </div>
                {/* Course 5 */}
                <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/1005/Home">
                            <img src="/images/html.jpg" width="100%" height={160} alt="Logo of HTML"/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">
                                    CS1005 HTML
                                </h5>
                                <p className="wd-dashboard-course-title card-text">
                                    Front-end Development with HTML
                                </p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </Link>
                    </div>
                </div>
                {/* Course 6 */}
                <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/1006/Home">
                            <img src="/images/css.jpg" width="100%" height={160} alt="Logo of CSS"/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">
                                    CS1006 CSS
                                </h5>
                                <p className="wd-dashboard-course-title card-text">
                                    Front-end Development with CSS
                                </p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </Link>
                    </div>
                </div>
                {/* Course 7 */}
                <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/1007/Home">
                            <img src="/images/bootstrap.jpg" width="100%" height={160} alt="Logo of Bootstrap"/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">
                                    CS1007 Bootstrap
                                </h5>
                                <p className="wd-dashboard-course-title card-text">
                                    Responsive Design with Bootstrap
                                </p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </Link>
                    </div>
                </div>
                {/* Course 8 */}
                <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                    <div className="card rounded-3 overflow-hidden">
                        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/1008/Home">
                            <img src="/images/github.jpg" width="100%" height={160} alt="Logo of Github"/>
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">
                                    CS1008 Github
                                </h5>
                                <p className="wd-dashboard-course-title card-text">
                                    Version Control with Github
                                </p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}