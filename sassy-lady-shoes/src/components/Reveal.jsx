// Layout wrapper. (Scroll-triggered fade/slide entrances were removed on purpose.)
export default function Reveal({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}
