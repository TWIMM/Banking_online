import {configureStore} from '@reduxjs/toolkit'; 
import HomeReducer from '../myslices/HomeStatusSlice';

export default configureStore({
    reducer:{
        HomeStatusState:HomeReducer,
    }
})