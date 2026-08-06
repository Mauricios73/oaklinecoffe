import { Link } from "@tanstack/react-router";
import { Phone, MapPin, ShoppingBag } from "lucide-react";
import { shop, directionsUrl } from "@/lib/shop";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-border bg-background/95 backdrop-blur md:hidden">
      <a href={shop.phoneHref} className="flex flex-col items-center gap-1 py-3 text-xs font-semibold">
        <Phone className="h-5 w-5" />
        Call
      </a>
      <a href={directionsUrl} className="flex flex-col items-center gap-1 border-x border-border py-3 text-xs font-semibold">
        <MapPin className="h-5 w-5" />
        Directions
      </a>
      <Link to="/order" className="flex flex-col items-center gap-1 bg-accent py-3 text-xs font-bold text-accent-foreground">
        <ShoppingBag className="h-5 w-5" />
        Order
      </Link>
    </div>
  );
}