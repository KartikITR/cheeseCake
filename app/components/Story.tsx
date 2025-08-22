import Image from "next/image";

export default function Story() {
  return (
    <section className="py-12 bg-[#92400EB5]">
      <div className="max-w-5xl mx-auto px-6 text-center text-[#FFF8DE]">
        <h2 className="text-3xl font-serif font-bold mb-4">“Our Story”</h2>
        <p className="max-w-3xl mx-auto mb-8 text-[#FFF8DE]">
          Miss Cheesecake began in a cozy Jodhpur kitchen with a simple dream—to make rich,
          creamy cheesecakes accessible to everyone. Founded by two passionate individuals,
          the brand took off with handcrafted flavors made using homemade cream cheese...
        </p>
        <div className="flex justify-center">
          <Image
            src="/ourstory.png"
            alt="Our Story"
            width={900}
            height={400}
            className="w-full max-w-4xl h-auto"
          />
        </div>
      </div>
    </section>
  );
}
