import { Link } from "react-router-dom";
import { readVisits } from "@/Components/Shared/hooks/useVisitTracker";

export default function QuickDash() {
  const visits = readVisits();
  if (!visits.length) return null;

  const mostVisited = [...visits].sort((a, b) => b.count - a.count).slice(0, 8);
  const recent = [...visits].sort((a, b) => b.last - a.last).slice(0, 8);

  return (
    <section className="quickDash">
      <div className="dashGroup">
        <h3>Most Visited</h3>
        <ul className="dashChips">
          {mostVisited.map((v) => (
            <li key={v.path}>
              <Link to={v.path} className="chip" title={`${v.count} visits`}>
                {v.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="dashGroup">
        <h3>Recently Opened</h3>
        <ul className="dashChips">
          {recent.map((v) => (
            <li key={v.path}>
              <Link to={v.path} className="chip">
                {v.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}