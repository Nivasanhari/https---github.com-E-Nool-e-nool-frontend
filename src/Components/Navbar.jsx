
export default function Navbar() {
    return (
        <nav className="bg-white shadow mx-2 md:mx-12">
            <div className="container px-4 md:px-14">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <img
                            className="h-8 w-auto"
                            src="./eNOOL_Logo.svg"
                            alt="Logo"
                        />
                        <div className="w-px h-8 bg-gray-300 mx-4 hidden md:block"></div>
                        {/* Navbar Items */}
                        <div className="hidden md:flex space-x-4">
                            <a
                                href="#"
                                className="text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-sans-[Rubik] font-extrabold"
                            >
                                Browse
                            </a>
                            <a
                                href="#"
                                className="text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold"
                            >
                                Categories
                            </a>
                            <a
                                href="#"
                                className="text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold"
                            >
                                How It Works
                            </a>
                            <a
                                href="#"
                                className="text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold"
                            >
                                Publisher
                            </a>
                        </div>
                    </div>

                    {/* Hamburger menu for small screens */}
                    <div className="flex items-center md:hidden">
                        <button className="text-[#408080] hover:text-[#565656] text-[18px] font-extrabold px-3 py-2">
                            &#9776;
                        </button>
                    </div>

                    {/* Search Bar & Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="search-icon">
                            <img src="./search.svg" alt="search" className="h-4 w-4" />
                        </div>
                        <button
                            className="rounded-full text-[#565656] text-[12px] px-4 py-1 bg-opacity-0 border font-extrabold border-[#707070]"
                        >
                            LOG IN
                        </button>
                        <button
                            className="rounded-full text-white text-[12px] px-4 py-1 bg-[#075A68] font-extrabold hover:bg-[#04404a]"
                        >
                            SIGN UP
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
