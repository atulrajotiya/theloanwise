import React from 'react'

function Privacy() {
    const lastUpdated = "August 19, 2025";

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "information-we-collect", title: "Information We Collect" },
    { id: "how-we-use", title: "How We Use Your Information" },
    { id: "data-sharing", title: "Data Sharing & Disclosure" },
    { id: "cookies", title: "Cookies & Tracking Technologies" },
    { id: "data-security", title: "Data Security" },
    { id: "data-retention", title: "Data Retention" },
    { id: "user-rights", title: "Your Rights" },
    { id: "third-parties", title: "Third‑Party Websites & Services" },
    { id: "children", title: "Children’s Privacy" },
    { id: "changes", title: "Changes to This Privacy Policy" },
    { id: "contact", title: "Contact Us" },
  ];
  return (
    <>
    <section className="bg-gradient-to-br from-financeBlue to-financeGreen text-white">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <p className="text-sm/6 text-gray-100">theloanwise.com</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Privacy Policy</h1>
          <p className="mt-3 max-w-3xl text-gray-100 font-medium">
            This Privacy Policy explains how <span className="font-semibold">theloanwise.com</span> ("we", "us", or
            "our") collects, uses, shares, and protects the personal information you provide when using our website.
          </p>
          <div className="mt-4 text-xs text-white">Last updated: {lastUpdated}</div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          {/* Table of contents */}
          <div className="mb-8 rounded-xl bg-gray-50 p-5">
            <h2  className="text-base font-semibold text-gray-900">Table of contents</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sections */}
          <article className="prose prose-gray max-w-none">
            <h2 className="font-semibold mb-2 mt-3" id="introduction">1) Introduction</h2>
            <p>
              By using our website <strong>theloanwise.com</strong>, you agree to the terms outlined in this Privacy
              Policy. If you do not agree, please do not use the Site.
            </p>

            <h2 className="font-semibold mb-2 mt-3" id="information-we-collect">2) Information We Collect</h2>
            <ul>
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, monthly salary/income,
                employment type, and other details submitted through our lead forms.
              </li>
              <li>
                <strong>Non‑Personal Information:</strong> Browser type, device information, IP address, referral URL,
                and browsing behavior on the Site.
              </li>
              <li>
                <strong>Cookies & Tracking Data:</strong> Information collected through cookies and similar technologies
                (see below).
              </li>
            </ul>

            <h2 className="font-semibold mb-2 mt-3" id="how-we-use">3) How We Use Your Information</h2>
            <ul>
              <li>To connect you with lenders, NBFCs, banks, or partners for loan/credit card offers.</li>
              <li>To contact you with updates, offers, or follow‑ups based on your lead submission.</li>
              <li>To personalize user experience and improve website functionality.</li>
              <li>To comply with legal obligations and enforce our Terms & Conditions.</li>
            </ul>

            <h2 className="font-semibold mb-2 mt-3" id="data-sharing">4) Data Sharing & Disclosure</h2>
            <ul>
              <li>
                We may share your personal information with financial institutions, NBFCs, channel partners, or other
                third parties for the purpose of evaluating eligibility and providing loan/credit card offers.
              </li>
              <li>
                We may also share your information with service providers (e.g., hosting, analytics, email providers)
                who process data on our behalf.
              </li>
              <li>
                We will disclose information if required by law, regulation, or legal process.
              </li>
            </ul>

            <h2 className="font-semibold mb-2 mt-3" id="cookies">5) Cookies & Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to:
            </p>
            <ul>
              <li>Remember your preferences and settings.</li>
              <li>Measure site performance and analyze traffic.</li>
              <li>Deliver targeted advertising and promotional content.</li>
            </ul>
            <p>
              You can control or disable cookies through your browser settings, but some features of the Site may not
              function properly.
            </p>

            <h2 className="font-semibold mb-2 mt-3" id="data-security">6) Data Security</h2>
            <p>
              We implement reasonable security measures (technical and organizational) to protect your personal
              information from unauthorized access, disclosure, alteration, or destruction. However, no system can be
              guaranteed to be 100% secure.
            </p>

            <h2 className="font-semibold mb-2 mt-3" id="data-retention">7) Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in
              this Policy, unless a longer retention period is required by law.
            </p>

            <h2 className="font-semibold mb-2 mt-3" id="user-rights">8) Your Rights</h2>
            <p>You may have the following rights under applicable law:</p>
            <ul>
              <li>Access and request a copy of your personal information.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request deletion of your data, subject to legal and contractual restrictions.</li>
              <li>Withdraw consent to marketing communications at any time.</li>
            </ul>

            <h2 className="font-semibold mb-2 mt-3" id="third-parties">9) Third‑Party Websites & Services</h2>
            <p>
              Our website may contain links to third‑party websites. We are not responsible for their privacy practices
              or content. Please review the privacy policies of those websites.
            </p>

            <h2 className="font-semibold mb-2 mt-3" id="children">10) Children’s Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal
              information from minors. If you believe a minor has provided data, please contact us immediately.
            </p>

            <h2 className="font-semibold mb-2 mt-3" id="changes">11) Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be effective once posted
              on this page, with the updated date noted at the top.
            </p>

            <h2 className="font-semibold mb-2 mt-3" id="contact">12) Contact Us</h2>
            <p>If you have questions, concerns, or requests regarding this Privacy Policy, please contact us at:</p>
            <ul>
              <li>Email: <a href="mailto:privacy@theloanwise.com" className="text-blue-700 hover:underline">privacy@theloanwise.com</a> </li>
              
            </ul>

           
          </article>
        </div>

        {/* Back to top */}
        <div className="mx-auto mt-8 flex max-w-5xl justify-end">
          <a
            href="#"
            className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Back to top ↑
          </a>
        </div>
      </section>
    </>
  )
}

export default Privacy