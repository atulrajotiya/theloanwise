import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
            <Navbar />

            <section className="pt-24 pb-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Terms & Conditions
                    </h1>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
                        Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>

                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg space-y-8">

                        <section>
                            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                By accessing and using LoanWise's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">2. Use of Services</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                Our services are subject to the following terms:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                                <li>You must be at least 18 years old to use our services</li>
                                <li>You must provide accurate and complete information</li>
                                <li>You are responsible for maintaining the confidentiality of your account</li>
                                <li>You agree not to use the service for any unlawful purpose</li>
                                <li>You will not attempt to gain unauthorized access to our systems</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">3. Loan Application Process</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                When applying for a loan through LoanWise:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                                <li>All information provided must be accurate and truthful</li>
                                <li>Loan approval is subject to credit verification and eligibility criteria</li>
                                <li>Interest rates and terms may vary based on creditworthiness</li>
                                <li>We reserve the right to reject any application without providing reasons</li>
                                <li>Processing fees, if applicable, are non-refundable</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">4. Repayment Terms</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Borrowers agree to repay the loan amount along with applicable interest and charges as per the agreed schedule. Failure to make timely payments may result in penalties, additional charges, and negative impact on credit score. Late payment fees and other charges will be as per the loan agreement.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                The content, organization, graphics, design, compilation, and other matters related to the LoanWise website are protected under applicable copyrights, trademarks and other proprietary rights. Copying, redistribution, use or publication of any such matters or any part of the site is prohibited.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                LoanWise shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">7. Modifications to Terms</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms and Conditions on this page. Your continued use of the service after such modifications constitutes your acknowledgment and acceptance of the modified terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                These terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in Mumbai, India.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                If you have any questions about these Terms and Conditions, please contact us:
                            </p>
                            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                                <p className="text-gray-700 dark:text-gray-300">
                                    <strong>Email:</strong> legal@loanwise.com<br />
                                    <strong>Phone:</strong> +91 1800-123-4567
                                </p>
                            </div>
                        </section>

                    </div>

                    <div className="mt-8 text-center">
                        <Link href="/" className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 text-white py-8 mt-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-gray-400">© {new Date().getFullYear()} LoanWise. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
