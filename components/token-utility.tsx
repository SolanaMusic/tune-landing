import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Wallet, Music, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TokenUtility() {
  return (
    <section id="token" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            $TUNE Token Utility
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The $TUNE token powers the entire Tune ecosystem, creating value for
            listeners, artists, and the community.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center mb-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900/20 px-3 py-1 text-sm font-medium text-purple-600 dark:text-purple-400">
              <Wallet className="mr-1 h-3 w-3" />
              Solana SPL Token
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">
              The Currency of Music's Future
            </h3>
            <p className="text-muted-foreground">
              $TUNE is more than just a token - it's the foundation of a new
              music economy that rewards participation, enables direct artist
              support, and gives governance rights to the community.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold">1B</div>
                <div className="text-xs text-muted-foreground">
                  Total Supply
                </div>
              </div>
              <div className="h-10 w-px bg-border"></div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold">40%</div>
                <div className="text-xs text-muted-foreground">
                  Community Allocation
                </div>
              </div>
              <div className="h-10 w-px bg-border"></div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold">30%</div>
                <div className="text-xs text-muted-foreground">
                  Artist Rewards
                </div>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-green-400 hover:from-purple-700 hover:to-green-500">
              Tokenomics Whitepaper <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-green-400/20 dark:from-purple-500/30 dark:to-green-400/30 rounded-full blur-xl"></div>
              <Image
                src="tunecoin.png"
                alt="TUNE Token"
                width={400}
                height={400}
                className="relative mx-auto"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mb-2">
                <Music className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle>Streaming Rewards</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Earn tokens for every minute you spend listening to music on the
                platform.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900/20 flex items-center justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
                >
                  <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path>
                  <circle cx="17" cy="7" r="5"></circle>
                </svg>
              </div>
              <CardTitle>NFT Purchases</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Use $TUNE to purchase limited edition NFT albums and exclusive
                artist content.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle>Governance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Vote on platform features, artist promotions, and ecosystem fund
                allocations.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-full bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-pink-600 dark:text-pink-400"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
              </div>
              <CardTitle>Staking Rewards</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Stake your tokens to earn passive income and unlock premium
                platform features.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
