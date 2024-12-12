import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { add_cart } from "../features/reducers/CartReducer";
import { showAlert } from "../features/reducers/AlertPopupReducer";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        textAlign: "center",
        width: "100%",
      }}
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
        className="product-image"
      />
      <Box
        sx={{
          padding: { xs: "10px", md: "16px" },
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: { xs: "1.2rem", md: "1.4rem" },
            letterSpacing: "-0.6px",
          }}
        >
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "0.6rem", md: "0.7rem" },
            letterSpacing: "-0.4px",
          }}
          color="text.secondary"
        >
          {product.description}
        </Typography>
        <Button
          variant="contained"
          sx={{
            fontSize: "14px",
            fontWeight: "300",
            backgroundColor: "var(--secondary-color)",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
          endIcon={<CiShoppingCart />}
          onClick={() => {
            dispatch(
              add_cart({
                name: product.name,
                imageUrl: product.imageUrl,
                price: product.price,
              })
            );
            dispatch(
              showAlert({
                message: "Added Items to Cart Successfully",
                type: "success",
              })
            );
          }}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
