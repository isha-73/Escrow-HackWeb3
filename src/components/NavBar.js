import Link from 'next/link';


const Navbar = () => {


    return (
        <nav className="bg-gradient-to-r from-purple-500 to-blue-500 z-10 flex sm:flex flex-wrap">
            <div className="container mx-auto flex items-center justify-between p-3">
                <div>
                    {/* <Image src="/logo.png" width={100} height={100} alt="logo" /> */}
                    <Link href="/" className="text-white text-xl font-bold neon-text">Logo
                    </Link>
                </div>
                <div className="space-x-4">
                    <button href="/about" className="text-white hover:text-gray-300 neon-text">
                        Connect
                    </button>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
