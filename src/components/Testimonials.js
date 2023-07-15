export default function Testimonials() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-5 rounded-lg shadow-md flex flex-col items-center justify-center h-80 ">
        <h2 className="text-2xl font-bold text-white mb-4">Test</h2>
        <p className="text-white text-center">
          This is a sample text inside the container. You can add any content
          here.
        </p>
        <div className="mt-4 flex flex-wrap justify-center">
          <button className="bg-white text-gray-800 py-2 px-4 rounded-md mr-2 mb-2">
            Button 1
          </button>
          <button className="bg-white text-gray-800 py-2 px-4 rounded-md mb-2">
            Button 2
          </button>
        </div>
      </div>
    </>
  );
}
