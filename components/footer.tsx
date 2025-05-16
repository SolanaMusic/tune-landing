import Link from "next/link";
import { Music, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <Music className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-400">
                Tune
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              The Web3 music platform built on Solana where listeners earn,
              artists thrive, and music is owned.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://x.com/tune_xyz"
                target="blank"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    NFT Albums
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    $TUNE Token
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Whitepaper
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Artist Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-2 bg-black/10 dark:bg-white/10 rounded-full px-3 py-1">
                <img
                  src="https://s3.coinmarketcap.com/static-gravity/image/5cc0b99a8dd84fbfa4e150d84b5531f2.png"
                  alt="Solana"
                  className="h-5 w-5 rounded-full object-cover"
                />
                <span className="text-sm">Built on Solana</span>
              </div>
              <div className="flex items-center gap-2 bg-black/10 dark:bg-white/10 rounded-full px-3 py-1">
                <div className="h-5 w-5 rounded-full bg-gradient-to-r from-purple-600 to-green-400"></div>
                <span className="text-sm">Solana Ecosystem</span>
              </div>
              <Link
                href="https://x.com/kumekateam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black/10 dark:bg-white/10 rounded-full px-3 py-1 hover:bg-black/20 dark:hover:bg-white/20 transition"
              >
                <img
                  src="https://pbs.twimg.com/profile_images/1892580699401568256/Y05ceLGs_400x400.jpg"
                  alt="Kumeka Team"
                  className="h-5 w-5 rounded-full object-cover"
                />
                <span className="text-sm">Supported by Kumeka Team</span>
              </Link>
            </div>

            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Tune. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
