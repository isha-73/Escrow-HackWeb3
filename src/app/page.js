import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="bg-dark shadow-md rounded-lg p-6  text-center  w-full sm:w-2/3 lg:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Product Description</h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam mauris
          vel lectus vulputate tempus. Duis id arcu elit. Aenean malesuada sem ut
          libero bibendum, et feugiat risus condimentum. Proin auctor mauris ac felis

        </p>

      </div>
      <div className="p-10">
        <Testimonials />
      </div>
    </main>
  );
}
