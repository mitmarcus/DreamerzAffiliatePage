"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function AffiliateSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-16 bg-gradient-to-br from-white to-yellow-100">
      <div className="flex items-center space-x-4 mb-5">
        <div className="flex items-center space-x-2">
          <div className="flex -space-x-4">
            <Avatar>
              <AvatarImage
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://via.placeholder.com/40"
                alt="User 1"
              />
            </Avatar>
            <Avatar>
              <AvatarImage
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://via.placeholder.com/40"
                alt="User 2"
              />
            </Avatar>
            <Avatar>
              <AvatarImage
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://via.placeholder.com/40"
                alt="User 3"
              />
            </Avatar>
            <Avatar>
              <AvatarImage
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://via.placeholder.com/40"
                alt="User 4"
              />
            </Avatar>
          </div>
        </div>

        <span className="text-sm text-gray-500">
          Used by 3000+ partners worldwide
        </span>
      </div>
      <h1 className="text-4xl font-bold mt-6">
        Join the Dreamerz Affiliate Program <br /> and turn dreams into reality!
      </h1>
      <p className="text-gray-600 mt-4 max-w-2xl mb-6">
        Dreamerz is a platform where you can share your dreams, collect
        donations, and support others in achieving their dreams. Join our
        affiliate program and start making a difference right away.
      </p>
      <div className="mt-3 flex space-x-4">
        <Button className="bg-black text-white px-6 py-2 text-lg rounded-md">
          Join Today
        </Button>
        <Button variant="ghost" className="px-6 py-2 text-lg">
          Learn More
        </Button>
      </div>
    </section>
  );
}
