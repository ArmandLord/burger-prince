import { Crown } from "./Crown";

interface MenuItem {
  id: number;
  name: string;
  solo: number | null;
  combo: number;
  ingredients: string;
  emoji: string;
}

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

export function MenuCard({ item, index }: MenuCardProps) {
  return (
    <article
      className="group relative flex flex-col rounded-xl border border-bp-red bg-bp-black p-5 shadow-[0_4px_24px_rgba(225,29,34,0.15)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(250,204,21,0.35)] hover:border-bp-gold animate-fade-in-up cursor-default"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Subtle inner glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-bp-gold/5 to-transparent" />

      {/* Header: name + emoji + price badge */}
      <div className="relative z-10 flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl" role="img" aria-hidden="true">{item.emoji}</span>
          <h3 className="font-display text-xl text-white tracking-wide leading-tight">
            {item.name.toUpperCase()}
          </h3>
        </div>

        {/* Price badge */}
        <div className="flex flex-col items-center shrink-0">
          <Crown size="sm" />
          <div className="bg-bp-red rounded-md px-3 py-1 text-center">
            <span className="block font-display text-white text-xl leading-tight">
              ${item.combo}
            </span>
            <span className="block font-body text-white/70 text-[10px] uppercase tracking-wider leading-none">
              con papas
            </span>
          </div>
        </div>
      </div>

      {/* Solo price */}
      {item.solo !== null && (
        <p className="relative z-10 mb-2 font-body text-xs text-bp-gray">
          Sola:{" "}
          <span className="font-semibold text-bp-gold">${item.solo}</span>
        </p>
      )}

      {/* Divider */}
      <div className="relative z-10 mb-3 h-px w-full bg-gradient-to-r from-transparent via-bp-red/40 to-transparent" />

      {/* Ingredients */}
      <p className="relative z-10 font-body text-xs text-bp-gray leading-relaxed">
        {item.ingredients}
      </p>
    </article>
  );
}
