import React from "react";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  display: "block",
  position: "relative",
  borderRadius: "5px",
  backgroundColor: "rgba(255, 255, 255, 0.69)",
  color: "gray",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  "&:hover": {
    backgroundColor: "white",
  },
  margin: "0 50px 0 0",
  width: "20%",
}));

const SearchIconWrapper = styled("div")(() => ({
  padding: "0 10px 0 10px",
  height: "100%",
  position: "absolute",
  right: 0,
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(() => ({
  color: "gray",
  width: "100%",
  paddingLeft: "10px",
}));

function Header() {
  return (
    <Box>
      <AppBar
        sx={{
          position: "static",
        }}
      >
        <Toolbar>
          <MenuIcon sx={{ display: { xs: "block", sm: "none" } }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            My UI
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <SearchIcon
            sx={{
              display: { xs: "block", sm: "none" },
              position: "fixed",
              right: 0,
              paddingRight: "20px",
            }}
          />

          <Box sx={{ display: { xs: "none", sm: "block" }, mr: 2 }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <Badge badgeContent={4} color="error">
                <PersonIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
