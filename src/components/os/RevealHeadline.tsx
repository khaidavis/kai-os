type Props = { text: string; className?: string };

export default function RevealHeadline({ text, className = "" }: Props) {
  const words = text.split(" ");
  return (
    <h1 aria-label={text} className={`flex flex-wrap gap-x-[0.28em] ${className}`}>
      {words.map((w, i) => (
        <span key={i} aria-hidden="true" className="reveal-word" style={{ animationDelay: `${200 + i * 110}ms` }}>
          {w}
        </span>
      ))}
    </h1>
  );
}
