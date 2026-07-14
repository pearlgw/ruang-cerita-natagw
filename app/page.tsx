import Link from "next/link";
import CardBlog from "@/components/card-blog";
import { IoArrowForwardOutline, IoBookOutline, IoCreateOutline, IoSparklesOutline } from "react-icons/io5";
import { getStats } from "@/lib/data";

const formatNumber = (num: number) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace('.0', '') + 'k+';
  }
  return num.toString();
};

export default async function Home() {
  const stats = await getStats();
  
  return (
    <div className="flex-grow flex flex-col w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 relative">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto space-y-6 md:space-y-8 mb-16 md:mb-20">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100/60 text-xs font-semibold text-indigo-600 shadow-sm">
          <IoSparklesOutline className="text-amber-500" />
          <span>✨ Ruang Cerita & Karya Kata Terkini</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Bagikan Cerita, Inspirasi, dan{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 bg-clip-text text-transparent">
            Karya Kata
          </span>{" "}
          Terbaikmu
        </h1>
        
        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Platform menulis modern tempat imajinasi berpadu dengan kata-kata. Bagikan pengalaman, bacakan gagasan inspiratif, dan jalin interaksi dengan pembaca dari segala penjuru.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-7 py-3.5 rounded-2xl transition-all duration-300 active:scale-[0.98] shadow-md shadow-indigo-100 hover:shadow-indigo-200"
          >
            <IoCreateOutline className="text-lg" />
            <span>Mulai Menulis Cerita</span>
          </Link>
          <a
            href="#explore-cerita"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200/80 text-slate-700 font-semibold text-sm px-7 py-3.5 rounded-2xl transition-all duration-300 active:scale-[0.98] shadow-sm"
          >
            <span>Jelajahi Karya</span>
            <IoArrowForwardOutline className="text-slate-400" />
          </a>
        </div>
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto pt-8 border-t border-slate-200/60 mt-8">
          <div className="text-center">
            <div className="text-2xl font-extrabold text-slate-900">{formatNumber(stats.totalBlogs)}</div>
            <div className="text-xs text-slate-400 font-medium">Cerita Ditulis</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-extrabold text-slate-900">{formatNumber(stats.totalWriters)}</div>
            <div className="text-xs text-slate-400 font-medium">Penulis Aktif</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-extrabold text-slate-900">{formatNumber(stats.totalUsers)}</div>
            <div className="text-xs text-slate-400 font-medium">Total Pengguna</div>
          </div>
        </div>
      </div>

      {/* Main Content Area / Feed */}
      <div id="explore-cerita" className="space-y-8 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/60 pb-5">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <IoBookOutline className="text-indigo-600" />
              <span>Karya Kata Terbaru</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Temukan cerita, opini, puisi, dan artikel segar dari penulis berbakat kami.
            </p>
          </div>
        </div>

        {/* Card Grid Container */}
        <div className="w-full">
          <CardBlog />
        </div>
      </div>
    </div>
  );
}
