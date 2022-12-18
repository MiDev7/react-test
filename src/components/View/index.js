import React from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
// import { selectEmployees } from "../../redux/employees";
import { Box, Button, Flex, Header } from "../styled";
import TableStyled from "../styled/Table";

const View = () => {
  const history = useHistory();
  const data = useSelector(state => state.employees.employees_records);
  return (
    <>
      <Header data-cy="header">View Employees</Header>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        marginTop="lg"
        width="auto"
      >
        <TableStyled id="table" data={data} rowsPerPage={10} />
        <Box>
          <Button data-cy="backButton" onClick={() => history.push("")}>
            Back
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default View;
