import { configureStore } from "@reduxjs/toolkit"
import itemsReducer from "../components/MarketList/itemsSlice"

export default configureStore({
  reducer: {
    items: itemsReducer,
  },
})
