import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";

export function EarlyAccess() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Get Early Access</h2>
          <p className="text-muted-foreground">
            Join the revolution in music streaming. Be among the first to
            experience Tune and earn $TUNE tokens.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="email">Email Signup</TabsTrigger>
              <TabsTrigger value="wallet">Connect Wallet</TabsTrigger>
            </TabsList>
            <TabsContent value="email" className="space-y-4 mt-4">
              <div className="space-y-2">
                <form className="flex flex-col space-y-2">
                  <Input type="text" placeholder="Name" />
                  <Input type="email" placeholder="Email address" />
                  <div className="flex items-center space-x-2 text-sm">
                    <input
                      type="checkbox"
                      id="artist"
                      className="rounded border-muted-foreground/20"
                    />
                    <label htmlFor="artist">
                      I am an artist interested in joining the platform
                    </label>
                  </div>
                  <Button className="bg-gradient-to-r from-purple-600 to-green-400 hover:from-purple-700 hover:to-green-500">
                    Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  By signing up, you agree to our Terms of Service and Privacy
                  Policy.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="wallet" className="space-y-4 mt-4">
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Supported Wallets
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    {
                      name: "Phantom",
                      img: "https://coinlaunch.space/media/images/4/8/5/0/4850.sp3ow1.192x192.png",
                    },
                    {
                      name: "Solflare",
                      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qvYmSE_G3LoW5wzWTZsrZicJmHmHuB6heA&s",
                    },
                    {
                      name: "Torus",
                      img: "https://avatars.githubusercontent.com/u/44049579?s=280&v=4",
                    },
                  ].map((wallet) => (
                    <div
                      key={wallet.name}
                      className="flex flex-col items-center justify-center p-2 border rounded-lg hover:bg-muted/50 cursor-pointer"
                    >
                      <img
                        src={wallet.img}
                        alt={wallet.name}
                        className="h-8 w-8 rounded-full mb-1 object-contain"
                      />
                      <span className="text-xs">{wallet.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-12 max-w-3xl mx-auto bg-gradient-to-r from-purple-600/10 to-green-400/10 dark:from-purple-600/20 dark:to-green-400/20 rounded-xl p-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-green-400 rounded-full blur opacity-75 dark:opacity-90"></div>
                <div className="relative h-24 w-24 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">150</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">Early Bird Bonus</h3>
              <p className="text-muted-foreground">
                The first 10,000 users to join Tune will receive 150 $TUNE
                tokens as a welcome bonus. Early artists will get priority
                verification and featured placement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
