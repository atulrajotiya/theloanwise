'use client';

import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    loanType: 'Personal Loans',
    loanAmount: ''
  });

  const slides = [
    {
      title: "Home Loans",
      subtitle: "Turn your dream home into reality",
      description: "Competitive rates starting from 6.5% APR"
    },
    {
      title: "Personal Loans",
      subtitle: "Quick approval, flexible terms",
      description: "Get up to ₹50 Lakhs in 24 hours"
    },
    {
      title: "Business Loans",
      subtitle: "Fuel your business growth",
      description: "Customized solutions for entrepreneurs"
    },
    {
      title: "Education Loans",
      subtitle: "Invest in your future",
      description: "Study now, pay later with ease"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.loanAmount) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (formData.phone.length !== 10) {
      toast.error('Please enter a valid 10-digit mobile number');
      return;
    }

    const loadingToast = toast.loading('Submitting your request...');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      toast.success('Lead submitted successfully!', { id: loadingToast });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        loanType: 'Personal Loans',
        loanAmount: '',
      });
    } catch (error: any) {
      toast.error(error.message, { id: loadingToast });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-24 min-h-screen flex items-center px-4 py-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Side - Text Slider */}
            <div className="space-y-8">
              <div className="relative h-96 overflow-hidden">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide
                      ? 'opacity-100 translate-x-0'
                      : index < currentSlide
                        ? 'opacity-0 -translate-x-full'
                        : 'opacity-0 translate-x-full'
                      }`}
                  >
                    <div className="space-y-6">
                      <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                        <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                          {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                        </span>
                      </div>
                      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                        {slide.subtitle}
                      </p>
                      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slider Indicators */}
              <div className="flex gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${index === currentSlide
                      ? 'w-12 bg-gradient-to-r from-blue-600 to-purple-600'
                      : 'w-8 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Side - Lead Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100 dark:border-gray-700">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Get Started Today
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Fill out the form and we'll get back to you within 24 hours
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 font-semibold border-r border-gray-300 dark:border-gray-600 pr-3">
                        +91
                      </span>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                          setFormData(prev => ({ ...prev, phone: value }));
                        }}
                        required
                        className="w-full pl-16 pr-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors"
                        placeholder="98765 43210"
                      />
                    </div>
                  </div>

                  {/* Loan Type Dropdown */}
                  <div>
                    <label htmlFor="loanType" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Loan Type
                    </label>
                    <select
                      id="loanType"
                      name="loanType"
                      value={formData.loanType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select a loan type</option>
                      <option value="Home Loans">Home Loan</option>
                      <option value="Personal Loans">Personal Loan</option>
                      <option value="Business Loans">Business Loan</option>
                      <option value="Education Loans">Education Loan</option>
                      <option value="Auto Loans">Auto Loan</option>
                      <option value="Debt Consolidation">Debt Consolidation</option>
                    </select>
                  </div>

                  {/* Loan Amount Field */}
                  <div>
                    <label htmlFor="loanAmount" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Loan Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 font-semibold">
                        ₹
                      </span>
                      <input
                        type="number"
                        id="loanAmount"
                        name="loanAmount"
                        value={formData.loanAmount}
                        onChange={handleChange}
                        required
                        min="1000"
                        className="w-full pl-8 pr-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                        placeholder="5,00,000"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-200 text-lg"
                  >
                    Submit Application
                  </button>

                  <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                    By submitting, you agree to our Terms of Service and Privacy Policy
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Side - Animated Pattern */}
            <div className="relative h-[600px] hidden lg:block">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950/20 dark:to-purple-950/20 rounded-3xl"></div>

              {/* Animated geometric shapes */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                {/* Circle 1 */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-60 animate-float"></div>

                {/* Circle 2 */}
                <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-50 animate-float-delayed"></div>

                {/* Square 1 */}
                <div className="absolute bottom-32 left-20 w-28 h-28 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl opacity-40 animate-spin-slow"></div>

                {/* Circle 3 */}
                <div className="absolute bottom-20 right-16 w-36 h-36 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-30 animate-float"></div>

                {/* Triangle-like shape using clip-path */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-blue-600 to-purple-600 opacity-20 animate-pulse-slow" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>

                {/* Small accent circles */}
                <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full opacity-70 animate-bounce-slow"></div>
                <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-gradient-to-br from-purple-300 to-purple-500 rounded-full opacity-60 animate-float-delayed"></div>

                {/* Decorative lines */}
                <div className="absolute top-20 right-10 w-1 h-32 bg-gradient-to-b from-blue-400 to-transparent opacity-50 animate-slide-down"></div>
                <div className="absolute bottom-20 left-16 w-1 h-40 bg-gradient-to-t from-purple-400 to-transparent opacity-50 animate-slide-up"></div>
              </div>

              {/* Stats overlay */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">15+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Years</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">50K+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">₹15K Cr+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Funded</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  We provide innovative loan solutions tailored to your needs. With years of experience
                  and a commitment to excellence, we help you achieve your financial goals.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Our team of financial experts works tirelessly to ensure you get the best rates and terms.
                  We believe in transparency, integrity, and putting our clients first.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl hover:shadow-lg transition-all hover:scale-105 duration-300">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-gray-600 dark:text-gray-400">Empowering financial freedom through smart lending</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl hover:shadow-lg transition-all hover:scale-105 duration-300">
                  <div className="text-4xl mb-4">💡</div>
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-600 dark:text-gray-400">Cutting-edge technology for seamless experiences</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl hover:shadow-lg transition-all hover:scale-105 duration-300">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-semibold mb-2">Trust</h3>
                  <p className="text-gray-600 dark:text-gray-400">Building lasting relationships with our clients</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl hover:shadow-lg transition-all hover:scale-105 duration-300">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-semibold mb-2">Speed</h3>
                  <p className="text-gray-600 dark:text-gray-400">Fast approvals to meet your urgent needs</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
            Comprehensive loan solutions designed for your success
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Personal Loans', path: '/loans/personal' },
              { name: 'Home Loans', path: '/loans/home' },
              { name: 'Business Loans', path: '/loans/business' },
              { name: 'Education Loans', path: '/loans/education' },
              { name: 'Auto Loans', path: '/loans/auto' },
              { name: 'Debt Consolidation', path: '/loans/debt-consolidation' }
            ].map((service, index) => (
              <div key={index} className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mb-4 flex items-center justify-center text-white font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Flexible terms and competitive rates tailored to your needs.
                </p>
                <Link href={service.path} className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMI Calculator Section */}
      <section id="emi-calculator" className="min-h-screen flex items-center justify-center px-4 py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">EMI Calculator</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Calculate your monthly loan payments instantly
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left Side - Sliders */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-3xl p-8 md:p-10 space-y-8">
              <h3 className="text-2xl font-bold mb-6">Loan Details</h3>

              {/* Loan Amount Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Loan Amount
                  </label>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ₹{formData.loanAmount ? parseInt(formData.loanAmount).toLocaleString('en-IN') : '0'}
                  </div>
                </div>
                <input
                  type="range"
                  min="100000"
                  max="100000000"
                  step="100000"
                  value={formData.loanAmount || 5000000}
                  onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 slider-thumb"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>₹1L</span>
                  <span>₹10Cr</span>
                </div>
              </div>

              {/* Tenure Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Loan Tenure
                  </label>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {(() => {
                      const tenure = parseInt(formData.phone || '12');
                      return tenure >= 12 ? `${Math.floor(tenure / 12)} Year${Math.floor(tenure / 12) !== 1 ? 's' : ''}` : `${tenure} Month${tenure !== 1 ? 's' : ''}`;
                    })()}
                  </div>
                </div>
                <input
                  type="range"
                  min="6"
                  max="360"
                  step="6"
                  value={formData.phone || 180}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 slider-thumb"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>6 Months</span>
                  <span>30 Years</span>
                </div>
              </div>

              {/* Interest Rate Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Interest Rate
                  </label>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {(parseFloat(formData.email || '7.5')).toFixed(2)}%
                  </div>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="0.1"
                  value={formData.email || 7.5}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 slider-thumb"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>1%</span>
                  <span>20%</span>
                </div>
              </div>
            </div>

            {/* Right Side - Results */}
            <div className="space-y-6">
              {(() => {
                const principal = parseFloat(formData.loanAmount || '5000000');
                const ratePerMonth = parseFloat(formData.email || '7.5') / 12 / 100;
                const tenureMonths = parseInt(formData.phone || '180');

                // EMI Calculation: P × r × (1 + r)^n / ((1 + r)^n - 1)
                const emi = principal * ratePerMonth * Math.pow(1 + ratePerMonth, tenureMonths) / (Math.pow(1 + ratePerMonth, tenureMonths) - 1);
                const totalAmount = emi * tenureMonths;
                const totalInterest = totalAmount - principal;

                const principalPercentage = (principal / totalAmount) * 100;
                const interestPercentage = (totalInterest / totalAmount) * 100;

                return (
                  <>
                    {/* Monthly EMI Card */}
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
                      <div className="text-sm font-semibold mb-2 opacity-90">Monthly EMI</div>
                      <div className="text-5xl font-bold mb-2">₹{emi.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
                      <div className="text-sm opacity-75">per month for {Math.floor(tenureMonths / 12)} years</div>
                    </div>

                    {/* Breakdown Cards */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 border-blue-100 dark:border-blue-900">
                        <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Principal Amount</div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">₹{principal.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 border-purple-100 dark:border-purple-900">
                        <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Total Interest</div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">₹{totalInterest.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
                      </div>
                    </div>

                    {/* Total Amount */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 border-gray-200 dark:border-gray-700">
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Total Amount Payable</div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        ₹{totalAmount.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                      </div>
                    </div>

                    {/* Visual Breakdown */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">Payment Breakdown</div>
                      <div className="flex h-8 rounded-full overflow-hidden mb-4">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white text-xs font-semibold"
                          style={{ width: `${principalPercentage}%` }}
                        >
                          {principalPercentage > 20 && `${principalPercentage.toFixed(0)}%`}
                        </div>
                        <div
                          className="bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white text-xs font-semibold"
                          style={{ width: `${interestPercentage}%` }}
                        >
                          {interestPercentage > 20 && `${interestPercentage.toFixed(0)}%`}
                        </div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded"></div>
                          <span className="text-gray-600 dark:text-gray-400">Principal</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded"></div>
                          <span className="text-gray-600 dark:text-gray-400">Interest</span>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
            Ready to start your journey? Contact us today!
          </p>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-8 rounded-2xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
              <button className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">

            {/* About Us Column */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">L</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  LoanWise
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner for smart financial solutions. We provide innovative loan services tailored to your needs with competitive rates and flexible terms.
              </p>
              <div className="flex space-x-4 pt-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-200">
                    → Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-200">
                    → About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-200">
                    → Our Services
                  </a>
                </li>
                <li>
                  <a href="#emi-calculator" className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-200">
                    → EMI Calculator
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-200">
                    → Contact Us
                  </a>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-200">
                    → Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-200">
                    → Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates, offers, and financial tips.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-200"
                >
                  Subscribe Now
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>

          </div>

          {/* Copyright Line */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} LoanWise. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
