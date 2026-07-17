import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] px-6 text-center">
      {/* 404 Status */}
      <h1 className="playfair text-9xl font-bold text-slate-800/10 tracking-tight leading-none select-none">
        404
      </h1>
      
      {/* Not Found Message */}
      <h2 className="playfair text-3xl font-bold text-slate-800 mt-2 mb-4">
        Design Lost in Space
      </h2>
      
      <p className="text-slate-500 max-w-md mb-8 font-light text-sm leading-relaxed">
        The page you are looking for {"doesn't"} exist or has been moved to another location. {"Let's"} get you back to safety.
      </p>
      
      {/* Action Button */}
      <Link
        href="/"
        className="px-8 py-3 text-sm font-medium text-white bg-[#b2967d] rounded-md hover:bg-[#b2967d]/90 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
      >
        Back to Home
      </Link>
    </div>
  );
}
