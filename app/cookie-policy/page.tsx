import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function CookiePolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
            <Navbar />

            <section className="pt-24 pb-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Cookie Policy
                    </h1>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
                        Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>

                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg space-y-8">

                        <section>
                            <h2 className="text-2xl font-bold mb-4">1. What Are Cookies</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">2. How We Use Cookies</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                We use cookies for the following purposes:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                                <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
                                <li><strong>Analytics Cookies:</strong> Collect information about how you use our website</li>
                                <li><strong>Marketing Cookies:</strong> Track your online activity to help advertisers deliver more relevant advertising</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">3. Types of Cookies We Use</h2>

                            <div className="space-y-6">
                                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">Session Cookies</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Temporary cookies that are erased when you close your browser. They help us remember your actions during a browsing session.
                                    </p>
                                </div>

                                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-2 text-purple-600 dark:text-purple-400">Persistent Cookies</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Remain on your device for a set period or until you delete them. They help us recognize you as a returning visitor.
                                    </p>
                                </div>

                                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-2 text-green-600 dark:text-green-400">Third-Party Cookies</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Set by third-party services we use, such as Google Analytics, to help us improve our website and services.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">4. Managing Cookies</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                You can control and manage cookies in various ways:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                                <li>Most browsers allow you to refuse or accept cookies</li>
                                <li>You can delete cookies that are already stored on your device</li>
                                <li>You can set your browser to notify you when you receive a cookie</li>
                                <li>You can opt-out of third-party cookies through your browser settings</li>
                            </ul>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                                Please note that blocking or deleting cookies may impact your experience on our website and some features may not function properly.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">5. Cookies We Use</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                                            <th className="py-3 px-4 font-semibold">Cookie Name</th>
                                            <th className="py-3 px-4 font-semibold">Purpose</th>
                                            <th className="py-3 px-4 font-semibold">Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-600 dark:text-gray-300">
                                        <tr className="border-b border-gray-200 dark:border-gray-700">
                                            <td className="py-3 px-4">session_id</td>
                                            <td className="py-3 px-4">Maintains user session</td>
                                            <td className="py-3 px-4">Session</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-700">
                                            <td className="py-3 px-4">user_preferences</td>
                                            <td className="py-3 px-4">Stores user settings</td>
                                            <td className="py-3 px-4">1 year</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-gray-700">
                                            <td className="py-3 px-4">_ga</td>
                                            <td className="py-3 px-4">Google Analytics tracking</td>
                                            <td className="py-3 px-4">2 years</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">6. Updates to This Policy</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business operations. We encourage you to review this policy periodically.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                If you have any questions about our use of cookies, please contact us:
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
