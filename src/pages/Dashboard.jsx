import React, { useEffect, useState } from "react";
import { SidebarPerUserRole } from "../appConstantData/SidebarPerUserRole";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import {
  AttendenceReport,
  AddInventory,
  ChefManagement,
  DashboardAdmin,
  OrderHistory,
  OrderManagement,
  Profile,
  StockManagement,
  SuggestRecipe,
} from "../components/dashboard/DashboardContent";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "../features/reducers/AlertPopupReducer";

const Dashboard = () => {
  // Variables
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.users.loggedInStatus);
  // Edge Case || If user jump to Dashboard without login as a guest so its redirect to login
  useEffect(() => {
    if (!loginStatus.isLoggedIn) {
      dispatch(
        showAlert({
          message: "Please Login First Then Comes to Dashboard",
          type: "error",
        })
      );
      navigate("/login");
    }
  }, []);
  let userrole = loginStatus.userRole;
  let currentUserDetails = loginStatus.isLoggedIn
    ? loginStatus.currentUser
    : {
      name: '',
      email: '',
    };

  let SidebarTabs = [];

  // Check The Current User
  switch (userrole) {
    case "admin":
      SidebarTabs = SidebarPerUserRole.admin;
      break;

    case "chef":
      SidebarTabs = SidebarPerUserRole.chef;
      break;

    case "user":
      SidebarTabs = SidebarPerUserRole.user;
  }

  const [currData, setCurrData] = useState(SidebarTabs[0]?.activeComponent);

  switch (currData) {
    case "Chef_AttendanceHistory":
      setCurrData(<AttendenceReport />);
      break;
    case "AddInventory":
      setCurrData(<AddInventory />);
      break;
    case "Admin_ChefManagement":
      setCurrData(<ChefManagement />);
      break;
    case "Admin_Dashboard":
      setCurrData(<DashboardAdmin />);
      break;
    case "User_OrderHistory":
      setCurrData(<OrderHistory />);
      break;
    case "Admin_OrderManagement":
      setCurrData(<OrderManagement />);
      break;
    case "Profile":
      setCurrData(<Profile />);
      break;
    case "Chef_StockManagement":
      setCurrData(<StockManagement />);
      break;
    case "Chef_SuggestNewRecipe":
      setCurrData(<SuggestRecipe />);
  }

  useEffect(() => {
    setCurrData(SidebarTabs[0]?.activeComponent);
  }, [userrole]);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Inner Box */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "16px", md: "32px" },
          alignItems: "start",
          justifyContent: "start",
        }}
      >
        {/* SideBar Admin */}
        <Box
          sx={{
            width: { xs: "100%", md: "30%" },
            backgroundColor: "primary.main",
            color: "#FFF",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            position: "sticky",
            top: 0,
            left: 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
            }}
          >
            {/* Image */}
            <Link to="/">
              <Box
                component="img"
                sx={{
                  width: { xs: "150px", md: "220px" },
                  height: "auto",
                  filter: "invert()",
                }}
                src="/assets/Logo.png"
                alt="Eat & Love"
              />
            </Link>
            {/* Sidebar Tabs */}
            <List>
              {SidebarTabs.map((item, index) => (
                <ListItem
                  key={index}
                  onClick={() => setCurrData(item.activeComponent)}
                  sx={{
                    marginBottom: "16px",
                    color: "#FFF",
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "secondary.main",
                    },
                  }}
                >
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>

        {/* Main Content Box */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: { xs: "22px", md: "32px" },
            padding: "32px",
          }}
        >
          {/* Top Welcomming Bar */}
          <Box
            sx={{
              padding: "24px",
              backgroundColor: "white",
              borderRadius: "24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "600",
                textTransform: "uppercase",
              }}
            >
              Wellcome to Dashboard
            </Typography>

            {/* User Short Profile */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: "8px",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: { xs: "20px", md: "40px" },
                  height: { xs: "20px", md: "40px" },
                  borderRadius: "100px",
                  objectFit: "cover",
                }}
                src="https://i.ytimg.com/vi/3TLEfOMBbMw/sddefault.jpg"
                alt="Profile"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "10px", md: "12px" },
                  }}
                >
                  {currentUserDetails.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "8px", md: "10px" },
                    color: "#00000070",
                  }}
                >
                  {currentUserDetails.email}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Main Content */}
          <Box>
            <Typography>{currData}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
