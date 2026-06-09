export function Footer() {
  return (
    <footer className="bg-bp-black border-t-4 border-bp-red">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <span className="text-4xl" role="img" aria-label="Hamburguesa">🍔</span>
            <p className="font-display text-bp-gold text-lg tracking-wide">
              INGREDIENTES DE CALIDAD
            </p>
            <p className="text-bp-gray text-sm font-body leading-relaxed">
              Carne fresca, quesos artesanales y vegetales seleccionados cada día.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <span className="text-4xl" role="img" aria-label="Corona">👑</span>
            <p className="font-display text-bp-gold text-lg tracking-wide">
              SABOR QUE TE HACE REY
            </p>
            <p className="text-bp-gray text-sm font-body leading-relaxed">
              Cada burger es una experiencia única con sabores que conquistan.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <span className="text-4xl" role="img" aria-label="Papas fritas">🍟</span>
            <p className="font-display text-bp-gold text-lg tracking-wide">
              HECHAS AL MOMENTO
            </p>
            <p className="text-bp-gray text-sm font-body leading-relaxed">
              Preparadas en el instante que las pides. Sin prisa, sin esperas largas.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="font-display text-2xl text-white tracking-widest">
            BURGER <span className="text-bp-red">PRINCE</span>
          </p>
          <p className="text-bp-gray text-xs mt-2 font-body">
            © {new Date().getFullYear()} Burger Prince. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
