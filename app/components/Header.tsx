"use client";
import Image from "next/image";

export default function Header() {
  return (
   <header className="sticky top-0 z-50">
        <div className="max-w-7xl mx-auto w-full">
          <div className="bg-[#FFF8DE] border border-[#e8dbc9] rounded-b-lg shadow-sm px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#f3c7b7] rounded-full flex items-center justify-center shadow-inner overflow-hidden">
                <Image src="/Avatar.png" alt="Avatar" width={40} height={40} className="object-cover" />
              </div>
              <div className="text-lg font-semibold tracking-wide text-[#92400E]">Miss Cheesecake</div>
            </div>
            <div className="flex items-center gap-4">
              <nav className="hidden md:block">
                <ul className="flex gap-8 text-sm">
                  <li><a className="no-underline text-[#6b4a38] hover:text-[#492F01]" href="#">Home</a></li>
                  <li><a className="no-underline text-[#6b4a38] hover:text-[#492F01]" href="#">Contact</a></li>
                  <li><a className="no-underline text-[#6b4a38] hover:text-[#492F01]" href="#">Story</a></li>
                  <li><a className="no-underline text-[#6b4a38] hover:text-[#492F01]" href="#">About</a></li>
                </ul>
              </nav>

              {/* mobile menu using details for lightweight toggle */}
              <details className="md:hidden relative">
                <summary className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e8d2bf]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-[#6b4a38]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </summary>
                <div className="mobile-menu-panel absolute right-0 mt-2 bg-[#FFF8DE] border border-[#e8dbc9] rounded-md py-2 w-44 z-50">
                  <ul className="flex flex-col text-sm">
                    <li className="px-3 py-2"><a className="no-underline text-[#6b4a38]" href="#">Home</a></li>
                    <li className="px-3 py-2"><a className="no-underline text-[#6b4a38]" href="#">Contact</a></li>
                    <li className="px-3 py-2"><a className="no-underline text-[#6b4a38]" href="#">Story</a></li>
                    <li className="px-3 py-2"><a className="no-underline text-[#6b4a38]" href="#">About</a></li>
                  </ul>
                </div>
              </details>

              <button aria-label="Open cart" className="p-2 rounded-full hover:bg-[#fdeedc] focus:outline-none focus:ring-2 focus:ring-[#e8d2bf]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#6b4a38]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 21a1 1 0 11-2 0 1 1 0 012 0zm-8 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
  );
}
