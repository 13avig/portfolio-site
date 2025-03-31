import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <Header />
      <main className="flex-grow px-6">
        <section>
          <div>
            <article className="max-w-xl pt-8 mx-auto text-sm loading-element">
              <div className="flex flex-col items-start mb-4 sm:mb-4">
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex items-center h-[40px]">
                    <div className="text-4xl font-thin patriot-bold">AP</div>
                  </div>
                  <div className="flex flex-col items-end gap-0">
                    <div className="h-[20px]">
                      <p className="text-sm font-bold leading-relaxed tracking-wider text-foreground">
                        Awesome to see you
                      </p>
                    </div>
                    <div className="h-[20px] flex items-center">
                      <time className="text-sm text-secondary">
                        <p className="inline">{new Date().toISOString().split('T')[0]}</p>{' '}
                        <p className="inline">{String(new Date().getHours()).padStart(2, '0')}</p>
                        <p className="inline">:</p>
                        <p className="inline">{String(new Date().getMinutes()).padStart(2, '0')}</p>
                        <p className="inline">:</p>
                        <p className="inline">
                          {String(new Date().getSeconds()).padStart(2, '0')}
                          <span className="dud">_</span>
                        </p>
                      </time>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mb-4">
                I spend a lot of my time tinkering and building new ideas I find interesting.
              </p>

              <p className="mb-4">
                I'm also the first growth engineer at{' '}
                <a
                  href="https://www.browserbase.com/"
                  className="mb-4 text-accent link-with-animation"
                >
                  Browserbase
                </a>
                , an exciting startup in San Francisco.
              </p>
              <p className="mb-4">
                Feel free to{' '}
                <a
                  href="https://x.com/alexdphan"
                  className="mb-4 text-accent link-with-animation"
                >
                  DM
                </a>{' '}
                if you'd like to chat!
              </p>
              <p className="mb-4">Past Events:</p>
              <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                <li className="mb-2">
                  <a
                    href="https://www.outliers.build/"
                    className="mb-4 text-accent link-with-animation"
                  >
                    Outlier Fellow
                  </a>{' '}
                  at{' '}
                  <a
                    href="https://www.floodgate.com/"
                    className="mb-4 text-accent link-with-animation"
                  >
                    Floodgate
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://blog.celestia.org/introducing-modular-fellows/"
                    className="mb-4 text-accent link-with-animation"
                  >
                    Modular Fellow
                  </a>{' '}
                  at{' '}
                  <a
                    href="https://celestia.org/"
                    className="mb-4 text-accent link-with-animation"
                  >
                    Celestia
                  </a>
                </li>
                <li className="mb-2">
                  First Analyst at{' '}
                  <a
                    href="https://www.alchemy.com/"
                    className="mb-4 text-accent link-with-animation"
                  >
                    Alchemy
                  </a>
                </li>
              </ul>
            </article>
          </div>
          <Footer />
        </section>
      </main>
    </div>
  );
}
