import React from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

const StockManagement = () => {
  const stockData = [
    { img: "https://via.placeholder.com/50", name: "Tomato", price: "$1.00", stock: "20", category: "Vegetables", discount: "10%" },
    { img: "https://via.placeholder.com/50", name: "Potato", price: "$0.80", stock: "50", category: "Vegetables", discount: "5%" },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Discount</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stockData.map((item, index) => (
            <TableRow key={index}>
              <TableCell><img src={item.img} alt={item.name} width="50" /></TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.stock}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.discount}</TableCell>
              <TableCell>
                <Button variant="contained" color="warning">Low Stock Notification</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StockManagement;
