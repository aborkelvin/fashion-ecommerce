import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import authReducer from './slices/authSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
//import { persistReducer, persistStore } from 'redux-persist';


const persistConfig = {
    key: 'root', 
    storage, 
};


const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  
  // To prevent warnings with redux-persist
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
        serializableCheck: false, 
  }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
