
import { useState } from "react";
export function CustomSelect({ name, value, onChange, options, placeholder, error }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setOpen(!open)}
        className={`rq-input cursor-pointer flex justify-between items-center ${
          error ? "error" : ""
        }`}
      >
        <span className={value ? "text-[#f5f5f5]" : "text-[#3a3a3a]"}>
          {value
            ? options.find((o) => o.value === value)?.label
            : placeholder}
        </span>
        <span className="text-[#666]">▾</span>
      </div>

      {open && (
        <div className="absolute w-full mt-2 bg-[#111] border border-white/10 z-10">
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => {
                onChange({ target: { name, value: opt.value } });
                setOpen(false);
              }}
              className="px-3 py-2 text-sm text-[#eaeaea] hover:bg-white/5 cursor-pointer"
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}