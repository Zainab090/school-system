export default function IconTile({ icon, className = '' }) {
  return (
    <div className={`w-9 h-9 flex items-center justify-start text-blue-600 text-[26px] ${className}`}>
      <i className={icon} />
    </div>
  );
}
