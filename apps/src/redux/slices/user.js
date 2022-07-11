import { createSlice } from "@reduxjs/toolkit";

const dummyUser = [
  {
    id: 1,
    name: {
      first: "Aditya",
      last: "Pratama",
    },
    age: 25,
    gender: "male",
  },
  {
    id: 2,
    name: {
      first: "Mudita",
      last: "Wijaya",
    },
    age: 30,
    gender: "male",
  },
];

export const user = createSlice({
  name: "user",
  initialState: {
    value: dummyUser, // default state
  },
  reducers: {
    // reducers action
    setUser: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { setUser } = user.actions;
export default user.reducer;
