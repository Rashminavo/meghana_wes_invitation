import Link from 'next/link';

const LINKS = [
  { href: '/', label: 'මුල් පිටුව' },
  { href: '/#countdown', label: 'කාල ගණනය' },
  { href: '/#students', label: 'ශිෂ්‍ය පරපුර' },
  { href: '/#agenda', label: 'න්‍යාය පත්‍රය' },
  { href: '/#gallery', label: 'ගැලරිය' },
  { href: '/#venue', label: 'ස්ථානය' },
  { href: '/#contact', label: 'සම්බන්ධතා' },
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand">වෙස් තැබීමේ උත්සවය</Link>
        <ul className="nav-links">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
