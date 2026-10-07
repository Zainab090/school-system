export default function CheckList({ items, className = '', circle = false }) {
  return (
    <ul className={`space-y-1.5 text-xs text-slate-500 ${className}`}>
      {items.map((p) => (
        <li key={p} className="flex items-center gap-2">
          {circle ? (
            <i className="fa-solid fa-circle-check text-blue-600 text-[11px]" />
          ) : (
            <i className="fa-solid fa-check text-blue-600 text-[9px]" />
          )}
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
}
