import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleDonation = ({}) => {
  const { id } = useParams();
  // const navigate = useNavigate()
  const [donation, setDonation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDonation = async () => {
      try {
        const response = await axios.get(
          `/api/donation/getSingleDonation/${id}`
        );
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
          <p className="text-lg text-gray-600 mb-4 break-words">
            {donation.description}
          </p>

          <p className="text-lg font-semibold">
            <span className="text-gray-700">Status:</span>{" "}
            <span
              className={`px-3 py-1 rounded-lg ${
                donation?.status === "running"
                  ? "bg-green-200 text-green-800"
                  : donation?.status === "closed"
                  ? "bg-red-200 text-red-800"
                  : "bg-yellow-200 text-yellow-800"
              }`}
            >
              {donation.status}
            </span>
          </p>
          <Link to={`/dashboard/updateDonation/${donation._id}`}>
            <button
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
              disabled={donation.status === "closed"}
            >
              Update details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleDonation;
