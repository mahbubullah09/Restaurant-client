import { Elements } from "@stripe/react-stripe-js";
import SharedTitele from "../SharedComponent/SharedTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment)
const Payment = () => {

    return (
        <div>

            <SharedTitele heading={'PAYMENT'}></SharedTitele>

            <div>
                <Elements stripe={stripePromise}>
                    {/* <CheckoutForm /> */}
                    <PaymentForm/>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;