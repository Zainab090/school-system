const TINTS = ['#c9d6e8', '#bcd3e6', '#d5d9e2', '#c2cfdf', '#cdd6e3', '#b8c7da'];

export default function Avatar({ name, photo, index = 0, size = 40 }) {
  if (photo) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={photo} alt={name} width={size} height={size} className="rounded-full object-cover shrink-0" style={{ width: size, height: size }} />;
  }
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" className="shrink-0 rounded-full" role="img" aria-label={name}>
      <rect width="40" height="40" fill={TINTS[index % TINTS.length]} />
      <circle cx="20" cy="16" r="7" fill="#e8c9ad" />
      <path d="M13 14c0-5 3-8 7-8s7 3 7 8c-2-3-5-4-7-4s-5 1-7 4z" fill="#3a2d28" />
      <path d="M5 40c1-9 7-13 15-13s14 4 15 13z" fill="#1f2d4d" />
    </svg>
  );
}
