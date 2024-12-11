
export default function Home() {
    return (
        <main>
            {/* Hero Section */}
            <div className="hero relative flex items-end lg:items-center justify-center h-screen mb-10 py-10 px-8 md:px-16 xl:px-[160px]">
                {/* <!-- Picture element for responsive images --> */}
                <picture>
                    <source srcSet="/images/hero.png" media="(min-width: 1024px)" />
                    <source srcSet="/images/hero-mobile.png" media="(max-width: 1023px)" />
                    <img
                        src="/images/hero.png"
                        alt="Golf clubs"
                        className="absolute inset-0 w-full h-full object-cover z-10"
                    />
                </picture>

                {/* <!-- Gradient Overlay --> */}
                <div className="absolute inset-0 bg-gradient-to-r from-black to-[#0D0D0D] opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 text-white text-center md:text-left w-full md:max-w-[500px] mr-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight font-Poppins bg-text-gradient bg-clip-text text-transparent">
                        More than <br /> just a game.<br />It’s a lifestyle.
                    </h1>
                    <p className="mt-4 text-base md:text-lg lg:text-xl text-white md:max-w-[90%]">
                        Whether you're just starting out, have played your whole life, or you're a Tour pro, your swing is like a fingerprint.
                    </p>
                    <button
                        className="mt-4 lg:mt-6 bg-primary-green text-black font-medium text-sm lg:text-lg px-14 py-3 rounded-lg shadow-md hover:bg-green-600 transition">
                        Shopping Now
                    </button>
                </div>
            </div>

        </main>
    )
}