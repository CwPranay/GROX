export default function Footer() {
  return (
    <footer className="py-16 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between gap-6 text-sm text-[var(--grox-gray)]">
        <div>
          <span className="text-white font-medium">GRO</span>
          <span style={{ color: "var(--grox-red)" }}>X</span>
          <p className="mt-2">Built to Execute</p>
        </div>

        <div>
          © {new Date().getFullYear()} GROX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}