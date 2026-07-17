"use client";

import Link from "next/link";
import { Button, Input } from "@heroui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-gray-300">
      <div className="mx-auto max-w-330 px-3 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Decora<span className="text-[#b2967d]">AI</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              Transform your living spaces with AI-powered interior design.
              Explore beautiful inspirations, generate personalized room ideas,
              and create spaces you'll love.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <Link
                href="#"
                className="rounded-full bg-[#2d2d2d] p-3 transition hover:bg-[#b2967d] hover:text-white"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-[#2d2d2d] p-3 transition hover:bg-[#b2967d] hover:text-white"
              >
                <FaInstagram />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-[#2d2d2d] p-3 transition hover:bg-[#b2967d] hover:text-white"
              >
                <FaLinkedinIn />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-[#2d2d2d] p-3 transition hover:bg-[#b2967d] hover:text-white"
              >
                <FaPinterestP />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-[#b2967d]">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/rooms" className="hover:text-[#b2967d]">
                  Explore Rooms
                </Link>
              </li>

              <li>
                <Link href="/ai-design" className="hover:text-[#b2967d]">
                  AI Designer
                </Link>
              </li>

              <li>
                <Link href="/favorites" className="hover:text-[#b2967d]">
                  Saved Designs
                </Link>
              </li>
            </ul>
          </div>

          {/* AI Features */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              AI Features
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>AI Room Generator</li>
              <li>Budget Planning</li>
              <li>Interior Inspirations</li>
              <li>Style Recommendations</li>
              <li>Smart Space Planning</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Stay Updated
            </h3>

            <p className="mt-4 text-sm text-gray-400">
              Subscribe to receive the latest design inspirations and AI
              updates.
            </p>

            <div className="mt-5 space-y-4">
              <Input
                placeholder="Enter your email"
                className={'w-full rounded-md'}
              />

              <Button className="w-full bg-[#b2967d] text-white rounded-md">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-gray-400 md:flex-row">
          <p>
            © DecoraAI. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#b2967d]">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-[#b2967d]">
              Terms of Service
            </Link>

            <Link href="/contact" className="hover:text-[#b2967d]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;