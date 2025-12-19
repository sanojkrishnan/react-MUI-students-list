import { useContext, useState, useEffect } from "react";
import { RowContext, ThemeContext } from "../State/theme";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio,
  IconButton,
  FormControl,
  FormLabel,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

function GlassForm() {
  const { viewEdit, setViewEdit } = useContext(ThemeContext);
  const { rowValue } = useContext(RowContext);

  // 🔹 Local editable state
  const [formData, setFormData] = useState({
    name: "",
    status: null,
    date: "",
    datesOfActive: "",
  });

  // 🔹 Load selected row into form
  useEffect(() => {
    if (rowValue) {
      setFormData({
        name: rowValue.name || "",
        status: rowValue.status ?? null,
        date: rowValue.date || "",
        datesOfActive: rowValue.datesOfActive || "",
      });
    }
  }, [rowValue]);

  // 🔹 TextField handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: viewEdit,
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
          onClick={() => setViewEdit("none")}
        >
          <CancelIcon />
        </IconButton>

        {/* Name */}
        <TextField
          fullWidth
          label="Name"
          name="name"
          margin="normal"
          value={formData.name}
          onChange={handleChange}
        />

        {/* Status */}
        <FormControl margin="normal">
          <FormLabel>Status</FormLabel>
          <RadioGroup
            value={formData.status === null ? "" : String(formData.status)}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                status: e.target.value === "true",
              }))
            }
          >
            <FormControlLabel
              value="true"
              control={<Radio />}
              label="Active"
            />
            <FormControlLabel
              value="false"
              control={<Radio />}
              label="Inactive"
            />
          </RadioGroup>
        </FormControl>

        {/* Date of Join */}
        <TextField
          fullWidth
          label="Date Of Join"
          name="date"
          type="date"
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={formData.date}
          onChange={handleChange}
        />

        {/* Date of Active */}
        <TextField
          fullWidth
          label="Date Of Active"
          name="datesOfActive"
          type="date"
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={formData.datesOfActive}
          onChange={handleChange}
        />

        {/* Save */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            py: 1.2,
            borderRadius: 3,
            textTransform: "none",
            fontSize: "16px",
          }}
          disabled
        >
          Save Changes
        </Button>
      </Paper>
    </Box>
  );
}

export default GlassForm;
