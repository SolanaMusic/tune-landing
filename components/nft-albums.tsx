import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Music } from "lucide-react";

export function NftAlbums() {
  const albums = [
    {
      id: 1,
      title: "Cosmic Rhythms",
      artist: "Nebula Sounds",
      price: "75 $TUNE",
      image: "https://i.redd.it/uo8qbs4arnh61.jpg",
      limited: "127/200",
    },
    {
      id: 2,
      title: "Digital Dreams",
      artist: "Crypto Beats",
      price: "120 $TUNE",
      image:
        "https://i.seadn.io/gae/5RgK9qF_5sSZikTU5W_6dZY-370xxskghWE4Jt6o6tpwkhxL5SzUqEUQ-W-W4W73sgTyQtZxla6AAwqjF4-h4wWVHiorPWuxJVqsYA?auto=format&dpr=1&w=1000",
      limited: "23/50",
    },
    {
      id: 3,
      title: "Blockchain Symphony",
      artist: "Decentralized Audio",
      price: "90 $TUNE",
      image: "https://pbs.twimg.com/media/FDECwBUWQAAFeGK.jpg",
      limited: "78/150",
    },
    {
      id: 4,
      title: "Web3 Waves",
      artist: "Token Tunes",
      price: "60 $TUNE",
      image:
        "https://nftcalendar.io/storage/uploads/news/2023/2/I8BWIhXihIEbtAV0BBL1cHEmvDZAU0YlBuKblwtb.png",
      limited: "12/75",
    },
  ];

  return (
    <section id="nft-albums" className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Collectible NFT Albums
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Own limited edition albums as NFTs with exclusive perks, royalty
            sharing, and special access to artist content.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {albums.map((album) => (
            <Card
              key={album.id}
              className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-2 hover:border-purple-500/50 dark:hover:border-purple-400/50"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src={album.image || "/placeholder.svg"}
                  alt={album.title}
                  width={400}
                  height={400}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                  {album.limited}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-green-400 hover:from-purple-700 hover:to-green-500">
                    Collect Now
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold truncate">{album.title}</h3>
                  <div className="text-sm font-medium text-purple-500">
                    {album.price}
                  </div>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Music className="h-3 w-3 mr-1" />
                  <span>{album.artist}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-purple-600/10 to-green-400/10 rounded-xl p-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-green-400 rounded-lg blur opacity-25 dark:opacity-40"></div>
                <div className="relative bg-black rounded-lg overflow-hidden">
                  <Image
                    src="https://ml.globenewswire.com/Resource/Download/e93676c6-4d00-45c8-bf4d-f6d03be9435f?size=3"
                    alt="Featured NFT Album"
                    width={400}
                    height={400}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-2/3 space-y-4">
              <h3 className="text-2xl font-bold">
                NFT Albums: More Than Just Music
              </h3>
              <p className="text-muted-foreground">
                When you collect an NFT album on Tune, you're not just buying
                music - you're investing in the artist and gaining exclusive
                benefits.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="flex items-start gap-2 mt-2">
                  <div className="h-6 w-6 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-600 dark:text-purple-400"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Verifiable Ownership</h4>
                    <p className="text-sm text-muted-foreground">
                      Provable ownership of limited edition content
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-600 dark:text-green-400"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                      <line x1="9" y1="9" x2="9.01" y2="9"></line>
                      <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Exclusive Content</h4>
                    <p className="text-sm text-muted-foreground">
                      Access to unreleased tracks and behind-the-scenes
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900/20 flex items-center justify-center mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-indigo-600 dark:text-indigo-400"
                    >
                      <line x1="12" y1="1" x2="12" y2="23"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Royalty Sharing</h4>
                    <p className="text-sm text-muted-foreground">
                      Earn a percentage of future sales royalties
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-pink-600 dark:text-pink-400"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Community Access</h4>
                    <p className="text-sm text-muted-foreground">
                      Join private communities with the artist and other
                      collectors
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
