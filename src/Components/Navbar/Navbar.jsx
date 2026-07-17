"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Static user boolean variable (set to true/false to simulate auth states)
  const user = false;

  // Static user visual details (only used when user is logged in)
  const userProfile = {
    name: "John Doe",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop"
  };

  // Define routes dynamically based on user state
  const routes = user
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
      {/* Centered content wrapper with max-w-330 */}
      <div className="max-w-330 mx-auto w-full px-3 py-3 flex items-center justify-between">

        {/* Logo (Left side) */}
        <div className="flex items-center">
          <Link href="/" className="lato text-2xl font-bold text-slate-800 flex items-center">
            Decora<span className="text-[#b2967d]">AI</span>
          </Link>
        </div>

        {/* Desktop Routes (Middle) */}
        <div className="hidden lato lg:flex items-center space-x-8">
          {routes.map((route) => {
            const isActive = pathname === route.path;
            return (
              <Link
                key={route.path}
                href={route.path}
                className={`transition-colors font-medium ${isActive
                  ? "text-[#b2967d]"
                  : "text-slate-600"
                  }`}
              >
                {route.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Auth / Avatar (Right side) */}
        <div className="hidden lg:flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-4">
              {userProfile?.image ? (
                <Avatar
                  src={userProfile.image}
                  name={userProfile.name || "User"}
                  size="md"
                  className="w-10 h-10 border-2 border-[#b2967d]/20"
                />
              ) : (
                <Avatar
                  name={userProfile?.name || "U"}
                  size="md"
                  className="w-10 h-10 bg-[#b2967d] text-white border-2 border-[#b2967d]/20"
                />
              )}
              <Button
                as={Link}
                href="/logout"
                className="px-4 py-2 lato text-white bg-[#b2967d] rounded-md hover:bg-[#b2967d]/90 transition-colors shadow-sm min-w-0 h-auto font-medium"
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex lato items-center space-x-3">
              <Link href={'/signin'}>
              <Button
                className="px-4 py-2 lato text-white bg-[#b2967d] rounded-md hover:bg-[#b2967d]/90 transition-colors shadow-sm min-w-0 h-auto font-medium"
              >
                Sign In
              </Button>
              </Link>

              <Link href={'/signup'}>
              <Button
                className="px-4 py-2 lato text-white bg-[#b2967d] rounded-md hover:bg-[#b2967d]/90 transition-colors shadow-sm min-w-0 h-auto font-medium"
              >
                Sign Up
              </Button>
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
                  className={`lato py-2 transition-colors border-b border-slate-50 last:border-0 ${isActive
                    ? "text-[#b2967d]"
                    : "text-slate-600"
                    }`}
                >
                  {route.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-gray-100 flex flex-col space-y-3">
            {user ? (
              <div className="flex items-center justify-between py-1">
                <div className="flex items-center space-x-3">
                  {userProfile?.image ? (
                    <Avatar
                      src={userProfile.image}
                      name={userProfile.name || "User"}
                      size="md"
                      className="w-10 h-10 border-2 border-[#b2967d]/20"
                    />
                  ) : (
                    <Avatar
                      name={userProfile?.name || "U"}
                      size="md"
                      className="w-10 h-10 bg-[#b2967d] text-white border-2 border-[#b2967d]/20"
                    />
                  )}
                  <span className="text-sm font-medium text-slate-700">{userProfile?.name || "User"}</span>
                </div>

                <Button
                  className="px-4 py-2 lato text-white bg-[#b2967d] rounded-md hover:bg-[#b2967d]/90 transition-colors shadow-sm text-xs min-w-0 h-auto font-medium"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
               <Link href="/signin">
                <Button
                  className="w-full text-center px-4 py-2 lato text-white bg-[#b2967d] rounded-md hover:bg-[#b2967d]/90 transition-colors shadow-sm h-auto font-medium"
                >
                  Sign In
                </Button>
               </Link>

                <Link href="/signup">
                <Button
                  className="w-full text-center px-4 py-2 lato text-white bg-[#b2967d] rounded-md hover:bg-[#b2967d]/90 transition-colors shadow-sm h-auto font-medium"
                >
                  Sign Up
                </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
