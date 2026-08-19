import type { Achievement } from "@/types";

export const viciousAchievements: Achievement[] = [
  {
    id: "ewc26-2nd",
    title: "2nd Place — EWC 2026 Paris",
    event: "Esports World Cup 2026",
    placement: "2nd Place",
    date: "2026",
    roster: ["Dyann", "Sapauu", "Simont", "Ymcud", "Taikonn"],
    description: "Vicious Esports competed at EWC 2026 in Paris, securing a 2nd place finish.",
    images: [
      {
        src: "/images/achievements/vicious-ewc26.jpeg",
        alt: "Vicious Esports 2nd Place EWC26 Paris",
        caption: "2nd Place, EWC 2026 Paris",
      },
    ],
  },
];

export const playerAchievements: Achievement[] = [
  {
    id: "wildrift-pro",
    title: "Professional Wild Rift Player",
    event: "League of Legends: Wild Rift",
    placement: "Competitor & Analyst",
    date: "2019 to 2023",
    description:
      "Competed professionally in League of Legends: Wild Rift across MENA. Active streamer and in-game analyst. Liquipedia profile: liquipedia.net/wildrift/F0G",
    images: [],
  },
];
