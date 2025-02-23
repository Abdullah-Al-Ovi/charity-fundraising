import React, { useEffect, useState } from 'react';
import SingleDonation from './SingleDonation';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CategoryWiseDonation from '../CategoryWiseDonations/CategoryWiseDonation';

const AllDonations = () => {
   
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchDonations = async () => {
        try {
          const response = await axios.get(`/api/donation/getAllDonations`);
          if (response.data.success) {
            setDonations(response.data.data);
          } else {
            setError("No donations found.");
          }
        } catch (err) {
          setError("Failed to fetch donations.");
        } finally {
          setLoading(false);
        }
      };
  
      fetchDonations();
    }, []);
  
    if (loading)
      return <p className="text-center text-lg font-semibold">Loading...</p>;
    if (error) return <p className="text-center text-lg text-red-500">{error}</p>;
  
    return (
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        {/* <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          {category.charAt(0).toUpperCase() + category.slice(1)} Donations
        </h1> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {donations.map((donation) => (
            <Link key={donation._id} to={`/dashboard/donationDetails/${donation._id}`}>
              <CategoryWiseDonation donation={donation} />
            </Link>
          ))}
        </div>
      </div>
    );
};

export default AllDonations;