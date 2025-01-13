"use client";

import { Card } from "@/components/ui/card";
import { ArrowRight, Share2, DollarSign, TrendingUp } from "lucide-react";

export default function AffiliateSteps() {
  return (
    <section className="py-28 px-16 bg-white">
      <div className="flex flex-col items-center gap-8">
        <div className="text-center">
          <h1 className="title ">Make dreams come true and earn!</h1>
          <p className="subtitle">
            Earn money by sharing the power of dreams with others. It&apos;s
            easy and rewarding!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-16 relative w-full ">
          {/* Card 1 */}
          <div className="relative flex flex-col items-center">
            <Card className="text-center border-0 p-6 bg-transparent shadow-none">
              <ArrowRight className="mx-auto text-purple-400 mb-4" size={36} />
              <h2 className="text-xl font-semibold mb-4">Step 1</h2>
              <span className="text-gray-600">
                Sign up for our affiliate program and get your unique referral
                link
              </span>
            </Card>
            {/* Line to next card */}
            <div className="hidden sm:block absolute top-6 left-40 transform translate-x-1/2">
              <svg
                width="210"
                height="15"
                viewBox="0 0 210 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 13V13C69.481 -0.858773 139.058 -1.02214 206.604 12.5196L209 13"
                  stroke="#EBBFFF"
                  strokeWidth="3"
                  strokeDasharray="13 13"
                />
              </svg>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative flex flex-col items-center">
            <Card className="text-center border-0 p-6 bg-transparent shadow-none">
              <Share2 className="mx-auto text-purple-400 mb-4" size={36} />
              <h2 className="text-xl font-semibold mb-4">Step 2</h2>
              <span className="text-gray-600">
                Share your referral link with friends, family, and followers
              </span>
            </Card>
            {/* Line to next card */}
            <div className="hidden sm:block absolute top-6 left-[70px] transform translate-x-1/2">
              <svg
                width="210"
                height="15"
                viewBox="0 0 210 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 13V13C69.481 -0.858773 139.058 -1.02214 206.604 12.5196L209 13"
                  stroke="#EBBFFF"
                  strokeWidth="3"
                  strokeDasharray="13 13"
                />
              </svg>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative flex flex-col items-center">
            <Card className="text-center border-0 p-6 bg-transparent shadow-none">
              <DollarSign className="mx-auto text-purple-400 mb-4" size={36} />
              <h2 className="text-xl font-semibold mb-4">Step 3</h2>
              <span className="text-gray-600">
                Earn commissions for every active dreamer who signs up through
                your link
              </span>
            </Card>
            {/* Line to next card */}
            <div className="hidden sm:block absolute top-6 left-[70px] transform translate-x-1/2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="210"
                height="15"
                viewBox="0 0 210 15"
                fill="none"
              >
                <path
                  d="M2 13V13C69.481 -0.858773 139.058 -1.02214 206.604 12.5196L209 13"
                  stroke="#EBBFFF"
                  stroke-width="3"
                  stroke-dasharray="13 13"
                />
              </svg>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative flex flex-col items-center">
            <Card className="text-center border-0 p-6 bg-transparent shadow-none">
              <TrendingUp className="mx-auto text-purple-400 mb-4" size={36} />
              <h2 className="text-xl font-semibold mb-4">Step 4</h2>
              <span className="text-gray-600">
                Watch your earnings grow as more dreamers join the program
              </span>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
