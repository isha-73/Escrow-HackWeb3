export default function Testimonials() {
  return (
    <>
      <div className="bg-black border-blue-500 border-2 rounded-lg shadow-md flex flex-col items-center justify-center p-5 w-2/3 h-full ">
        <h2 className="text-2xl font-bold text-white mb-4">What is Escrow?</h2>
        <p className="text-white text-center  leading-loose">
          Escrow is a financial arrangement used to safeguard funds or assets
          during a transaction. It involves a neutral third party acting as an
          intermediary between the buyer and seller. The third party holds the
          funds or assets until all conditions of the transaction are met.
          Escrow is commonly used in real estate transactions, business deals,
          and online purchases. It helps protect both parties from fraud and
          ensures the transaction is completed fairly.
        </p>
        {/* <div className="mt-4 flex flex-wrap justify-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md mr-2 mb-2">
            Button 1
          </button>

        </div> */}
      </div>
    </>
  );
}
