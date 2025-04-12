import Image from "next/image";

const games = [
  {
    title: "Project Makeover",
    image: "/images/project-makeover.png",
    roles: ["Lead Writer", "Lead Game Designer"],
    notes:
      "Collaborated with the team to create an immersive storyline and dynamic characters.",
    longDescription:
      "This game was an extensive project where I took part in crafting not just the main narrative but also helped in building an expansive world that players could explore. My role included designing lore, developing character backstories, and ensuring thematic consistency.",
  },
  {
    title: "Victory Belles",
    image: "/images/victory-belles.jpg",
    roles: ["Writer"],
    notes: "Wrote multiple character stories with dialogue",
    longDescription:
      "As a Narrative Designer, I focused on creating a seamless story experience that tied quests into the overarching plot. Each quest was designed to challenge players while revealing critical details about the game world and its inhabitants.",
  },
  // Add more game objects here
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
              <div className="aspect-w-16 aspect-h-9 relative">
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
                <h2 className="text-2xl font-semibold mb-4 text-[#E4E7EA]">
                  {game.title}
                </h2>
                <div className="text-base mb-4 text-[#AAB7C4]">
                  <strong>Roles:</strong> {game.roles.join(", ")}
                </div>
                <p className="text-base text-[#C3CCD6] leading-relaxed">
                  {game.notes}
                </p>
                {game.longDescription && (
                  <p className="text-base text-[#D4D9E1] mt-4">
                    {game.longDescription}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
