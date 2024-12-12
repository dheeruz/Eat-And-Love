import { Box, Typography } from "@mui/material";
import React from "react";
import ProductCard from "../ProductCard";
import { ProductsData } from "../../appConstantData/ProductsData";
import { useSelector } from "react-redux";

const LatestProducts = () => {
  const styleGrid = {
    display: "flex",
    flexWrap: "wrap",
    alignItem: "center",
    justifyContent: "space-between",
    gap: "16px",
  };

  const OurProducts = useSelector((state) => state.products);
  return (
    <Box
      sx={{
        padding: { xs: "40px 10px 100px 10px", md: "60px 20px 100px 20px" },
      }}
    >
      <Typography
        variant="h2"
        sx={{ textAlign: "center", marginBottom: "20px" }}
      >
        Our Latest Products
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)'},
          gap: '8px',
        }}
      >
        {OurProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Box>
    </Box>
  );
};

export default LatestProducts;
