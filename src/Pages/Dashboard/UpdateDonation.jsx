import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateDonation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    status: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDonation = async () => {
      try {
        const response = await axios.get(`/api/donation/getSingleDonation/${id}`);
        if (response.data.success) {
          setFormData(response.data.data);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`/api/donation/updateDonation/${id}`, formData);
      if (response.status === 200) {
        toast.success("Donation updated successfully!");
        navigate(`/dashboard/donationDetails/${id}`);
      }
    } catch (error) {
      toast.error("Failed to update donation. Please try again.");
    }
  };

  if (loading) return <p className="text-center text-lg font-semibold">Loading...</p>;
  if (error) return <p className="text-center text-lg text-red-500">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Update Donation</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded-md mb-4"
          required
        />

        <label className="block mb-2">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded-md mb-4"
          required
        ></textarea>

        <label className="block mb-2">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded-md mb-4"
        >
          <option value="food-aid">Food Aid</option>
          <option value="education">Education</option>
          <option value="healthcare">Healthcare</option>
          <option value="disaster-relief">Disaster Relief</option>
          <option value="orphan-care">Orphan Care</option>
          <option value="clean-water">Clean Water Initiative</option>
          <option value="animal-welfare">Animal Welfare</option>
          <option value="refugee-support">Refugee Support</option>
          <option value="environmental">Environmental Conservation</option>
          <option value="elderly-care">Elderly Care</option>
          <option value="poverty-alleviation">Poverty Alleviation</option>
        </select>

        <label className="block mb-2">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full p-2 border rounded-md mb-4"
        >
          <option value="running">Running</option>
          <option value="closed">Closed</option>
          <option value="upcoming">Upcoming</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateDonation;
