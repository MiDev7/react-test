import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { Table } from "./table/index";
import { Button } from "./table/button";
import TableFooter from "./table/tableFooter/index";
import useTable from "./table/useTable";
import { deleteEmployee } from "../../redux/employees";
import theme from "./defaultTheme";

const TableStyled = ({ data, rowsPerPage }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const iconStyle = {
    marginRight: "7px",
  };
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  function handleDelete(employee) {
    dispatch(deleteEmployee(employee));
  }
  return (
    <>
      <Table>
        <Table.Head>
          <Table.TR>
            <Table.TH>Id</Table.TH>
            <Table.TH>First Name</Table.TH>
            <Table.TH>Surname</Table.TH>
            <Table.TH>Email</Table.TH>
            <Table.TH>birth_date</Table.TH>
            <Table.TH>Job Title</Table.TH>
            <Table.TH>Status</Table.TH>
            <Table.TH>Actions</Table.TH>
          </Table.TR>
        </Table.Head>
        <Table.Body>
          {slice.map(detail => (
            <Table.TR key={detail.id}>
              <Table.TD>{detail.id}</Table.TD>
              <Table.TD>{detail.firstName}</Table.TD>
              <Table.TD>{detail.surname}</Table.TD>
              <Table.TD>{detail.email}</Table.TD>
              <Table.TD>{detail.birthDate}</Table.TD>
              <Table.TD>{detail.jobTitle}</Table.TD>
              <Table.TD>{detail.status}</Table.TD>
              <Table.TD>
                <Button
                  onClick={() => handleDelete(detail)}
                  backgroundColor={theme.buttons.danger}
                >
                  <FontAwesomeIcon style={iconStyle} icon={faTrash} />
                  Delete
                </Button>
                <Button
                  data-cy="edit"
                  onClick={() => history.push(`/${detail.id}`)}
                  backgroundColor={theme.buttons.success}
                >
                  <FontAwesomeIcon style={iconStyle} icon={faPen} />
                  Edit
                </Button>
              </Table.TD>
            </Table.TR>
          ))}
        </Table.Body>
      </Table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default TableStyled;
