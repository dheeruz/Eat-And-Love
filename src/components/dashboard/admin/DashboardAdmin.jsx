import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ProductCard from "../../ProductCard";

const DashboardAdmin = () => {
  const ourStocks = useSelector((state) => state.products);
  const adminDashboardData = useSelector(
    (state) => state.adminReducer.dashboard
  );
  const limitedProducts = ourStocks.slice(0, 6);

  const OverView = [
    {
      Title: "Total Earning",
      Amount: `$${adminDashboardData.totalEarning}`,
      Icon: "https://cdn-icons-png.flaticon.com/512/5501/5501352.png",
    },
    {
      Title: "Completed Orders",
      Amount: adminDashboardData.completedOrders,
      Icon: "https://cdn-icons-png.flaticon.com/128/1632/1632670.png",
    },
    {
      Title: "Total Customers",
      Amount: `${adminDashboardData.totalCustomer}+`,
      Icon: "https://cdn-icons-png.flaticon.com/128/1379/1379505.png",
    },
    {
      Title: "Total Chefs",
      Amount: adminDashboardData.totalChefs,
      Icon: "https://cdn-icons-png.flaticon.com/128/1830/1830878.png",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "42px",
      }}
    >
      {/* Our Status */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Typography
        component='span'
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            letterSpacing: "-0.6px",
            textTransform: "uppercase",
          }}
        >
          Overview
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
            gap: "16px",
          }}
        >
          {OverView.map((items, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: { xs: "8px", md: "16px" },
                backgroundColor: "#ffffff",
                borderRadius: "12px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Ahsing, sans-serif",
                }}
              >
                {items.Title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "end",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    letterSpacing: "-0.8px",
                  }}
                >
                  {items.Amount}
                </Typography>
                <img
                  src={items.Icon}
                  alt={items.Title}
                  height="36px"
                  width="36px"
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Products */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            letterSpacing: "-0.6px",
            textTransform: "uppercase",
          }}
        >
          Our Stocks
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
            gap: "8px",
          }}
        >
          {limitedProducts.length > 0 ? (
            limitedProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          ) : (
            <Typography variant="body6">No Products Found</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardAdmin;
