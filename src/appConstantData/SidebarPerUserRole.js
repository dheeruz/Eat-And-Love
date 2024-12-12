export const SidebarPerUserRole = {
    admin: [
      { text: "Dashboard", icon: "DashboardCustomize", activeComponent: "Admin_Dashboard" },
      { text: "Order Management", icon: "<ListAltIcon />", activeComponent: "Admin_OrderManagement" },
      { text: "Add Inventory", icon: "<InventoryIcon />", activeComponent: "AddInventory" },
      { text: "Chef Management", icon: "<PeopleIcon />", activeComponent: "Admin_ChefManagement" },
      { text: "Profile", icon: "<AccountBoxIcon />", activeComponent: "Profile" },
    ],
    chef: [
      { text: "Stock Management", icon: "<InventoryIcon />", activeComponent: "Chef_StockManagement" },
      { text: "Suggest New Recipe", icon: "<ListAltIcon />", activeComponent: "Chef_SuggestNewRecipe" },
      { text: "Attendance History", icon: "<HistoryIcon />", activeComponent: "Chef_AttendanceHistory" },
      { text: "Profile", icon: "<AccountBoxIcon />", activeComponent: "Profile" },
    ],
    user: [
      { text: "Order History", icon: "<BiHistory />", activeComponent: "User_OrderHistory" },
      { text: "Profile", icon: "<AiFillProfile />", activeComponent: "Profile" },
    ],
  };
  