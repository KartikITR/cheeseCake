import Image from "next/image";

export default function Mission() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative w-full h-64 md:h-[600px]">
          <Image
            src="/grp.png"
            alt="Our Mission"
            fill
            className="object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
