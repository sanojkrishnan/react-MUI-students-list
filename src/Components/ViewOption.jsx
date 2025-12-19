import React, { useContext } from 'react'
import { RowContext, ThemeCoContext } from '../State/theme';
import { Box, IconButton, Paper, Typography } from '@mui/material';
import CancelIcon from "@mui/icons-material/Cancel";


function ViewOption() {
    const { viewContent, setViewContent  } = useContext(ThemeCoContext);
      const { rowValue } = useContext(RowContext);

    
      return (
        <Box
          sx={{
            minHeight: "90vh",
            display: viewContent,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            inset: 0,
            zIndex: 2,
          }}
        >
          {/* Blur background */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(0,0,0,0.3)",
            }}
          />
    
          {/* Form card */}
          <Paper
            sx={{
              position: "relative",
              zIndex: 1,
              width: { xs: "90%", sm: 420 },
              p: 4,
              borderRadius: 4,
            }}
          >
            <Typography variant="h5" textAlign="center" mb={3}>
              Edit
            </Typography>
    
            {/* Close button */}
            <IconButton
              sx={{ position: "absolute", top: 5, right: 5 }}
              onClick={() => setViewContent("none")}
            >
              <CancelIcon/>
            </IconButton>
    
            <Typography
              fullWidth
              label="Name"
              name="name"
              margin="normal"
            >Name : {rowValue.name}</Typography>
            <Typography
              fullWidth
              label="Name"
              name="name"
              margin="normal"
            >Status : {rowValue.status ? "Active" : "Inactive"}</Typography>
            <Typography
              fullWidth
              label="Name"
              name="name"
              margin="normal"
            >Date of join : {rowValue.date}</Typography>
            <Typography
              fullWidth
              label="Name"
              name="name"
              margin="normal"
            >Active date : {rowValue.dateOfActive}</Typography>
            
          </Paper>
        </Box>
  )
}

export default ViewOption