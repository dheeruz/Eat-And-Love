import { LoginOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add_user } from "../features/reducers/UserReducers";
import { showAlert } from "../features/reducers/AlertPopupReducer";
import {
  new_chef_added,
  new_user_added,
} from "../features/reducers/dashboardActions/AdminReducer";

const Signup = () => {
  const UserData = useSelector((state) => state.users.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signUpData, setSignUpData] = useState({
    fullName: "",
    username: "",
    password: "",
    userRole: "",
    userEmail: "",
  });

  const [errors, setErrors] = useState({});

  const onChangeHandler = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoleChange = (event) => {
    setSignUpData({
      ...signUpData,
      userRole: event.target.value,
    });
  };

  const validateInputs = () => {
    const newErrors = {};
    const existingEmail = UserData.find(
      (item) => item.email === signUpData.userEmail
    );
    const existingUsername = UserData.find(
      (item) => item.username === signUpData.username
    );

    if (!signUpData.fullName) newErrors.fullName = "Full name is required.";
    if (!signUpData.userEmail) {
      newErrors.userEmail = "Email is required.";
    } else if (existingEmail) {
      newErrors.userEmail = "Email already exists.";
    }
    if (!signUpData.username) {
      newErrors.username = "Username is required.";
    } else if (existingUsername) {
      newErrors.username = "Username already exists.";
    }
    if (!signUpData.password || signUpData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    if (!signUpData.userRole) newErrors.userRole = "User role is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSignUpHandler = () => {
    if (!validateInputs()) return;

    dispatch(
      add_user({
        name: signUpData.fullName,
        email: signUpData.userEmail,
        role: signUpData.userRole,
        username: signUpData.username,
        password: signUpData.password,
      })
    );

    dispatch(new_user_added());
    if (signUpData.userRole === "chef") {
      dispatch(new_chef_added());
    }

    dispatch(
      showAlert({
        message: `${signUpData.fullName}, You're signed up successfully!`,
        type: "success",
      })
    );

    setTimeout(() => {
      navigate("/login");
    }, 1200);

    setSignUpData({
      fullName: "",
      username: "",
      password: "",
      userRole: "",
      userEmail: "",
    });
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
          Creating an account
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
            label="Enter Your Full Name"
            name="fullName"
            id="fullName"
            value={signUpData.fullName}
            onChange={onChangeHandler}
            type="text"
            variant="outlined"
            fullWidth
            error={!!errors.fullName}
            helperText={errors.fullName}
          />
          <TextField
            label="Enter Your Email"
            name="userEmail"
            id="userEmail"
            value={signUpData.userEmail}
            onChange={onChangeHandler}
            type="email"
            variant="outlined"
            fullWidth
            error={!!errors.userEmail}
            helperText={errors.userEmail}
          />
          <FormControl fullWidth error={!!errors.userRole}>
            <InputLabel id="demo-simple-select-label">User Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={signUpData.userRole}
              label="User Role"
              onChange={handleRoleChange}
            >
              <MenuItem value="admin">admin</MenuItem>
              <MenuItem value="chef">chef</MenuItem>
              <MenuItem value="user">user</MenuItem>
            </Select>
            {errors.userRole && (
              <Typography color="error" variant="caption">
                {errors.userRole}
              </Typography>
            )}
          </FormControl>
          <TextField
            label="Enter Your Username"
            name="username"
            id="username"
            value={signUpData.username}
            onChange={onChangeHandler}
            type="text"
            variant="outlined"
            fullWidth
            error={!!errors.username}
            helperText={errors.username}
          />
          <TextField
            label="Enter Your Password"
            name="password"
            id="password"
            value={signUpData.password}
            onChange={onChangeHandler}
            type="password"
            variant="outlined"
            fullWidth
            error={!!errors.password}
            helperText={errors.password}
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
              onClick={onSignUpHandler}
            >
              Signup
            </Button>
            <Link
              to="/login"
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
                Already have an account
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
