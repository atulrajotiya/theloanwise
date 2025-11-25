import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
            <Navbar />

            <section className="pt-24 pb-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Privacy Policy
                    </h1>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
                        Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>

                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg space-y-8">

                        <section>
                            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Welcome to LoanWise. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                We may collect, use, store and transfer different kinds of personal data about you:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                                <li><strong>Identity Data:</strong> First name, last name, date of birth</li>
                                <li><strong>Contact Data:</strong> Email address, telephone numbers, billing address</li>
                                <li><strong>Financial Data:</strong> Bank account details, income information</li>
                                <li><strong>Transaction Data:</strong> Details about payments and loan applications</li>
                                <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
                                <li><strong>Usage Data:</strong> Information about how you use our website and services</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                                <li>To process your loan applications and provide our services</li>
                                <li>To manage our relationship with you</li>
                                <li>To improve our website and services</li>
                                <li>To send you marketing communications (with your consent)</li>
                                <li>To comply with legal and regulatory requirements</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We use industry-standard encryption and security protocols to protect your data.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">5. Data Retention</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">6. Your Legal Rights</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                Under certain circumstances, you have rights under data protection laws in relation to your personal data:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                                <li>Request access to your personal data</li>
                                <li>Request correction of your personal data</li>
                                <li>Request erasure of your personal data</li>
                                <li>Object to processing of your personal data</li>
                                <li>Request restriction of processing your personal data</li>
                                <li>Request transfer of your personal data</li>
                                <li>Right to withdraw consent</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">7. Third-Party Links</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Our website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                If you have any questions about this privacy policy or our privacy practices, please contact us at:
                            </p>
                            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                                <p className="text-gray-700 dark:text-gray-300">
                                    <strong>Email:</strong> privacy@loanwise.com<br />
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
