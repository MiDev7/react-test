import React from "react";
import { useHistory } from "react-router";
import { useFormikContext } from "formik";
import { Box, Button, Flex } from "../styled";

const UpdateFormButtons = () => {
  const { handleSubmit } = useFormikContext();
  const history = useHistory();

  return (
    <Flex justifyContent="center">
      <Box marginRight="sm">
        <Button data-cy="backButton" onClick={() => history.push(`/view`)}>
          Back
        </Button>
      </Box>
      <Box>
        <Button data-cy="updateButton" onClick={handleSubmit} type="submit">
          Update
        </Button>
      </Box>
    </Flex>
  );
};

export default UpdateFormButtons;
