import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { IoBagCheckOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAmount, new_order } from "../features/reducers/dashboardActions/AdminReducer";
import { empty_cart } from "../features/reducers/CartReducer";
import { useNavigate } from "react-router-dom";
import { showAlert } from "../features/reducers/AlertPopupReducer";

const Checkout = () => {


  // Varibales | Initialization
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checkoutData, setCheckoutData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postCode: "",
    country: "",
  });
  const adminDashboardData = useSelector(
    (state) => state.adminReducer.dashboard
  );
  const CartData = useSelector((state) => state.cart);
  let totalPrice = CartData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );


  // Functionalities

  // Edge Cases || If there'has no item in cart navigate to Shop
  useEffect(()=>{
    if (CartData.length==0) {
      navigate('/shop');
      dispatch(showAlert({message: 'Put your favorites in your Bag', type: 'success'}));
    }
  },[])


  // onChange Handler
  const onChangeHandler = (e) => {
    setCheckoutData({
      ...checkoutData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = () => {
    console.log(checkoutData);
    dispatch(new_order({
      customer: checkoutData.fullName,
      total: totalPrice,
    }))
    dispatch(addAmount({ totalEarning: totalPrice }));
    dispatch(empty_cart());
    totalPrice = 0;
    setCheckoutData({
      fullName: "",
      email: "",
      address: "",
      city: "",
      postCode: "",
      country: "",
    });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: "14px", md: "30px" },
        padding: { xs: "20px 10px 100px 10px", sm: "60px 20px 100px 20px" },
        color: "black",
      }}
    >
      {/* Billing Information Section */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h5" sx={{ fontFamily: "Ahsing, sans-serif" }}>
          Billing Information
        </Typography>
        <Divider sx={{ my: 2, backgroundColor: "var(--white-full)" }} />

        {/* Checkout Field */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <TextField
            label="Full Name"
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderColor: "var(--white-full)",
              },
            }}
            name="fullName"
            value={checkoutData.fullName}
            onChange={onChangeHandler}
          />
          <TextField
            label="Email Address"
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderColor: "var(--white-full)",
              },
            }}
            name="email"
            value={checkoutData.email}
            onChange={onChangeHandler}
          />
          <TextField
            label="Address"
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderColor: "var(--white-full)",
              },
            }}
            name="address"
            value={checkoutData.address}
            onChange={onChangeHandler}
          />
          <TextField
            label="City"
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderColor: "var(--white-full)",
              },
            }}
            name="city"
            value={checkoutData.city}
            onChange={onChangeHandler}
          />
          <TextField
            label="Postal Code"
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderColor: "var(--white-full)",
              },
            }}
            name="postCode"
            value={checkoutData.postCode}
            onChange={onChangeHandler}
          />
          <TextField
            label="Country"
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderColor: "var(--white-full)",
              },
            }}
            name="country"
            value={checkoutData.country}
            onChange={onChangeHandler}
          />
        </Box>
      </Box>

      {/* Order Summary Section */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h5" sx={{ fontFamily: "Ahsing, sans-serif" }}>
          Order Summary
        </Typography>
        <Divider sx={{ my: 2, backgroundColor: "var(--white-full)" }} />

        {/* Order Summary Items */}
        <List
          sx={{
            padding: "0px",
          }}
        >
          {CartData.length > 0 ? (
            <>
              {CartData.map((item) => (
                <ListItem
                  key={item.id}
                  sx={{
                    padding: "10px 0px",
                  }}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    style={{
                      height: "40px",
                      width: "40px",
                      objectFit: "cover",
                      borderRadius: "100px",
                      marginRight: "10px",
                    }}
                  />
                  <ListItemText
                    primary={`${item.name} x ${item.quantity}`}
                    secondary={`$${item.price.toFixed(2)} each`}
                  />
                  <Typography>
                    ${item.price.toFixed(2) * item.quantity}
                  </Typography>
                </ListItem>
              ))}


              <Divider sx={{ my: 2, backgroundColor: "var(--white-full)" }} />


              {/* Total Amount */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <Typography variant="h6">Total</Typography>
                <Typography variant="h6">${totalPrice.toFixed(2)}</Typography>
              </Box>

              {/* Checkout Button */}
              <Button
                variant="contained"
                startIcon={<IoBagCheckOutline />}
                fullWidth
                sx={{
                  backgroundColor: "var(--primary-color)",
                  borderRadius: "50px",
                  textTransform: "capitalize",
                  padding: "12px",
                  marginTop: "20px",
                }}
                onClick={onSubmitHandler}
              >
                Complete Purchase
              </Button>
            </>
          ) : (
            <Typography>No Items Found!</Typography>
          )}
        </List>
      </Box>
    </Box>
  );
};

export default Checkout;
