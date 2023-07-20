import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex sm:flex-wrap justify-center backdrop-blur-sm bg-gray-700 bg-opacity-50 border border-blue-500 border-t-0 border-l-0  shadow-neon-blue">
      <div className="container flex items-center justify-between p-2 ">
        <div>
          {/* <Image src="/logo.png" width={100} height={100} alt="logo" /> */}
          <Link href="/" className="text-white text-xl font-bold neon-text">
            Logo
          </Link>
        </div>
        <div className="space-x-4">
          <button
            href="/about"
            className="text-white hover:text-gray-300 bg-gradient-to-r from-purple-500 to-blue-500 bg-origin-border py-2 px-4 rounded-md neon-text"
          >
            Connect
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
