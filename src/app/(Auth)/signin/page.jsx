"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button, Input, toast } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { data: authData, error } = await authClient.signIn.email({
      ...data,
    });

    if (authData.token) {
      toast.success("Login successful!");
      router.push("/");
    } else {
      toast.danger(error.message);
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1664711942326-2c3351e215e6"
        alt="Interior Design"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative max-w-330 mx-auto z-10 flex h-screen items-center justify-end px-3">
        <div className="w-full max-w-md rounded-md border border-white/20 bg-white/70 p-10 shadow backdrop-blur-md">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>

          <p className="mt-2 text-sm text-gray-600">
            Sign in to continue exploring AI-powered interior designs.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
            {/* Email */}
            <div className="flex flex-col">
              <label>Email</label>
              <Input
                type="email"
                className={"border rounded-md shadow mt-2"}
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
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

            {/* Password */}
            <div className="flex flex-col relative">
              <label>Password</label>
              <Input
                className={"border rounded-md shadow mt-2"}
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d).{6,}$/,
                    message: "Must contain 1 uppercase letter and 1 number",
                  },
                })}
              />

              <div
                className="absolute top-[50%] translate-y-[50%] right-[2%]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </div>

              {errors.password && (
                <p className="text-[13px] text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Sign In */}
            <Button
              type="submit"
              className="w-full rounded-md bg-[#b2967d] text-white"
              size="lg"
            >
              Sign In
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 mt-5">
            <div className="h-px flex-1 bg-gray-400" />
            <span className="text-sm text-gray-500">OR</span>
            <div className="h-px flex-1 bg-gray-400" />
          </div>

          {/* Google */}
          <Button className="w-full rounded-md bg-transparent border border-[#b2967d] text-gray-900 font-medium mt-5">
            <FcGoogle className="w-5 h-5"></FcGoogle> Continue with Google
          </Button>

          {/* Footer */}
          <p className="mt-7 text-center text-sm text-gray-800">
            Don't have an account? |{" "}
            <Link href="/signup" className="font-semibold text-[#b2967d]">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
