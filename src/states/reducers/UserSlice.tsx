
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// ❌ RootState import HATA DEIN (circular dependency create karta hai)
// import { RootState } from '@states/store'
 
interface UserState {
    user: any;
    isVegMode: boolean;
}
 
const initialState: UserState = {
    user: {},
    isVegMode: false
};
 
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<object>) => {
            state.user = action.payload;
        },
        setVegMode: (state, action: PayloadAction<boolean>) => {
            state.isVegMode = action.payload;
        }
    }
});
 
export const { setUser, setVegMode } = userSlice.actions;
 
// ✅ Inline type use karein selector ke liye
export const selectuser = (state: { user: UserState }) => state.user.user;
 
export default userSlice.reducer;