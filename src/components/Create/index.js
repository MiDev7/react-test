import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { Flex, Header } from "../styled";
import FormField from "./FormField";
import SelectField from "./SelectField";
import DateField from "./DateField";
import FormButtons from "./FormButtons";
import formValidationSchema from "./formValidationSchema";
import { saveNewEmployee } from "../../redux/employees/actionCreators";

const Create = () => {
  const dispatch = useDispatch();
  const submitForm = (employee, props) => {
    dispatch(saveNewEmployee(employee));
    props.setSubmitting(false);
    setTimeout(() => {
      props.resetForm();
    }, 2000);
  };
  return (
    <>
      <Header>Create new employee</Header>
      <Formik
        validationSchema={formValidationSchema}
        onSubmit={submitForm}
        initialValues={{
          firstName: "",
          surname: "",
          email: "",
          jobTitle: "",
          status: "",
          birthDate: "",
        }}
      >
        <Flex alignItems="center" justifyContent="center" height="100%">
          <Flex alignItems="left" direction="column" width="300px">
            <FormField name="firstName" placeholder="First name" />
            <FormField name="surname" placeholder="Surname" />
            <FormField name="email" placeholder="Email" />
            <DateField type="date" name="birthDate" placeholder="Birth Date" />
            <SelectField name="status" placeholder="Please select a status">
              <option value="">Choose a status option</option>
              <option value="ACTIVE">Active</option>
              <option value="LEAVE OF ABSENCE">Leave of Absence</option>
              <option value="TERMINATED">Terminated</option>
            </SelectField>
            <FormField name="jobTitle" placeholder="Job Title" />
            <FormButtons />
          </Flex>
        </Flex>
      </Formik>
    </>
  );
};

export default Create;
