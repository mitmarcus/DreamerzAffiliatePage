"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-md">
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
          <Button variant="default">Join Affiliate</Button>
          <Button variant="outline" className="hidden sm:inline-block">
            Dashboard Login
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
