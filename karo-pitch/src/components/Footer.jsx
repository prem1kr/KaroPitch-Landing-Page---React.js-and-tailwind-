import { motion } from "framer-motion"

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8">

            <div className="max-w-6xl mx-auto px-6">

                <motion.div initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-3 gap-10 text-center md:text-left"
                >

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold">Karo Pitch</h2>
                        <p className="text-gray-400 mt-3">
                            Connecting founders with investors across Bharat.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Platform</h3>

                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#about" className="hover:text-white cursor-pointer">About</a></li>
                            <li><a href="#how" className="hover:text-white cursor-pointer">How it Works</a></li>
                            <li><a href="#startup" className="hover:text-white cursor-pointer">Startups</a></li>
                            <li><a href="#investors" className="hover:text-white cursor-pointer">Investors</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-semibold mb-4">Connect</h3>

                        <div className="flex justify-center md:justify-start gap-4">

                            <a className="hover:scale-110 transition">
                                <svg width="22" height="22" fill="currentColor">
                                    <path d="M22 5.72a8.5 8.5 0 01-2.36.65 4.1 4.1 0 001.8-2.27 8.2 8.2 0 01-2.6 1A4.1 4.1 0 0015.5 4a4.1 4.1 0 00-4.1 4.1c0 .32.03.63.1.92A11.6 11.6 0 013 4.9a4.1 4.1 0 001.27 5.47A4 4 0 012.8 9.8v.05a4.1 4.1 0 003.29 4.02 4.1 4.1 0 01-1.85.07 4.1 4.1 0 003.82 2.85A8.25 8.25 0 012 19.54a11.65 11.65 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.67v-.53A8.2 8.2 0 0022 5.72z" />
                                </svg>
                            </a>

                            <a className="hover:scale-110 transition">
                                <svg width="22" height="22" fill="currentColor">
                                    <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.2 20H3.6V9h3.6v11zM5.4 7.5A2.1 2.1 0 113.3 5.4a2.1 2.1 0 012.1 2.1zM20.4 20h-3.6v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.15 1.45-2.15 2.96V20h-3.6V9h3.46v1.5h.05a3.8 3.8 0 013.42-1.88c3.66 0 4.33 2.41 4.33 5.54V20z" />
                                </svg>
                            </a>

                            <a className="hover:scale-110 transition">
                                <svg width="22" height="22" fill="currentColor">
                                    <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.41 2.87 8.15 6.84 9.48.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.61.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-2 .1.99-2.03-.1-.25-.1-.52-.27-.68 0 0 .84-.27 2.75 1.03A9.55 9.55 0 0112 6.84c.85 0 1.7.11 2.5.33 1.9-1.3 2.74-1.03 2.74-1.03.54 1.37.2 2.39.1 2.64.63.69 1.01 1.57 1.01 2.64 0 3.85-2.34 4.7-4.57 4.95.36.31.67.92.67 1.86v2.75c0 .27.18.58.69.48A10.01 10.01 0 0022 12.04c0-5.52-4.48-10-10-10z" />
                                </svg>
                            </a>

                        </div>
                    </div>

                </motion.div>

                {/* Bottom */}
                <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
                    © 2026 Karo Pitch. Built for startup founders across Bharat.
                </div>

            </div>
        </footer>
    )
}