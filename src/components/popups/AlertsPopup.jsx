import React, { useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { hideAlert } from "../../features/reducers/AlertPopupReducer";

const AlertPopup = () => {
  // Getting Requirements From Reducers
  const { message, type, visible } = useSelector((state) => state.AlertReducer);
  const dispatch = useDispatch();

  // Global Styling for Popup Modal
  const alertStyles = {
    success: {
      backgroundColor: "#d4edda",
      color: "#155724",
    },
    error: {
      backgroundColor: "#f8d7da",
      color: "#721c24",
    },
  };

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        dispatch(hideAlert());
      }, 3000);

      return () => clearTimeout(timer); 
    }
  }, [visible, dispatch]);
  if (!visible) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: "20px",
        right: "20px",
        minWidth: "250px",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        ...alertStyles[type],
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontFamily: "'Ahsing', sans-serif",
          fontWeight: 500,
        }}
      >
        {message}
      </Typography>
      <IconButton
        sx={{ color: alertStyles[type]?.color }}
        onClick={() => dispatch(hideAlert())}
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );
};

export default AlertPopup;
