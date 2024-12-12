import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  TablePagination,
  Chip,
  Button,
} from "@mui/material";

const AttendenceReport = () => {
  const rows = [
    {
      chef: {
        name: "David Johnson",
        email: "david@gmail.com",
        avatar: "https://i.pravatar.cc/40",
      },
      kitchenNo: "001",
      date: "2024-09-18",
      status: "Present",
    },
    // Add more rows as needed
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: '3 0' }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Chef</TableCell>
              <TableCell>Kitchen No</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Avatar src={row.chef.avatar} alt={row.chef.name} />
                    <Box>
                      <Typography>{row.chef.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {row.chef.email}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>{row.kitchenNo}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={row.status === "Present" ? "success" : "error"}
                    variant="outlined"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <Button variant="outlined" color="secondary" size="small">
          Mark as Attendence
        </Button>
      </Box>
    </Box>
  );
};

export default AttendenceReport;
