export default function Testimonials() {
  return (
    <>
      <div className="bg-black border-blue-500 border-2 rounded-lg shadow-md flex flex-col items-center justify-center p-5 h-80">
        <h2 className="text-2xl font-bold text-white mb-4">Test</h2>
        <p className="text-white text-center">
          This is a sample text inside the container. You can add any content
          here.
        </p>
        <div className="mt-4 flex flex-wrap justify-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md mr-2 mb-2">
            Button 1
          </button>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md mb-2">
            Button 2
          </button>
        </div>
      </div>
    </>
  );
}
