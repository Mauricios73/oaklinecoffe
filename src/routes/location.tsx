import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileBar } from "@/components/mobile-bar";
import { shop, fullAddress, hours, directionsUrl, mapEmbedUrl } from "@/lib/shop";
import patio from "@/assets/gallery-patio.jpg";

const title = "Location & Hours — Oakline Coffee, NW Portland";
const description =
  "Oakline Coffee is at 118 NW Alder Street, Portland. Hours, parking, transit, accessibility, Wi-Fi, and pet policy — plus one-tap directions.";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/location" },
    ],
    links: [{ rel: "canonical", href: "/location" }],
  }),
  component: LocationPage,
});

const details = [
  { label: "Parking", value: "Metered street parking on Alder and 2nd. Free after 6 PM and all day Sunday." },
  { label: "Transit", value: "MAX Green Line — Alder St stop, two blocks east. Bus 17 stops at the corner." },
  { label: "Landmarks", value: "Across from Alder Park, next to Wren Bakehouse." },
  { label: "Accessibility", value: "Step-free entrance, 36\" doorway, accessible restroom, and two low-height tables." },
  { label: "Seating", value: "34 indoor seats including a window bar, plus 12 seats on the sidewalk patio." },
  { label: "Wi-Fi", value: "Free, no password. Outlets at every table along the north wall." },
  { label: "Pets", value: "Well-behaved dogs are welcome on the patio. Water bowls by the door." },
];

function LocationPage() {
  return (
    <div className="pb-16 md:pb-0">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <p className="eyebrow">Visit us</p>
        <h1 className="mt-2 text-4xl md:text-5xl">Oakline Coffee — NW Alder Street</h1>
        <address className="mt-3 not-italic text-lg text-muted-foreground">{fullAddress}</address>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={directionsUrl} className="btn-base btn-primary">Get Directions</a>
          <Link to="/order" className="btn-base btn-secondary">Order Online</Link>
          <a href={shop.phoneHref} className="btn-base btn-secondary">Call {shop.phone}</a>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <iframe
            title="Map to Oakline Coffee"
            src={mapEmbedUrl}
            loading="lazy"
            className="h-80 w-full rounded-2xl border border-border lg:h-full"
          />
          <div>
            <h2 className="text-2xl">Opening hours</h2>
            <ul className="mt-4">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between border-b border-border py-3 text-sm">
                  <span className="font-semibold">{h.day}</span>
                  <span className="text-muted-foreground">{h.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Kitchen closes 30 minutes before the shop. Holiday hours are posted on the door and on
              our Google Business Profile.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <img src={patio} alt="Sidewalk patio seating outside Oakline Coffee" width={1000} height={800} loading="lazy" className="h-full w-full rounded-2xl object-cover" />
          <dl className="space-y-4">
            {details.map((d) => (
              <div key={d.label} className="rounded-2xl bg-card p-5 shadow-warm">
                <dt className="text-sm font-bold">{d.label}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <SiteFooter />
      <MobileBar />
    </div>
  );
}