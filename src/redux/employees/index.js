import { createSlice } from "@reduxjs/toolkit";

const defaultEmployee = {
  id: new Date().getTime(),
  firstName: "Abe",
  surname: "Simpson",
  email: "abe.simpson@springfield.com",
  birthDate: "1907-05-25",
  jobTitle: "Work grouch",
  status: "ACTIVE",
};

const initialState = {
  employees_records: [defaultEmployee],
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    saveNewEmployee: {
      prepare: employee => ({
        payload: { ...employee, id: new Date().getTime() },
      }),
      reducer(draftState, action) {
        draftState.employees_records.push(action.payload);
      },
    },
    deleteEmployee: (state, action) => {
      state.employees_records = state.employees_records.filter(
        user => user.id !== action.payload.id
      );
    },
    updateEmployee: (state, action) => {
      state.employees_records.map(user => { // eslint-disable-line
        if (user.id === parseInt(action.payload.id, 10)) {
          alert("updated");// eslint-disable-line
          if (user.firstName !== action.payload.firstName) {
            user.firstName = action.payload.firstName;
          }
          if (user.surname !== action.payload.surname) {
            user.surname = action.payload.surname;
          }
          if (user.jobTitle !== action.payload.jobTitle) {
            user.jobTitle = action.payload.jobTitle;
          }
          if (user.email !== action.payload.email) {
            user.email = action.payload.email;
          }
          if (user.status !== action.payload.status) {
            user.status = action.payload.status;
          }
          if (user.birthDate !== action.payload.birthDate) {
            user.birthDate = action.payload.birthDate;
          }
        }
      });
    },
  },
});

export const { saveNewEmployee, deleteEmployee, updateEmployee } =
  employeeSlice.actions;

export default employeeSlice.reducer;
