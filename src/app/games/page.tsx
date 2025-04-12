import Image from "next/image";

const games = [
  {
    title: "Project Makeover",
    image: "/images/project-makeover.png",
    studio: "Magic Tavern",
    roles: ["Lead Writer", "Lead Narrative Designer"],
    notes:
      "Creating characters and feel-good stories in the Project Makeover universe.",
  },
  {
    title: "Victory Belles",
    image: "/images/victory-belles.jpg",
    studio: "Black Chicken Studios",
    roles: ["Writer", "Editor"],
    notes:
      "Developed narratives for a huge (+120) multinational cast of vivid characters. Researched for historical fidelity and technical accuracy.",
  },
  {
    title: "Beyond the Skies",
    image: "/images/beyond-the-skies.jpg",
    studio: "Starlight Interactive Games",
    roles: ["Writer", "Narrative Designer"],
    notes:
      "Flavor text and names for a 4X strategy game set in a hostile galaxy.",
  },
];

export default function Games() {
  return (
    <div className="min-h-screen bg-gradient-to-l from-black to-[#0A0F1B] text-[#E4E7EA] px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Games</h1>
        <div className="space-y-12">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-[#112240] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-2xl mx-auto"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover rounded-t-lg"
                  sizes="(max-width: 768px) 100vw, 672px"
                  priority={index === 0}
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-[#E4E7EA]">
                  {game.title}
                </h2>
                <div className="text-base mb-4 text-[#AAB7C4]">
                  {game.studio}
                </div>
                <div className="text-base mb-4 text-[#AAB7C4]">
                  <strong>Roles:</strong> {game.roles.join(", ")}
                </div>
                <p className="text-base text-[#C3CCD6] leading-relaxed">
                  {game.notes}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
