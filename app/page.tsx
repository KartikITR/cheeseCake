import Image from "next/image";
import { Heart, Share2, Eye } from "lucide-react";
import Header from "./components/Header";
import Story from "./components/Story";
import Reels from "./components/Reels";
import BigBite from "./components/BigBite";
import Mission from "./components/Mission";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF8DE] text-[#4a3528]">
      <Header />
      <Mission />
      <Story />
      <Reels />
      <BigBite />
      
    </div>
  );
}
