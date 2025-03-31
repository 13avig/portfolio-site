"use client";

import Link from 'next/link';
import { useState } from 'react';

export function Footer() {
  const [showEmail, setShowEmail] = useState(false);
  const email = "avi_gupta@berkeley.edu";

  return (
    <div className="flex items-center justify-center">
      <footer style={{ marginTop: 'auto' }} className="flex py-8 pt-8">
        <div style={{ opacity: 1 }}>
          <Link href="https://github.com/13avig" target="_blank">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 text-muted-foreground link-with-animation">
              <span className="text-secondary">Github</span>
            </button>
          </Link>
          <Link href="https://www.linkedin.com/in/avi-gupta13/" target="_blank">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 text-muted-foreground link-with-animation">
              <span className="text-secondary">LinkedIn</span>
            </button>
          </Link>
          <Link href="https://twitter.com/forchaud" target="_blank">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 text-muted-foreground link-with-animation">
              <span className="text-secondary">Twitter</span>
            </button>
          </Link>
          <button 
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 text-muted-foreground link-with-animation"
            onMouseEnter={() => setShowEmail(true)}
            onMouseLeave={() => setShowEmail(false)}
          >
            <span className="text-secondary">{showEmail ? email : 'Mail'}</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
