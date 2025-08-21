"use client"
import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
type FormData = {
  name: string;
  email: string;
  mobile: string;
  interest: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;
function Contact() {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    interest: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^([6-9][0-9]{9})$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit Indian mobile number";
    }
    if (!formData.interest) newErrors.interest = "Please select an option";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully", formData);
      alert("Thank you! Your details have been submitted.");
      setFormData({ name: "", email: "", mobile: "", interest: "", message: "" });
      setErrors({});
    }
  };
  return (
    <>
    <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-10 py-12">
        {/* Contact Form */}
        <div className="rounded-2xl bg-white p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
              {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <input
                type="text"
                name="mobile"
                
                value={formData.mobile}
                onChange={handleChange}
                placeholder="10-digit mobile"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
              {errors.mobile && <p className="text-sm text-red-600 mt-1">{errors.mobile}</p>}
            </div>

            {/* Interested In */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Interested In</label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="">Select an option</option>
                <option value="personal-loan">Personal Loan</option>
                <option value="home-loan">Home Loan</option>
                <option value="car-loan">Car Loan</option>
                <option value="credit-card">Credit Card</option>
                <option value="business-loan">Business Loan</option>
              </select>
              {errors.interest && <p className="text-sm text-red-600 mt-1">{errors.interest}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
               
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              ></textarea>
              {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-md bg-financeBlue px-4 py-2 text-white font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="rounded-2xl bg-gradient-to-br from-financeBlue to-financeGreen p-8 text-white shadow-md flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <ul className="space-y-6">
            <li className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-yellow-300 text-3xl bg-white/30 p-2 rounded-md" />
              <span>[Your Address Here, City, State, PIN, India]</span>
            </li>
            <li className="flex items-center gap-4">
              <FaPhoneAlt className="text-yellow-300 text-3xl bg-white/30 p-2 rounded-md" />
              <a href="tel:+919999999999" className="hover:underline">+91 99999 99999</a>
            </li>
            <li className="flex items-center gap-4">
              <FaEnvelope className="text-yellow-300 text-3xl bg-white/30 p-2 rounded-md" />
              <a href="mailto:info@theloanwise.com" className="hover:underline">info@theloanwise.com</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Contact