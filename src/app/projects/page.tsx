import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  slug: string;
}

const projects: Project[] = [
  {
    title: 'Ilya Papers',
    description: 'Question and Answer on Ilya Papers',
    slug: 'ilya-papers',
  },
  {
    title: 'Glaze AI',
    description: 'The most absurd way to congratulate your friends',
    slug: 'glazeai',
  },
  {
    title: 'ContextBlocker',
    description: "The World's First AI-Powered Distraction Blocker",
    slug: 'contextblocker',
  },
  {
    title: 'Cloak Payments',
    description: 'An AI-powered payments platform',
    slug: 'cloak-payments',
  },
  {
    title: 'GPTeam',
    description: 'Four AI-powered "experts" answering questions and providing workflows',
    slug: 'gpteam',
  },
  {
    title: 'BabyAGI Chroma Agent',
    description: 'Baby AGI template with Chroma as a vector database',
    slug: 'babyagi-chroma',
  },
  {
    title: 'Prompt Guessr',
    description: 'Guessing the prompt of images made from Stable Diffusion',
    slug: 'prompt-guessr',
  },
  {
    title: 'cNFTs',
    description: 'Celestia NFTs',
    slug: 'celestia-nfts',
  },
  {
    title: 'Bound',
    description: 'Subscription Based NFTs',
    slug: 'bound',
  },
  {
    title: 'Alchemy Reports',
    description: 'Blockchain and Crypto Related Reports, Guides, and Documentation',
    slug: 'alchemy-reports',
  },
  {
    title: 'Library of Web3',
    description: 'Viral Resource on Crypto, Blockchains, Zero Knowledge Proofs, and more.',
    slug: 'library-of-web3',
  },
  {
    title: 'Hypergate',
    description: 'A dashboard that hosts all third-party tooling specifically for DAOs',
    slug: 'Hypergate',
  },
  {
    title: 'Map Chat',
    description: 'Group chats... on a map',
    slug: 'map-chat',
  },
  {
    title: 'AP Enterprises LLC',
    description: '$10,000 MRR in 2 months',
    slug: 'ap-llc',
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <Header />
      <main className="flex-grow px-6">
        <div>
          <article className="max-w-xl pt-8 mx-auto text-sm loading-element">
            <div className="text-start">
              <h1 className="mb-1 font-semibold">Projects</h1>
              <p className="text-secondary">Highlighting some builds</p>
            </div>
            <div className="loading-element">
              {projects.map((project) => (
                <div className="mb-8" key={project.slug}>
                  <p className="w-[100px] tabular-nums" />
                  <h2 className="inline-block mb-1 font-semibold">
                    <Link className="link-with-animation" href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h2>
                  <p className="tracking-tight text-secondary">{project.description}</p>
                </div>
              ))}
            </div>
          </article>
          <Footer />
        </div>
      </main>
    </div>
  );
}
