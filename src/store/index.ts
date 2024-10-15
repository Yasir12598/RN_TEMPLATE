import auth from '@modules/auth/store/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { api } from '@services/index';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { CombineReducerType } from './types';

export const appReducer = combineReducers({
  auth,
  [api.reducerPath]: api.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const rootReducer: CombineReducerType = (state, action) => {
  if (action?.type === 'USER_LOGOUT') {
    // return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
});

export default store;
