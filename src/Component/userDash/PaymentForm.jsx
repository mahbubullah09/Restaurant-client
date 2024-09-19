import { FaGift, FaHeadset, FaQuestionCircle } from "react-icons/fa";



import Swal from "sweetalert2";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContex } from "../../provider/AuthProvider";
import useCart from "../../hooks/useCart";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const PaymentForm = () => {

    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    // console.log(cart);

    const navigate = useNavigate()

    const axiosSecure = useAxiosSecure();
    
    // date function 
    
    const isoDate = new Date().toISOString();

    // Convert to a readable date and time format
    const formattedDate = new Date(isoDate).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,  // for 12-hour format with AM/PM
    });
    
    // console.log(formattedDate);

    const { user } = useContext(AuthContex)
    //   const axiosSecure = useAxiosSecure();
    const handlePayment = (e) => {
        e.preventDefault();
        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        let length = 16;
    
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }
    
        const bkashNumber = e.target.bkashNumber.value;
        const payment = {
            email: user?.email,
            Number: bkashNumber,
            price: totalPrice,
            date: formattedDate ,
            transactionId: result,
            productsInfo: cart
        };
    
        // console.log(payment);
    
        Swal.fire({
            title: "Are you sure?",
            text: `Your total bill is $${totalPrice}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, pay it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.post("/payments", payment)
                .then(res => {
                    // console.log(res);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Payment successful",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        refetch();
    
                        // After successful payment, delete items from cart
                        axiosSecure.delete(`/carts`, {
                            params: { userEmail: user?.email }
                        })
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                // toast.success("All items deleted from cart");
                                navigate('/dashboard/userhome') // Assuming you use refetch to update your cart after deletion
                            }
                        })
                        .catch(error => {
                            toast.error("something went wrong");
                            console.error(error);
                        });
                    }
                })
                .catch(err => console.error(err));
            }
        });
    };
    
    return (
        <div className="card w-96 mx-auto bg-base-200 shadow-xl mt-16">
            <div className="card-body p-0 text-center">
                <h2 className="text-5xl font-bold font-PtSerif my-4 text-center">
                    Bistro Boss{" "}
                </h2>
                <div className="flex gap-2">
                    <p className="flex flex-col items-center">
                        <FaHeadset className="text-4xl bg-black text-white p-2 rounded-full" />{" "}
                        Support
                    </p>
                    <p className="flex flex-col items-center">
                        <FaQuestionCircle className="text-4xl" /> FAQ
                    </p>
                    <p className="flex flex-col items-center">
                        <FaGift className="text-4xl bg-black text-white p-2 rounded-full" />{" "}
                        Offers
                    </p>
                </div>
                <div className="flex items-center bg-red-500 mt-2">
                    <p className="uppercase text-white text-center text-sm p-2">Cards</p>
                    <p className="uppercase text-white text-center bg-violet-500 text-sm p-2">
                        Mobile banking
                    </p>
                    <p className="uppercase text-white text-center text-sm p-2">
                        Net banking
                    </p>
                </div>
                <form onSubmit={handlePayment} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            disabled
                            defaultValue={user?.displayName}
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Bkash Number</span>
                        </label>
                        <input
                            type="number"
                            name="bkashNumber"
                            placeholder="Bkash Number"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        {(
                            cart.length > 0?
                            <button className="btn btn-primary w-full">
                                Pay ${totalPrice}/-
                            </button>
                            :
                            <p className="btn bg-slate-300 w-full">
                            Please add some products !!
                        </p>
                        )
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PaymentForm;
