import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-8 bg-neutral-950 text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] -z-10 animate-pulse delay-700" />

      {/* Hero Section */}
      <div className="max-w-4xl w-full text-center space-y-8 z-10">
        <div className="inline-block px-4 py-1.5 mb-2 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full backdrop-blur-md animate-fade-in">
          Next.js Test Project Ready
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          Create, Build, and <span className="text-blue-500">Innovate</span>
        </h1>
        
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          A premium Next.js template initialized by Antigravity. Built with speed, aesthetic perfection, and modern best practices.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Explore Documentation
          </button>
          <button className="px-8 py-4 bg-neutral-900 text-white font-semibold rounded-xl border border-neutral-800 hover:bg-neutral-800 transition-all transform hover:scale-105 active:scale-95 backdrop-blur-sm">
            View Source Code
          </button>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 max-w-5xl w-full z-10">
        {[
          { title: "App Router", desc: "Native support for React Server Components.", icon: "🚀" },
          { title: "Tailwind CSS", desc: "Utility-first styling with modern aesthetics.", icon: "🎨" },
          { title: "TypeScript", desc: "Type-safe development for enterprise scale.", icon: "🛡️" }
        ].map((feature, i) => (
          <div key={i} className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800/50 backdrop-blur-xl hover:border-blue-500/30 transition-all group">
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-24 text-gray-500 text-sm font-medium">
        &copy; {new Date().getFullYear()} Next.js Test App • Built with ❤️ by Antigravity
      </footer>
    </main>
  );
}
