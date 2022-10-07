import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Typography from "@mui/material/Typography";
import Cookies from "js-cookie";
import FastfoodIcon from "@mui/icons-material/Fastfood";

import { Box, Button, IconButton, Stack } from "@mui/material";
import { UserContextPro } from "../Context";

const Navbar = () => {
  const { userDetails, setUserDetails, isLoggedIn, setisLoggedIn } =
    React.useContext(UserContextPro);
  const navigate = useNavigate();

  const HandleLogout = () => {
    setisLoggedIn(false);
    toast.success("Logged Out", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    Cookies.remove("foo");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Stack direction='row' p={2} spacing={3}  justifyContent="space-between"
  alignItems="center">
          <Stack direction='row'>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <FastfoodIcon sx={{ display: { xs: "none", md: "flex" }}} />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ cursor:'pointer'}}
            onClick={() => {
              navigate("/");
            }}
          >
            Food App
          </Typography>
          </Stack>

          {isLoggedIn && (
            <>
              <Stack direction="row" spacing={2}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {userDetails.name}
                </Typography>

                <Button
                  color="error"
                  variant="contained"
                  onClick={() => {
                    HandleLogout();
                    navigate("/login");
                  }}
                >
                  logout
                </Button>
              </Stack>
            </>
          )}
        </Stack>
      </AppBar>
    </Box>
  );
};
export default Navbar;
