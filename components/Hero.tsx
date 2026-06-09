import Image from "next/image";
import { Crown } from "./Crown";

export function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-between overflow-hidden bg-bp-black px-6 py-10 lg:sticky lg:top-0 lg:h-screen lg:min-h-[640px]"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 20% 60%, rgba(225, 29, 34, 0.14) 0%, transparent 55%),
          radial-gradient(ellipse at 80% 20%, rgba(250, 204, 21, 0.06) 0%, transparent 45%),
          radial-gradient(ellipse at 50% 100%, rgba(225, 29, 34, 0.10) 0%, transparent 50%)
        `,
      }}
    >
      {/* ── Decorative splatters ── */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[-40px] top-[15%] h-48 w-48 rounded-full bg-bp-red opacity-[0.07] blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[-30px] bottom-[20%] h-40 w-40 rounded-full bg-bp-gold opacity-[0.06] blur-2xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] top-[8%] h-6 w-6 rounded-full bg-bp-red opacity-20"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] bottom-[30%] h-4 w-4 rounded-full bg-bp-gold opacity-25"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[18%] top-[35%] h-3 w-3 rounded-full bg-bp-red opacity-30"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[18%] bottom-[40%] h-5 w-5 rounded-full bg-bp-gold opacity-20"
      />

      {/* ── Crown trio ── */}
      <div className="animate-fade-in relative z-10 mt-2 flex items-end gap-4">
        <Crown size="sm" className="opacity-80 translate-y-1" />
        <Crown size="lg" className="drop-shadow-[0_0_12px_rgba(250,204,21,0.7)]" />
        <Crown size="sm" className="opacity-80 translate-y-1" />
      </div>

      {/* ── Logo text ── */}
      <div className="animate-fade-in-up delay-200 relative z-10 text-center leading-none select-none">
        <h1 className="font-display text-[clamp(3.5rem,10vw,7rem)] uppercase tracking-widest text-white drop-shadow-[0_2px_16px_rgba(255,255,255,0.15)]">
          BURGER
        </h1>
        <h1 className="font-display text-[clamp(3.5rem,10vw,7rem)] uppercase tracking-widest text-bp-red drop-shadow-[0_2px_20px_rgba(225,29,34,0.5)]">
          PRINCE
        </h1>
        <div className="mx-auto mt-1 h-1 w-3/4 rounded-full bg-gradient-to-r from-transparent via-bp-gold to-transparent opacity-60" />
      </div>

      {/* ── Burger image ── */}
      <div className="animate-fade-in-up delay-400 relative z-10 flex-1 flex items-center justify-center w-full max-w-sm mx-auto">
        <div className="animate-float relative w-full max-w-[340px] drop-shadow-[0_8px_40px_rgba(245,158,11,0.35)]">
          <Image
            src="/hamburgesa.webp"
            alt="Burger Prince — hamburguesa premium"
            width={480}
            height={420}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* ── Tagline ── */}
      <p className="animate-fade-in delay-600 relative z-10 mb-2 text-center font-body text-sm uppercase tracking-[0.25em] text-bp-gray">
        El sabor que te hace&nbsp;
        <span className="text-bp-gold font-semibold">rey</span>
      </p>
    </section>
  );
}
