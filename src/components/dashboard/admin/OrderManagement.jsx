import React, { useState } from "react";
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
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changed_status } from "../../../features/reducers/dashboardActions/AdminReducer";

const OrderManagement = () => {
  // Initialization
  const orders = useSelector((state) => state.adminReducer.orders);
  const labelsTop = [
    {
      label: "Order ID",
    },

    {
      label: "Customer",
    },
    {
      label: "Date",
    },
    {
      label: "Status",
    },
    {
      label: "Total",
    },
    {
      label: "Actions",
    },
  ];
  const [showDropdown, setShowDropdown] = useState(null);
  const dispatch = useDispatch();

  return (
    <Box sx={{ padding: "24px 0px" }}>
      <TableContainer component={Paper} sx={{ borderRadius: "16px" }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f0f0f0" }}>
            <TableRow>
              {labelsTop.map((item, index) => (
                <TableCell key={index}>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "600",
                      letterSpacing: "-0.8px",
                    }}
                  >
                    {item.label}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <Box
                    sx={{
                      color:
                        order.status === "Pending"
                          ? "orange"
                          : order.status === "Shipped"
                          ? "blue"
                          : "green",
                      fontWeight: "500",
                    }}
                  >
                    {order.status}
                  </Box>
                </TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>
                  <Box sx={{ position: "relative" }}>
                    <Button
                      variant="outlined"
                      color="secondary"
                      size="small"
                      onClick={() =>
                        setShowDropdown((prevId) =>
                          prevId === order.id ? null : order.id
                        )
                      }
                    >
                      Changed Status
                    </Button>
                    {showDropdown === order.id && (
                      <Box
                        display="flex"
                        flexDirection="column"
                        position='absolute'
                        top="100%"
                        left={0}
                        bgcolor="white"
                        boxShadow={2}
                        mt={1}
                        borderRadius={1}
                        overflow="hidden"
                        zIndex={999}
                        padding="3px"
                      >
                        {/* Mark As Shipped */}
                        <Button
                          sx={{
                            justifyContent: "flex-start",
                            color: "primary.main",
                            fontSize: { xs: "10px", md: "14px" },
                          }}
                          onClick={() =>
                            dispatch(
                              changed_status({
                                id: order.id,
                                status: "Shipped",
                              })
                            )
                          }
                        >
                          Mark As Shipped
                        </Button>

                        {/* Mark as Delivered */}
                        <Button
                          sx={{
                            justifyContent: "flex-start",
                            color: "primary.main",
                            fontSize: { xs: "10px", md: "14px" },
                          }}
                          onClick={() =>
                            dispatch(
                              changed_status({
                                id: order.id,
                                status: "Delivered",
                              })
                            )
                          }
                        >
                          Mark As Delivered
                        </Button>
                      </Box>
                    )}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrderManagement;
