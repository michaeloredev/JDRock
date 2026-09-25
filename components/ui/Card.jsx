export default function Card({ as: Tag = "div", className = "", children, ...props }) {
  return (
    <Tag
      className={`rounded-lg border border-stone-200 bg-white p-6 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
