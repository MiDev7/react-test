import React from "react";
import { useParams, useHistory } from "react-router-dom";
// import { useParams } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Header } from "../styled";
import { updateEmployee } from "../../redux/employees";
import FormField from "../Create/FormField";
import SelectField from "../Create/SelectField";
import DateField from "../Create/DateField";
import formValidationSchema from "../Create/formValidationSchema";
import UpdateFormButtons from "../Create/UpdateFormButtons";

const Edit = () => {
  const history = useHistory();
  const dispatch = useDispatch(); // eslint-disable-line
  const currentId = useParams();// eslint-disable-line
  const data = useSelector(state => state?.employees.employees_records);// eslint-disable-line
  const filteredUser = data.filter(user => user.id === parseInt(currentId.id,10)); // eslint-disable-line
  const { id, firstName, surname, email, birthDate, jobTitle, status } =
    filteredUser[0];

  const submitForm = (employee, props) => {
    dispatch(updateEmployee(employee));
    props.setSubmitting(false);
    history.push("/view"); // eslint-disable-line
  };
  return (
    <>
      <Header data-cy="header">Update</Header>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        marginTop="lg"
        width="auto"
      >
        <Formik
          validationSchema={formValidationSchema}
          onSubmit={submitForm}
          initialValues={{
            id: `${id}`,
            firstName: `${firstName}`,
            surname: `${surname}`,
            email: `${email}`,
            jobTitle: `${jobTitle}`,
            status: `${status}`,
            birthDate: `${birthDate}`,
          }}
        >
          <Flex alignItems="center" justifyContent="center" height="100%">
            <Flex alignItems="left" direction="column" width="300px">
              <FormField name="firstName" placeholder="First name" />
              <FormField name="surname" placeholder="Surname" />
              <FormField name="email" placeholder="Email" />
              <DateField
                type="date"
                name="birthDate"
                placeholder="Birth Date"
              />
              <SelectField name="status" placeholder="Please select a status">
                <option value="">Choose a status option</option>
                <option value="ACTIVE">Active</option>
                <option value="LEAVE OF ABSENCE">Leave of Absence</option>
                <option value="TERMINATED">Terminated</option>
              </SelectField>
              <FormField name="jobTitle" placeholder="Job Title" />
              <UpdateFormButtons />
            </Flex>
          </Flex>
        </Formik>
      </Flex>
    </>
  );
};

export default Edit;
