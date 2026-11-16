const pours = [
  { area: "BACKEND", mix: "Java 21 · Spring Boot · PostgreSQL", name: "the backend old fashioned" },
  { area: "SECURITY", mix: "BCrypt · JWT · role-based access", name: "the secure pour" },
  { area: "FRONTEND", mix: "Next.js · TypeScript · Tailwind", name: "the frontend spritz" },
  { area: "SYSTEMS", mix: "Computer organization · assembly · OS", name: "systems, neat" },
];

export default function SkillsApp() {
  return (
    <ul>
      {pours.map((p) => (
        <li key={p.area} className="flex flex-col gap-0.5 border-b-2 border-line px-[18px] py-3 last:border-b-0">
          <span className="font-mono text-[11px] font-semibold tracking-widest opacity-80">{p.area}</span>
          <span className="text-lg font-black">{p.mix}</span>
          <span className="text-[13px] italic opacity-80">{p.name}</span>
        </li>
      ))}
    </ul>
  );
}