import Link from "next/link";
import { Music } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import { NftAlbums } from "@/components/nft-albums";
import { TokenUtility } from "@/components/token-utility";
import { Roadmap } from "@/components/roadmap";
import { EarlyAccess } from "@/components/early-access";
import { Footer } from "@/components/footer";
import { ThemeToggle } from "@/components/theme-toggle";
import SolanaWallets from "@/components/ui/solana-wallets";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b backdrop-blur-sm bg-background/80">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Music className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-400">
              Tune
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-primary"
            >
              How It Works
            </Link>
            <Link
              href="#nft-albums"
              className="text-sm font-medium hover:text-primary"
            >
              NFT Albums
            </Link>
            <Link
              href="#token"
              className="text-sm font-medium hover:text-primary"
            >
              $TUNE Token
            </Link>
            <Link
              href="#roadmap"
              className="text-sm font-medium hover:text-primary"
            >
              Roadmap
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <SolanaWallets />
          </div>
        </div>
      </header>

      <main className="flex-1 bg-background">
        <HeroSection />
        <HowItWorks />
        <NftAlbums />
        <TokenUtility />
        <Roadmap />
        <EarlyAccess />
      </main>

      <Footer />
    </div>
  );
}
