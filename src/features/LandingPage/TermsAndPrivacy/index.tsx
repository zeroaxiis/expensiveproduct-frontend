"use client";

import { Container } from "@/src/app/components/container";
import { useSectionVisibility } from "@/src/app/components/ChangeBackground/useSectionVisibility";

export default function TermsAndPrivacy() {
  const sectionRef = useSectionVisibility("bg-white", 0.5);

  return (
    <section ref={sectionRef} className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Poppins'] text-black mb-4">
              Terms & Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 font-['Poppins']">
              Last updated: December 4, 2025
            </p>
          </div>

          {/* Terms & Conditions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-black font-['Poppins'] mb-8 pb-4 border-b-2 border-black">
              Terms & Conditions
            </h2>

            <div className="space-y-6 text-gray-700 font-['Poppins']">
              <div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  1. Acceptance of Terms
                </h3>
                <p className="leading-relaxed">
                  By accessing and using Trovv, you accept and agree to be bound
                  by the terms and provision of this agreement. If you do not
                  agree to these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  2. Use License
                </h3>
                <p className="leading-relaxed mb-3">
                  Permission is granted to temporarily use Trovv for personal,
                  non-commercial purposes. This is the grant of a license, not a
                  transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Modify or copy the materials</li>
                  <li>
                    Use the materials for any commercial purpose or public
                    display
                  </li>
                  <li>Attempt to decompile or reverse engineer any software</li>
                  <li>
                    Remove any copyright or proprietary notations from the
                    materials
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  3. User Accounts
                </h3>
                <p className="leading-relaxed">
                  You are responsible for maintaining the confidentiality of
                  your account and password. You agree to accept responsibility
                  for all activities that occur under your account or password.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  4. Service Modifications
                </h3>
                <p className="leading-relaxed">
                  Trovv reserves the right to modify or discontinue, temporarily
                  or permanently, the service (or any part thereof) with or
                  without notice. We shall not be liable to you or any third
                  party for any modification, suspension, or discontinuance of
                  the service.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  5. Limitation of Liability
                </h3>
                <p className="leading-relaxed">
                  In no event shall Trovv or its suppliers be liable for any
                  damages (including, without limitation, damages for loss of
                  data or profit, or due to business interruption) arising out
                  of the use or inability to use Trovv materials.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  6. Governing Law
                </h3>
                <p className="leading-relaxed">
                  These terms and conditions are governed by and construed in
                  accordance with applicable laws, and you irrevocably submit to
                  the exclusive jurisdiction of the courts in that location.
                </p>
              </div>
            </div>
          </div>

          {/* Privacy Policy */}
          <div>
            <h2 className="text-3xl font-bold text-black font-['Poppins'] mb-8 pb-4 border-b-2 border-black">
              Privacy Policy
            </h2>

            <div className="space-y-6 text-gray-700 font-['Poppins']">
              <div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  1. Information We Collect
                </h3>
                <p className="leading-relaxed mb-3">
                  We collect several types of information for various purposes
                  to provide and improve our service to you:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    Personal identification information (Name, email, etc.)
                  </li>
                  <li>Financial transaction data</li>
                  <li>Usage data and analytics</li>
                  <li>Device and browser information</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  2. How We Use Your Information
                </h3>
                <p className="leading-relaxed mb-3">
                  Trovv uses the collected data for various purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>To provide and maintain our service</li>
                  <li>To notify you about changes to our service</li>
                  <li>To provide customer support and respond to inquiries</li>
                  <li>To gather analysis or valuable information</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  3. Data Security
                </h3>
                <p className="leading-relaxed">
                  The security of your data is important to us. We implement
                  industry-standard security measures including encryption,
                  secure servers, and regular security audits to protect your
                  personal information. However, no method of transmission over
                  the Internet is 100% secure.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  4. Data Sharing
                </h3>
                <p className="leading-relaxed">
                  We do not sell, trade, or rent your personal identification
                  information to third parties. We may share generic aggregated
                  demographic information not linked to any personal
                  identification information with our business partners and
                  trusted affiliates.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  5. Your Rights
                </h3>
                <p className="leading-relaxed mb-3">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Rectify inaccurate personal data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing your personal data</li>
                  <li>Data portability</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  6. Cookies
                </h3>
                <p className="leading-relaxed">
                  We use cookies and similar tracking technologies to track
                  activity on our service and hold certain information. You can
                  instruct your browser to refuse all cookies or to indicate
                  when a cookie is being sent.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  7. Changes to Privacy Policy
                </h3>
                <p className="leading-relaxed">
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  8. Contact Us
                </h3>
                <p className="leading-relaxed">
                  If you have any questions about these Terms or Privacy Policy,
                  please contact us at support@trovv.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
