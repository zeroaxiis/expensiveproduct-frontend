"use client";

import React from "react";
import { Container } from "@/src/app/components/container";
import { useSectionVisibility } from "@/src/app/components/ChangeBackground/useSectionVisibility";

const BenefitsSection = () => {
  const sectionRef = useSectionVisibility("bg-black", 0.5);

  return (
    <section ref={sectionRef} className=" py-20">
      <Container className="bg-black py-20 rounded-3xl">
        <div className="flex flex-col items-center gap-12">
          {/* Hero Text */}
          <h2 className="text-center font-poppins text-4xl md:text-5xl font-normal max-w-4xl leading-tight bg-gradient-to-r from-gray-400/70 via-white to-gray-400/70 bg-clip-text text-transparent">
            Because your <span className="font-normal">hard-earned money</span>
            <br />
            deserves <span className="font-normal">better than guesswork</span>.
          </h2>

          {/* Benefits Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
            {/* Card 1 - Reliable Clarity */}
            <div className="flex flex-col gap-4 p-8 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm">
              <h3 className="text-white font-poppins text-2xl font-normal text-center">
                Reliable Clarity
              </h3>
              <p className="text-white/90 font-poppins text-base font-extralight text-center leading-relaxed">
                Get complete visibility over every expense, budget, and category
                in real time. No guesswork, no confusion—just transparent
                financial tracking that keeps you in control.
              </p>
            </div>

            {/* Card 2 - Accuracy You Can Count On */}
            <div className="flex flex-col gap-4 p-8 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm">
              <h3 className="text-white font-poppins text-2xl font-normal text-center">
                Accuracy You Can Count On
              </h3>
              <p className="text-white/90 font-poppins text-base font-thin text-center leading-relaxed">
                Expenses are categorized precisely and protected through secure,
                encrypted storage. If something goes wrong, we fix it—because
                your finances deserve reliable accuracy.
              </p>
            </div>

            {/* Card 3 - Effortlessly Smart */}
            <div className="flex flex-col gap-4 p-8 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm">
              <h3 className="text-white font-poppins text-2xl font-normal text-center">
                Effortlessly Smart
              </h3>
              <p className="text-white/90 font-poppins text-base font-thin text-center leading-relaxed">
                Complex financial tasks are simplified into quick, automated
                actions. Budgets update, reminders track deadlines, and insights
                appear without any manual effort.
              </p>
            </div>

            {/* Card 4 - Insights That Drive Decisions */}
            <div className="flex flex-col gap-4 p-8 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm">
              <h3 className="text-white font-poppins text-2xl font-normal text-center">
                Insights That Drive Decisions
              </h3>
              <p className="text-white/90 font-poppins text-base font-thin text-center leading-relaxed">
                Turn your spending patterns into powerful financial decisions.
                See trends, eliminate wasteful costs, and plan confidently with
                analytics that support real progress.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BenefitsSection;
