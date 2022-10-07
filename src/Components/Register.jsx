import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import { Address } from "./Address";
import Cookies from "js-cookie";

const cityAddress = Address;

const validationSchema = yup.object({
  name: yup
    .string("Enter your name")
    .trim("Invalid name")
    .min(3, "Minimum 3 Letter Name")
    .max(10)
    .required("Name  is required"),
  email: yup
    .string("Enter your email")
    .trim("Invalid Email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .trim("Invalid Password")
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
  addressLine1: yup
    .string("Enter Address Line 1")
    .trim()
    .min(3)
    .required("Address Line 1 is required"),
  addressLine2: yup
    .string("Enter Address Line 2")
    .trim()
    .min(3)
    .required("Address Line 2 is required"),
  city: yup
    .string("City is required")
    .trim()
    .min(3, "city name is too short")
    .required("City is required"),
  state: yup
    .string("state is required")
    .trim()
    .min(3, "state name is too short")
    .required("State is required"),
  postalcode: yup
    .string("Postal Code is required")
    .trim()
    .min(3, "postal code is too short")
    .required("Postal code is required"),
  country: yup
    .string("country is required")
    .trim()
    .min(3, "country name is too short")
    .required("Country is required"),
});

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit">Food App</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export function Register() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      postalcode: "",
      country: "",
    },
    validationSchema: validationSchema,
    onSubmit: (value) => {
      let userData = JSON.parse(localStorage.getItem("UserData")) || [];
      const existingUser = userData.find((user) => user.email === value.email);
      if (existingUser) {
        toast.error("User Exists,Try New Email", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }
      localStorage.setItem("UserData", JSON.stringify([...userData, value]));
      navigate("/login");
    },
  });

  useEffect(() => {
    let cookie = Cookies.get("foo");
    if (cookie) {
      navigate("/");
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Grid
              container
              direction="row"
              justifyContent="start"
              alignItems="center"
              spacing={2}
              mt={3}
              sx={{ width: "100%", margin: "auto" }}
            >
              <Grid item md={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  type="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  label="Name"
                  name="name"
                  autoComplete="name"
                />
              </Grid>

              <Grid item md={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  label="Password"
                  name="password"
                  autoComplete="password"
                />
              </Grid>
            </Grid>
            <Stack
              direction="column"
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{ padding: "15px" }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="addressLine1"
                type="text"
                value={formik.values.addressLine1}
                onChange={formik.handleChange}
                error={
                  formik.touched.addressLine1 &&
                  Boolean(formik.errors.addressLine1)
                }
                helperText={
                  formik.touched.addressLine1 && formik.errors.addressLine1
                }
                label="Address Line 1"
                name="addressLine1"
                autoComplete="addressLine1"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="addressLine2"
                type="text"
                value={formik.values.addressLine2}
                onChange={formik.handleChange}
                error={
                  formik.touched.addressLine2 &&
                  Boolean(formik.errors.addressLine2)
                }
                helperText={
                  formik.touched.addressLine2 && formik.errors.addressLine2
                }
                label="Address Line 2 "
                name="addressLine2"
                autoComplete="addressLine2"
              />
            </Stack>

            <Grid
              container
              direction="row"
              justifyContent="start"
              alignItems="center"
              spacing={2}
              mt={3}
              sx={{ width: "100%", margin: "auto" }}
            >
              <Grid item>
                {/* <TextField
              margin="normal"
              required
              fullWidth
              id="city"
              list="cityList"
              type="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={()=>{

                
              }}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
              label="City"
              name="city"
              autoComplete="city"
            /> */}
                <Autocomplete
                  freeSolo
                  id="combo-box-demo"
                  options={cityAddress}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      required
                      fullWidth
                      id="city"
                      list="cityList"
                      type="city"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      onBlur={(e) => {
                        let city = e.target.value;
                        if (city.length > 2) {
                          let cityExist = cityAddress.find(
                            (eachCity) => eachCity.label === city
                          );

                          if (cityExist) {
                            formik.setFieldValue("city", cityExist.label);
                            formik.setFieldValue("country", cityExist.country);
                            formik.setFieldValue(
                              "postalcode",
                              cityExist.pincode
                            );
                            formik.setFieldValue("state", cityExist.state);
                          }
                        }
                      }}
                      error={formik.touched.city && Boolean(formik.errors.city)}
                      helperText={formik.touched.city && formik.errors.city}
                      label="City"
                      name="city"
                      autoComplete="city"
                    />
                  )}
                />

                <datalist id="cityList">
                  <option value="HSR Layout">HSR Layout</option>
                  <option value="Kormangala">Kormnagala</option>
                  <option value="Madiwala">Madiwala</option>
                  <option value="BTM Layout">BTM Layout</option>
                </datalist>
              </Grid>
              <Grid item>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="state"
                  type="text"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  error={formik.touched.state && Boolean(formik.errors.state)}
                  helperText={formik.touched.state && formik.errors.state}
                  label="State/Region"
                  name="state"
                  autoComplete="state"
                />
              </Grid>

              <Grid item>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="postalcode"
                  type="text"
                  value={formik.values.postalcode}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.postalcode &&
                    Boolean(formik.errors.postalcode)
                  }
                  helperText={
                    formik.touched.postalcode && formik.errors.postalcode
                  }
                  label="Postal Code"
                  name="postalcode"
                  autoComplete="postalcode"
                />
              </Grid>
              <Grid item>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="country"
                  type="text"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.country && Boolean(formik.errors.country)
                  }
                  helperText={formik.touched.country && formik.errors.country}
                  label="Country"
                  name="country"
                  autoComplete="country"
                />
              </Grid>
            </Grid>
            <Box sx={{ textAlign: "center" }}>
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign Up
              </Button>
            </Box>
            <Grid container>
              <Grid item>
                <Link
                  onClick={() => {
                    navigate("/login");
                  }}
                  variant="body2"
                >
                  {"Have an account? Login"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
