import { Link } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";
import { shop, fullAddress, hours, directionsUrl } from "@/lib/shop";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="font-display text-2xl">Oakline Coffee</h2>
          <p className="mt-3 text-sm opacity-80">{shop.tagline}. Freshly brewed every day in {shop.city}.</p>
          <div className="mt-4 flex gap-3">
            <a href="https://instagram.com" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="text-sm">
          <h3 className="text-sm font-bold uppercase tracking-widest opacity-70">Visit</h3>
          <address className="mt-3 not-italic opacity-90">{fullAddress}</address>
          <p className="mt-2">
            <a href={shop.phoneHref} className="underline underline-offset-4">{shop.phone}</a>
          </p>
          <p className="mt-1">
            <a href={`mailto:${shop.email}`} className="underline underline-offset-4">{shop.email}</a>
          </p>
          <p className="mt-2">
            <a href={directionsUrl} className="underline underline-offset-4">Get directions</a>
          </p>
        </div>

        <div className="text-sm">
          <h3 className="text-sm font-bold uppercase tracking-widest opacity-70">Hours</h3>
          <ul className="mt-3 space-y-1 opacity-90">
            {hours.map((h) => (
              <li key={h.day}>
                {h.day}: {h.time}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-sm">
          <h3 className="text-sm font-bold uppercase tracking-widest opacity-70">Explore</h3>
          <ul className="mt-3 space-y-2 opacity-90">
            <li><Link to="/menu" className="hover:underline">Menu</Link></li>
            <li><Link to="/order" className="hover:underline">Order online</Link></li>
            <li><Link to="/about" className="hover:underline">About us</Link></li>
            <li><Link to="/location" className="hover:underline">Location & hours</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs opacity-70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Oakline Coffee. Family-owned in {shop.city}.</p>
          <p className="flex gap-4">
            <span>Privacy policy</span>
            <span>Terms</span>
            <span>Accessibility statement</span>
          </p>
        </div>
      </div>
    </footer>
  );
}