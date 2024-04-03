import { Elements } from "@stripe/react-stripe-js";
import SharedTitele from "../SharedComponent/SharedTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment)
const Payment = () => {

    return (
        <div>

            <SharedTitele heading={'PAYMENT'}></SharedTitele>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>

        </div>
    );
};

export default Payment;