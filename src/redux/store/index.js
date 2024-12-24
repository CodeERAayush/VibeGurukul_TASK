import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'; // For React Native
import EnrolledCourseReducer from '../slices/EnrolledCoursesSlice'; // Adjust the path as needed
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const persistConfig = {
  key: 'enrolledCourses',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, EnrolledCourseReducer);

export const store = configureStore({
  reducer: {
    EnrolledCourses: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
