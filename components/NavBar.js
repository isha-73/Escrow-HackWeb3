import Link from 'next/link';
import { useRouter } from 'next/router';
// import { useWeb3 } from '@3rdweb/hooks';
import { useEffect, useState } from 'react';

const Navbar = (props) => {
  const [walletAddress, setWalletAddress] = useState("");
  const router = useRouter();

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress]);

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          console.log("Connect to MetaMask using the Connect button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      /* MetaMask is not installed */
      setWalletAddress("");
      console.log("Please install MetaMask");
    }
  };
  const handleLogin = () => {
    if (walletAddress) {
      // Perform any additional authentication logic if needed

      // After successful authentication, navigate to the dashboard page
      router.push({
        pathname: '/dashboard',
        query: { address: walletAddress }, // Send the walletAddress as a query parameter
      });
    } else {
      // Prompt the user to connect their MetaMask account
      connectWallet();
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
            className={`text-white py-2 px-4 rounded-md neon-text ${props.disabled
                ? 'bg-gray-300 cursor-not-allowed'
                : 'hover:text-gray-300 bg-gradient-to-r from-purple-500 to-blue-500 bg-origin-border hover:from-purple-400 hover:to-blue-400'
              }`}
            onClick={handleLogin}
            disabled={props.disabled}
          >
            {!props.disabled ? 'Connect Wallet' : 'Connected'}

          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
