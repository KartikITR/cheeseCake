import Image from "next/image";
import { Heart, Share2, Eye } from "lucide-react";

export default function Reels() {
  return (
    <section className="py-12 bg-[#FFF8DE]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">Watch Our Reels</h2>
        <p className="max-w-2xl mx-auto mb-6 text-[#92400E]">
          Go behind the scenes and discover the artistry, passion, and craftsmanship
          that goes into every single cheesecake we create.
        </p>

        {/* Reel Cards Container */}
        <div className="flex sm:flex-row sm:justify-center gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scrollbar-hide">
          {/* Reel Card 1 */}
          <div className="reel-card bg-[#945E005E] bg-cover bg-center w-[250px] sm:w-[280px] rounded-lg shadow-lg p-3 flex-shrink-0 flex flex-col snap-center">
            {/* Reel Image */}
            <div
              className="relative w-full rounded-md overflow-hidden"
              style={{ aspectRatio: "9 / 16" }}
            >
              <Image
                src="/cake1.png"
                alt="Behind the Scenes"
                fill
                className="object-contain"
              />
            </div>

            {/* Text Section */}
            <div className="text-left mt-3">
              <h3 className="text-sm font-semibold text-[#3d2b1f]">
                Behind the Scenes: Crafting Perfection
              </h3>
              <p className="text-xs text-[#6b4a38] mt-1">
                Watch our master chef create the perfect cheesecake from scratch
              </p>
            </div>

            {/* Stats Section */}
            <div className="flex justify-between items-center mt-3 text-[#6b4a38] text-xs">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>12.1K</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                <span>12.1K</span>
              </div>
              <div className="flex items-center gap-1">
                <Share2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Reel Card 2 */}
          <div className="reel-card bg-[url('/rectangle.png')] bg-cover bg-center w-[250px] sm:w-[280px] rounded-lg shadow-lg p-3 flex-shrink-0 flex flex-col snap-center">
            <div
              className="relative w-full rounded-md overflow-hidden"
              style={{ aspectRatio: "9 / 16" }}
            >
              <Image
                src="/cake2.png"
                alt="Behind Crafting Magic"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-left mt-3">
              <h3 className="text-sm font-semibold text-[#3d2b1f]">
                Behind Crafting Magic
              </h3>
              <p className="text-xs text-[#6b4a38] mt-1">
                Get a glimpse of our artistry in every slice
              </p>
            </div>
            <div className="flex justify-between items-center mt-3 text-[#6b4a38] text-xs">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>9.8K</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                <span>10.3K</span>
              </div>
              <div className="flex items-center gap-1">
                <Share2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Reel Card 3 */}
          <div className="reel-card bg-[url('/rectangle.png')] bg-cover bg-center w-[250px] sm:w-[280px] rounded-lg shadow-lg p-3 flex-shrink-0 flex flex-col snap-center">
            <div
              className="relative w-full rounded-md overflow-hidden"
              style={{ aspectRatio: "9 / 16" }}
            >
              <Image
                src="/cake3.png"
                alt="Kitchen Secrets"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-left mt-3">
              <h3 className="text-sm font-semibold text-[#3d2b1f]">
                Kitchen Secrets
              </h3>
              <p className="text-xs text-[#6b4a38] mt-1">
                Discover the little secrets that make our cheesecakes special
              </p>
            </div>
            <div className="flex justify-between items-center mt-3 text-[#6b4a38] text-xs">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>15.2K</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                <span>14.7K</span>
              </div>
              <div className="flex items-center gap-1">
                <Share2 className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
