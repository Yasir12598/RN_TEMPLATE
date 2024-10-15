import { createSlice } from '@reduxjs/toolkit';
import { AuthSliceInitialStateType } from '../types';

const initialState: AuthSliceInitialStateType = {
    isOnboarding: true,
    loginUserData: undefined
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        changeOnboardingStatus: (state, action) => {
            state.isOnboarding = action.payload
        },
        changeLoginUserData: (state, action) => {
            state.loginUserData = action.payload
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addMatcher(
    //             loginApi.endpoints.LoginUser.matchFulfilled,
    //             (state, { payload }) => {
    //                 state.loginUserData = payload?.data
    //             }
    //         )
    // }
});

export const {
    changeOnboardingStatus,
    changeLoginUserData
} = authSlice.actions;

export default authSlice.reducer;