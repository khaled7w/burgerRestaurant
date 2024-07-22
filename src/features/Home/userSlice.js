import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  address: '',
  phone: '',
};

const userSlice = createSlice({
  name: 'userName',
  initialState,
  reducers: {
    createUser(state, action) {
      //payload:userName
      state.userName = action.payload;
    },
    addDetails(state, action) {
      state.userName = action.payload.name;
      state.phone = action.payload.phone;
      state.address = action.payload.address;
    },
  },
});

export default userSlice.reducer;
export const { createUser, addDetails } = userSlice.actions;
