import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AddDonation = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    status: "running",
  });

  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle text input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("category", formData.category);
      formDataToSend.append("status", formData.status);
      if (file) {
        formDataToSend.append("image", file);
      }

      const response = await axios.post(
        "/api/donation/addDonationDetails",
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.status === 201) {
        toast.success("Donation added successfully!");
        setFormData({
          title: "",
          description: "",
          category: "",
          status: "running",
        });
        setFile(null);
      }
    } catch (error) {
      toast.error("Failed to add donation.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">
        Add a New Donation
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <label className="block text-gray-700 font-semibold">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md"
        />

        {/* Description */}
        <label className="block text-gray-700 font-semibold">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md"
        ></textarea>

        {/* Category (Dropdown) */}
        <label className="block text-gray-700 font-semibold">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="select select-info w-full"
        >
          <option value="" disabled>
            Select category
          </option>
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

        {/* Status (Dropdown) */}
        <label className="block text-gray-700 font-semibold">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
          className="select select-info w-full"
        >
          <option value="running">Running</option>
          <option value="closed">Closed</option>
          <option value="upcoming">Upcoming</option>
        </select>

        {/* File Upload */}
        <label className="block text-gray-700 font-semibold">
          Upload Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full p-2 border rounded-md"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Add Donation"}
        </button>
      </form>
    </div>
  );
};

export default AddDonation;
