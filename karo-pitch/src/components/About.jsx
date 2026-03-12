import about from "../assets/about.png";

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

                <div>
                    <h2 className="text-3xl font-bold text-gray-800">
                        Empowering Bharat’s Startup Ecosystem
                    </h2>

                    <p className="mt-4 text-gray-600">
                        Thousands of founders across Bharat are building amazing businesses
                        but lack access to investors. Karo Pitch connects these founders
                        with investors through curated pitch events and a discovery
                        platform.
                    </p>

                    <ul className="mt-6 space-y-3 text-gray-700">
                        <li>✔ Pitch your startup to interested investors</li>
                        <li>✔ Participate in curated pitch events</li>
                        <li>✔ Gain visibility and scale your business</li>
                    </ul>
                </div>

                <img src={about} alt="startup ecosystem" className="w-full max-w-lg mx-auto animate-[float_6s_ease-in-out_infinite]" />

            </div>
        </section>
    )
}