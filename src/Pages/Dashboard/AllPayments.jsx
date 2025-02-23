import axios from 'axios';
import  { useEffect, useState } from 'react';

const AllPayments = () => {
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchPayments = async () => {
        try {
          const response = await axios.get("/api/payment/getAllPayments");
          if (response.data.success) {
            setPayments(response.data.data);
          } else {
            setError("Failed to fetch payments");
          }
        } catch (err) {
          setError("Error fetching payments");
        } finally {
          setLoading(false);
        }
      };
  
      fetchPayments();
    }, []);
  
    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;
  
    return (
      <div className="overflow-x-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Payment Records</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Donator Email</th>
              <th className="border px-4 py-2">Phone</th>
              <th className="border px-4 py-2">Amount(Tk)</th>
              <th className="border px-4 py-2">Donation Title</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Image</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment._id} className="text-center border">
                <td className="border px-4 py-2">{payment.donatorEmail}</td>
                <td className="border px-4 py-2">{payment.phone}</td>
                <td className="border px-4 py-2">{payment.amount}</td>
                <td className="border px-4 py-2">{payment.donatedField.title}</td>
                <td className="border px-4 py-2">{payment.donatedField.category}</td>
                <td className="border px-4 py-2 capitalize text-black  rounded-lg" >
                  {payment.donatedField.status}
                </td>
                <td className="border px-4 py-2">
                  <img
                    src={payment.donatedField.image}
                    alt={payment.donatedField.title}
                    className="h-16 w-16 object-cover rounded"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default AllPayments;