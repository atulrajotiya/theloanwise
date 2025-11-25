import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function HomeLoan() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Home Loans
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Turn your dream home into reality with our flexible home loan solutions
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Key Features</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                            <div className="text-4xl mb-4">🏠</div>
                            <h3 className="text-xl font-semibold mb-3">Low Interest Rates</h3>
                            <p className="text-gray-600 dark:text-gray-400">Starting from 6.5% APR with competitive rates for all credit profiles</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                            <div className="text-4xl mb-4">💰</div>
                            <h3 className="text-xl font-semibold mb-3">High Loan Amount</h3>
                            <p className="text-gray-600 dark:text-gray-400">Get up to ₹5 Crores based on your eligibility and property value</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                            <div className="text-4xl mb-4">⏱️</div>
                            <h3 className="text-xl font-semibold mb-3">Flexible Tenure</h3>
                            <p className="text-gray-600 dark:text-gray-400">Choose repayment tenure from 5 to 30 years as per your convenience</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                            <div className="text-4xl mb-4">✅</div>
                            <h3 className="text-xl font-semibold mb-3">Quick Approval</h3>
                            <p className="text-gray-600 dark:text-gray-400">Get in-principle approval within 48 hours of application</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                            <div className="text-4xl mb-4">📄</div>
                            <h3 className="text-xl font-semibold mb-3">Minimal Documentation</h3>
                            <p className="text-gray-600 dark:text-gray-400">Simple and hassle-free documentation process</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                            <div className="text-4xl mb-4">🎁</div>
                            <h3 className="text-xl font-semibold mb-3">Tax Benefits</h3>
                            <p className="text-gray-600 dark:text-gray-400">Enjoy tax deductions under Section 80C and 24(b)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Eligibility */}
            <section className="py-12 px-4 bg-white dark:bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Eligibility Criteria</h2>
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-8 rounded-2xl">
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                                <span className="text-gray-700 dark:text-gray-300"><strong>Age:</strong> 21 to 65 years at the time of loan maturity</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                                <span className="text-gray-700 dark:text-gray-300"><strong>Income:</strong> Minimum monthly income of ₹25,000 for salaried individuals</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                                <span className="text-gray-700 dark:text-gray-300"><strong>Employment:</strong> Salaried, self-employed, or business owners</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                                <span className="text-gray-700 dark:text-gray-300"><strong>Credit Score:</strong> Minimum CIBIL score of 650 (higher scores get better rates)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                                <span className="text-gray-700 dark:text-gray-300"><strong>Property:</strong> Residential property in approved locations</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Documents Required */}
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Documents Required</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Identity Proof</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                <li>• Aadhaar Card</li>
                                <li>• PAN Card</li>
                                <li>• Passport</li>
                                <li>• Voter ID</li>
                            </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Address Proof</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                <li>• Utility Bills</li>
                                <li>• Rent Agreement</li>
                                <li>• Passport</li>
                                <li>• Aadhaar Card</li>
                            </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Income Proof</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                <li>• Last 6 months salary slips</li>
                                <li>• Bank statements (6 months)</li>
                                <li>• Form 16 / ITR</li>
                                <li>• Employment certificate</li>
                            </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Property Documents</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                <li>• Sale agreement</li>
                                <li>• Property papers</li>
                                <li>• NOC from builder</li>
                                <li>• Approved building plan</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Your Home Loan?</h2>
                    <p className="text-xl mb-8 opacity-90">Apply now and get instant approval</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/#contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-200">
                            Apply Now
                        </Link>
                        <Link href="/#emi-calculator" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                            Calculate EMI
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-gray-400">© {new Date().getFullYear()} LoanWise. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
