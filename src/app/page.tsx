import Image from "next/image";
import { HeroSection } from "./Components/ui/HeroSection";
import FeaturedCourses from "./Components/FeaturedCourses";

export default function Home() {
  return (
     <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
               <h1 className="text-2xl text-center ">
                          Shivam patel
               </h1>

                 <HeroSection/>
                 <FeaturedCourses/>
     </main>
  );
}
