import { MenuCard } from "./MenuCard";

const menuItems = [
  {
    id: 1,
    name: "Clásica",
    solo: 60,
    combo: 75,
    ingredients: "Jamón, queso Oaxaca, queso amarillo, tocino",
    emoji: "🍔",
  },
  {
    id: 2,
    name: "Hawaiana",
    solo: 65,
    combo: 80,
    ingredients: "Jamón, queso Oaxaca, queso amarillo, tocino, piña",
    emoji: "🍍",
  },
  {
    id: 3,
    name: "Especial",
    solo: 65,
    combo: 80,
    ingredients: "Jamón, queso Oaxaca, queso amarillo, tocino, cebolla caramelizada, salchicha",
    emoji: "⭐",
  },
  {
    id: 4,
    name: "Arrachera",
    solo: 85,
    combo: 100,
    ingredients: "Queso manchego, queso Oaxaca, tocino, jamón, queso amarillo",
    emoji: "🥩",
  },
  {
    id: 5,
    name: "Chicken Burger",
    solo: 65,
    combo: 80,
    ingredients: "Jamón, queso Oaxaca, queso manchego, queso amarillo, piña",
    emoji: "🍗",
  },
  {
    id: 6,
    name: "Alitas",
    solo: null,
    combo: 80,
    ingredients: "Alitas de pollo con papas",
    emoji: "🔥",
  },
];

export function MenuSection() {
  return (
    <section className="flex flex-col bg-bp-dark px-5 py-10 lg:overflow-y-auto lg:min-h-screen">
      {/* Section header */}
      <div className="mb-8 text-center">
        <h2 className="font-display text-5xl text-white tracking-widest">
          NUESTRO <span className="text-bp-red">MENÚ</span>
        </h2>
        <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-bp-gold" />
        <p className="mt-3 font-body text-sm text-bp-gray uppercase tracking-widest">
          Todas incluyen pan, carne y aderezos
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 flex-1">
        {menuItems.map((item, index) => (
          <MenuCard key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* Promo note */}
      <div className="mt-8 rounded-xl border border-bp-gold/30 bg-bp-black/60 px-5 py-4 text-center animate-glow-pulse">
        <p className="font-body text-sm text-bp-gray">
          <span className="text-bp-gold font-semibold">✦ Combos</span> incluyen papas medianas y refresco
        </p>
      </div>
    </section>
  );
}
