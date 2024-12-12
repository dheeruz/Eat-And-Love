import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const OrderHistory = () => {
  const orders = [
    {
      id: 1,
      name: "Classic Cheeseburger",
      price: 100,
      quantity: 2,
      status: "Delivered",
    },
    {
      id: 2,
      name: "Pepperoni Pizza",
      price: 200,
      quantity: 1,
      status: "Processing",
    },
    {
      id: 3,
      name: "Grilled Chicken",
      price: 150,
      quantity: 3,
      status: "Delivered",
    },
  ];

  return (
    <Paper sx={{ padding: "24px", borderRadius: "16px" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.name}</TableCell>
                <TableCell>${order.price}</TableCell>
                <TableCell>{order.quantity}</TableCell>
                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default OrderHistory;
