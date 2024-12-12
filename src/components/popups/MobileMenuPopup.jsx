import { useState } from "react";
import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  keyframes,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const slideInFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideOutToLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(0);
  }
  100% {
    opacity: 1;
    transform: translateX(-100%);
  }
`;

// Staggered text animation (fade-in)
const fadeInText = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px); /* Slight upward movement */
  }
  100% {
    opacity: 1;
    transform: translateY(0); /* Final position */
  }
`;

const MobileMenuPopup = ({ pages, setMblMenuOpen }) => {
  const [isClose, setIsClose] = useState(false);

  const closedMenu = () => {
    setIsClose(true);
    setTimeout(() => {
      setMblMenuOpen(false);
    }, 300);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        height: "100vh",
        padding: "30px",
        display: "flex",
        margin: 0,
        top: 0,
        left: 0,
        flexDirection: "column",
        alignItems: "self-start",
        justifyContent: "start",
        gap: "32px",
        overflow: "hidden",
        backgroundColor: "var(--secondary-color)",
        animation: `${
          isClose ? slideOutToLeft : slideInFromLeft
        } 0.3s ease-out`,
        zIndex: "999",
      }}
    >
      <Box
        sx={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundImage:
            "url('https://img.freepik.com/free-photo/people-ramadan-celebration_23-2151344679.jpg?t=st=1729076809~exp=1729080409~hmac=da6767dcf9e02bdbecebf35ce7fdb3030f74814994ac6005df970ea1083fe83f&w=1480')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: 0.4,
          zIndex: -1,
        }}
      />
      <Button
        startIcon={<Close />}
        onClick={closedMenu}
        sx={{
          minWidth: "20px",
          margin: "0px",
          padding: "5px 0px 5px 10px",
          backgroundColor: "white",
          borderRadius: "4px",
          color: "var(--primary-color)",
        }}
      />
      {/* Navigation List */}
      <List
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {pages.map((item, index) => (
          <ListItem key={item.link} sx={{ width: "auto", padding: 0 }}>
            <Link
              to={item.link}
              style={{
                textDecoration: "none",
                color: "var(--white-full)",
              }}
            >
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  sx: {
                    fontSize: "32px",
                    textTransform: "uppercase",
                    color: "var(--white-full)",
                    fontWeight: "700",
                    zIndex: "10",
                    fontFamily: "Ahsing, sans-serif",
                    opacity: 0,
                    animation: `${fadeInText} 0.6s ease-out forwards`,
                    animationDelay: `${index * 0.2}s`,
                  },
                }}
              />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MobileMenuPopup;
