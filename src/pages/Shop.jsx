import React, { useState } from "react";
import { InnerPageBanner, ProductCard } from "../components";
import { Container, Box, Typography, List } from "@mui/material";
import { useSelector } from "react-redux";

export default function Shop() {
  const ProductsData = useSelector((state)=> state.products)
  const [searchQuery, setSearchQuery] = useState("");

  // Filter Products by Category
  let filterProducts = ProductsData.filter((products) =>
    products.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  filterProducts = filterProducts.slice(0,6);

  const uniqueCategories = [
    ...new Map(
      ProductsData.map((item) => [
        item.category,
        { categoryName: item.category, categoryImage: item.imageUrl },
      ])
    ).values(),
  ];

  return (
    <>
      <Container maxWidth="xl">
        {/* Page Banner */}
        <InnerPageBanner mainHeading="Taste the Flavor" />
        {/* Shop Our Menus Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "24px", md: "32px" },
            padding: { xs: "30px 0px 100px 0px", md: "60px 0px 100px 0px" },
            alignItems: "flex-start",
            justifyContent: "space-evenly",
          }}
        >
          {/* Left Column */}
          <Box
            sx={{
              width: { xs: "100%", md: "15%" },
              padding: "10px",
              background: "#f9f9f9",
              borderRadius: "16px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "15px", md: "18px" },
                marginBottom: { xs: "4px", md: "6px" },
                fontWeight: "500",
              }}
            >
              Filter
            </Typography>

            {/* Search Bar */}
            <Box
              sx={{
                border: "1px solid #00000025",
                padding: { xs: "8px 14px", md: "8px 22px" },
                borderRadius: "4px",
              }}
            >
              <input
                type="search"
                name="search"
                id="searchQuery"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Zinger Roll..."
                style={{
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                  width: "100%",
                }}
              />
            </Box>

            {/* Categories List */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", md: "column" },
                overflowX: "scroll",
                gap: "8px",
                marginTop: "18px",
              }}
            >
              {uniqueCategories.map((item, index) => (
                <Box
                  sx={{
                    display: "flex",
                    gap: "4px",
                    alignItems: "center",
                    width: { xs: "48%", md: "100%" },
                  }}
                  key={index}
                >
                  <img
                    src={item.categoryImage}
                    alt={item.categoryName}
                    height="30px"
                    width="30px"
                    style={{
                      borderRadius: "100px",
                    }}
                  />
                  <Typography
                    variant="body2"
                    key={index}
                    sx={{
                      fontSize: { xs: "8px", md: "11px" },
                      fontWeight: "300",
                    }}
                  >
                    {item.categoryName}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Right Column */}
          <Box
            sx={{
              width: { xs: "100%", md: "85%" },
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                },
                gap: "8px",
              }}
            >
              {filterProducts.length > 0 ? (
                filterProducts.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))
              ) : (
                <Typography variant="body6">No Products Found</Typography>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
