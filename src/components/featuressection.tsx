"use client";

import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-24 px-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="title">Dream Big, Achieve More</h2>
        <p className="subtitle mt-2">
          Unlock the power of dreaming with Dreamerz platform
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-auto">
        <Card className="p-8 bg-white shadow-md rounded-xl flex items-center col-span-2 gap-8">
          {/* Left Section */}
          <div className="flex-1">
            <h3 className="text-lg text-purple-500 font-semibold">Inspire</h3>
            <h2 className="text-2xl font-bold mt-2">
              Make a Difference in Someone&apos;s Life Today
            </h2>
            <p className="text-gray-600 mt-4">
              Become an affiliate and make a positive impact
            </p>
            <Button
              variant="link"
              className="text-purple-500 mt-6 flex items-center gap-2"
            >
              Join Now <ChevronRight />
            </Button>
          </div>

          {/* Right Section */}
          <div className="relative flex-1 max-w-md">
            <div className="absolute -top-4 right-0 w-full h-full transform rotate-[-3deg] rounded-xl bg-linear-to-tr from-purple-100 to-yellow-100 shadow-md"></div>
            <img
              src="https://via.placeholder.com/300x200"
              alt="Help Others"
              className="relative w-full h-auto rounded-xl object-cover"
            />
          </div>
        </Card>
        <Card className="p-8 bg-white shadow-md rounded-xl flex flex-col items-start gap-6">
          {/* Header */}
          <div>
            <h3 className="text-lg text-purple-500 font-semibold">Support</h3>
            <h4 className="text-2xl font-bold">Help Others Achieve</h4>
            <p className="text-gray-600 mt-2">
              Contribute to changing people’s lives.
            </p>
          </div>

          {/* Image Card */}
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 -rotate-[2deg] bg-linear-to-tr from-purple-100 to-purple-200 rounded-lg shadow-md"></div>
            <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Florence"
                className="w-full h-32 object-cover"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-sm">
                <img
                  src="https://via.placeholder.com/64"
                  alt="Inger Kristiansen"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="p-4 text-center">
                <h5 className="text-lg font-semibold">Inger Kristiansen</h5>
                <p className="text-gray-600 text-sm">
                  My dream is to buy some tickets to Florence for a weekend!
                </p>
                <div className="mt-4 flex justify-between text-gray-600 text-sm">
                  <span>Scope</span>
                  <span className="font-bold text-black">200$</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-8 bg-white shadow-md rounded-xl flex flex-col gap-6">
          {/* Header Section */}
          <div>
            <h3 className="text-lg text-purple-500 font-semibold">Earn</h3>
            <h4 className="text-2xl font-bold mt-2">Grow Your Earnings</h4>
            <p className="text-gray-600 mt-2">
              Start earning money by promoting dreams.
            </p>
          </div>

          {/* Dream Card */}
          <div className="relative w-full max-w-md">
            <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="p-4 flex items-center gap-4">
                <img
                  src="https://via.placeholder.com/48"
                  alt="Adriana Lima"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h5 className="text-sm font-semibold">Adriana Lima</h5>
                  <span className="text-xs text-gray-500">3 hours ago</span>
                </div>
              </div>
              <img
                src="https://via.placeholder.com/300x200"
                alt="Grow Earnings"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600">
                  My dream is to own a MacBook for my studies at Harvard. As I
                  will start this...
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
