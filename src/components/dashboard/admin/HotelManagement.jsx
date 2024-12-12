import React from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  IconButton,
  Paper,
  Box,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";

const HotelManagement = () => {
  const demoOwners = [
    {
      id: 1,
      name: "John Doe",
      hotelName: "Doe’s Inn",
      email: "johndoe@example.com",
      imageUrl: "https://via.placeholder.com/60",
    },
    {
      id: 2,
      name: "Jane Smith",
      hotelName: "Smith Suites",
      email: "janesmith@example.com",
      imageUrl: "https://via.placeholder.com/60",
    },
  ];

  return (
    <Box sx={{ marginTop: "32px" }}>
      <TableContainer
        component={Paper}
        sx={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Profile</TableCell>
              <TableCell align="center">Owner Name</TableCell>
              <TableCell align="center">Hotel Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoOwners.map((owner) => (
              <TableRow key={owner.id}>
                <TableCell align="center">
                  <Avatar src={owner.imageUrl} alt={owner.name} />
                </TableCell>
                <TableCell align="center">{owner.name}</TableCell>
                <TableCell align="center">{owner.hotelName}</TableCell>
                <TableCell align="center">{owner.email}</TableCell>
                <TableCell align="center">
                  <IconButton color="success">
                    <CheckCircleIcon />
                  </IconButton>
                  <IconButton color="warning">
                    <CancelIcon />
                  </IconButton>
                  <IconButton color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default HotelManagement;
