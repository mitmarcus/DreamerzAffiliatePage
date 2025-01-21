<Card className="shadow-md rounded-xl flex col-span-2"></Card>;

import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="py-24 px-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="title">Dream Big, Achieve More</h2>
        <p className="subtitle mt-2">
          Unlock the power of dreaming with Dreamerz platform
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mx-auto">
        <Card className="shadow-md rounded-xl flex md:col-span-2 gap-8">
          {/* Left Section */}
          <div className="flex-1 p-8 md:pr-0 flex flex-col justify-between items-start ">
            <h3 className="text-lg text-[#EBBFFF] font-semibold">Inspire</h3>
            <h2 className="text-2xl font-bold mt-2">
              Make a Difference in Someone&apos;s Life Today
            </h2>
            <p className="text-gray-600 mt-4">
              Become an affiliate and make a positive impact
            </p>
            <Button variant="link" className="mt-6 flex pl-0 gap-2 text-lg">
              Join Now <ChevronRight />
            </Button>
          </div>

          {/* Right Section */}
          <div className="hidden flex-2 md:flex justify-end items-end">
            <Image
              src="/images/Card1.png"
              alt="Inspire"
              width={500}
              height={500}
              layout="responsive"
            />
          </div>
        </Card>

        <Card className="shadow-md rounded-xl flex flex-col col-span-1 items-start gap-6">
          {/* Header */}
          <div className="flex-1 p-8 pb-0">
            <h3 className="text-lg text-purple-500 font-semibold">Support</h3>
            <h4 className="text-2xl font-bold">Help Others Achieve</h4>
            <p className="text-gray-600 mt-2">
              Contribute to changing people’s lives.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex-1 px-6 h-full justify-end items-end">
            <Image
              src="/images/Card2.png"
              alt="Earn"
              width={500}
              height={500}
              layout="responsive"
            />
          </div>
        </Card>

        <Card className="shadow-md rounded-xl flex flex-col col-span-1 gap-6">
          {/* Header Section */}
          <div className="flex-1 p-8 pb-0">
            <h3 className="text-lg text-purple-500 font-semibold">Earn</h3>
            <h4 className="text-2xl font-bold mt-2">Grow Your Earnings</h4>
            <p className="text-gray-600 mt-2">
              Start earning money by promoting dreams.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex-1 h-full justify-end items-end px-6">
            <Image
              src="/images/Card3.png"
              alt="Inspire"
              width={500}
              height={500}
              layout="responsive"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}
