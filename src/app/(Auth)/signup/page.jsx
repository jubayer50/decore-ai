"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button, Input } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2000&q=80"
        alt="Interior Design"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative max-w-330 mx-auto z-10 flex min-h-screen items-center justify-end px-3 py-10">
        <div className="w-full max-w-md rounded-md border border-white/20 bg-white/70 p-10 shadow backdrop-blur-md">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-gray-600">
            Join DecoraAI and start designing your dream interiors with AI.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 space-y-5"
          >
            {/* Name */}
            <div className="flex flex-col">
              <label>Name</label>
              <Input
                className="mt-2 rounded-md border shadow"
                placeholder="Enter your full name"
                {...register("name", {
                  required: "Name is required",
                })}
              />

              {errors.name && (
                <p className="mt-1 text-[13px] text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label>Email</label>

              <Input
                type="email"
                className="mt-2 rounded-md border shadow"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />

              {errors.email && (
                <p className="mt-1 text-[13px] text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Image URL */}
            <div className="flex flex-col">
              <label>Image URL</label>

              <Input
                className="mt-2 rounded-md border shadow"
                placeholder="Enter your image URL"
                {...register("image", {
                  required: "Image URL is required",
                })}
              />

              {errors.image && (
                <p className="mt-1 text-[13px] text-red-500">
                  {errors.image.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col relative">
              <label>Password</label>

              <Input
                className="mt-2 rounded-md border shadow"
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message:
                      "Password must be at least 6 characters",
                  },
                  pattern: {
                    value:
                      /^(?=.*[A-Z])(?=.*\d).{6,}$/,
                    message:
                      "Must contain at least 1 uppercase letter and 1 number",
                  },
                })}
              />

              <div className="absolute top-[50%] translate-y-[50%] right-[2%]" onClick={()=>setShowPassword(!showPassword)}>
                {showPassword? <FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>}
              </div>

              {errors.password && (
                <p className="mt-1 text-[13px] text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Sign Up */}
            <Button
              type="submit"
              size="lg"
              className="w-full rounded-md bg-[#b2967d] text-white"
            >
              Sign Up
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-400" />
              <span className="text-sm text-gray-500">
                OR
              </span>
              <div className="h-px flex-1 bg-gray-400" />
            </div>

            {/* Google Login */}
            <Button className="w-full rounded-md border border-[#b2967d] bg-transparent font-medium text-gray-900">
              <FcGoogle className="h-5 w-5" />
              Continue with Google
            </Button>
          </form>

          {/* Footer */}
          <p className="mt-7 text-center text-sm text-gray-800">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="font-semibold text-[#b2967d]"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;