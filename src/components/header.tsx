import Link from 'next/link';

export function Header() {
  return (
    <header className="flex justify-center py-8 pt-6 pb-0">
      <Link href="/">
        <div style={{ opacity: 1 }}>
        </div>
      </Link>
    </header>
  );
}
