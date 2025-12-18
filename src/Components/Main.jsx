import React from "react";
import TableComponent from "./TableComponent";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Main() {
  const rows = [
    {
      id: 1 ,
      name: "sanoj",
      status: "active",
      date: 24,
      datesOfActive: 30,
    },
    {
      id: 2 ,
      name: "sanoj",
      status: "active",
      date: 24,
      datesOfActive: 30,
    },
    {
      id: 3 ,
      name: "sanoj",
      status: "active",
      date: 24,
      datesOfActive: 30,
    },
    {
      id: 4 ,
      name: "sanoj",
      status: "active",
      date: 24,
      datesOfActive: 30,
    },
    {
      id: 5 ,
      name: "sanoj",
      status: "active",
      date: 24,
      datesOfActive: 30,
    },
   
  ];
  return (
    <Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 30fr 1fr" },
          alignItems: "center",
        }}
      >
        <IconButton
          aria-label="arrow"
          sx={{
            borderRadius: 0,
            width: "50px",
            height: "50%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "lightgray",
            display: { xs: "none", sm: "flex" },
          }}
        >
          <ArrowBackIosIcon m="0" />
        </IconButton>
        <TableComponent rows={rows} />
        <IconButton
          aria-label="arrow"
          sx={{
            borderRadius: 0,
            width: "50px",
            height: "50%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "lightgray",
            display: { xs: "none", sm: "flex" },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          marginBottom: "10px",
        }}
      >
        <Toolbar
          sx={{
            position: "fixed",
            bottom: 0,
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr 1fr", sm: "1fr" },
            backgroundColor: "lightgray",
            width: "80%",
            borderRadius: "10px",
            justifyContent: "space-between",
            alignItems: "space-between",
          }}
        >
          <IconButton
            aria-label="arrow"
            sx={{
              borderRadius: 0,
              display: { xs: "block", sm: "none" },
            }}
          >
            <ArrowBackIosIcon m="0" />
          </IconButton>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                height: "8px",
                width: "8px",
                borderRadius: "50%",
                backgroundColor: "black",
              }}
            ></Box>
          </Box>
          <IconButton
            aria-label="arrow"
            sx={{
              borderRadius: 0,
              display: { xs: "block", sm: "none" },
            }}
          >
            <ArrowForwardIosIcon m="0" />
          </IconButton>
        </Toolbar>
      </Box>
    </Box>
  );
}

export default Main;
