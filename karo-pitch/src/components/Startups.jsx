import { motion } from "framer-motion"

export default function Startups() {

    const startups = [
        {
            name: "FinTrust",
            category: "FinTech",
            desc: "Digital marketplace for financial services."
        },
        {
            name: "AgriBiz",
            category: "AgriTech",
            desc: "Technology platform for modern agriculture."
        },
        {
            name: "HealthEase",
            category: "HealthTech",
            desc: "Digital healthcare platform for Bharat."
        }
    ]

    return (
        <section id="startup" className="py-24 bg-gradient-to-b from-white to-gray-50">

            <div className="max-w-6xl mx-auto px-6 text-center">

                <h2 className="text-4xl font-bold text-gray-800">
                    Featured Startups
                </h2>

                <p className="text-gray-500 mt-3">
                    Discover promising startups building the future
                </p>

                <div className="grid md:grid-cols-3 gap-10 mt-16">

                    {startups.map((s, i) => (
                        <motion.div key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            whileHover={{ y: -8, scale: 1.03 }}
                            className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl p-8 text-left transition-all"
                        >

                            {/* Category */}
                            <span className="inline-block px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-600 font-medium">
                                {s.category}
                            </span>

                            {/* Startup Name */}
                            <h3 className="text-xl font-bold text-gray-800 mt-4">
                                {s.name}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 mt-3">
                                {s.desc}
                            </p>

                            {/* CTA */}
                            <button className="mt-6 text-indigo-600 font-semibold hover:underline">
                                View Startup →
                            </button>

                        </motion.div>
                    ))}

                </div>

            </div>

        </section>
    )
}