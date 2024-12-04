"use client";

import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-16">
      <div className="container mx-auto flex flex-col gap-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex flex-col items-center sm:items-start">
            <Image
              src="/images/button-container-white.svg"
              alt="Dreamerz Logo"
              width={142}
              height={56}
            />
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start gap-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white">
              How it works
            </a>
            <a href="#" className="hover:text-white">
              Affiliate Program
            </a>
            <a href="#" className="hover:text-white">
              FAQ
            </a>
            <a href="#" className="hover:text-white">
              About us
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-300">Follow us:</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-400">
                <Youtube size={24} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500">
          © Dreamerz 2024, All rights reserved
        </div>
      </div>
    </footer>
  );
}
