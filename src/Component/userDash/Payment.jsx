
import SharedTitele from "../SharedComponent/SharedTitle";
import PaymentForm from "./PaymentForm";


const Payment = () => {

    return (
        <div>

            <SharedTitele heading={'PAYMENT'}></SharedTitele>

            <div>

                <PaymentForm />


                {/* <Elements stripe={stripePromise}>
                    <CheckoutForm />
                   
                </Elements> */}

            </div>

        </div>
    );
};

export default Payment;