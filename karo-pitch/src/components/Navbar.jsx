import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="text-2xl font-bold text-indigo-600">
                    KaroPitch
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-gray-700">
                    <a href="#about" className="hover:text-indigo-600">About</a>
                    <a href="#how" className="hover:text-indigo-600">How it Works</a>
                    <a href="#categories" className="hover:text-indigo-600">Categories</a>
                    <a href="#investors" className="hover:text-indigo-600">Investors</a>
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700">
                        Apply to Pitch
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
                        ☰
                    </button>
                </div>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white px-6 pb-6 flex flex-col gap-4 shadow">

                    <a href="#about" className="text-gray-700">About</a>
                    <a href="#how" className="text-gray-700">How it Works</a>
                    <a href="#categories" className="text-gray-700">Categories</a>
                    <a href="#investors" className="text-gray-700">Investors</a>

                    <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg">
                        Apply to Pitch
                    </button>

                </div>
            )}
        </nav>
    );
}