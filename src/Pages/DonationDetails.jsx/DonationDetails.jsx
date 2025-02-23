import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast';

const DonationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [donation, setDonation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    phone: "",
    donatorEmail: "",
    amount: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentMessage, setPaymentMessage] = useState("");

  useEffect(() => {
    const fetchDonation = async () => {
      try {
        const response = await axios.get(`/api/donation/getSingleDonation/${id}`);
        if (response.data.success) {
          setDonation(response.data.data);
        } else {
          setError("Donation not found.");
        }
      } catch (err) {
        setError("Failed to fetch donation details.");
      } finally {
        setLoading(false);
      }
    };

    fetchDonation();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setPaymentMessage("");
  
    try {
      const response = await axios.post("/api/payment/addPayment", {
        ...formData,
        donatedField: id, // Attaching the donation ID
      });
  
      if (response.status === 201) {
        console.log("pay succ");
        toast.success("Payment successful!");
        setFormData({ phone: "", donatorEmail: "", amount: "" }); 
  
        // Close the modal
        document.getElementById("donation_modal").close();
  
        // Navigate to refresh the page or update UI
        // navigate(`/donations/${id}`);
      }
    } catch (error) {
      toast.error("Payment failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  if (loading)
    return <p className="text-center text-lg font-semibold">Loading...</p>;
  if (error) return <p className="text-center text-lg text-red-500">{error}</p>;

  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Image */}
        <div>
          <img
            src={donation.image}
            alt={donation.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Details */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {donation.title}
          </h1>
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            {donation.category}
          </h1>
          <p className="text-lg text-gray-600 mb-4 break-words">{donation.description}</p>

          <p className="text-lg font-semibold">
            <span className="text-gray-700">Status:</span>{" "}
            <span
              className={`px-3 py-1 rounded-lg ${donation?.status === 'running' ? 'bg-green-200 text-green-800' : donation?.status === 'closed' ? 'bg-red-200 text-red-800' : 'bg-yellow-200 text-yellow-800'}`}
            >
              {donation.status}
            </span>
          </p>

          {/* Donate Now Button */}
          <button
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            disabled={donation.status === "closed" || donation.status === "upcoming" || isSubmitting}
            onClick={() => document.getElementById("donation_modal").showModal()}
          >
            Donate Now
          </button>
        </div>
      </div>

      {/* Payment Modal */}
      <dialog id="donation_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Make a Donation</h3>
          <p className="py-2 text-gray-600">
            Support this cause by making a donation.
          </p>

          <form onSubmit={handlePaymentSubmit} className="mt-4">
            <label className="block mb-2 text-gray-700 font-semibold">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />

            <label className="block mt-4 mb-2 text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              name="donatorEmail"
              value={formData.donatorEmail}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />

            <label className="block mt-4 mb-2 text-gray-700 font-semibold">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />

            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg w-full hover:bg-green-600 transition"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Donate"}
            </button>
          </form>

          {/* Payment status message */}
          {/* {paymentMessage && (
            <p className="mt-4 text-center text-lg font-semibold text-gray-800">
              {paymentMessage}
            </p>
          )} */}
        </div>

        <form method="dialog" className="modal-backdrop">
          <button className="text-gray-500 hover:text-gray-700">Close</button>
        </form>
      </dialog>
    </div>
  );
};

export default DonationDetails;
