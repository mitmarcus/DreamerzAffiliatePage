"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function AffiliateSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-28 px-16 bg-linear-135 from-[#84FAD5]/10 via-[#EBBFFF]/10 to-[#F6EC85]/10">
      <div className="flex items-center space-x-4 mb-5">
        <div className="flex items-center space-x-2">
          <div className="flex -space-x-4">
            <Avatar>
              <AvatarImage
                className="w-10 h-10 object-cover rounded-full border-2 border-white"
                src="images/avatar1.png"
                alt="User 1"
              />
            </Avatar>
            <Avatar>
              <AvatarImage
                className="w-10 h-10 object-cover rounded-full border-2 border-white"
                src="images/avatar2.png"
                alt="User 2"
              />
            </Avatar>
            <Avatar>
              <AvatarImage
                className="w-10 h-10 object-cover rounded-full border-2 border-white"
                src="images/avatar3.png"
                alt="User 3"
              />
            </Avatar>
            <Avatar>
              <AvatarImage
                className="w-10 h-10 object-cover rounded-full border-2 border-white"
                src="images/avatar4.png"
                alt="User 4"
              />
            </Avatar>
            <Avatar>
              <AvatarImage
                className="w-10 h-10 object-cover rounded-full border-2 border-white"
                src="images/avatar5.png"
                alt="User 5"
              />
            </Avatar>
          </div>
        </div>

        <span className="text-sm text-gray-500">
          Used by 3000+ partners worldwide
        </span>
      </div>
      <h1 className="hero mt-6">
        Join the Dreamerz Affiliate Program <br /> and turn dreams into reality!
      </h1>
      <p className="subtitle mt-4 max-w-2xl mb-6">
        Dreamerz is a platform where you can share your dreams, collect
        donations, and support others in achieving their dreams. Join our
        affiliate program and start making a difference right away.
      </p>
      <div className="mt-3 flex space-x-4">
        <Button className="bg-black text-white px-6 text-md py-2 rounded-lg">
          Join Today
        </Button>
        <Button variant="ghost" className="px-6 py-2 text-md">
          Learn More
        </Button>
      </div>
    </section>
  );
}
