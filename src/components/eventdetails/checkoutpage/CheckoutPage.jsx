import React, { useState  } from "react";
import { useParams,useNavigate } from "react-router-dom";
import {
    ChevronLeft,
    ChevronRight,
    Check,
    ShieldCheck,
    User,
    Mail,
} from "lucide-react";

export default function CheckoutPage() {
    const [quantity, setQuantity] = useState(1);

    const ticketPrice = 15000;
    const serviceFee = 750;

    const total = quantity * (ticketPrice + serviceFee);
    const navigate = useNavigate();


    const { eventID } = useParams();
    return (
        <div className="min-h-screen bg-[#F3F5FA] px-4 py-10">
            <div className="max-w-6xl mx-auto">

                {/* Top Navigation */}
                <div className="items-center h-[72px] flex justify-between mb-16">

                    {/* Back */}
                    <button className=" items-center gap-[10px] flex w-[147px]  bg-[#E9EDF8] text-[#123499] px-4 py-2 rounded-full text-[24px] font-Lato font-bold">
                        <ChevronLeft size={18} />
                        Back
                    </button>
                    {/* Steps */}
                    <div className="flex  items-center gap-8">

                        {/* Step 1 */}
                        <div className=" flex items-center flex-col gap-y-[2px] ">
                            <div className="w-8 h-8 rounded-full bg-[#DFF4E4] flex items-center justify-center">
                                <Check size={16} className="text-green-600" />


                            </div>



                            <div className="text-center items-center">
                                <p className="text-[18px] font-medium text-green-700 ">
                                    Tickets
                                </p></div>


                        </div>
                        <div className="lg:flex w-[176px] hidden rounded-[10px] h-[4px]  bg-green-600" />

                        {/* Step 2 */}
                        <div className="items-center flex flex-col gap-y-[2px] ">
                            <div className="w-8 h-8 rounded-full bg-[#DFF4E4] flex items-center justify-center">
                                2


                            </div>



                            <div className="text-center items-center">
                                <p className="text-[18px] font-semibold leading-[26px] font-Roboto text-green-700 ">
                                    Details
                                </p></div>


                        </div>
                        <div className="w-[176px] hidden lg:flex rounded-[10px] h-[4px]  bg-[#333333]" />




                        {/* Step 3 */}

                        <div className=" flex flex-col items-center gap-y-[2px] ">
                            <div className="w-8 h-8 rounded-full bg-[#DFF4E4] flex items-center justify-center">
                                3


                            </div>



                            <div className="text-center items-center">
                                <p className="text-[18px] font-semibold leading-[26px] font-Roboto text-green-700 ">
                                    Payment
                                </p></div>


                        </div>






                    </div>

                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* LEFT SIDE */}
                    <div className="max-w-[442px] h-[503px]">
                        <h2 className="text-xl font-semibold text-gray-900">
                            Order Summary
                        </h2>

                        <p className="text-sm text-gray-400 mt-1 mb-10">
                            Renewed Conference · Sat 5 Apr
                        </p>

                        <div className="space-y-6">

                            {/* Event */}
                            <div className="flex justify-between border-b pb-4 text-sm">
                                <span className="font-roboto text-lg font-normal leading-7 text-center text-[#000000]">Event</span>

                                <span className="text-[#333333] font-roboto text-[18px] leading-[28px] font-normal text-center tracking-normal">
                                    Renewed Conference
                                </span>
                            </div>

                            {/* Quantity */}
                            <div className="flex justify-between items-center border-b pb-4 text-sm">
                                <span className="font-roboto text-lg font-normal leading-7 text-center text-[#000000]">Quantity</span>

                                <div className="flex items-center border rounded overflow-hidden">
                                    <button
                                        onClick={() =>
                                            setQuantity((prev) => Math.max(1, prev - 1))
                                        }
                                        className="px-3 py-1 bg-gray-50 hover:bg-gray-100"
                                    >
                                        -
                                    </button>

                                    <span className="px-4 text-[#123499]">{quantity}</span>

                                    <button
                                        onClick={() => setQuantity((prev) => prev + 1)}
                                        className="px-3 py-1 bg-gray-50 hover:bg-gray-100"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Ticket Type */}
                            <div className="flex justify-between border-b pb-4 text-sm">
                                <span className="font-roboto text-lg font-normal leading-7 text-center text-[#000000]">Ticket Type</span>

                                <span className="text-[#757575] font-roboto text-[14px] leading-[20px] font-medium text-center tracking-[0.5%]">
                                    General Admission
                                </span>
                            </div>

                            {/* Ticket Price */}
                            <div className="flex justify-between border-b pb-4 text-sm">
                                <span className="font-roboto text-lg font-normal leading-7 text-center text-[#000000]">Ticket Price</span>

                                <span className="text-gray-500">
                                    ₦{ticketPrice.toLocaleString()}
                                </span>
                            </div>

                            {/* Service Fee */}
                            <div className="flex justify-between border-b pb-4 text-sm">
                                <span className="font-roboto text-lg font-normal leading-7 text-center text-[#000000]">
                                    Service Fee (5%)
                                </span>

                                <span className="text-orange-500 font-semibold">
                                    ₦{serviceFee.toLocaleString()}
                                </span>
                            </div>

                            {/* Total */}
                            <div className="flex justify-between items-center pt-3">
                                <span className="uppercase font-roboto text-lg font-normal leading-7 text-center text-[#000000]">
                                    Total To Pay
                                </span>

                                <span className="text-3xl font-bold text-[#1D3FBF]">
                                    ₦{total.toLocaleString()}
                                </span>
                            </div>
                        </div>
                    </div>



                    {/* RIGHT SIDE */}
                    <div className="max-w-[592px]">
                        <h2 className="text-[24px] leading-[32px] font-Lato font-bold text-[#333333]">
                            Your details
                        </h2>

                        <p className="text-sm text-gray-400 mt-1 mb-8">
                            Where should we send your ticket?
                        </p>

                        {/* Ticket Preview */}
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h3 className="font-medium text-[#333333]">
                                    Renewed Conference
                                </h3>

                                <p className="text-xs text-gray-400 mt-1">
                                    1 × General Admission · Sat 5 Apr
                                </p>
                            </div>

                            <div className="text-right">
                                <h3 className="font-bold text-[#1D3FBF]">
                                    ₦15,750
                                </h3>

                                <button className="text-[10px] text-[#123499] font-semibold mt-1">
                                    EDIT
                                </button>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="space-y-5">

                            {/* Email */}
                            <div>
                                <label className="text-sm text-[#333333] block mb-2">
                                    Email Address
                                </label>

                                <div className="flex items-center border rounded-lg px-3 py-3 bg-white">
                                    <Mail size={18} className="text-gray-400 mr-2" />

                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full outline-none text-sm"
                                    />
                                </div>

                                <p className="text-[11px] text-[#FF8409] mt-1">
                                    Your ticket will be sent to this email
                                </p>
                            </div>

                            {/* Full Name */}
                            <div>
                                <label className="text-sm text-[#333333] block mb-2">
                                    Full Name
                                </label>

                                <div className="flex items-center border rounded-lg px-3 py-3 bg-white">
                                    <User size={18} className="text-gray-400 mr-2" />

                                    <input
                                        type="text"
                                        placeholder="John Adeyemi"
                                        className="w-full outline-none text-sm"
                                    />
                                </div>
                            </div>

                            {/* Phone */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-sm text-[#333333]">
                                        Phone Number
                                    </label>

                                    <span className="text-[11px] text-[#123499]">
                                        Optional
                                    </span>
                                </div>

                                <input
                                    type="tel"
                                    placeholder="+234 800 000 0000"
                                    className="w-full border rounded-lg px-4 py-3 text-sm outline-none"
                                />

                                <p className="text-[11px] text-[#FF8409] mt-1">
                                    For urgent event updates only
                                </p>
                            </div>

                            {/* Secure Payment */}
                            <div className="bg-[#EAF8EE] border border-green-500 rounded-lg p-4 flex items-start gap-3">
                                <ShieldCheck
                                    size={22}
                                    className="text-green-600 mt-0.5"
                                />

                                <div>
                                    <p className="text-sm font-semibold text-[#008000]">
                                        Secure payment powered by Paystack.
                                    </p>

                                    <p className="text-xs text-[#757575] mt-1">
                                        Your info is encrypted and never stored on our
                                        servers.
                                    </p>
                                </div>
                            </div>

                            {/* Checkbox */}
                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    className="mt-1"
                                />

                                <p className="text-xs text-gray-500 leading-5">
                                    I agree to the{" "}
                                    <span className="font-semibold text-[#123499]">
                                        Terms of Service
                                    </span>{" "}
                                    and{" "}
                                    <span className="font-semibold text-[#123499]">
                                        Refund Policy
                                    </span>
                                    . Understand tickets are non-transferable and event
                                    entry requires a valid QR code.
                                </p>
                            </div>

                            {/* Button */}
                            <button   onClick={()=>navigate(`/confirmAndPay/${eventID}`)} className="w-full bg-[#123499] hover:bg-[#1836a5] text-white py-4 rounded-lg flex items-center justify-center gap-2 font-medium transition">
                                Review & Pay
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}