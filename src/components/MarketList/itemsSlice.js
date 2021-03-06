import { createSlice } from "@reduxjs/toolkit"
import { itemsForSale } from "../../mock-data/itemsForSale"

export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: itemsForSale,
    selectedItems: [],
    addedItems: [],
    total: 0,
    value: 0,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    selectId: (state, action) => {
      if (state.selectedItems.includes(action.payload))
        state.selectedItems = state.selectedItems.filter(
          (item) => item != action.payload
        )
      else state.selectedItems.push(action.payload)
    },
  },
})

export const {
  increment,
  decrement,
  incrementByAmount,
  selectId,
} = itemsSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectAvailableItems = (state) => state.items.items
export const selectSelectedItems = (state) => state.items.selectedItems

export default itemsSlice.reducer
