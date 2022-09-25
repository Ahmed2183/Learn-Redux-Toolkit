import {configureStore} from '@reduxjs/toolkit';
import userServices from './services/userServices';
import userReducer from './reducer/userReducer';

const Store = configureStore({
    reducer: {
        // [userServices.reducerPath]: userServices.reducer,

        "userReducer": userReducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
      ])
})

export default Store;
