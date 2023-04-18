import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Cocktails, Drink, initialState } from "./type";

export const fetchCocktails = createAsyncThunk("cocktails/fetchCocktails", async () => {
    return fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    .then((res) => res.json())
})



const cocktailSlice = createSlice({
    name: "cockatail",
    initialState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(
            fetchCocktails.pending,
            (state) => {
              state.loading =  true
            }
          );
          builder.addCase(
              fetchCocktails.fulfilled,
              (state, action: PayloadAction<Cocktails> ) => {
                state.cocktails =  action.payload.drinks
                state.loading = false
              }
          );
          builder.addCase(
              fetchCocktails.rejected,
              (state, action: PayloadAction<any> ) => {
                  state.loading = false;
                  state.error = action.payload
              }
          );
    },
})

export default cocktailSlice.reducer