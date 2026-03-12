import { motion } from "framer-motion"

export default function Investors() {

    const investors = [
        "Sequoia",
        "Accel",
        "Blume",
        "Kalaari",
        "Lightspeed",
        "Matrix",
        "Nexus"
    ]

    return (
        <section id="investors" className="py-24 bg-gradient-to-b from-gray-50 to-white text-center overflow-hidden">

            <h2 className="text-4xl font-bold text-gray-800">
                Meet Investors Looking for the Next Big Startup
            </h2>

            <p className="text-gray-500 mt-4">
                Join Karo Pitch and connect with India's leading investors
            </p>

            {/* Investor Cards */}
            <div className="max-w-6xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 px-6">

                {investors.map((investor, index) => (
                    <motion.div key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.08 }}
                        className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all"
                    >

                        <div className="text-xl font-semibold text-gray-700">
                            {investor}
                        </div>

                    </motion.div>
                ))}

            </div>

        </section>
    )
}