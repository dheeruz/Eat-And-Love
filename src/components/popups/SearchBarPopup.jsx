import { SearchRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  keyframes,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

const SearchBarPopup = ({ setIsOpenSearch }) => {
  const ProductsData = useSelector((state) => state.products);
  const [searchQuery, setSearchQuery] = useState("");
  const [isClosing, setIsClosing] = useState(false);

  //   Search Bar Handler
  const SearchBarHandler = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpenSearch(false);
    }, 300);
    setSearchQuery("");
  };

  // Animation Here
  const slideInFromUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
    100% {
    opacity: 1;
    transform: translateY(0%);
    }
  `;

  const slideInFromDown = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0%);
  }
    100% {
    opacity: 0;
    transform: translateY(-100%);
    }
  `;

  // Filter Product
  const filterProductByQuery = ProductsData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Box
        sx={{
          height: { xs: "100vh", md: "80vh" },
          width: "100%",
          padding: "30px 0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
          justifyContent: "start",
          position: "fixed",
          top: 0,
          left: 0,
          overflow: "hidden",
          animation: `${
            isClosing ? slideInFromDown : slideInFromUp
          } 0.3s ease-in-out`,
          backgroundColor: "var(--light-grey)",
          zIndex: "999",
        }}
      >
        {/* Search Bar */}
        <Box
          sx={{
            width: { xs: "80%", md: "100%" },
            display: "flex",
            alignItems: "center",
            padding: { xs: "12px", md: "30px" },
            maxWidth: "900px",
            backgroundColor: "white",
            borderRadius: "100px",
          }}
        >
          <input
            type="text"
            name="search_filter"
            id="search_filter"
            placeholder="Search What You Want ...."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              backgroundColor: "transparent",
              outline: 0,
              border: 0,
              fontFamily: "Poppins",
              fontSize: { xs: "12px", md: "16px" },
              textTransform: "uppercase",
              fontWeight: "500",
            }}
          />
          <Button
            variant="contained"
            startIcon={<SearchRounded sx={{ marginRight: "-10px" }} />}
            onClick={SearchBarHandler}
            sx={{
              backgroundColor: "var(--secondary-color)",
              borderRadius: { xs: "50px", md: "20px" },
              textTransform: "capitalize",
              display: "flex",
              fontSize: { xs: "0px", md: "16px" },
              gap: "0px",
              minWidth: { xs: "18px", md: "18px" },
              padding: { xs: "6px 10px", md: "10px 14px" },
            }}
          ></Button>
        </Box>

        {/* Product Bar */}
        <Box
          sx={{
            width: { xs: "80%", md: "100%" },
            display: "flex",
            gap: "16px",
            alignItems: "start",
            padding: { xs: "16px", md: "30px" },
            maxWidth: "900px",
            backgroundColor: "white",
            borderRadius: "30px",
            overflowY: "scroll",
          }}
        >
          <List
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: '8px',
            }}
          >
            {filterProductByQuery.length > 0 ? (
              filterProductByQuery.map((item, index) => (
                <ProductCard key={index} product={item} />
              ))
            ) : (
              <Typography
                variant="body1"
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "black",
                }}
              >
                No Products Found!
              </Typography>
            )}
          </List>
        </Box>
      </Box>
    </>
  );
};

export default SearchBarPopup;
