"use client"


import Link from 'next/link'
import React from 'react'
import { BsGraphUpArrow } from 'react-icons/bs'
import { FaRegHeart, FaShield } from 'react-icons/fa6'
import { FiUsers } from 'react-icons/fi'
import { GoGlobe } from 'react-icons/go'
import { IoShieldOutline } from 'react-icons/io5'
import { LuAward } from 'react-icons/lu'

function About() {
  return (
    <>
    <section className='container mx-auto flex flex-col gap-2 justify-center items-center py-12'>
        <h2 className='text-6xl text-financeBlue font-bold'><span className='text-gray-800'>About</span> Website</h2>
        <p className='text-gray-500 w-1/2 text-center text-lg'>Empowering your financial journey with trusted expertise, innovative solutions, and personalized service for over two decades.</p>
    </section>

    <section className='container mx-auto mt-12 py-12'>
        <div className='flex flex-row justify-between items-start gap-4'>
            <div className=''>
                <h2 className='text-3xl font-bold text-gray-800 mb-4'>
                    Your Trusted Financial Partner
                </h2>
                <p className='text-base text-gray-500'>
                    Since 2000, FinanceHub has been at the forefront of financial services, helping millions of customers achieve their dreams through comprehensive banking, lending, and investment solutions.
                </p>
                <p className='text-base text-gray-500'>
                    Since 2000, FinanceHub has been at the forefront of financial services, helping millions of customers achieve their dreams through comprehensive banking, lending, and investment solutions.
                </p>

                <div className='flex flex-row justify-between items-center mt-4 w-1/2 mx-auto'>
                    <div className='text-center'>
                        <h2 className='text-2xl font-bold text-financeBlue'>100k+</h2>
                        <p className='text-gray-500'>Happy Customers</p>
                    </div>
                    <div className='text-center'>
                        <h2 className='text-2xl font-bold text-financeGreen'>100k+</h2>
                        <p className='text-gray-500'>Happy Customers</p>
                    </div>
                </div>
            </div>



            <div className=''>
                <div className='py-12 px-4 rounded-md bg-gradient-to-br from-financeBlue to-financeGreen shadow-md'>
                    <h2 className='text-2xl font-bold text-white mb-4'>Our Mission</h2>
                    <p className='text-base text-white'>
                        To democratize financial services by making banking, lending, and investment solutions accessible, transparent, and tailored to every individual's unique financial journey.
                    </p>
                </div>
            </div>
        </div>
    </section>


    <section className='py-12 bg-gray-100'>
        <div className='container mx-auto flex flex-col gap-2 items-center justify-center mb-12'>
            <h2 className='text-3xl text-gray-800 font-bold'>Why Choose FinanceHub?</h2>
            <p className='text-base text-gray-500 w-1/2 text-center'>
                Experience the difference with our customer-first approach and innovative financial solutions.
            </p>
        </div>


        <div className='container mx-auto grid grid-cols-3 gap-4'>
            <div className='rounded-md shadow-md py-6 px-3 bg-white'>
                <div className='mb-4'>
                    <FaShield className='text-5xl text-financeBlue bg-blue-100 rounded-md p-3 ' />
                </div>
                <h2 className='text-2xl font-bold text-financeBlue mb-4'>Secure &amp; Trusted</h2>
                <p className='text-gray-500'>
                    Bank-grade security with 256-bit encryption and multi-factor authentication to protect your financial data
                </p>
            </div>
            <div className='rounded-md shadow-md py-6 px-3 bg-white'>
                <div className='mb-4'>
                    <BsGraphUpArrow className='text-5xl text-financeGreen bg-green-100 rounded-md p-3 ' />
                </div>
                <h2 className='text-2xl font-bold text-financeGreen mb-4'>Competitive Rates</h2>
                <p className='text-gray-500'>
                    Industry-leading interest rates and minimal processing fees to maximize your financial benefits.
                </p>
            </div>
            <div className='rounded-md shadow-md py-6 px-3 bg-white'>
                <div className='mb-4'>
                    <FiUsers className='text-5xl text-yellow-400 bg-yellow-100 rounded-md p-3 ' />
                </div>
                <h2 className='text-2xl font-bold text-yellow-400 mb-4'>24/7 Support</h2>
                <p className='text-gray-500'>
                    Round-the-clock customer support with dedicated relationship managers for personalized assistance.
                </p>
            </div>
        </div>
    </section>


     <section className='container mx-auto py-12'>
        <div className='flex flex-col gap-2 items-center justify-center mb-12'>
            <h2 className='text-3xl text-gray-800 font-bold'>Our Core Values</h2>
            <p className='text-base text-gray-500 w-1/2 text-center'>
                The principles that guide everything we do and shape our commitment to excellence.
            </p>
        </div>


        <div className='grid grid-cols-3 mt-8 gap-12'>
            <div className='flex flex-col gap-4 justify-center items-center'>
                <div className='bg-blue-100 rounded-full p-3'>
                    <FaRegHeart className='b text-financeBlue text-3xl unded-full' />
                </div>
                <h2 className='text-xl text-gray-800 font-semibold'>
                    Customer First
                </h2>
                <p className='text-base text-gray-500 text-center'>
                    Every decision we make is centered around delivering exceptional value and service to our customers.
                </p>
            </div>

            <div className='flex flex-col gap-4 justify-center items-center'>
                <div className='bg-green-100 rounded-full p-3'>
                    <IoShieldOutline className=' text-financeGreen text-3xl unded-full' />
                </div>
                <h2 className='text-xl text-gray-800 font-semibold'>
                    Integrity
                </h2>
                <p className='text-base text-gray-500 text-center'>
                    Every decision we make is centered around delivering exceptional value and service to our customers.
                </p>
            </div>

            <div className='flex flex-col gap-4 justify-center items-center'>
                <div className='bg-yellow-100 rounded-full p-3'>
                    <BsGraphUpArrow className=' text-yellow-400 text-3xl unded-full' />
                </div>
                <h2 className='text-xl text-gray-800 font-semibold'>
                    Innovation
                </h2>
                <p className='text-base text-gray-500 text-center'>
                    Every decision we make is centered around delivering exceptional value and service to our customers.
                </p>
            </div>

            <div className='flex flex-col gap-4 justify-center items-center'>
                <div className='bg-purple-100 rounded-full p-3'>
                    <LuAward className=' text-purple-400 text-3xl unded-full' />
                </div>
                <h2 className='text-xl text-gray-800 font-semibold'>
                    Excellence
                </h2>
                <p className='text-base text-gray-500 text-center'>
                    Every decision we make is centered around delivering exceptional value and service to our customers.
                </p>
            </div>

            <div className='flex flex-col gap-4 justify-center items-center'>
                <div className='bg-pink-100 rounded-full p-3'>
                    <FiUsers className=' text-pink-400 text-3xl unded-full' />
                </div>
                <h2 className='text-xl text-gray-800 font-semibold'>
                    Collaboration
                </h2>
                <p className='text-base text-gray-500 text-center'>
                    Every decision we make is centered around delivering exceptional value and service to our customers.
                </p>
            </div>

            <div className='flex flex-col gap-4 justify-center items-center'>
                <div className='bg-cyan-100 rounded-full p-3'>
                    <GoGlobe className=' text-cyan-400 text-3xl unded-full' />
                </div>
                <h2 className='text-xl text-gray-800 font-semibold'>
                    Responsibility
                </h2>
                <p className='text-base text-gray-500 text-center'>
                    Every decision we make is centered around delivering exceptional value and service to our customers.
                </p>
            </div>
        </div>
    </section>

    <section className=' bg-gradient-to-br from-financeBlue to-financeGreen py-24'>
        <div className='container mx-auto flex flex-col gap-4 justify-center items-center'>
            <h2 className='text-4xl text-center font-bold text-white'>
                Ready to Start Your Financial Journey?
            </h2>
            <p className='text-white font-medium text-lg'>Join millions of satisfied customers who trust FinanceHub for their financial needs.</p>

            <Link href="" className='border-2 border-white rounded-md py-4 px-4 text-xl text-white mt-4'>
                Ready To Start Today
            </Link>
        </div>
    </section>



    </>
  )
}

export default About