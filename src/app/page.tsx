"use client";

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import Link from 'next/link';
import { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <time className="text-sm text-secondary">
      <p className="inline">{time.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-')}</p>{' '}
      <p className="inline">{String(time.getHours()).padStart(2, '0')}</p>
      <p className="inline">:</p>
      <p className="inline">{String(time.getMinutes()).padStart(2, '0')}</p>
      <p className="inline">:</p>
      <p className="inline">
        {String(time.getSeconds()).padStart(2, '0')}
        <span className="dud"></span>
      </p>
    </time>
  );
}

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
                    <div className="text-4xl font-thin patriot-bold">ag</div>
                  </div>
                  <div className="flex flex-col items-end gap-0">
                    <div className="h-[20px]">
                      <p className="text-sm font-bold leading-relaxed tracking-wider text-foreground">
                        Berkeley, CA
                      </p>
                    </div>
                    <div className="h-[20px] flex items-center">
                      <Clock />
                    </div>
                  </div>
                </div>
              </div>
              <p className="mb-4">
                I spend my time solving puzzles and thinking about the political and economic state of the world.
              </p>

              <p className="mb-4">
                Currently at UC Berkeley studying Computer Science.{' '}
              </p>
              <p className="mb-4">
                Feel free to{' '}
                <a
                  href="https://x.com/forchaud"
                  target="_blank"
                  className="mb-4 text-accent link-with-animation"
                >
                  reach out!
                </a>{' '}
              </p>
              <p className="mb-4">Past:</p>
              <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
              <li className="mb-2">
                Software Development Engineering at {' '}
                  <a
                    href="https://aws.amazon.com/rds/"
                    target="_blank"
                    className="mb-4 text-accent link-with-animation"
                  >
                    Amazon RDS
                  </a>{' '}
                </li>
                <li className="mb-2">
                Reinforcement Learning under {' '}
                <a
                    href="https://people.eecs.berkeley.edu/~svlevine/"
                    target="_blank"
                    className="mb-4 text-accent link-with-animation"
                  >
                    Sergey Levine
                  </a>{' '}
                at {' '}
                  <a
                    href="https://rail.eecs.berkeley.edu/"
                    target="_blank"
                    className="mb-4 text-accent link-with-animation"
                  >
                    RAIL
                  </a>{' '}
                </li>
                <li className="mb-2">
                  Short Stature Genomics under {' '}
                  <a
                    href="https://www.broadinstitute.org/bios/joel-hirschhorn"
                    target="_blank"
                    className="mb-4 text-accent link-with-animation"
                  >
                    Joel Hirschhorn
                  </a>{' '}
                  at {' '}
                  <a
                    href="https://www.broadinstitute.org/"
                    target="_blank"
                    className="mb-4 text-accent link-with-animation"
                  >
                    Broad Institute
                  </a>
                </li>
              </ul>
              <ul style={{ listStyleType: 'disc', marginLeft: '20px', marginBottom: '1.2rem' }}>
                <li className="mb-2">
                  Voice Recognition & Speech Therapy at {''}
                  <a
                    href="https://spokeitthegame.com/"
                    target="_blank"
                    className="mb-4 text-accent link-with-animation"
                  >
                    SpokeIt
                  </a>
                </li>
              </ul>
              <p className="mb-4">Personal:</p>
              <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                <li className="mb-2">
                Pro-bono College Counseling at {' '}
                  <a
                    href="https://peeradmit.com/"
                    target="_blank"
                    className="mb-4 text-accent link-with-animation"
                  >
                    Peer Admit
                  </a>{' '}
                </li>
                <li className="mb-2">
                  Artificial Intelligence for Clinical Trials at GWS
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
