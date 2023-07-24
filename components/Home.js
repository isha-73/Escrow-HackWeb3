import Testimonials from './Testimonials';
import Navbar from './NavBar';
import Footer from './Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-between py-14 h-full">
        <div className="bg-dark shadow-md rounded-lg p-6  text-center  w-full sm:w-2/3 lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Product Description</h2>
          <p className="text-gray-400 leading-[2rem]">
            The Escrow app is a decentralized platform that facilitates secure
            and trustful transactions between parties. It utilizes blockchain
            technology and smart contracts to ensure transparency and
            enforceable agreements. With the Escrow app, two parties can engage
            in a transaction where funds or assets are held in escrow by a smart
            contract until predefined conditions are met. This minimizes the
            risk of fraud and ensures that both parties fulfill their
            obligations before the funds or assets are released.
          </p>
        </div>
        <div className="p-3 flex flex-col items-center justify-between">
          <Testimonials />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
