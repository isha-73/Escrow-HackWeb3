export default function Footer() {
  return (
    <>
      <div className=" inset-x-0  h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
      <footer className=" text-white text-center py-4  bg-gray-700 bg-opacity-30 border border-gray-500 border-t-0 border-l-0">
        <div className="container mx-auto relative">
          <p>&copy; {new Date().getFullYear()} Made by ISNTI</p>
        </div>
      </footer>
    </>
  );
}
