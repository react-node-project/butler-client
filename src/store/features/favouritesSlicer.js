import {
    createSlice
} from '@reduxjs/toolkit';

const initialState = {
    // check with 효형's restuarant card info
    favList: [{
        id: 17,
        shopName: "Bob's burgers",
        shopDescription: 'comfort food'
    }],
};

const FavListSlicer = createSlice({
    name: 'favList',
    initialState,
    reducers: {
        // addToFavList 
        addToFavList(state, action) {
            const selectedShop = {
                ...action.payload
            };
            const itemIndex = state.favList.findIndex((item) => item.id === action.payload.id);
            if (itemIndex < 0) {
                state.favList.push(selectedShop);
            }
            console.log('updated favList', favList);
        },
        // removeFromFavList
        removeFromFavList(state, action) {
            const updatedFavList = state.favList.filter((item) => item.id !== action.payload.id);
            state.favList = updatedFavList;
        }
    },
});

export const {
    addToFavList,
    removeFromFavList
} = FavListSlicer.actions;

export default FavListSlicer.reducer;