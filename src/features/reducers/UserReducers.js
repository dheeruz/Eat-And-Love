import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../../appConstantData/UserData";

const initialStates = {
  userData: UserData,
  loggedInStatus: {
    isLoggedIn: false,
    currentUser: null,
    userRole: null,
  },
};

const UserReducers = createSlice({
  name: "userReducers",
  initialState: initialStates,
  reducers: {
    add_user: (state, action) => {
      const newUser = {
        id: Math.random(),
        ...action.payload,
      };
      state.userData.push(newUser);
    },
    login_user: (state, action) => {
      const { username, password } = action.payload;
      const foundUser = state.userData.find(
        (user) => user.username === username && user.password === password
      );

      if (foundUser) {
        state.loggedInStatus = {
          isLoggedIn: true,
          currentUser: foundUser,
          userRole: foundUser.role,
        };
      }
    },
    logout_user: (state) => {
      state.loggedInStatus = {
        isLoggedIn: false,
        currentUser: null,
        userRole: null,
      };
    },
  },
});

export const { add_user, login_user, logout_user } = UserReducers.actions;
export default UserReducers.reducer;
