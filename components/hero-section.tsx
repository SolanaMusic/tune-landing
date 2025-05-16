import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Music } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-background to-background/80">
      <div className="absolute inset-0 bg-[url('/tune_ad.png')] bg-cover bg-center opacity-10 dark:opacity-5"></div>
      <div className="container relative z-10">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-8">
            <div className="inline-block rounded-full bg-muted px-3 py-1 text-sm">
              Built on Solana
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-400">
              Listen. Earn. <br />
              Own the Music.
            </h1>
            <p className="text-xl text-muted-foreground max-w-md">
              The first Web3 music platform where listeners earn tokens, artists
              get paid fairly, and everyone owns a piece of the ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-green-400 hover:from-purple-700 hover:to-green-500"
              >
                Get Early Access <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[
                  "https://ezway.s3.amazonaws.com/jondo/nft/nft-header-1.jpg",
                  "https://minfin.com.ua/img/2022/93202132/a5f493c40fc9800092c2f30223f5c905.jpeg",
                  "https://www.artnews.com/wp-content/uploads/2022/01/unnamed-2.png?w=631",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyTh5ljvubR6s3LeERqK8DHldWwD3DcwBLw&s",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`User ${i + 1}`}
                    className="h-8 w-8 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <p>Join 100+ early adopters</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-green-400/20 rounded-full blur-3xl"></div>
            <div className="relative bg-gradient-to-r from-purple-600/80 to-green-400/80 rounded-2xl p-1">
              <div className="bg-black rounded-xl overflow-hidden">
                <Image
                  src="tune_ad.png"
                  alt="TuneFlow Platform Preview"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-background rounded-xl p-4 shadow-lg border">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-600 to-green-400 flex items-center justify-center">
                  <Music className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium">$TUNE Earned</div>
                  <div className="text-xl font-bold">128.5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
