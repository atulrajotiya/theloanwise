import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function BusinessLoan() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
            <Navbar />

            <section className="pt-24 pb-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Business Loans
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Fuel your business growth with customized financing solutions
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Key Features</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-xl font-semibold mb-3">High Loan Amount</h3>
                            <p className="text-gray-600 dark:text-gray-400">Get up to ₹10 Crores for business expansion</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                            <div className="text-4xl mb-4">📊</div>
                            <h3 className="text-xl font-semibold mb-3">Competitive Rates</h3>
                            <p className="text-gray-600 dark:text-gray-400">Interest rates starting from 8.5% per annum</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                            <div className="text-4xl mb-4">⏰</div>
                            <h3 className="text-xl font-semibold mb-3">Long Tenure</h3>
                            <p className="text-gray-600 dark:text-gray-400">Repayment tenure up to 10 years</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                            <div className="text-4xl mb-4">🎯</div>
                            <h3 className="text-xl font-semibold mb-3">Multipurpose</h3>
                            <p className="text-gray-600 dark:text-gray-400">Use for expansion, equipment, working capital, or inventory</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                            <div className="text-4xl mb-4">💼</div>
                            <h3 className="text-xl font-semibold mb-3">For All Business Types</h3>
                            <p className="text-gray-600 dark:text-gray-400">Available for startups, SMEs, and established businesses</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                            <div className="text-4xl mb-4">📈</div>
                            <h3 className="text-xl font-semibold mb-3">Tax Benefits</h3>
                            <p className="text-gray-600 dark:text-gray-400">Interest paid is tax-deductible as business expense</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 bg-white dark:bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Eligibility Criteria</h2>
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-8 rounded-2xl">
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                                <span className="text-gray-700 dark:text-gray-300"><strong>Business Age:</strong> Minimum 2 years of business operation</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                                <span className="text-gray-700 dark:text-gray-300"><strong>Annual Turnover:</strong> Minimum ₹10 Lakhs per annum</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                                <span className="text-gray-700 dark:text-gray-300"><strong>Credit Score:</strong> Minimum CIBIL score of 700</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                                <span className="text-gray-700 dark:text-gray-300"><strong>Business Type:</strong> Proprietorship, Partnership, Private Limited, or LLP</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                                <span className="text-gray-700 dark:text-gray-300"><strong>Profitability:</strong> Business should be profitable for at least 1 year</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
                    <p className="text-xl mb-8 opacity-90">Get the funding you need to take your business to the next level</p>
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

            <footer className="bg-gray-900 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-gray-400">© {new Date().getFullYear()} LoanWise. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
