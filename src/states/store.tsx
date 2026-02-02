// import reduxStorage from "./storage";
// import rootReducer from "./rootReducer";
// import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
// import { configureStore } from "@reduxjs/toolkit";

// const persistConfig = {
//     key: 'root',
//     storage: reduxStorage,
//     blacklist: [],
//     whitelist: ['user','cart']
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REGISTER, REHYDRATE, PAUSE,PERSIST,PURGE]
//             }
//         })
// }) 

// export const persistor = persistStore(store)

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;


import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
 
// ✅ Simple store WITHOUT redux-persist
export const store = configureStore({
  reducer: rootReducer,
  // Middleware automatically configure ho jayega
});
 
// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;