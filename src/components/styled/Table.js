/* eslint-disable no-alert *//* eslint-disable */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { Table } from "./table/index";
import { Button } from "./table/button";
import TableFooter from "./table/tableFooter/index";
import useTable from "./table/useTable";

function TableStyled({ data, rowsPerPage }) {
  const iconStyle = {
    marginRight: "7px",
  };
  const [mockDataJson, setMockData] = useState(data);
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(mockDataJson, page, rowsPerPage);
  function handleDelete(id) {
    const newMockData = mockDataJson.filter(item => item.id !== id);
    setMockData(newMockData);
  }
  return (
    <>
      <h1>TABLE</h1>
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
          {
            slice.map(( detail )=> 
              <Table.TR key={detail.id}>
                <Table.TD>{detail.id}</Table.TD>
                <Table.TD>{detail.firstName}</Table.TD>
                <Table.TD>{detail.surname}</Table.TD>
                <Table.TD>{detail.email}</Table.TD>
                <Table.TD>{detail.birthDate}</Table.TD>
                <Table.TD>{detail.jobTitle}</Table.TD>
                <Table.TD>{detail.status}</Table.TD>
                <Table.TD>
                  <Button onClick={() => handleDelete(detail.id)} backgroundColor="#cf3638"><FontAwesomeIcon style={iconStyle} icon={faTrash}/>Delete</Button>
                  <Button ><FontAwesomeIcon style={iconStyle} icon={faPen} />Edit</Button>
                </Table.TD>
              </Table.TR>
            )
          }
        </Table.Body>
      </Table> 
      <TableFooter range={range} slice={slice} setPage={setPage} page={page}/>
    </>
         
  );
}

export default TableStyled;
