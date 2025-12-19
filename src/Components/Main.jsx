import TableComponent from "./TableComponent";
import { Box, IconButton, Toolbar } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EditOption from "./EditOption";
import contactExp from "../API/rows";
import { useEffect, useState } from "react";
import ViewOption from "./ViewOption";

function Main() {
  const [row, setRow] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const retrieveRow = async () => {
    const response = await contactExp.get("/rows"); //making a GET request to the contacts API to get all the contacts.
    return response.data; //returning the data from the response.
  };

  const LOCAL_STORAGE_KEY = "rows"; //key to store the contacts in local storage.

  useEffect(() => {
    ///saving it in local storage as cache
    if (loaded) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(row)); //here we are using local storage to store the contacts array in the browser.
    }
  }, [row, loaded]); //this will run every time the contacts array changes or when the component is loaded.

  useEffect(() => {
    const getAllRow = async () => {
      const allRow = await retrieveRow(); //retrieving all the contacts from the json server.
      if (allRow) {
        setRow(allRow); //setting the contacts array to the state.
      }
      setLoaded(true);
    };
    getAllRow(); //calling the function to get all the contacts from the json server.
  }, []); //empty dependency array means this will only run once when the component is mounted.

  return (
    <Box>
      <EditOption/>
      <ViewOption />
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

        <TableComponent rows={row} />

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
