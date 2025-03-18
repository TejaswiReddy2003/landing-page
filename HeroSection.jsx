const HeroSection = () => {
    return (
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback Background Image */}
          <img
            src="/hero-bg.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>
  
        {/* Overlay for Better Readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold">Welcome to Our Platform</h1>
          <p className="mt-4 text-lg md:text-xl">Delivering Excellence with Innovation</p>
          <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white rounded shadow-lg transition">
            Get Started
          </button>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  