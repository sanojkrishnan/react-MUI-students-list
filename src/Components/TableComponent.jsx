import { Delete, Edit, Visibility } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

function TableComponent({ rows }) {
  return (
    <Box
      sx={{
        paddingTop: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          width: "90%",
          border: "2px solid lightgray",
          borderRadius: "15px",
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="">Status</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Sort</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{
                  backgroundColor: index % 2 === 0 ? "lightgray" : "white",
                }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}.&nbsp;{row.name}
                </TableCell>
                <TableCell>
                  {row.status ? (
                    <Box
                      sx={{
                        height: "8px",
                        width: "8px",
                        borderRadius: "50%",
                        backgroundColor: "green",
                      }}
                    ></Box>
                  ) : (
                    <Box
                      sx={{
                        height: "8px",
                        width: "8px",
                        borderRadius: "50%",
                        backgroundColor: "red",
                      }}
                    ></Box>
                  )}
                </TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.datesOfActive}</TableCell>
                <TableCell align="right">
                  <IconButton >
                    <Edit />
                  </IconButton>
                  &nbsp;
                  <IconButton>
                    <Delete />
                  </IconButton>
                  &nbsp;
                  <IconButton>
                    <Visibility />
                  </IconButton>
                  &nbsp;
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TableComponent;
