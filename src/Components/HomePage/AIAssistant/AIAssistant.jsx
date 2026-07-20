import Link from "next/link";
import { Button } from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";

const AIAssistant = () => {
  return (
    <section className="max-w-330 mx-auto px-3 my-16 md:my-24">
      <div className="overflow-hidden rounded-xl border bg-linear-to-r from-[#b2967d] to-[#927b66] px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-4xl text-center text-white">
          <div className="mb-5 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur">
              <BsStars className="text-3xl" />
            </div>
          </div>

          <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium">
            AI Interior Assistant
          </span>

          <h2 className="mt-6 text-3xl font-bold md:text-5xl">
            Need Interior Design Advice?
          </h2>

          <p className="mx-auto playfair text-lg mt-5 max-w-2xl text-white/90 md:text-xl">
            Chat with DecoraAI to get instant suggestions for furniture, color
            palettes, room layouts, lighting ideas, and interior styles tailored
            to your space.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/ai-chat">
              <Button
                endContent={<FaArrowRightLong />}
                className="rounded-md bg-white px-7 py-6 font-semibold text-[#927b66]"
              >
                Chat with AI
              </Button>
            </Link>

            <Link href="/interior-designs">
              <Button
                variant="bordered"
                className="rounded-md border-white px-7 py-6 font-semibold text-white"
              >
                Explore Designs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
