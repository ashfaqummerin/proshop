import { Button, Form, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import { useState } from "react";
import { CART_SAVE_PAYMENT_METHOD } from "../redux/cartSlice"

const PaymentScreen = () => {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const navigate = useNavigate()
    const dispatch = useDispatch()

    if (!shippingAddress) {
        navigate("/shipping")
    }

    const [paymentMethod, setPaymentMethod] = useState("PayPal")

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(CART_SAVE_PAYMENT_METHOD(paymentMethod))
        navigate("/placeorder")
    }
    return (<FormContainer>
        <CheckoutSteps step1 step2 step3 />
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group>
                <Form.Label as="legend">Select Method</Form.Label>

                <Col>
                    <Form.Check
                        type="radio"
                        label="PayPal or Credit Card"
                        id="PayPal" name="paymentMethod"
                        value="PayPal"
                        checked
                        onChange={e => setPaymentMethod(e.target.value)}>
                    </Form.Check>
                    <Form.Check
                        type="radio"
                        label="Stripe"
                        id="Stripe" name="paymentMethod"
                        value="Stripe"

                        onChange={e => setPaymentMethod(e.target.value)}>
                    </Form.Check>
                </Col>
            </Form.Group>
            <Button className="my-3" type="submit" variant="primary">Continue</Button>
        </Form>
    </FormContainer>);
}

export default PaymentScreen;