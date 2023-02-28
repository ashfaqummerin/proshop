import { createSlice } from "@reduxjs/toolkit"

export const orderListMySlice = createSlice({
    name: "myOrderList",
    initialState: {
        orders: []
    },
    reducers: {
        ORDER_LIST_MY_REQUEST: (state) => {
            state.loading = true
        },
        ORDER_LIST_MY_SUCCESS: (state, action) => {
            state.loading = false
            state.orders = action.payload
        },
        ORDER_LIST_MY_FAIL: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export const { ORDER_LIST_MY_REQUEST, ORDER_LIST_MY_SUCCESS, ORDER_LIST_MY_FAIL } = orderListMySlice.actions
export default orderListMySlice.reducer