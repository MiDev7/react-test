import React from "react";
import { Field, useFormikContext } from "formik";
import StyledDateField from "./styled/StyledDateField";
import ErrorMessage from "./styled/ErrorMessage";
import { Box } from "../styled";

const DateField = ({ name, placeholder, ...rest }) => {
  const { errors, touched } = useFormikContext();
  return (
    <Box marginBottom="md">
      <Field name={name}>
        {({ field, meta }) => (
          <StyledDateField
            {...rest}
            data-cy={`${name}Input`}
            fontSize="lg"
            placeholder={placeholder}
            fluid
            error={meta.error && meta.touched}
            {...field}
          />
        )}
      </Field>
      {errors[name] && touched[name] ? (
        <ErrorMessage data-cy={`${name}ErrorMessage`}>
          {errors[name]}
        </ErrorMessage>
      ) : null}
    </Box>
  );
};

export default DateField;
