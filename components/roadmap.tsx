import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Circle } from "lucide-react";

export function Roadmap() {
  const roadmapItems = [
    {
      quarter: "Q2 2025",
      title: "Platform Alpha",
      description: "Initial platform development and private testing.",
      completed: true,
      items: [
        { text: "Core streaming functionality", completed: true },
        { text: "Wallet integration", completed: true },
        { text: "NFT marketplace", completed: true },
      ],
    },
    {
      quarter: "Q3 2025",
      title: "Beta Launch",
      description:
        "Public beta with initial artist onboarding and token distribution.",
      completed: false,
      items: [
        { text: "Artist dashboard", completed: false },
        { text: "Token economy implementation", completed: false },
        { text: "Initial token distribution", completed: false },
      ],
    },
    {
      quarter: "Q4 2025",
      title: "Full Platform Launch",
      description:
        "Official platform launch with complete feature set and cross-platform support.",
      completed: false,
      items: [
        { text: "Mobile apps (iOS & Android)", completed: false },
        { text: "Desktop app", completed: false },
        { text: "Exchanges integration", completed: false },
      ],
    },
    {
      quarter: "Beyond",
      title: "Ecosystem Expansion",
      description:
        "Expanding the platform with new features and partnership integrations.",
      completed: false,
      items: [
        { text: "Live concert ticketing", completed: false },
        { text: "AI artists", completed: false },
        { text: "Music metaworld", completed: false },
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Platform Roadmap</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our journey to revolutionize the music industry with Web3
            technology.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 z-0">
                  <div
                    className={`h-6 w-6 rounded-full ${
                      item.completed
                        ? "bg-green-500"
                        : "bg-muted border-2 border-border"
                    } flex items-center justify-center`}
                  >
                    {item.completed ? (
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    ) : (
                      <Circle className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                </div>

                <div className="w-1/2"></div>

                <Card
                  className={`relative z-10 w-full md:w-5/6 mt-6 border-2 ${
                    item.completed ? "border-green-500/30" : ""
                  }`}
                >
                  <CardContent className="p-6 pt-8">
                    <div className="inline-block rounded-full bg-muted px-3 py-1 text-sm mb-2">
                      {item.quarter}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    <ul className="space-y-2">
                      {item.items.map((subItem, subIndex) => (
                        <li key={subIndex} className="flex items-center gap-2">
                          {subItem.completed ? (
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                          ) : (
                            <Circle className="h-4 w-4 text-muted-foreground" />
                          )}
                          <span
                            className={
                              subItem.completed ? "" : "text-muted-foreground"
                            }
                          >
                            {subItem.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
