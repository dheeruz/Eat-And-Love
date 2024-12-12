import React from "react";
import InnerPageBanner from "../components/InnerPageBanner";
import { Box, Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <InnerPageBanner mainHeading="Crafting Delight, One Dish at a Time" />

      {/* Content */}
      <Box
        sx={{
          padding: { xs: "20px 0px 100px 0px", md: "60px 0px 100px 0px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "md",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "16px",
              marginBottom: "16px", // Add some spacing between paragraphs
            }}
          >
            Welcome to <strong>Eat & Love</strong>, where we believe that food
            is not just about sustenance but a celebration of flavors, cultures,
            and memories. Our mission is to bring people together through a
            delightful dining experience, making every meal an occasion to
            cherish.
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              marginBottom: "16px",
            }}
          >
            At <strong>Eat & Love</strong>, we offer a wide range of carefully
            curated products that reflect the diversity of culinary traditions.
            Whether you’re looking for the perfect ingredients to whip up a meal
            at home or unique items to surprise your loved ones, we’ve got you
            covered.
          </Typography>

          <Typography
            variant="h5" // Use MUI's predefined variant for headings
            sx={{
              fontWeight: "bold",
              marginTop: "24px",
              marginBottom: "8px",
            }}
          >
            Our Values:
          </Typography>

          <Box
            component="ul"
            sx={{ paddingLeft: "20px", marginBottom: "16px" }}
          >
            <Typography
              component="li"
              sx={{ fontSize: "16px", marginBottom: "8px" }}
            >
              <strong>Quality:</strong> We source our products from trusted
              suppliers to ensure that every item meets our high standards of
              quality and freshness.
            </Typography>
            <Typography
              component="li"
              sx={{ fontSize: "16px", marginBottom: "8px" }}
            >
              <strong>Community:</strong> We believe in supporting local
              producers and fostering a sense of community. By choosing us,
              you’re not just enjoying great food; you’re also helping to uplift
              local businesses.
            </Typography>
            <Typography
              component="li"
              sx={{ fontSize: "16px", marginBottom: "8px" }}
            >
              <strong>Sustainability:</strong> We are committed to sustainable
              practices, minimizing our environmental impact, and promoting
              eco-friendly products.
            </Typography>
          </Box>

          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              marginTop: "24px",
              marginBottom: "8px",
            }}
          >
            Our Vision:
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              marginBottom: "16px",
            }}
          >
            We envision a world where food brings people together, fostering
            love and connection. Our platform is designed to make your shopping
            experience seamless and enjoyable, whether you're a home cook, a
            foodie, or someone looking to explore new tastes.
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
            }}
          >
            Thank you for choosing <strong>Eat & Love</strong>. We invite you to
            browse our selection, discover new flavors, and enjoy the journey of
            culinary exploration with us.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
