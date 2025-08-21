import Link from 'next/link';
import React from 'react'

function Terms() {
    const lastUpdated = "August 19, 2025";
    const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "eligibility", title: "Eligibility & Scope" },
    { id: "information-only", title: "Information-Only; No Financial Advice" },
    { id: "lead-generation", title: "Lead Generation & Consent to Contact" },
    { id: "data-privacy", title: "Personal Data & Privacy" },
    { id: "third-parties", title: "Third‑Party Offers, Links & Disclaimers" },
    { id: "accuracy", title: "Accuracy, Availability & Changes" },
    { id: "user-obligations", title: "Your Responsibilities" },
    { id: "prohibited", title: "Prohibited Use" },
    { id: "ip", title: "Intellectual Property" },
    { id: "fees", title: "Fees & Payments" },
    { id: "liability", title: "Limitation of Liability" },
    { id: "indemnity", title: "Indemnity" },
    { id: "governing-law", title: "Governing Law & Dispute Resolution" },
    { id: "changes", title: "Changes to These Terms" },
    { id: "contact", title: "Contact Us" },
  ];
  return (
    <>
    <section className="bg-gradient-to-br from-financeBlue to-financeGreen text-white">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <p className="text-sm/6 text-gray-100">theloanwise.com</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Terms &amp; Conditions</h1>
          <p className="mt-3 max-w-3xl text-gray-100 font-">
            Please read these Terms & Conditions ("Terms") carefully before using the website
            <span className="mx-1 font-semibold">theloanwise.com</span> (the "Site"). By accessing or using the Site,
            submitting any forms, or contacting us, you agree to be bound by these Terms.
          </p>
          <div className="mt-4 text-xs text-white">Last updated: {lastUpdated}</div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        {/* Card container */}
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
              The Site is owned and operated by <strong>theloanwise.com</strong> ("we", "us", or "our"). We publish
              information about financial products such as personal loans, car loans, home loans, business loans,
              and credit cards, and we collect interest from users who wish to be contacted by lenders, NBFCs,
              banks, or our channel partners (collectively, "Partners").
            </p>

            <h2 className="font-semibold mb-2 mt-3" id="eligibility">2) Eligibility & Scope</h2>
            <ul>
              <li>You must be at least 18 years old and legally capable of entering into a binding contract.</li>
              <li>Use of the Site is intended for individuals located in India unless we explicitly state otherwise.</li>
              <li>Eligibility for any loan/credit card is determined solely by the relevant Partner per their policies.</li>
            </ul>

            <h2 className="font-semibold mb-2 mt-3" id="information-only">3) Information‑Only; No Financial Advice</h2>
            <p>
              Content on the Site is for general information and educational purposes only. We do not guarantee that
              any product is suitable for your needs, and nothing on the Site constitutes financial, legal, tax, or
              investment advice. Please evaluate products independently and/or consult a qualified advisor.
            </p>

            <h2 className="font-semibold mb-2 mt-3" id="lead-generation">4) Lead Generation & Consent to Contact</h2>
            <p>
              When you submit a form on the Site, you authorize us and our Partners to collect and process the
              personal information you provide (e.g., name, email, phone number, monthly income/salary, employment
              type, city, desired loan amount, etc.). By submitting a lead, you expressly consent to be contacted by
              us and/or our Partners via phone/voice call, SMS/WhatsApp, email, and other electronic means for
              verification and marketing, even if your number is registered on DND/NDNC. You may withdraw consent at
              any time by contacting us (see <a href="#contact">Contact Us</a>), but this will not affect prior lawful
              processing.
            </p>

            <h2 className="font-semibold mb-2 mt-3" id="data-privacy">5) Personal Data & Privacy</h2>
            <ul>
              <li>
                We handle your personal data in accordance with our <Link href="/privacy-policy" className="text-blue-700 hover:underline">Privacy Policy</Link>
                (to be provided on the Site). This explains what data we collect, why we collect it, how we use it, and
                your choices.
              </li>
              <li>
                You agree that we may share your lead details with one or more Partners for eligibility checks,
                quotations, and application processing.
              </li>
              <li>
                We may use cookies and similar technologies to improve the Site and measure performance. Adjust your
                browser settings to manage cookies.
              </li>
            </ul>

            <h2 className="font-semibold mb-2 mt-3" id="third-parties">6) Third‑Party Offers, Links & Disclaimers</h2>
            <ul>
              <li>
                Product descriptions, interest rates, fees, eligibility criteria, rewards, and other terms are provided
                by Partners and may change without notice. Final terms apply as per the Partner’s documentation.
              </li>
              <li>
                External links on the Site lead to third‑party websites we do not control. We are not responsible for
                their content, security, or privacy practices.
              </li>
              <li>
                We may receive referral/affiliate fees from Partners if you apply for or obtain a product via our Site.
              </li>
            </ul>

            <h2 className="font-semibold mb-2 mt-3" id="accuracy">7) Accuracy, Availability & Changes</h2>
            <ul>
              <li>We try to keep information accurate and up to date but do not warrant completeness or accuracy.</li>
              <li>We may add, modify, or remove content, features, or services at any time without liability.</li>
              <li>
                The Site may be unavailable due to maintenance or technical issues. We are not liable for interruptions
                or data loss.
              </li>
            </ul>

            <h2 className="font-semibold mb-2 mt-3" id="user-obligations">8) Your Responsibilities</h2>
            <ul>
              <li>Provide true, accurate, and current information when submitting any form or inquiry.</li>
              <li>Do not submit information on someone else’s behalf without their explicit consent.</li>
              <li>Keep your devices and accounts secure and notify us of any suspected misuse.</li>
            </ul>

            <h2 className="font-semibold mb-2 mt-3" id="prohibited">9) Prohibited Use</h2>
            <p>
              You agree not to misuse the Site, including but not limited to: reverse engineering; scraping or
              harvesting data without permission; introducing malware; interfering with Site functionality; attempting
              unauthorized access; or using the Site for fraud, misleading representations, or unlawful activity.
            </p>

            <h2 className="font-semibold mb-2 mt-3" id="ip">10) Intellectual Property</h2>
            <p>
              All content on the Site—text, graphics, logos, trademarks, icons, images, and software—is owned by us or
              our licensors and protected by applicable IP laws. You may not copy, reproduce, modify, distribute, or
              create derivative works without prior written permission, except for personal, non‑commercial use as
              permitted by law.
            </p>

            <h2 className="font-semibold mb-2 mt-3" id="fees">11) Fees & Payments</h2>
            <p>
              Use of the Site is generally free for users. Some Partners may charge fees (e.g., processing, annual,
              or late fees). Any such fees are governed by the Partner’s terms and are payable directly to the Partner.
              We do not control or collect those fees unless explicitly stated.
            </p>

            <h2 className="font-semibold mb-2 mt-3" id="liability">12) Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, we (and our officers, employees, and agents) shall not be liable
              for any indirect, incidental, special, consequential, or punitive damages, or for loss of profits,
              revenue, data, or goodwill, arising from or related to your use of the Site, third‑party services,
              or reliance on any information provided on the Site.
            </p>

            <h2 className="font-semibold mb-2 mt-3" id="indemnity">13) Indemnity</h2>
            <p>
              You agree to defend, indemnify, and hold us harmless from and against any claims, liabilities, damages,
              losses, and expenses (including reasonable legal fees) arising out of or in any way connected with your
              breach of these Terms or your misuse of the Site.
            </p>

            <h2 className="font-semibold mb-2 mt-3" id="governing-law">14) Governing Law & Dispute Resolution</h2>
            <p>
              These Terms are governed by the laws of India, without regard to conflict‑of‑law principles. Subject to
              applicable law, courts located at <em>India, Haryana, India</em> shall have exclusive jurisdiction.
              You agree to first attempt to resolve any dispute informally by contacting us (see below) before seeking
              other remedies.
            </p>

            <h2 className="font-semibold mb-2 mt-3" id="changes">15) Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. The updated version will be indicated by a revised
              "10/08/2025" date. Your continued use of the Site after any changes constitutes acceptance of the
              updated Terms.
            </p>

            <h2 className="font-semibold mb-2 mt-3" id="contact">16) Contact Us</h2>
            <p>
              If you have questions about these Terms or wish to withdraw consent to be contacted, please reach out:
            </p>
            <ul>
              <li>Email: <a href="mailto:info@theloanwise.com" className="text-blue-700 hover:underline">info@theloanwise.com</a> </li>
              
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

export default Terms