"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function StatsSection() {
  const stats = [
    { label: "Pharmaceuticals Distributed", value: 50000, suffix: "+" },
    { label: "Livestock Farmers Assisted", value: 1000, suffix: "+" },
    { label: "AI & Blockchain Integrations", value: 20, suffix: "+" },
    { label: "Jobs & Enterprises Created", value: 500, suffix: "+" },
  ];

  return (
    <section className="py-16 px-[1.5rem]">
      <div className="container mx-auto text-center">
        <h2 className="text-sm font-bold text-gray-800 text-left  dark:text-foreground uppercase mb-6">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 dark:bg-background sm:border-t-[1px] sm:border-b-[1px] sm:border-gray-400"
            >
              <h3 className="text-4xl sm:text-6xl font-bold text-talithaGreen font-tinos">
                <CountUp start={0} end={stat.value} duration={2} />{stat.suffix}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
