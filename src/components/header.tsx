import Link from 'next/link';

export function Header() {
  return (
    <header className="flex justify-center py-8 pt-6 pb-0">
      <Link href="/">
        <div style={{ opacity: 1 }}>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-secondary h-9 px-4 py-2 link-with-animation">
            Home
          </button>
        </div>
      </Link>
      <Link href="/projects">
        <div style={{ opacity: 1 }}>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-secondary h-9 px-4 py-2 link-with-animation">
            Projects
          </button>
        </div>
      </Link>
    </header>
  );
}
