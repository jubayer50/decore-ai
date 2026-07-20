import { FaHome, FaUsers, FaLayerGroup, FaRobot } from "react-icons/fa";

const statistics = [
  {
    icon: <FaHome />,
    value: "2,500+",
    title: "Interior Designs",
  },
  {
    icon: <FaUsers />,
    value: "1,200+",
    title: "Happy Clients",
  },
  {
    icon: <FaLayerGroup />,
    value: "25+",
    title: "Categories",
  },
  {
    icon: <FaRobot />,
    value: "98%",
    title: "AI Accuracy",
  },
];

const InteriorDesignStatistics = () => {
  return (
    <section className="max-w-330 mx-auto px-3 my-16 md:my-24">
      {/* Heading */}
      <div className="text-center">
        <span className="rounded-full bg-[#b2967d20] px-4 py-2 text-sm font-medium text-[#927b66]">
          DecoraAI Statistics
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#927b66]">
          Trusted by Thousands of Design Lovers
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-lg text-default-500">
          Every project reflects our commitment to creating beautiful,
          functional, and inspiring interior spaces with AI-powered assistance.
        </p>
      </div>

      {/* Statistics */}
      <div className="mt-14 rounded-2xl border border-[#b2967d30] bg-linear-to-r from-[#f8f4ef] to-white shadow-lg">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {statistics.map((item, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center justify-center px-6 py-10 transition-all duration-300 hover:bg-[#b2967d10]
              ${
                index !== statistics.length - 1
                  ? "lg:border-r border-[#b2967d30]"
                  : ""
              }`}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl text-[#b2967d] shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#b2967d] group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="mt-6 text-4xl font-bold text-[#927b66]">
                {item.value}
              </h3>

              <p className="mt-2 text-center text-sm font-medium uppercase tracking-wider text-default-600">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteriorDesignStatistics;
