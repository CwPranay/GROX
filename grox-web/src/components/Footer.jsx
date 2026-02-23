export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-6 text-xs sm:text-sm text-[var(--grox-gray)]">
        <div className="text-center md:text-left">
          <img width="50px" className="sm:w-[60px] mx-auto md:mx-0" src="./grox.png" alt="GROX" />
          <p className="mt-2">Built to Execute</p>
        </div>

        <div className="text-center md:text-right">
          © {new Date().getFullYear()} GROX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}