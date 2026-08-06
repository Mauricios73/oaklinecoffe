import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Coffee } from "lucide-react";

const nav = [
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/location", label: "Location" },
  { to: "/order", label: "Order" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-primary text-primary-foreground">
        <p className="mx-auto max-w-6xl px-4 py-2 text-center text-xs font-semibold tracking-wide">
          Order ahead and skip the wait — pickup ready in 10–15 minutes
        </p>
      </div>
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3">
          <Link to="/" className="flex min-w-0 items-center gap-2">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
              <Coffee className="h-4 w-4" />
            </span>
            <span className="truncate font-display text-xl font-semibold">Oakline Coffee</span>
          </Link>

          <div className="flex items-center gap-2">
            <nav className="hidden items-center gap-6 md:flex">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link to="/order" className="btn-base btn-primary px-5 py-2 text-sm">
              Order Now
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-border bg-background px-4 py-3 md:hidden">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block border-b border-border/60 py-3 text-base font-semibold last:border-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}