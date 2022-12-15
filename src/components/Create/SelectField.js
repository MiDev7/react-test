import React from "react";
import { Field, useFormikContext } from "formik";
import OptionField from "./styled/OptionField";
import ErrorMessage from "./styled/ErrorMessage";
import { Box } from "../styled";

const SelectField = ({ name, placeholder, ...rest }) => {
  const { errors, touched } = useFormikContext();
  return (
    <Box marginBottom="md">
      <Field name={name}>
        {({ field, meta }) => (
          <OptionField
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

export default SelectField;
