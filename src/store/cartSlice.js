import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: {}
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const item = action.payload
      const id = item.id
      if (!state.items[id]) {
        state.items[id] = { ...item, quantity: 1 }
      }
    },
    increment(state, action) {
      const id = action.payload
      if (state.items[id]) {
        state.items[id].quantity += 1
      }
    },
    decrement(state, action) {
      const id = action.payload
      if (state.items[id]) {
        state.items[id].quantity -= 1
        if (state.items[id].quantity <= 0) delete state.items[id]
      }
    },
    removeItem(state, action) {
      const id = action.payload
      if (state.items[id]) delete state.items[id]
    },
    clearCart(state) {
      state.items = {}
    }
  }
})

export const { addItem, increment, decrement, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
