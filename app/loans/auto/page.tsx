import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function AutoLoan() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
            <Navbar />

            <section className="pt-24 pb-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Auto Loans
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Drive your dream car home with our flexible auto loan solutions
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Key Features</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                            <div className="text-4xl mb-4">🚗</div>
                            <h3 className="text-xl font-semibold mb-3">New & Used Cars</h3>
                            <p className="text-gray-600 dark:text-gray-400">Financing available for both new and pre-owned vehicles</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                            <div className="text-4xl mb-4">💯</div>
                            <h3 className="text-xl font-semibold mb-3">Up to 100% Funding</h3>
                            <p className="text-gray-600 dark:text-gray-400">Finance up to 100% of the on-road price</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                            <div className="text-4xl mb-4">📉</div>
                            <h3 className="text-xl font-semibold mb-3">Low Interest Rates</h3>
                            <p className="text-gray-600 dark:text-gray-400">Competitive rates starting from 7.5% per annum</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                            <div className="text-4xl mb-4">⏰</div>
                            <h3 className="text-xl font-semibold mb-3">Flexible Tenure</h3>
                            <p className="text-gray-600 dark:text-gray-400">Repayment period from 1 to 7 years</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                            <div className="text-4xl mb-4">⚡</div>
                            <h3 className="text-xl font-semibold mb-3">Quick Approval</h3>
                            <p className="text-gray-600 dark:text-gray-400">Get approved within 48 hours</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                            <div className="text-4xl mb-4">🎯</div>
                            <h3 className="text-xl font-semibold mb-3">Minimal Documentation</h3>
                            <p className="text-gray-600 dark:text-gray-400">Simple and hassle-free process</p>
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
                                <span className="text-gray-700 dark:text-gray-300"><strong>Age:</strong> 21 to 65 years</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                                <span className="text-gray-700 dark:text-gray-300"><strong>Income:</strong> Minimum monthly income of ₹20,000</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                                <span className="text-gray-700 dark:text-gray-300"><strong>Employment:</strong> Salaried or self-employed</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                                <span className="text-gray-700 dark:text-gray-300"><strong>Credit Score:</strong> Minimum CIBIL score of 650</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                                <span className="text-gray-700 dark:text-gray-300"><strong>Driving License:</strong> Valid driving license required</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Own Your Dream Car?</h2>
                    <p className="text-xl mb-8 opacity-90">Apply now and drive home your dream vehicle</p>
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
