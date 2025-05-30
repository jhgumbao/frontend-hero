const Navbar = () => {
  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[900px] z-50">
      <div className="flex items-center justify-between bg-white rounded-2xl shadow-lg py-3 px-4 md:hidden">
        <button className="text-xl">☰</button>

        <div className="flex items-center space-x-2">
          <span className="text-sm font-semibold text-gray-700">topspeed</span>
          <div className="w-5 h-5 bg-gradient-to-r from-blue-900 to-yellow-400 rounded-full" />
        </div>

        <button className="flex items-center border border-gray-300 px-3 py-1 rounded-full text-sm">
          <span className="text-[12px] mr-1">👤</span>
          Login
        </button>
      </div>

      <div className="hidden md:flex items-center justify-between bg-white rounded-2xl shadow-lg py-3 px-6">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-semibold text-gray-700">topspeed</span>
          <div className="w-5 h-5 bg-gradient-to-r from-blue-900 to-yellow-400 rounded-full" />
        </div>

        <nav className="flex space-x-6 text-sm font-medium text-gray-700">
          <a href="#">Help & Advice</a>
          <a href="#">Locations</a>
          <a href="#">Contact Us</a>
        </nav>

        <button className="flex items-center border border-gray-300 px-4 py-1 rounded-full text-sm">
          <span className="text-[12px] mr-1">👤</span>
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
