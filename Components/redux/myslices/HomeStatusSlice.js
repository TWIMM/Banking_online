import {createSlice} from '@reduxjs/toolkit'; 


export const HomeStatusSlice = createSlice({
    name:'HomeStatusState' , 

    initialState:{
        value:'Transactions',
    }, 

    reducers:{
        setTransac:(state) => {
            state.value = 'Transactions';
        }, 
        setCartes:(state) => {
            state.value = 'Cartes';
        }, 
        setOpe:(state) => {
            state.value = 'Opérations';
        }, 
    }
}); 


export const {setCartes , setOpe , setTransac} = HomeStatusSlice.actions
export default HomeStatusSlice.reducer; 
export const getHomeStatusState = state => state.HomeStatusState.value;