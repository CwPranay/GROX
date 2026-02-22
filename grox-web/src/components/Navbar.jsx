export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="bg-[var(--grox-black)]/90">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between">
          
          {/* Brand */}
          <div className="text-lg font-semibold tracking-wide">
            <span className="text-white">GRO</span>
            <span style={{ color: "var(--grox-red)" }}>X</span>
          </div>

          {/* Nav */}
          <div className="hidden md:flex gap-14 text-sm text-[var(--grox-gray)]">
            <a href="#services" className="hover:text-white transition">
              Services
            </a>
            <a href="#why" className="hover:text-white transition">
              Why GROX
            </a>
            <a href="#process" className="hover:text-white transition">
              Process
            </a>
          </div>

          {/* Login */}
          <a
            href="/login"
            className="text-sm text-[var(--grox-gray)] hover:text-white transition"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}