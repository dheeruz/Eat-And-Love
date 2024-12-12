import React, { useState } from "react";
import { Box, Button, IconButton, Typography, keyframes } from "@mui/material";
import { Close, Add, Remove } from "@mui/icons-material";
import { IoBagCheckOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  add_quantity,
  minus_quantity,
  remove_cart,
} from "../../features/reducers/CartReducer";

const slideInFromRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideOutToRight = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
  }
`;

const CartPopup = ({ setIsCartOpen }) => {
  const dispatch = useDispatch();
  const CartData = useSelector((state) => state.cart);
  const [isClose, setIsClose] = useState(true);

  const totalPrice = CartData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Cart Close
  const closeCartPopup = () => {
    setIsClose(false);
    setTimeout(() => {
      setIsCartOpen(false);
    }, 1000);
  };
  return (
    // Main Box
    <Box
      sx={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "100%",
        display: "flex",
        alignItems: "start",
        justifyContent: "end",
        backgroundColor: "#00000080",
        overflowY: "scroll",
        height: "100vh",
        padding: "0px",
        margin: "0px",
        animation: `${
          isClose ? slideInFromRight : slideOutToRight
        } 0.3s forwards`,
        zIndex: 999,
      }}
    >
      {/* Inner Box */}
      <Box
        sx={{
          width: { xs: "85%", sm: "30%" },
          minHeight: "100vh",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "var(--secondary-color)",
        }}
      >
        {/* Close Icon */}
        <IconButton
          onClick={closeCartPopup}
          sx={{
            alignSelf: "end",
          }}
        >
          <Close />
        </IconButton>

        {/* Main Title */}
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Ahsing, sans-serif",
            marginBottom: "20px",
            color: "var(--white-full)",
          }}
        >
          Cart
        </Typography>

        {/* Cart Items */}
        <Box>
          {CartData.length > 0 ? (
            <>
              {CartData.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "15px",
                    padding: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                  }}
                >
                  {/* Image And Product Name */}
                  <Box
                    sx={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      width="30px"
                      height="30px"
                      style={{
                        borderRadius: "50px",
                        objectFit: "cover",
                      }}
                    />
                    <Typography color="var(--white-full)">
                      {item.name}
                    </Typography>
                  </Box>

                  {/* Action Icons */}
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton
                      onClick={() => dispatch(minus_quantity({ id: item.id }))}
                    >
                      <Remove />
                    </IconButton>
                    <Typography color="var(--white-full)">
                      {item.quantity}
                    </Typography>
                    <IconButton
                      onClick={() => dispatch(add_quantity({ id: item.id }))}
                    >
                      <Add />
                    </IconButton>
                    <IconButton
                      onClick={() => dispatch(remove_cart({ id: item.id }))}
                    >
                      <Close />
                    </IconButton>
                  </Box>
                </Box>
              ))}
              {/* Checkout Button */}
              <Link
                to="/checkout"
                style={{
                  width: "100%",
                }}
              >
                <Button
                  variant="contained"
                  startIcon={<IoBagCheckOutline />}
                  sx={{
                    backgroundColor: "var(--primary-color)",
                    borderRadius: "100px",
                    textTransform: "capitalize",
                    padding: "6px 24px",
                    marginTop: "20px",
                    width: "100%",
                  }}
                  onClick={closeCartPopup}
                >
                  Checkout
                </Button>
              </Link>
            </>
          ) : (
            <Typography color="var(--white-full)">
              Your cart is empty.
            </Typography>
          )}
        </Box>

        {/* Total Amount Box */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Ahsing, sans-serif",
              color: "var(--white-full)",
            }}
          >
            Total
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "700",
              color: "var(--white-full)",
            }}
          >
            ${totalPrice}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CartPopup;
