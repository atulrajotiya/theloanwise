import { Card, CardContent, CardHeader, CardTitle } from '@/app/_components/card'
import Link from 'next/link'
import React from 'react'
import { BsGraphUpArrow } from 'react-icons/bs'
import { FaCalculator, FaPersonRunning, FaRegBuilding, FaShield } from 'react-icons/fa6'
import { FiUsers } from 'react-icons/fi'
import { GoShieldCheck } from 'react-icons/go'
import { IoMdCheckmarkCircleOutline, IoMdTime } from 'react-icons/io'
import { IoShieldOutline } from 'react-icons/io5'

function PersonalLoan() {
  return (
   <>
    <section className='container mx-auto flex flex-col gap-2 justify-center items-center py-12'>
        <h2 className='text-6xl text-financeBlue font-bold'><span className='text-gray-800'>Personal</span> Loan</h2>
        <p className='text-gray-500 w-1/2 text-center text-lg'>Fuel your business growth with our flexible business loan solutions. Quick approvals, competitive rates, and personalized service for your success.</p>

        <div className="grid grid-cols-3 gap-2 mt-8 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <div className="bg-yellow-100 rounded-md p-2">
                            <BsGraphUpArrow className="text-yellow-300 text-3xl" />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-bold text-gray-500">Low Rates</span>
                            <p className="text-gray-500 text-sm">Starting @ 8.99%</p>
                          </div>
                        </div>
        
                         <div className="flex flex-col items-center gap-2">
                          <div className="bg-green-100 rounded-md p-2">
                            <GoShieldCheck className="text-financeGreen text-3xl" />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-bold text-gray-500">Secure</span>
                            <p className="text-gray-500 text-sm">Bank Grade</p>
                          </div>
                        </div>
        
                         <div className="flex flex-col items-center gap-2">
                          <div className="bg-blue-100 rounded-md p-2">
                            <FaPersonRunning className="text-financeBlue text-3xl" />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-bold text-gray-500">Quick</span>
                            <p className="text-gray-500 text-sm">Under 60 Seconds</p>
                          </div>
                        </div>
                      </div>
                </section>

                <section className='py-12 mt-12 bg-gray-100'>
                    <div className=' container mx-auto'>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                         <h2 className='text-3xl text-financeBlue font-bold'>Why Choose Our Business Loans?</h2>
                        <p className='text-base text-gray-500 w-1/2 text-center'>
                            Designed specifically for businesses of all sizes with flexible terms and competitive rates
                        </p>
                    </div>

                    <div className='grid grid-cols-3 gap-12 mt-12'>
                        <div className='rounded-md shadow-md py-6 px-3 bg-white text-center'>
                            <div className='flex justify-center mb-2'>
                                <BsGraphUpArrow className='text-5xl text-financeGreen bg-green-100 rounded-md p-3 ' />
                            </div>
                            <h2 className='text-2xl font-bold text-financeBlue mb-4'>Flexible Repayment</h2>
                            <p className='text-gray-500'>
                                Choose from multiple repayment options that suit your cash flow
                            </p>
                        </div>

                        <div className='rounded-md shadow-md py-6 px-3 bg-white text-center'>
                            <div className='flex justify-center mb-2'>
                                <IoMdTime className='text-5xl text-financeGreen bg-green-100 rounded-md p-3 ' />
                            </div>
                            <h2 className='text-2xl font-bold text-financeBlue mb-4'>Flexible Repayment</h2>
                            <p className='text-gray-500'>
                                Choose from multiple repayment options that suit your cash flow
                            </p>
                        </div>

                        <div className='rounded-md shadow-md py-6 px-3 bg-white text-center'>
                            <div className='flex justify-center mb-2'>
                                <IoShieldOutline className='text-5xl text-financeGreen bg-green-100 rounded-md p-3 ' />
                            </div>
                            <h2 className='text-2xl font-bold text-financeBlue mb-4'>Minimal Documentation</h2>
                            <p className='text-gray-500'>
                                Simple paperwork with digital processing for faster approvals
                            </p>
                        </div>

                        <div className='rounded-md shadow-md py-6 px-3 bg-white text-center'>
                            <div className='flex justify-center mb-2'>
                                <FaCalculator className='text-5xl text-financeGreen bg-green-100 rounded-md p-3 ' />
                            </div>
                            <h2 className='text-2xl font-bold text-financeBlue mb-4'>Competitive Rates</h2>
                            <p className='text-gray-500'>
                                Starting from 10.5% with transparent pricing and no hidden charges
                            </p>
                        </div>

                        <div className='rounded-md shadow-md py-6 px-3 bg-white text-center'>
                            <div className='flex justify-center mb-2'>
                                <FiUsers className='text-5xl text-financeGreen bg-green-100 rounded-md p-3 ' />
                            </div>
                            <h2 className='text-2xl font-bold text-financeBlue mb-4'>Dedicated Support</h2>
                            <p className='text-gray-500'>
                                Personal relationship manager for all your business banking needs
                            </p>
                        </div>

                        <div className='rounded-md shadow-md py-6 px-3 bg-white text-center'>
                            <div className='flex justify-center mb-2'>
                                <FaRegBuilding className='text-5xl text-financeGreen bg-green-100 rounded-md p-3 ' />
                            </div>
                            <h2 className='text-2xl font-bold text-financeBlue mb-4'>Collateral Free</h2>
                            <p className='text-gray-500'>
                                Unsecured loans up to ₹50 lakhs for eligible businesses
                            </p>
                        </div>
                    </div>
                    </div>
                    
                </section>

                <section className="py-20 px-4 bg-blue-100">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-financeBlue mb-6">
                Eligibility Criteria
              </h2>
              <p className="text-xl text-gray-500 mb-8">
                Simple and transparent eligibility requirements to help you understand your loan qualification
              </p>
              
              <div className="space-y-6 mb-6">
                {[
                  "Business operational for at least 2 years",
                  "Minimum annual turnover of ₹10 lakhs",
                  "Good credit score (650+)",
                  "ITR filed for last 2 years",
                  "Current account with 12 months bank statements"
                ].map((criteria, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <IoMdCheckmarkCircleOutline className="h-6 w-6 text-financeGreen flex-shrink-0" />
                    <span className="text-lg">{criteria}</span>
                  </div>
                ))}
              </div>

              <Link className="block text-center mt-8 py-4 text-lg w-1/2 bg-financeBlue text-white rounded-md" href="/" >
                Check My Eligibility
              </Link>
            </div>

            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl text-financeBlue text-center">
                  Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Identity Proof", docs: "PAN Card, Aadhaar Card" },
                    { title: "Address Proof", docs: "Utility Bills, Rent Agreement" },
                    { title: "Business Proof", docs: "Registration Certificate, License" },
                    { title: "Financial Documents", docs: "ITR, Bank Statements, P&L" },
                    { title: "Additional", docs: "GST Returns, Audited Financials" }
                  ].map((doc, index) => (
                    <div key={index} className="border-l-4 border-l-financeGreen/30 pl-4">
                      <h4 className="font-semibold text-financeBlue">{doc.title}</h4>
                      <p className="text-sm text-gray-500">{doc.docs}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      <section className="container mx-auto py-24 mt-6 rounded-md">
        <div className="flex justify-center items-center gap-2 flex-col">
          <h2 className="text-4xl text-financeBlue font-bold">
            Not sure which loan is right for you?
          </h2>
          <span className="text-gray-500 text-lg">Our financial experts will help you choose the perfect solution</span>

          <Link href="" className="bg-financeBlue rounded-md text-white font-bold py-2 px-4 mt-4">Talk To Expert</Link>
        </div>
      </section>
   </>
  )
}

export default PersonalLoan