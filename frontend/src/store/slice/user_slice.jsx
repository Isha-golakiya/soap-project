import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) 
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  }
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
