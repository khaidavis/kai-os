import ThemeToggle from "./ThemeToggle";

export default function MenuBar() {
  return (
    <header className="relative z-[60] flex h-12 items-stretch justify-between border-b-[3px] border-line bg-bg font-mono text-[13px] font-semibold">
      <div className="flex items-stretch">
        <span className="flex items-center border-r-[3px] border-line bg-gold px-[22px] font-display text-lg font-black tracking-wide text-[#111]">
          KAI OS
        </span>
        <span className="hidden items-center px-[22px] sm:flex">Kai · Software developer · Jamaica</span>
      </div>
      <div className="flex items-stretch">
        <a href="/resume.pdf" className="flex items-center border-l-[3px] border-line px-[18px]">RESUME</a>
        <ThemeToggle />
      </div>
    </header>
  );
}