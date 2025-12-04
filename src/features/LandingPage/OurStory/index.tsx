"use client";

import { Container } from "@/src/app/components/container";
import { useSectionVisibility } from "@/src/app/components/ChangeBackground/useSectionVisibility";

export default function OurStory() {
  const sectionRef = useSectionVisibility("bg-white", 0.5);

  return (
    <section ref={sectionRef} className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Poppins'] text-black mb-4">
              Our Story
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 font-['Poppins']">
              Empowering financial freedom through innovation
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-gray-700 font-['Poppins']">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">
                How It All Began
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Trovv was born from a simple observation: managing money
                shouldn't be complicated. We noticed that countless individuals
                and groups struggled with tracking expenses, splitting bills,
                and making informed financial decisions. Traditional tools were
                either too complex or too simplistic, leaving a gap in the
                market for an intelligent, user-friendly solution.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
                At Trovv, our mission is to democratize financial management by
                providing cutting-edge AI-powered tools that make expense
                tracking, bill splitting, and financial planning accessible to
                everyone. We believe that everyone deserves clarity and control
                over their finances, regardless of their financial literacy
                level.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">
                Our Vision
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
                We envision a world where financial stress is minimized through
                intelligent automation and insightful analytics. Our goal is to
                become the most trusted companion for individuals and groups
                seeking to optimize their financial well-being, making smart
                money management second nature.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">
                What Drives Us
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                We're driven by the belief that technology should simplify life,
                not complicate it. Our team is passionate about:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base sm:text-lg pl-4">
                <li>Creating intuitive user experiences</li>
                <li>Leveraging AI for meaningful insights</li>
                <li>Ensuring data security and privacy</li>
                <li>Building trust through transparency</li>
                <li>Continuous innovation and improvement</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">
                Join Our Journey
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
                Today, Trovv serves thousands of users who trust us with their
                financial management needs. We're constantly evolving, learning
                from our community, and pushing the boundaries of what's
                possible in financial technology. Join us as we continue to
                revolutionize the way people interact with their money.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
