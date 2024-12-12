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
import { useDispatch, useSelector } from "react-redux";
import { remove_chef } from "../../../features/reducers/dashboardActions/AdminReducer";

const ChefManagement = () => {
  const demoChefs = useSelector((state) => state.adminReducer.chef);
  const dispatch = useDispatch();

  return (
    <Box sx={{ marginTop: "32px" }}>
      <TableContainer
        component={Paper}
        sx={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Order No.</TableCell>
              <TableCell align="center">Chef Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoChefs.map((chef) => (
              <TableRow key={chef.id}>
                <TableCell align="left">{chef.id}</TableCell>
                <TableCell align="center">{chef.name}</TableCell>
                <TableCell align="center">{chef.email}</TableCell>
                <TableCell align="center">
                  <IconButton
                    color="error"
                    onClick={() => dispatch(remove_chef({ id: chef.id }))}
                  >
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

export default ChefManagement;
