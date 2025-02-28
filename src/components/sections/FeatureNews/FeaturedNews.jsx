"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react"; // Import from Lucide React


const newsData = [
  {
    id: 1,
    title: "Breakthrough in Pharma Tech",
    image: "/featured_news_imgs/mika-baumeister-wZ49T2Tc7xw-unsplash.jpg",
    date: "April 03, 2024",
    excerpt:
      "New advancements in pharmaceutical technology are revolutionizing healthcare solutions...",
    link: "/news/pharma-tech",
  },
  {
    id: 2,
    title: "Sustainable Agriculture Growth",
    image: "/featured_news_imgs/jan-kopriva-LTMaAwxanGk-unsplash.jpg",
    date: "September 07, 2024",
    excerpt:
      "Farmers are adopting new sustainable methods to enhance productivity while preserving nature...",
    link: "/news/agriculture",
  },
  {
    id: 3,
    title: "AI in Drug Discovery",
    image: "/featured_news_imgs/steve-johnson-ZPOoDQc8yMw-unsplash.jpg",
    date: "January 20, 2025",
    excerpt:
      "Artificial Intelligence is accelerating drug discovery, reducing costs, and improving precision...",
    link: "/news/ai-drug",
  },
  {
    id: 4,
    title: "Biotech Startups on the Rise",
    image: "/featured_news_imgs/nasa-cIX5TlQ_FgM-unsplash.jpg",
    date: "December 29, 2024",
    excerpt:
      "Biotech startups are pushing the boundaries of science with groundbreaking research...",
    link: "/news/biotech",
  },
  {
    id: 5,
    title: "Precision Medicine Advances",
    image: "/featured_news_imgs/thomas-griggs-8nO-8yf9dq8-unsplash.jpg",
    date: "Febuary 02, 2025",
    excerpt:
      "Personalized medicine is tailoring treatments to individual patients for better outcomes...",
    link: "/news/precision-medicine",
  },
  {
    id: 6,
    title: "Global Health Trends in 2025",
    image: "/featured_news_imgs/annie-spratt-JMjNnQ2xFoY-unsplash.jpg",
    date: "October 23, 2024",
    excerpt:
      "Experts predict key trends in global health that will shape the future of medicine...",
    link: "/news/global-health",
  },
];

export default function FeaturedNews() {
  return (
    <section className="px-6 py-12">
      <h2 className="text-sm sm:text-lg font-semibold text-left mb-8">
        Featured News & Updates
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <motion.div
            key={news.id}
            className="relative overflow-hidden rounded-lg group dark:bg-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Image Container */}
            <motion.div
              className="relative w-full h-72 overflow-hidden"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={news.image}
                alt={news.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
              />
            </motion.div>

            {/* Content */}
            <div className="p-4">
              <motion.p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500">
                {news.date}
              </motion.p>
              <h3 className="text-xl font-tinos text-gray-900 dark:text-white">
                {news.title}
              </h3>

              <motion.p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500">
                {news.excerpt}
              </motion.p>
            </div>
            {/* Read More Button */}
            {/* Read More (Icon for Mobile, Text for Desktop) */}
      <motion.div
        className="absolute bottom-4 right-4 border rounded-2xl px-4 py-[4px] border-slate-300 transition-opacity duration-500
                  sm:opacity-0 sm:group-hover:opacity-100 flex items-center"
        whileHover={{ scale: 1.1 }}
      >
        <Link href={news.link} className="text-sm flex items-center gap-2">
          {/* Icon for Mobile */}
          <ExternalLink className="sm:hidden w-5 h-5 text-talithaRed" />
          {/* "Read More" for Desktop */}
          <span className="hidden sm:inline">Read More</span>
        </Link>
      </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
