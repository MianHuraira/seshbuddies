// Redux store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import likePostReducer from './Slices/likePostSlice';
import authReducer from './Slices/AuthSlice';
import userTagReducer from './Slices/UserTag';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  likePost: likePostReducer,
  auth: persistReducer(persistConfig, authReducer),
  userTag: userTagReducer, 
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

const persistor = persistStore(store);

export { store, persistor };
