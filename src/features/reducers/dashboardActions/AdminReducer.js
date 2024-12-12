import { createSlice } from "@reduxjs/toolkit";

const initialStates = {
  dashboard: {
    totalEarning: 100,
    completedOrders: 10,
    totalCustomer: 10000,
    totalChefs: 20,
  },
  orders: [
    {
      id: 0,
      customer: "Alice Johnson",
      date: "2024-10-25",
      status: "Pending",
      total: "$120",
    },
    {
      id: 1,
      customer: "Bob Smith",
      date: "2024-10-24",
      status: "Shipped",
      total: "$85",
    },
    {
      id: 2,
      customer: "Charlie Davis",
      date: "2024-10-23",
      status: "Pending",
      total: "$100",
    },
    {
      id: 3,
      customer: "Dana Lee",
      date: "2024-10-22",
      status: "Delivered",
      total: "$200",
    },
    {
      id: 4,
      customer: "Eve Thompson",
      date: "2024-10-21",
      status: "Shipped",
      total: "$150",
    },
  ],
  chef: [
    {
      id: 1,
      name: "Chef Alex",
      email: "alex@example.com",
    },
    {
      id: 2,
      name: "Chef Maria",
      email: "maria@example.com",
    },
  ],
};

// Variables
const orderNumber = 5;
const chefNumber = 2;
const AdminReducer = createSlice({
  name: "Admin Reducer",
  initialState: initialStates,
  reducers: {
    addAmount: (state, action) => {
      state.dashboard.totalEarning =
        state.dashboard.totalEarning + action.payload.totalEarning;
    },
    new_order: (state, action) => {
      const currDate = new Date();
      const newOrder = {
        id: orderNumber + 1,
        customer: action.payload.customer,
        date: `${currDate.getFullYear()}-${currDate.getMonth()}-${currDate.getDate()}`,
        status: "Pending",
        total: `$${action.payload.total}`,
      };
      state.orders.push(newOrder);
    },
    new_user_added: (state, action) => {
      state.dashboard.totalCustomer = state.dashboard.totalCustomer + 1;
    },
    new_chef_added: (state, action) => {
      state.dashboard.totalChefs = state.dashboard.totalChefs + 1;
    },
    changed_status: (state, action) => {
      return state.orders.find((orderNo) => {
        if (orderNo.id == action.payload.id) {
          orderNo.status = action.payload.status;
        }
      });
    },
    new_chef: (state, action) => {
      const newChef = {
        id: chefNumber + 1,
        ...action.payload,
      };
      state.chef.push(newChef);
    },
    remove_chef: (state, action) => {
      state.chef = state.chef.filter((chef) => chef.id !== action.payload.id);
    },
  },
});

export const {
  addAmount,
  new_user_added,
  new_chef_added,
  new_order,
  changed_status,
  new_chef,
  remove_chef,
} = AdminReducer.actions;
export default AdminReducer.reducer;
