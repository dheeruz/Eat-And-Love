import { LoginOutlined } from "@mui/icons-material";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { showAlert } from "../features/reducers/AlertPopupReducer";
import { login_user } from "../features/reducers/UserReducers";

const Login = () => {
  // Variables / Assignment
  const loginStatus = useSelector((state) => state.users.loggedInStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  // Redirect to dashboard if already logged in
  useEffect(() => {
    if (loginStatus.isLoggedIn) {
      dispatch(
        showAlert({ message: "You are already logged in.", type: "success" })
      );
      navigate("/dashboard");
    }
  }, [loginStatus, dispatch, navigate]);

  // Handle input changes
  const onChangeHandler = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle login
  const LoginDataHandler = () => {
    if (!loginData.username || !loginData.password) {
      dispatch(
        showAlert({
          message: "Please fill in both username and password.",
          type: "error",
        })
      );
      return;
    }

    dispatch(
      login_user({
        username: loginData.username,
        password: loginData.password,
      })
    );

    if (loginStatus.isLoggedIn) {
      dispatch(
        showAlert({
          message: "You're logged in successfully! Welcome back!",
          type: "success",
        })
      );

      setTimeout(() => {
        navigate("/dashboard");
      }, 1200);

      setLoginData({ username: "", password: "" });
    } else {
      dispatch(
        showAlert({
          message: "Incorrect username or password.",
          type: "error",
        })
      );
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "60px 10px 100px 10px", md: "60px 0px 150px 0px" },
      }}
      maxWidth="xl"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
          maxWidth: "600px",
          backgroundColor: "white",
          boxShadow: "3px 3px 8px rgb(0,0,0, 0.1)",
          borderRadius: "24px",
          padding: "38px",
          gap: "24px",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "22px", md: "32px" },
            fontFamily: "Ahsing, sans-serif",
          }}
        >
          Enter Your Login Details
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            gap: "16px",
            width: "100%",
          }}
        >
          <TextField
            label="Enter Your Username"
            name="username"
            id="username"
            value={loginData.username}
            onChange={onChangeHandler}
            type="text"
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Enter Your Password"
            name="password"
            id="password"
            value={loginData.password}
            onChange={onChangeHandler}
            type="password"
            variant="outlined"
            fullWidth
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: "8px",
            }}
          >
            <Button
              variant="contained"
              startIcon={<LoginOutlined />}
              sx={{
                backgroundColor: "var(--secondary-color)",
                borderRadius: "100px",
                textTransform: "capitalize",
                padding: "6px 24px",
              }}
              onClick={LoginDataHandler}
            >
              Login
            </Button>

            <Link
              to="/signup"
              style={{
                color: "black",
                textDecoration: "none",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "300",
                  letterSpacing: "-0.4px",
                }}
              >
                Create an account
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;