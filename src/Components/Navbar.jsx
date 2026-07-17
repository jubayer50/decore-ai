"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Avatar } from "@heroui/react";
import Link from "next/link";

export default function Navbar({ 
  isLoggedIn = false, 
  user = {
    name: "John Doe",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop"
  }
}) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define routes dynamically based on authentication state
  const routes = isLoggedIn
    ? [
        { name: "Home", path: "/" },
        { name: "Interior Designs", path: "/interior-designs" },
        { name: "Add Design", path: "/add-design" },
        { name: "Manage Designs", path: "/manage-designs" },
        { name: "AI Chat", path: "/ai-chat" },
      ]
    : [
        { name: "Home", path: "/" },
        { name: "Interior Designs", path: "/interior-designs" },
      ];

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100/85">
      {/* Centered content wrapper with max width of 1320px */}
      <div className="max-w-[1320px] mx-auto w-full px-6 h-16 flex items-center justify-between">
        
        {/* Logo (Left side) */}
        <div className="flex items-center">
          <Link href="/" className="lato text-2xl font-bold tracking-tight text-slate-800 flex items-center">
            Decora<span className="text-[#b2967d]">AI</span>
          </Link>
        </div>

        {/* Desktop Routes (Middle) */}
        <div className="hidden lg:flex items-center space-x-8">
          {routes.map((route) => {
            const isActive = pathname === route.path;
            return (
              <Link
                key={route.path}
                href={route.path}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  isActive
                    ? "text-[#b2967d]"
                    : "text-slate-600 hover:text-[#b2967d]"
                }`}
              >
                {route.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Auth / Avatar (Right side) */}
        <div className="hidden lg:flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="flex items-center">
              {user?.image ? (
                <Avatar
                  src={user.image}
                  name={user.name || "User"}
                  size="md"
                  className="w-10 h-10 border-2 border-[#b2967d]/20"
                />
              ) : (
                <Avatar
                  name={user?.name || "U"}
                  size="md"
                  className="w-10 h-10 bg-[#b2967d] text-white border-2 border-[#b2967d]/20"
                />
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <Link
                href="/signin"
                className="px-5 py-2 text-sm font-medium text-white bg-[#b2967d] rounded-md hover:bg-[#b2967d]/90 transition-colors shadow-sm"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="px-5 py-2 text-sm font-medium text-white bg-[#b2967d] rounded-md hover:bg-[#b2967d]/90 transition-colors shadow-sm"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile/Tablet Menu Button (Responsive: visible under lg) */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={handleToggleMenu}
            type="button"
            className="p-2 rounded-md text-slate-600 hover:text-[#b2967d] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden w-full bg-white border-b border-gray-100 py-4 px-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {routes.map((route) => {
              const isActive = pathname === route.path;
              return (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`text-sm font-medium py-2 transition-colors border-b border-slate-50 last:border-0 ${
                    isActive
                      ? "text-[#b2967d]"
                      : "text-slate-600 hover:text-[#b2967d]"
                  }`}
                >
                  {route.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-gray-100 flex flex-col space-y-3">
            {isLoggedIn ? (
              <div className="flex items-center space-x-3 py-1">
                {user?.image ? (
                  <Avatar
                    src={user.image}
                    name={user.name || "User"}
                    size="md"
                    className="w-10 h-10 border-2 border-[#b2967d]/20"
                  />
                ) : (
                  <Avatar
                    name={user?.name || "U"}
                    size="md"
                    className="w-10 h-10 bg-[#b2967d] text-white border-2 border-[#b2967d]/20"
                  />
                )}
                <span className="text-sm font-medium text-slate-700">{user?.name || "User"}</span>
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <Link
                  href="/signin"
                  className="w-full text-center px-4 py-2.5 text-sm font-medium text-white bg-[#b2967d] rounded-md hover:bg-[#b2967d]/90 transition-colors shadow-sm"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="w-full text-center px-4 py-2.5 text-sm font-medium text-white bg-[#b2967d] rounded-md hover:bg-[#b2967d]/90 transition-colors shadow-sm"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
