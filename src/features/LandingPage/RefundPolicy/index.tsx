"use client";

import { Container } from "@/src/app/components/container";
import { useSectionVisibility } from "@/src/app/components/ChangeBackground/useSectionVisibility";

export default function RefundPolicy() {
  const sectionRef = useSectionVisibility("bg-white", 0.5);

  return (
    <section ref={sectionRef} className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Poppins'] text-black mb-4">
              Refund & Cancellation Policy
            </h1>
            <p className="text-lg text-gray-600 font-['Poppins']">
              Last updated: December 4, 2025
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-gray-700 font-['Poppins']">
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Our Commitment
              </h2>
              <p className="leading-relaxed">
                At Trovv, we strive to provide the best possible service to our
                users. We understand that circumstances may change, and we have
                designed our refund and cancellation policy to be fair and
                transparent for all parties involved.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Subscription Cancellation
              </h2>
              <p className="leading-relaxed mb-3">
                You may cancel your subscription at any time through your
                account settings. Upon cancellation:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  You will continue to have access to premium features until the
                  end of your current billing period
                </li>
                <li>
                  No further charges will be made to your payment method after
                  the current period ends
                </li>
                <li>
                  Your account will automatically convert to a free tier with
                  limited features
                </li>
                <li>All your data will be retained and remain accessible</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Refund Eligibility
              </h2>
              <p className="leading-relaxed mb-3">
                Refunds may be issued under the following conditions:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>14-Day Money-Back Guarantee:</strong> If you are not
                  satisfied with our service, you may request a full refund
                  within 14 days of your initial subscription purchase
                </li>
                <li>
                  <strong>Technical Issues:</strong> If our service experiences
                  significant downtime or technical issues that prevent normal
                  usage, you may be eligible for a prorated refund
                </li>
                <li>
                  <strong>Billing Errors:</strong> If you were charged
                  incorrectly due to a system error, we will issue a full refund
                  of the erroneous charge
                </li>
                <li>
                  <strong>Duplicate Charges:</strong> Any duplicate charges will
                  be refunded immediately upon verification
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Non-Refundable Situations
              </h2>
              <p className="leading-relaxed mb-3">
                Refunds will NOT be issued in the following cases:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  Requests made after the 14-day money-back guarantee period has
                  expired
                </li>
                <li>Partial month refunds for monthly subscriptions</li>
                <li>
                  Cancellations made mid-billing cycle (access continues until
                  period end)
                </li>
                <li>
                  Account suspension or termination due to violation of Terms of
                  Service
                </li>
                <li>Change of mind after the guarantee period</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">
                How to Request a Refund
              </h2>
              <p className="leading-relaxed mb-3">
                To request a refund, please follow these steps:
              </p>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li>Contact our support team at support@trovv.com</li>
                <li>
                  Provide your account email and reason for the refund request
                </li>
                <li>
                  Our team will review your request within 2-3 business days
                </li>
                <li>
                  If approved, refunds will be processed to your original
                  payment method within 5-10 business days
                </li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Processing Time
              </h2>
              <p className="leading-relaxed">
                Once a refund is approved, it typically takes 5-10 business days
                for the funds to appear in your account. The exact timing may
                vary depending on your payment provider and bank. You will
                receive an email confirmation once the refund has been
                processed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Annual Subscriptions
              </h2>
              <p className="leading-relaxed">
                Annual subscriptions are eligible for a prorated refund within
                the first 30 days of purchase. After 30 days, annual
                subscriptions follow the standard cancellation policy where
                access continues until the end of the annual period with no
                refund issued.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Free Trial Cancellations
              </h2>
              <p className="leading-relaxed">
                You may cancel your free trial at any time before the trial
                period ends without being charged. If you do not cancel before
                the trial ends, your payment method will be charged for the
                subscription, and standard refund policies will apply.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Contact Information
              </h2>
              <p className="leading-relaxed">
                If you have any questions about our Refund & Cancellation
                Policy, please contact us at:
                <br />
                <strong>Email:</strong> support@trovv.com
                <br />
                <strong>Response Time:</strong> We typically respond within 24
                hours during business days
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Policy Changes
              </h2>
              <p className="leading-relaxed">
                Trovv reserves the right to modify this refund and cancellation
                policy at any time. Any changes will be effective immediately
                upon posting to our website. Continued use of our service after
                changes constitutes acceptance of the modified policy.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
