import { Box, Container, Typography } from "@mui/material";
import React from "react";
import FooterLogo from "/assets/FooterIcon.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          padding: "20px 0px",
        }}
      >
        <Box
          sx={{
            order: { xs: 0, md: 1 },
            textAlign: { xs: "center", md: "left" },
            backgroundColor: "#f5f5f5",
            borderRadius: "100px",
            padding: { xs: "12px 15px", md: "15px 20px" },
            marginTop: { xs: "-6rem", md: "-5rem" },
            boxShadow: "0px 0px 5px #00000025",
          }}
        >
          <Link to="/">
            <img
              src={FooterLogo}
              alt="Footer Logo"
              height="120px"
              width="120px"
            />
          </Link>
        </Box>
        <Typography
          sx={{
            order: { xs: 1, md: 0 },
            textAlign: { xs: "center", md: "right" },
            fontSize: { xs: "14px", md: "16px" },
            letterSpacing: "-0.4px",
          }}
        >
          &copy; 2024 Copyright{" "}
          <span
            style={{
              fontFamily: "Ahsing, sans-serif",
              fontSize: "18px",
            }}
          >
            Eat & Love
          </span>{" "}
          All Rights Reserved
        </Typography>
        <Typography
          sx={{
            order: { xs: 2, md: 2 },
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: "14px", md: "16px" },
            letterSpacing: "-0.4px",
            marginTop: '-10px'
          }}
        >
          Designed & Developed by{"Sai Dheeraj"}
          <Link
            to="https://portfolio-asd-07.vercel.app/"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "#442a00",
              fontWeight: "bold",
            }}
          >
           Akula Sai Dheeraj 
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}
