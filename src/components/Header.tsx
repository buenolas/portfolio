import { navItems } from "@/lib/constants";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex h-14 items-center justify-between md:h-16">
          <a href="#topo" className="group flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded border border-blue/40 bg-blue/10 font-mono text-sm font-semibold text-cyan">
              LB
            </span>
            <span className="hidden font-mono text-xs uppercase tracking-[0.18em] text-muted sm:inline">
              DEV PROFILE
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition hover:text-text"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <nav className="-mx-4 flex gap-4 overflow-x-auto border-t border-white/10 px-4 py-3 [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-muted transition hover:text-text"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
