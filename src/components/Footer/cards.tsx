import Image from "next/image";

export function FeatureCards() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 h-full">
        {/* Card 1: Large Square (Split Bills) */}
        <div className="bg-[#F2F2F2] rounded-3xl sm:rounded-4xl p-6 sm:p-8 md:p-10 flex flex-col justify-center hover:shadow-lg transition-shadow duration-300 min-h-[180px] sm:min-h-80 md:h-full group">
          <div>
            <div className="relative w-14 h-14 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-3 sm:mb-5 md:mb-6">
              <Image
                src="/split-bill-instantly.png"
                alt="Split Bills Instantly"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg sm:text-2xl font-bold mb-1.5 sm:mb-3 font-['Poppins']">
              Split Bills Instantly
            </h3>
            <p className="text-xs sm:text-base text-gray-500 leading-relaxed font-['Poppins']">
              Accurately track shared expenses and settle balances with total
              confidence. Ensure every penny is accounted for.
            </p>
          </div>
        </div>

        {/* Right Column Stack */}
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
          {/* Card 2: Top Rectangle (Track) */}
          <div className="bg-[#F2F2F2] rounded-3xl sm:rounded-4xl p-6 sm:p-7 md:p-8 flex flex-col justify-center hover:shadow-lg transition-shadow duration-300 min-h-[180px] sm:min-h-0 sm:flex-1 group">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 mb-3 sm:mb-4">
              <Image
                src="/track-on-the-go.png"
                alt="Track on the Go"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2 font-['Poppins']">
              Track on the Go
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 font-['Poppins']">
              Track daily transactions securely and instantly on any device.
            </p>
          </div>

          {/* Card 3: Bottom Rectangle (Savings) */}
          <div className="bg-[#F2F2F2] rounded-3xl sm:rounded-4xl p-6 sm:p-7 md:p-8 flex flex-col justify-center hover:shadow-lg transition-shadow duration-300 min-h-[180px] sm:min-h-0 sm:flex-1 group relative overflow-hidden">
            <div className="relative z-10">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 mb-3 sm:mb-4">
                <Image
                  src="/smart-saving.png"
                  alt="Smart Savings"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2 font-['Poppins']">
                Smart Savings
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-['Poppins']">
                Optimize your budget with precise data to grow your savings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
