"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  FirstName: string,
  SecondName: string,
  DogBreed: string,
  Sex: string,
  Amount: number
) {
  return { FirstName, SecondName, DogBreed, Sex, Amount };
}

const rows = [
  createData("Collin", "Rose Smart", "BullDog", "Male", 4.0),
  createData("Akinyemi", "Ayomide Joy", "Huskey", "FeMale", 4.3),
  createData("Collin", "Ayomide Joy", "Rottweller", "Male", 6.0),
  createData("Akinyemi", "Rose Smart", "Rottweller", "Male", 4.3),
  createData("Collin", "Ayomide Joy", "BullDog", "FeMale", 3.9),
];

export default function HomeTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell
              sx={{ bgcolor: "#F0F0F0 !important", color: "black !important" }}
            >
              FIRST NAME
            </StyledTableCell>
            <StyledTableCell
              sx={{ bgcolor: "#F0F0F0 !important", color: "black !important" }}
            >
              SECOND NAME
            </StyledTableCell>
            <StyledTableCell
              sx={{ bgcolor: "#F0F0F0 !important", color: "black !important" }}
            >
              Dog Breed
            </StyledTableCell>
            <StyledTableCell
              sx={{ bgcolor: "#F0F0F0 !important", color: "black !important" }}
            >
              Sex
            </StyledTableCell>
            <StyledTableCell
              sx={{ bgcolor: "#F0F0F0 !important", color: "black !important" }}
            >
              Amount
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.FirstName}>
              <StyledTableCell component="th" scope="row">
                {row.FirstName}
              </StyledTableCell>
              <StyledTableCell>{row.SecondName}</StyledTableCell>
              <StyledTableCell>{row.DogBreed}</StyledTableCell>
              <StyledTableCell>{row.Sex}</StyledTableCell>
              <StyledTableCell>{row.Amount}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
