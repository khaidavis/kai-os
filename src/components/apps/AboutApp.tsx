export default function AboutApp() {
  return (
    <div className="flex flex-col gap-3.5 p-6">
      <h1 className="text-[40px] font-black leading-[0.98] tracking-tight">
        I build backends that don&apos;t double-book.
      </h1>
      <p className="text-[15px] leading-relaxed">
        Computing student at UTech, Jamaica, graduating May 2027. I build secure Java backends and the
        Next.js interfaces on top of them.
      </p>
      <p className="text-[15px] leading-relaxed">
        Off the keyboard I cook, run a bar and play ball. Hospitality work at resorts abroad taught me to
        stay calm under pressure and look after the people I build for.
      </p>
      <span className="font-mono text-xs font-semibold">OPEN TO SOFTWARE ROLES · [ROLE / LOCATION]</span>
      <div className="flex flex-wrap gap-2.5">
        <a href="/resume.pdf" className="flex min-h-11 items-center border-[3px] border-line bg-[#111] px-4 font-mono text-[13px] font-semibold text-gold">
          RESUME.PDF
        </a>
        <a href="https://github.com/khaidavis" target="_blank" rel="noopener noreferrer"
           className="flex min-h-11 items-center border-[3px] border-line px-4 font-mono text-[13px] font-semibold">
          GITHUB
        </a>
        <a href="#" className="flex min-h-11 items-center border-[3px] border-line px-4 font-mono text-[13px] font-semibold">
          [LINKEDIN]
        </a>
      </div>
    </div>
  );
}