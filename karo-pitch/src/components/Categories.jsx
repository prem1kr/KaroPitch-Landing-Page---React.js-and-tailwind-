import { motion } from "framer-motion"

export default function Categories() {

    const categories = [
        "D2C Brands",
        "Consumer Startups",
        "MSMEs",
        "SaaS Startups",
        "Manufacturing Businesses",
        "Bharat Focused Startups"
    ]

    return (
        <section id="categories" className="py-24 bg-gradient-to-b from-white to-gray-50">

            <div className="max-w-6xl mx-auto px-6 text-center">

                <h2 className="text-4xl font-bold text-gray-800">
                    Who Can Apply
                </h2>

                <p className="text-gray-500 mt-3">
                    Startups from diverse sectors across Bharat
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-16">

                    {categories.map((item, i) => (
                        <motion.div key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -8, scale: 1.05 }}
                            className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all"
                        >

                            {/* Category Name */}
                            <h3 className="text-lg font-semibold text-gray-800">
                                {item}
                            </h3>

                        </motion.div>
                    ))}

                </div>

            </div>

        </section>
    )
}