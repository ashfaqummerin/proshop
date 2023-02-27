import asyncHandler from "express-async-handler"
import Order from "../models/orderModel.js"

// @desc Create new order
// @route POST /api/orders
// @access Private

const addOrderItems = asyncHandler(async (req, res) => {
    try {
    const { orderItems, shippingAddress, paymentMethod, itemsPrice, shippingPrice, taxPrice, totalPrice } = req.body

    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error("No order items")
    } else {
        const order = new Order({ user: req.user._id, orderItems, shippingAddress, paymentMethod, itemsPrice, shippingPrice, taxPrice, totalPrice })
        const createdOrder = await order.save()
        res.status(201).json(createdOrder)
        }
    } catch (error) {
        console.log("Order Error:", error)
        res.status(400)
        throw new Error(error.message)
    }
})

export { addOrderItems }