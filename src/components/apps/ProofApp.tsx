const proof = [
  { tag: "LOCK", text: "No double-bookings, proven by a parallel-request test" },
  { tag: "AUTH", text: "Hashed passwords, signed tokens, three roles" },
  { tag: "FLOW", text: "Two-step approval: technician, then admin" },
  { tag: "SHIP", text: "Tests run on every push; deployed on Render and Vercel" },
];

export default function ProofApp() {
  return (
    <ul className="bg-[#111] text-white">
      {proof.map((p) => (
        <li key={p.tag} className="flex items-center gap-3.5 border-b border-[#333] px-4 py-3 last:border-b-0">
          <span className="shrink-0 bg-orange px-2 py-0.5 font-mono text-[11px] font-semibold text-[#111]">{p.tag}</span>
          <span className="text-[15px] font-bold leading-snug">{p.text}</span>
        </li>
      ))}
    </ul>
  );
}
