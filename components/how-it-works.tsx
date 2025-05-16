import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Headphones, Music, Wallet, Users } from "lucide-react";
import Image from "next/image";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tune creates a new music economy where everyone benefits -
            listeners, artists, and the community.
          </p>
        </div>

        <Tabs defaultValue="listeners" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="listeners">For Listeners</TabsTrigger>
            <TabsTrigger value="artists">For Artists</TabsTrigger>
          </TabsList>
          <TabsContent value="listeners" className="mt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mb-2">
                    <Headphones className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle>Listen</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Stream your favorite music on the Tune platform just like
                    you normally would.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900/20 flex items-center justify-center mb-2">
                    <Wallet className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <CardTitle>Earn</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Receive $TUNE tokens for every minute you spend listening
                    and engaging with artists.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle>Own</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Use tokens to buy NFT albums, vote on platform decisions, or
                    exchange for other cryptocurrencies.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 bg-gradient-to-r from-purple-600/10 to-green-400/10 rounded-xl p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/2">
                  <Image
                    src="/listener_rewards.jpg"
                    alt="Tune Listener Experience"
                    width={500}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
                <div className="md:w-1/2 space-y-4">
                  <h3 className="text-xl font-bold">Listener Rewards</h3>
                  <p>
                    The more you listen, the more you earn. Discover new artists
                    and get rewarded for your attention.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Earn 1 $TUNE per 10 minutes of listening</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Bonus tokens for creating playlists</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Early access to exclusive NFT drops</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="artists" className="mt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mb-2">
                    <Music className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle>Create</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Upload your music to Tune and set your own terms for
                    streaming and ownership.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900/20 flex items-center justify-center mb-2">
                    <Wallet className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <CardTitle>Monetize</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Earn 80% of streaming revenue directly to your wallet with
                    transparent payments.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle>Connect</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Build direct relationships with fans through NFT drops and
                    exclusive content.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 bg-gradient-to-r from-purple-600/10 to-green-400/10 rounded-xl p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/2 space-y-4">
                  <h3 className="text-xl font-bold">Artist Benefits</h3>
                  <p>
                    Take control of your music and build sustainable income
                    streams with direct fan support.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>80% of streaming revenue goes directly to you</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Create and sell limited edition NFT albums</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Real-time analytics and direct fan engagement</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/artist_benefits.png"
                    alt="Tune Artist Dashboard"
                    width={500}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
