import Link from 'next/link'
import React from 'react'
import { FaUniversity } from 'react-icons/fa'
import { FaArrowRight, FaCarSide, FaCreditCard, FaRegBuilding, FaUser } from 'react-icons/fa6'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { IoHomeOutline } from 'react-icons/io5'

function ServiceCard() {
  return (
    <>
    <div className="group py-4 px-2 shadow-md rounded-md border-t-8 cursor-pointer border-blue-500 hover:scale-102 ease-in-out duration-150">
            <div className="flex justify-between items-center">
              <div className="bg-gradient-to-r  from-blue-500 to-blue-400 p-4 rounded-md group-hover:scale-110 ease-in-out duration-150">
                <FaUser className="text-2xl text-white"/>
              </div>
              <div>
                <h2 className="text-blue-500 text-2xl font-bold">
                  Personal Loan
                </h2>
                <p className="text-base text-gray-500">Quick Funds For your Peerosnal needs</p>
              </div>
            </div>

            <div className="bg-blue-100 py-2 px-2 rounded-md flex justify-between items-center mt-6">
              <div>
                <p className="text-base text-gray-500">
                  Starting Rate
                </p>
                <h3 className="text-lg font-bold text-blue-500">10.99%</h3>
              </div>
              <div>
                <p className="text-base text-gray-500">
                  Amount
                </p>
                <h3 className="text-lg font-bold text-blue-500">₹50K - ₹40L</h3>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex justify-start items-center gap-2 mb-2">
                <IoMdCheckmarkCircleOutline className="text-financeGreen text-lg" />
                <span className="text-gray-500">No collateral required</span>
              </div>
              <div className="flex justify-start items-center gap-2 mb-2">
                <IoMdCheckmarkCircleOutline className="text-financeGreen text-lg" />
                <span className="text-gray-500">No collateral required</span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <IoMdCheckmarkCircleOutline className="text-financeGreen text-lg" />
                <span className="text-gray-500">No collateral required</span>
              </div>
            </div>

            <div className="mt-6 w-full">
              <Link href="" className="text-financeBlue border-financeBlue duration-200 ease-in-out cursor-pointer group-hover:bg-financeBlue group-hover:text-white border-2 rounded-md py-3 w-full flex items-center justify-center gap-2">
                <span>Apply Now</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
          {/**service card 1 ends */}
<div className="py-4 px-2 shadow-md rounded-md border-t-8 group cursor-pointer border-financeGreen hover:scale-102 ease-in-out duration-150">
            <div className="flex justify-between items-center">
              <div className="bg-gradient-to-r from-financeGreen to-green-400 p-4 rounded-md group-hover:scale-110 ease-in-out duration-150">
                <FaCarSide className="text-2xl text-white"/>
              </div>
              <div>
                <h2 className="text-financeBlue text-2xl font-bold">
                  Car Loan
                </h2>
                <p className="text-base text-gray-500">Quick Funds For your Peerosnal needs</p>
              </div>
            </div>

            <div className="bg-blue-100 py-2 px-2 rounded-md flex justify-between items-center mt-6">
              <div>
                <p className="text-base text-gray-500">
                  Starting Rate
                </p>
                <h3 className="text-lg font-bold text-financeBlue">10.99%</h3>
              </div>
              <div>
                <p className="text-base text-gray-500">
                  Amount
                </p>
                <h3 className="text-lg font-bold text-financeBlue">₹50K - ₹40L</h3>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex justify-start items-center gap-2 mb-2">
                <IoMdCheckmarkCircleOutline className="text-financeGreen text-lg" />
                <span className="text-gray-500">No collateral required</span>
              </div>
              <div className="flex justify-start items-center gap-2 mb-2">
                <IoMdCheckmarkCircleOutline className="text-financeGreen text-lg" />
                <span className="text-gray-500">No collateral required</span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <IoMdCheckmarkCircleOutline className="text-financeGreen text-lg" />
                <span className="text-gray-500">No collateral required</span>
              </div>
            </div>

            <div className="mt-6 w-full">
              <Link href="" className="text-financeBlue duration-200 ease-in-out group-hover:bg-financeBlue cursor-pointer group-hover:text-white border-financeBlue border-2 rounded-md py-3 w-full flex items-center justify-center gap-2">
                <span>Apply Now</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>

          {/**service card 2 ends */}

<div className="py-4 px-2 shadow-md rounded-md border-t-8 group cursor-pointer border-orange-400 hover:scale-102 ease-in-out duration-150">
            <div className="flex justify-between items-center">
              <div className="bg-gradient-to-r from-orange-400 to-orange-300 group-hover:scale-110 ease-in-out duration-150 p-4 rounded-md">
                <IoHomeOutline className="text-2xl text-white"/>
              </div>
              <div>
                <h2 className="text-financeBlue text-2xl font-bold">
                  Home Loan
                </h2>
                <p className="text-base text-gray-500">Quick Funds For your Peerosnal needs</p>
              </div>
            </div>

            <div className="bg-blue-100 py-2 px-2 rounded-md flex justify-between items-center mt-6">
              <div>
                <p className="text-base text-gray-500">
                  Starting Rate
                </p>
                <h3 className="text-lg font-bold text-financeBlue">10.99%</h3>
              </div>
              <div>
                <p className="text-base text-gray-500">
                  Amount
                </p>
                <h3 className="text-lg font-bold text-financeBlue">₹50K - ₹40L</h3>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex justify-start items-center gap-2 mb-2">
                <IoMdCheckmarkCircleOutline className="text-financeGreen text-lg" />
                <span className="text-gray-500">No collateral required</span>
              </div>
              <div className="flex justify-start items-center gap-2 mb-2">
                <IoMdCheckmarkCircleOutline className="text-financeGreen text-lg" />
                <span className="text-gray-500">No collateral required</span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <IoMdCheckmarkCircleOutline className="text-financeGreen text-lg" />
                <span className="text-gray-500">No collateral required</span>
              </div>
            </div>

            <div className="mt-6 w-full">
              <Link href="" className="text-financeBlue duration-200 ease-in-out group-hover:bg-financeBlue cursor-pointer group-hover:text-white border-financeBlue border-2 rounded-md py-3 w-full flex items-center justify-center gap-2">
                <span>Apply Now</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
          {/**service card 3 ends */}
<div className="py-4 px-2 shadow-md rounded-md border-t-8 group cursor-pointer border-purple-500 hover:scale-102 ease-in-out duration-150">
            <div className="flex justify-between items-center">
              <div className="bg-gradient-to-r from-purple-500 to-purple-400 group-hover:scale-110 duration-150 ease-in-out p-4 rounded-md">
                <FaUniversity className="text-2xl text-white"/>
              </div>
              <div>
                <h2 className="text-financeBlue text-2xl font-bold">
                  Education Loan
                </h2>
                <p className="text-base text-gray-500">Quick Funds For your Peerosnal needs</p>
              </div>
            </div>

            <div className="bg-blue-100 py-2 px-2 rounded-md flex justify-between items-center mt-6">
              <div>
                <p className="text-base text-gray-500">
                  Starting Rate
                </p>
                <h3 className="text-lg font-bold text-financeBlue">10.99%</h3>
              </div>
              <div>
                <p className="text-base text-gray-500">
                  Amount
                </p>
                <h3 className="text-lg font-bold text-financeBlue">₹50K - ₹40L</h3>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex justify-start items-center gap-2 mb-2">
                <IoMdCheckmarkCircleOutline className="text-financeGreen text-lg" />
                <span className="text-gray-500">No collateral required</span>
              </div>
              <div className="flex justify-start items-center gap-2 mb-2">
                <IoMdCheckmarkCircleOutline className="text-financeGreen text-lg" />
                <span className="text-gray-500">No collateral required</span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <IoMdCheckmarkCircleOutline className="text-financeGreen text-lg" />
                <span className="text-gray-500">No collateral required</span>
              </div>
            </div>

            <div className="mt-6 w-full">
              <Link href="" className="text-financeBlue duration-200 ease-in-out group-hover:bg-financeBlue cursor-pointer group-hover:text-white border-financeBlue border-2 rounded-md py-3 w-full flex items-center justify-center gap-2">
                <span>Apply Now</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>

          {/**service card 4 ends */}

<div className="py-4 px-2 shadow-md rounded-md border-t-8 group cursor-pointer border-cyan-500 hover:scale-102 ease-in-out duration-150">
            <div className="flex justify-between items-center">
              <div className="bg-gradient-to-r from-cyan-500 to-cyan-400 group-hover:scale-110 duration-150 ease-in-out p-4 rounded-md">
                <FaRegBuilding className="text-2xl text-white"/>
              </div>
              <div>
                <h2 className="text-financeBlue text-2xl font-bold">
                  Business Loan
                </h2>
                <p className="text-base text-gray-500">Quick Funds For your Peerosnal needs</p>
              </div>
            </div>

            <div className="bg-blue-100 py-2 px-2 rounded-md flex justify-between items-center mt-6">
              <div>
                <p className="text-base text-gray-500">
                  Starting Rate
                </p>
                <h3 className="text-lg font-bold text-financeBlue">10.99%</h3>
              </div>
              <div>
                <p className="text-base text-gray-500">
                  Amount
                </p>
                <h3 className="text-lg font-bold text-financeBlue">₹50K - ₹40L</h3>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex justify-start items-center gap-2 mb-2">
                <IoMdCheckmarkCircleOutline className="text-financeGreen text-lg" />
                <span className="text-gray-500">No collateral required</span>
              </div>
              <div className="flex justify-start items-center gap-2 mb-2">
                <IoMdCheckmarkCircleOutline className="text-financeGreen text-lg" />
                <span className="text-gray-500">No collateral required</span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <IoMdCheckmarkCircleOutline className="text-financeGreen text-lg" />
                <span className="text-gray-500">No collateral required</span>
              </div>
            </div>

            <div className="mt-6 w-full">
              <Link href="" className="text-financeBlue duration-200 ease-in-out group-hover:bg-financeBlue group-hover:text-white cursor-pointer border-financeBlue border-2 rounded-md py-3 w-full flex items-center justify-center gap-2">
                <span>Apply Now</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
          {/**service card 5 ends */}

<div className="py-4 px-2 shadow-md rounded-md border-t-8 group cursor-pointer border-pink-500 hover:scale-102 ease-in-out duration-150">
            <div className="flex justify-between items-center">
              <div className="bg-gradient-to-r from-pink-500 to-pink-400 group-hover:scale-110 duration-150 ease-in-out p-4 rounded-md ">
                <FaCreditCard className="text-2xl text-white"/>
              </div>
              <div>
                <h2 className="text-financeBlue text-2xl font-bold">
                  Credit Cards
                </h2>
                <p className="text-base text-gray-500">Quick Funds For your Peerosnal needs</p>
              </div>
            </div>

            <div className="bg-blue-100 py-2 px-2 rounded-md flex justify-between items-center mt-6">
              <div>
                <p className="text-base text-gray-500">
                  Starting Rate
                </p>
                <h3 className="text-lg font-bold text-financeBlue">10.99%</h3>
              </div>
              <div>
                <p className="text-base text-gray-500">
                  Amount
                </p>
                <h3 className="text-lg font-bold text-financeBlue">₹50K - ₹40L</h3>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex justify-start items-center gap-2 mb-2">
                <IoMdCheckmarkCircleOutline className="text-financeGreen text-lg" />
                <span className="text-gray-500">No collateral required</span>
              </div>
              <div className="flex justify-start items-center gap-2 mb-2">
                <IoMdCheckmarkCircleOutline className="text-financeGreen text-lg" />
                <span className="text-gray-500">No collateral required</span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <IoMdCheckmarkCircleOutline className="text-financeGreen text-lg" />
                <span className="text-gray-500">No collateral required</span>
              </div>
            </div>

            <div className="mt-6 w-full">
              <Link href="" className="text-financeBlue duration-200 ease-in-out group-hover:bg-financeBlue group-hover:text-white cursor-pointer border-financeBlue border-2 rounded-md py-3 w-full flex items-center justify-center gap-2">
                <span>Apply Now</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>

          {/**service card 6 ends */}
    </>
  )
}

export default ServiceCard