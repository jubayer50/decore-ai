import {
  HiOutlineMagnifyingGlass,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa6";

const steps = [
  {
    id: "01",
    title: "Explore Interior Designs",
    description:
      "Browse modern interior designs for homes, offices, hotels, restaurants, and more.",
    icon: <HiOutlineMagnifyingGlass className="h-8 w-8" />,
  },
  {
    id: "02",
    title: "View Design Details",
    description:
      "Open any design to see its style, budget, space size, color palette, and complete overview.",
    icon: <MdOutlineSpaceDashboard className="h-8 w-8" />,
  },
  {
    id: "03",
    title: "Ask the AI Assistant",
    description:
      "Get instant recommendations about layouts, furniture, lighting, colors, and design ideas.",
    icon: <HiOutlineChatBubbleLeftRight className="h-8 w-8" />,
  },
  {
    id: "04",
    title: "Create Your Dream Space",
    description:
      "Use AI suggestions and design inspiration to confidently plan your perfect interior.",
    icon: <FaRegLightbulb className="h-8 w-8" />,
  },
];

const HowDecoraAIWorks = () => {
  return (
    <section className="max-w-330 mx-auto px-3 my-16 md:my-24">
      {/* Heading */}
      <div className="text-center">
        <span className="rounded-full bg-[#b2967d20] px-4 py-2 text-sm font-medium text-[#927b66]">
          Simple Process
        </span>

        <h2 className="mt-4 text-3xl font-bold text-[#927b66] md:text-4xl">
          How DecoraAI Works
        </h2>

        <p className="mx-auto playfair text-xl mt-4 max-w-3xl text-default-500">
          Discover beautiful interior designs, explore project details, and get
          AI-powered guidance to make smarter design decisions.
        </p>
      </div>

      {/* Steps */}
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className="group rounded-xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#b2967d] hover:shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#b2967d20] text-[#927b66] transition group-hover:bg-[#b2967d] group-hover:text-white">
              {step.icon}
            </div>

            <span className="mt-5 inline-block rounded-full bg-[#b2967d15] px-3 py-1 text-xs font-semibold text-[#927b66]">
              Step {step.id}
            </span>

            <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>

            <p className="mt-3 playfair text-default-500">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowDecoraAIWorks;
