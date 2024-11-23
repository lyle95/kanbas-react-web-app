import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
};
const generateId = (assignments: any) => {
  let newId;
  const existingIds = new Set(assignments.map((assignment: any) => assignment._id));
  do {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate() + 1).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    newId = `A${year}${month}${day}${hours}${minutes}`;
    console.log("Generated ID:", newId);
  } while (existingIds.has(newId));
  return newId;
}

const assignmentSlice = createSlice({
  name: "assignment",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: generateId(state.assignments),
        title: assignment.title ,
        description: assignment.description,
        points: assignment.points,
        due: assignment.due,
        available: assignment.available,
        until: assignment.until,
        course:assignment.course,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
      console.log("New assignment added to state:", state.assignments);
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment, setAssignments } =
  assignmentSlice.actions;
export default assignmentSlice.reducer;