import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Language = 'EN' | 'KO';
export type Country = 'GBR' | 'KOR' | 'AUS';

type InitialState = {
  language: 'EN' | 'KO';
  country: 'GBR' | 'KOR' | 'AUS';
};

const initialState: InitialState = {
  country: 'GBR',
  language: 'EN',
};

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setCountry: (state, action: PayloadAction<Country>) => {
      state.country = action.payload;
    },
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
  },
});

export const { setCountry, setLanguage } = configSlice.actions;
export type ConfigState = ReturnType<typeof configSlice.reducer>;

export default configSlice.reducer;
