"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-sm">
      <div className="flex items-center space-x-2">
        <Image
          src="/images/button-container.svg"
          alt="Dreamerz Logo"
          width={88}
          height={32}
        />
      </div>
      <div className="flex items-center space-x-4">
        <div className="space-x-1 my-2">
          <Button
            variant="default"
            className="bg-linear-135 from-[#84FAD5] via-[#F5E0FF] to-[#F8ED84] text-black"
          >
            Join Affiliate
          </Button>
          <Button
            variant="default"
            className="hidden sm:inline-block bg-linear-135 from-[#84FAD5] via-[#F5E0FF] to-[#F8ED84] text-black p-[1.5px]"
          >
            <div className="rounded-md h-full w-full bg-white items-center justify-center flex px-4 py-2 text-sm">
              Dashboard Login
            </div>
          </Button>
        </div>
        <Avatar>
          <AvatarImage
            className="h-12 w-12"
            src="images/pfp.jpeg"
            alt="User Avatar"
          />
        </Avatar>
      </div>
    </nav>
  );
}
