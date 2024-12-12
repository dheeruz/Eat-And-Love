import { Box, Typography } from "@mui/material";

const InnerPageBanner = ({ mainHeading }) => {
  return (
    <Box
      sx={{
        padding: { xs: "60px 0px", md: "100px 0px" },
        borderRadius: "16px",
        background: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: '100%'
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "32px", md: "58px" },
          fontFamily: "Ahsing, sans-serif",
          color: "white",
          textAlign: "center",
        }}
      >
        {mainHeading}
      </Typography>
    </Box>
  );
};

export default InnerPageBanner;
