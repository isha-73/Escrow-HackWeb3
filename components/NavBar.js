import Link from 'next/link';
import { useRouter } from 'next/router';
import { useWeb3 } from '@3rdweb/hooks';

const Navbar = (props) => {
  const { connectWallet, address } = useWeb3();

  const router = useRouter();

  const handleConnect = async () => {
    try {
      await connectWallet('injected');
      console.log(address);
      // Assuming successful connection, navigate to the /dashboard page
      router.push('/dashboard');
    } catch (error) {
      console.error('Error connecting with MetaMask:', error);
    }
  };
  return (
    <nav className="fixed top-0 left-0 w-full flex sm:flex-wrap justify-center backdrop-blur-sm bg-gray-700 bg-opacity-50 border border-blue-500 border-t-0 border-l-0 border-r-0  shadow-neon-blue ">
      <div className="container flex items-center justify-between p-2 ">
        <div>
          {/* <Image src="/logo.png" width={100} height={100} alt="logo" /> */}
          <Link href="/" className="text-white text-xl font-bold neon-text">
            Logo
          </Link>
        </div>
        <div className="space-x-4">
          <button
            className={`text-white hover:text-gray-300 bg-gradient-to-r from-purple-500 to-blue-500 bg-origin-border py-2 px-4 rounded-md neon-text ${
              props.disabled
                ? 'group-disabled:opacity-10 bg-gradient-to-r from-purple-300 to-blue-300 text-gray-300 group-disabled:pointer-events-none'
                : 'group'
            }`}
            onClick={handleConnect}
            disabled={props.disabled}
          >
            {/* {!props.disabled ? 'Connect Wallet' : 'Connected'} */}
            Connect Wallet {console.log(address)}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
