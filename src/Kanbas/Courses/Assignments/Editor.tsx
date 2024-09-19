export default function AssignmentEditor() {
    return (
    <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label><br /><br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" cols={60} rows={10}>
            The assignment is available online. Submit a link to the landing page of 
            your Web application running on Netlify.
        </textarea>
        <br /><br />
        <table>
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-points">Points</label>
                </td>
                <td>
                    <input id="wd-points" value={100} />
                </td>
            </tr><br />
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-group">Assignment Group</label>
                </td>
                <td>
                    <select id="wd-select-one-group">
                    <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                    <option value="QUIZZES">QUIZZES</option>
                    <option value="EXAMS">EXAMS</option>
                    <option value="PROJECT">PROJECT</option>
                    </select>
                </td>
            </tr><br />
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-display-grade-as">Display Grade as</label>
                </td>
                <td>
                    <select id="wd-select-one-display-grade-as">
                    <option selected value="Percentage">Percentage</option>
                    <option value="ActualScore">Actual Score</option>
                    </select>
                </td>
            </tr><br />
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-submission-type">Submission Type</label>
                </td>
                <td>
                    <select id="wd-select-one-submission-type">
                    <option selected value="Online">Online</option>
                    <option value="OnCampus">OnCampus</option>
                    </select>
                </td>
            </tr><br />
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-online-entry-options">Online Entry Options</label>
                </td>
                <td>
                    <input type="checkbox" name="check-online-entry-options" id="wd-textentry"/>
                    <label htmlFor="wd-textentry">Text Entry</label><br/>

                    <input type="checkbox" name="check-online-entry-options" id="wd-website-url"/>
                    <label htmlFor="wd-website-url">Website URL</label><br/>

                    <input type="checkbox" name="check-online-entry-options" id="wd-media-recordings"/>
                    <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                    <input type="checkbox" name="check-online-entry-options" id="wd-student-annotation"/>
                    <label htmlFor="wd-student-annotation">Student Annotation</label>

                    <input type="checkbox" name="check-online-entry-options" id="wd-file-upload"/>
                    <label htmlFor="wd-file-upload">File Uploads</label>
                </td>
            </tr><br />
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-assign-to">Assign to</label><br />
                </td>
                <td>
                    <input id="wd-assign-to" value={"Everyone"} />
                </td>
            </tr><br />
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-due-date">Due</label><br />
                </td>
                <td>
                <input type="date"
                        id="wd-due-date"
                        value="2024-09-13"/>
                </td>
            </tr><br />
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-available-from">Avalable from</label>
                </td>
                <td>
                <input type="date"
                        id="wd-available-from"
                        value="2024-09-06"/>
                </td>
                <td align="right" valign="top">
                    <label htmlFor="wd-available-until">Until</label>
                </td>
                <td>
                <input type="date"
                        id="wd-available-until"
                        value="2024-09-20"/>
                </td>
            </tr><br />
        </table>
    </div>
);}
