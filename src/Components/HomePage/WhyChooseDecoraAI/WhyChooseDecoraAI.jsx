import Link from "next/link";
import { Button } from "@heroui/react";
import {
  HiOutlineSparkles,
  HiOutlineDevicePhoneMobile,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import { FaRegLightbulb } from "react-icons/fa";

const features = [
  {
    title: "AI Design Guidance",
    description:
      "Receive instant AI suggestions tailored to your room and preferred interior style.",
    icon: <HiOutlineSparkles className="h-7 w-7" />,
  },
  {
    title: "Professional Inspiration",
    description:
      "Browse carefully curated modern, luxury, farmhouse and minimalist designs.",
    icon: <FaRegLightbulb className="h-7 w-7" />,
  },
  {
    title: "Works Everywhere",
    description:
      "Enjoy a smooth experience across desktop, tablet, and mobile devices.",
    icon: <HiOutlineDevicePhoneMobile className="h-7 w-7" />,
  },
  {
    title: "Simple & Secure",
    description:
      "Clean interface with secure authentication and effortless navigation.",
    icon: <HiOutlineShieldCheck className="h-7 w-7" />,
  },
];

const WhyChooseDecoraAI = () => {
  return (
    <section className="max-w-330 mx-auto px-3 my-16 md:my-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* left Cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#b2967d] hover:shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-[#b2967d20] text-[#927b66]">
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold">{feature.title}</h3>

              <p className="mt-3 playfair text-default-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* right Content */}
        <div>
          <span className="rounded-full bg-[#b2967d20] px-4 py-2 text-sm font-medium text-[#927b66]">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-3xl font-bold md:leading-14 text-[#927b66] md:text-5xl">
            Design Smarter with DecoraAI
          </h2>

          <p className="mt-6 playfair text-xl text-default-600">
            DecoraAI combines beautiful interior inspiration with AI-powered
            assistance, making it easier to discover ideas, compare styles,
            estimate budgets, and create spaces you'll love.
          </p>

          <div className="mt-8">
            <Link href="/interior-designs">
              <Button className="rounded-md bg-[#b2967d] px-8 font-semibold text-white">
                Explore Designs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseDecoraAI;
