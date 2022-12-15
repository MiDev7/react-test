import * as yup from "yup";

const formValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .required("Required"),
  surname: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .required("Required"),
  email: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .email("Invalid email address")
    .required("Required"),
  jobTitle: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .required("Required"),
  status: yup
    .string()
    .oneOf(
      ["ACTIVE", "LEAVE OF ABSENCE", "TERMINATED"],
      "Choose one the options only"
    )
    .required("Required"),
  birthDate: yup.date().required("Required"),
});

export default formValidationSchema;
