import { createSlice } from '@reduxjs/toolkit'

// 전역 상태값 설정 ex) isSidebar...
const initialState = {
  isLoading: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = !state.isLoading
    }
  },
})

export const { setIsLoading } = appSlice.actions

export default appSlice.reducer