import { motion } from "framer-motion"

export default function HowItWorks() {

    const steps = [
        {
            title: "Apply with your pitch deck",
            icon: "📄"
        },
        {
            title: "Get shortlisted by KaroStartup",
            icon: "✅"
        },
        {
            title: "Pitch live to investors",
            icon: "🎤"
        },
        {
            title: "Raise funding and scale",
            icon: "🚀"
        }
    ]

    return (
        <section id="how" className="py-24 bg-gradient-to-b from-gray-50 to-white text-center">

            <h2 className="text-4xl font-bold text-gray-800">
                How It Works
            </h2>

            <p className="text-gray-500 mt-3">
                A simple 4-step process to raise funding through Karo Pitch
            </p>

            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mt-16 px-6">

                {steps.map((step, index) => (
                    <motion.div key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100"
                    >

                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 text-3xl mx-auto">
                            {step.icon}
                        </div>

                        <div className="mt-5 text-indigo-600 font-bold text-xl">
                            Step {index + 1}
                        </div>

                        <p className="mt-3 text-gray-600">
                            {step.title}
                        </p>

                    </motion.div>
                ))}

            </div>

        </section>
    )
}