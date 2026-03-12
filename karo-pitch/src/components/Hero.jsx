import hero from "../assets/Hero.svg";

export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-blue-50 to-white py-20">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

                <div>
                    <h1 className="text-5xl font-bold text-gray-800 leading-tight">
                        Pitch Your Startup to India’s Top Investors
                    </h1>

                    <p className="mt-6 text-gray-600">
                        Karo Pitch connects founders from across India with leading
                        investors eager to discover and fund innovative startups.
                    </p>

                    <div className="mt-8 flex gap-4">

                        {/* Primary Button */}
                        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-indigo-700 hover:scale-105 hover:shadow-xl">
                            Apply to Pitch
                        </button>

                        {/* Secondary Button */}
                        <button className="border border-gray-300 px-6 py-3 rounded-lg transition-all duration-300 hover:border-indigo-500 hover:text-indigo-600 hover:scale-105 hover:shadow-md">
                            Explore Startups
                        </button>

                    </div>
                </div>

                {/* Illustration */}
                <img src={hero} alt="pitch" className="transition-transform duration-500 hover:scale-105" />

            </div>
        </section>
    )
}