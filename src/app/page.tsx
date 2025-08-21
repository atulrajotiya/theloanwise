
"use client"
import { BsGraphUpArrow } from "react-icons/bs";
import { GoShieldCheck } from "react-icons/go";
import { FaCalculator, FaChartPie, FaEnvelope, FaIndianRupeeSign, FaPersonRunning} from "react-icons/fa6";
import ServiceCard from "./_components/ServiceCard";
import Link from "next/link";
import { useState } from "react";
import Faqs from "./_components/Faqs";
import { motion } from "framer-motion"
import { MdOutlineSupportAgent } from "react-icons/md";


export default function Home() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10);
  const [tenure, setTenure] = useState(12);

  const monthlyRate = interestRate/12/100;
  const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
    (Math.pow(1 + monthlyRate, tenure) - 1);
  const totalPayment = emi * tenure;
  const totalInterest = totalPayment - loanAmount;
  return (
    <>
      

      <section className="bg-cover bg-center bg-no-repeat bg-[url('/bg3.png')]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 h-auto md:h-[80vh] px-4 py-8">
          <div className="flex-1">
            <motion.h1 initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }} className="text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight">Your Financial <span className=" animated-gradient-text">Dreams</span> Made Simple</motion.h1>
              <motion.p initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }} className="text-white text-lg mt-4 font-medium">
                Get instant loan approval with competitive rates. Check your eligibility in under 60 seconds.
              </motion.p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
                <motion.div initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }} className="flex items-center gap-2">
                  <div className="bg-white/30 rounded-md p-2">
                    <BsGraphUpArrow className="text-yellow-300 text-3xl" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-white">Low Rates</span>
                    <p className="text-white text-sm">Starting @ 8.99%</p>
                  </div>
                </motion.div>

                 <motion.div initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }} className="flex items-center gap-2">
                  <div className="bg-white/30 rounded-md p-2">
                    <GoShieldCheck className="text-yellow-300 text-3xl" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-white">Secure</span>
                    <p className="text-white text-sm">Bank Grade</p>
                  </div>
                </motion.div>

                 <motion.div initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.8 }} className="flex items-center gap-2">
                  <div className="bg-white/30 rounded-md p-2">
                    <FaPersonRunning className="text-yellow-300 text-3xl" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-white">Quick</span>
                    <p className="text-white text-sm">Under 60 Seconds</p>
                  </div>
                </motion.div>
              </div>

          </div>
          <div className="flex-1 flex justify-end">
           
      <motion.form initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }} className="bg-white rounded-md shadow-md p-6 w-full max-w-md">
        <h2 className="text-center text-2xl font-bold mb-1 text-financeBlue">
          Check Loan Eligibility
        </h2>
        <p className="text-md text-center mb-6">Get instant pre-approval in 60 seconds</p>
      
        {/* Monthly Income */}
        <div className="mb-4">
          <label className="block text-financeBlue font-medium mb-2" htmlFor="monthlyIncome">
            Monthly Income
          </label>
          <input
            type="number"
            id="monthlyIncome"
            name="monthlyIncome"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter monthly income"
          />
        </div>

        {/* Loan Type */}
        <div className="mb-4">
          <label className="block text-financeBlue font-medium mb-2" htmlFor="loanType">
            Loan Type
          </label>
          <select
            id="loanType"
            name="loanType"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select loan type</option>
            <option value="personal">Personal Loan</option>
            <option value="home">Home Loan</option>
            <option value="car">Car Loan</option>
            <option value="business">Business Loan</option>
          </select>
        </div>

        {/* Loan Amount */}
        <div className="mb-4">
          <label className="block text-financeBlue font-medium mb-2" htmlFor="loanAmount">
            Loan Amount
          </label>
          <input
            type="number"
            id="loanAmount"
            name="loanAmount"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter loan amount"
          />
        </div>

        {/* Employment Type */}
        <div className="mb-6">
          <label className="block text-financeBlue font-medium mb-2" htmlFor="employmentType">
            Employment Type
          </label>
          <select
            id="employmentType"
            name="employmentType"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select employment type</option>
            <option value="salaried">Salaried</option>
            <option value="self-employed">Self-Employed</option>
            <option value="freelancer">Freelancer</option>
            <option value="unemployed">Unemployed</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-financeBlue text-white font-medium py-3 px-4 rounded-md ease-in-out cursor-pointer hover:bg-white hover:text-financeBlue hover:border-financeBlue hover:border-2 border-2 hover:shadow-md duration-150"
        >
          Check Eligibilty Now
        </button>
      </motion.form>
    
          </div>
        </div>
      </section>


      <section className="container mx-auto py-8">
        <h2 className="text-5xl text-financeBlue font-bold text-center mb-2 mt-6">
          Choose Your <span className="text-financeGreen">Perfect</span> Financial Solution
        </h2>
        <p className="text-center text-gray-600 text-lg mb-6">
          From personal needs to business growth, we have the right financial product for every goal
        </p>

        <div className="grid grid-cols-1 mx-2 sm:grid-cols-3 gap-12 mt-12">
          {/** cards starts */}
          <ServiceCard />
          {/** cards ends */}
        </div>
      </section>

      <section className="talk relative container mx-auto py-24 bg-gray-100 mt-6">
        <div className="flex justify-center items-center gap-2 flex-col">
          <h2 className="text-4xl text-financeBlue font-bold">
            Not sure which loan is right for you?
          </h2>
          <span className="text-gray-500 text-lg">Our financial experts will help you choose the perfect solution</span>

          <Link href="" className="bg-financeBlue rounded-md text-white font-semibold text-xl py-4 px-8 mt-4 ease-in-out cursor-pointer hover:bg-white hover:text-financeBlue hover:border-financeBlue hover:border-2 border-2 hover:shadow-md duration-150 flex justify-center items-center gap-2">Talk To Expert <MdOutlineSupportAgent className="text-2xl" /></Link>
        </div>
      </section>

      <section className="container mx-auto py-12  mt-6">
        <div className="flex justify-center items-center gap-4 flex-col">
          <div className="bg-blue-100 p-4 rounded-md shadow-md"><FaCalculator className="text-2xl text-financeBlue" /></div>
          <h2 className="text-5xl font-bold"><span className="text-financeGreen ">EMI</span> <span className="text-financeBlue ">Calculator</span></h2>
          <p className="text-gray-500 text-base">Plan your finances better with our easy-to-use EMI calculator</p>
        </div>

        <div className="flex flex-row gap-8 items-start mt-8">
          {/** range */}
          <div className="rounded-md shadow-md py-4 px-4 flex-1">
            <h2 className="text-2xl text-financeBlue font-bold mb-8 mt-2">Calculate Your EMI</h2>

             <div className="mb-8">
          <label className=" mb-2 flex justify-between items-center text-financeBlue">
            <span className="text-base font-medium">Loan Amount: </span>
            <span className="text-lg font-bold">₹{loanAmount.toLocaleString()}</span>
            </label>
          <input
            type="range"
            min="10000"
            max="5000000"
            step="10000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Interest Rate */}
        <div className="mb-8">

           <label className=" mb-2 flex justify-between items-center text-financeBlue">
            <span className="text-base font-medium">Interest Rate: </span>
            <span className="text-lg font-bold">{interestRate}%</span>
            </label>
          <input
            type="range"
            min="1"
            max="20"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Loan Tenure */}
        <div className="mb-8">
           <label className=" mb-2 flex justify-between items-center text-financeBlue">
            <span className="text-base font-medium">Loan Tenure: </span>
            <span className="text-lg font-bold">{tenure} Months</span>
            </label>
          <input
            type="range"
            min="6"
            max="360"
            step="1"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <button className="w-full py-3 px-6 font-bold text-white bg-financeBlue rounded-md text-lg ease-in-out cursor-pointer hover:bg-white hover:text-financeBlue hover:border-financeBlue hover:border-2 border-2 hover:shadow-md duration-150">Apply For This Loan</button>
          </div>
          {/** range ends */}


          {/** emi details */}
          <div className="flex-1">
            <div className="w-full flex justify-between items-center bg-gradient-to-r from-blue-600 to-green-400 rounded-md py-6 px-4">
              <div className="flex flex-col gap-2">
                <span className="text-white">Monthly EMI:</span> 
                <span className="font-bold text-3xl text-white">₹{emi.toFixed(2)}</span>
              </div>
              <div className="bg-white/20 p-4 rounded-md shadow-md">
                <FaIndianRupeeSign className="text-2xl text-white" />
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center justify-between my-8">
              <div className="py-4 px-2 shadow-md rounded-md flex-1">
                <div className="flex justify-between items-center">

                  <div className="bg-green-100 p-4 rounded-md">
                    <BsGraphUpArrow className="text-financeGreen text-2xl" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-500">Principal</span> <span className="font-bold text-financeBlue">₹{loanAmount.toLocaleString()}</span>
                  </div>
                  
                </div>
              </div>

              <div className="py-4 px-2 shadow-md rounded-md flex-1">
                <div className="flex justify-between items-center">

                <div className="bg-green-100 p-4 rounded-md">
                    <FaChartPie className="text-financeGreen text-2xl" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-500">Total Interest</span> <span className="font-bold text-financeBlue">₹{totalInterest.toFixed(2)}</span>
                  </div>
                  
                </div>
              </div>
            </div>

            <div className="border-[1px] bg-financeBlue/10 border-financeBlue rounded-md py-8 flex justify-center items-center gap-2 flex-col">
              <span className="text-gray-500 text-lg">Total Amount Payable:</span> 
              <span className="font-bold text-financeBlue text-3xl">₹{totalPayment.toFixed(2)}</span>
            </div>


        
          </div>
          {/** emi details ends */}
              
        </div>
      </section>

      <section className="py-12  mt-6 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex justify-center flex-col gap-2 items-center">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-transparent">Frequently Asked Questions</h2>
          <p className="text-gray-500 text-base">Get answers to common questions about our loan products and services</p>
          </div>

          <Faqs/>
        </div>
      </section>

       <section className="py-24   bg-financeBlue">
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-4 flex-col">
              <div className="bg-blue-100 p-4 rounded-md shadow-md"><FaEnvelope className="text-2xl text-financeGreen" /></div>
              <h2 className="text-5xl font-bold text-white">Stay Updated with Financial Insights</h2>
              <p className="text-white text-base">Get the latest updates on loan offers, financial tips, and market insights delivered straight to your inbox.</p>
            </div>
            <form className="mx-auto p-4 mt-6 w-full max-w-lg flex">
        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 border border-gray-300 bg-white/10 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-yellow-300 text-financeBlue font-semibold px-6 py-2 rounded-r-md hover:bg-yellow-400 transition"
        >
          Subscribe
        </button>
      </form>
        </div>
       </section>

      
    </>
  );
}
