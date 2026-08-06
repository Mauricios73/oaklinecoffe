import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, MapPin, Timer, Star, Leaf, HandHeart, Zap } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileBar } from "@/components/mobile-bar";
import { shop, fullAddress, hours, directionsUrl, mapEmbedUrl } from "@/lib/shop";
import hero from "@/assets/hero-cafe.jpg";
import latte from "@/assets/drink-caramel-latte.jpg";
import coldBrew from "@/assets/drink-cold-brew.jpg";
import cappuccino from "@/assets/drink-cappuccino.jpg";
import croissant from "@/assets/food-croissant.jpg";
import sandwich from "@/assets/food-breakfast-sandwich.jpg";
import interior from "@/assets/gallery-interior.jpg";
import patio from "@/assets/gallery-patio.jpg";
import beans from "@/assets/gallery-beans.jpg";
import team from "@/assets/gallery-team.jpg";

const title = "Oakline Coffee — Specialty Coffee Shop in Portland, OR";
const description =
  "Handcrafted coffee, house-made pastries, and a welcoming space in NW Portland. Order ahead for pickup in 10–15 minutes.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CafeOrCoffeeShop",
          name: shop.name,
          address: {
            "@type": "PostalAddress",
            streetAddress: shop.street,
            addressLocality: shop.city,
            addressRegion: shop.region,
            postalCode: shop.zip,
          },
          telephone: shop.phone,
          servesCuisine: "Coffee",
          priceRange: "$$",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: shop.rating,
            reviewCount: shop.reviewCount,
          },
        }),
      },
    ],
  }),
  component: Home,
});

const bestSellers = [
  { img: latte, name: "House Caramel Latte", desc: "Slow-cooked salted caramel, espresso, steamed milk.", price: "$5.50", label: "Best seller" },
  { img: coldBrew, name: "Cold Brew", desc: "Steeped 18 hours for a smooth, low-acid cup.", price: "$4.50", label: "Vegan" },
  { img: cappuccino, name: "Cappuccino", desc: "Velvet microfoam over a balanced double shot.", price: "$4.25" },
  { img: croissant, name: "Almond Croissant", desc: "Laminated in-house, filled with almond frangipane.", price: "$4.75", label: "Fresh from the oven" },
  { img: sandwich, name: "Bacon, Egg & Cheddar", desc: "Soft egg, thick-cut bacon, aged cheddar on brioche.", price: "$8.50" },
  { img: beans, name: "Alder Street Blend — 12 oz", desc: "Chocolate, cherry, brown sugar. Roasted weekly.", price: "$18.00", label: "Locally roasted" },
];

const reviews = [
  { text: "The coffee is consistently excellent, and my pickup order is always ready on time.", name: "Marisa T.", meta: "Regular since 2021" },
  { text: "I work here two mornings a week. Fast Wi-Fi, real outlets, and nobody rushes you out.", name: "Devon R.", meta: "Remote worker" },
  { text: "The almond croissant is the best in the neighborhood. My kids ask for it by name.", name: "Priya S.", meta: "Lives two blocks away" },
];

export default function Home() {
  return (
    <div className="pb-16 md:pb-0">
      <SiteHeader />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Barista pouring latte art at the Oakline Coffee counter"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/72" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 text-primary-foreground md:py-36">
          <p className="eyebrow text-accent-foreground/90">{shop.tagline}</p>
          <h1 className="mt-4 max-w-2xl text-4xl leading-[1.05] md:text-6xl">
            Your favorite coffee, ready when you are.
          </h1>
          <p className="mt-5 max-w-xl text-base opacity-90 md:text-lg">
            Freshly brewed coffee, handmade food, and a welcoming place to start your day — in the
            heart of {shop.city}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/order" className="btn-base btn-primary">Order Online</Link>
            <Link to="/menu" className="btn-base btn-on-dark">View Menu</Link>
          </div>
          <p className="mt-6 text-sm opacity-80">Open daily • Dine in • Takeaway • Delivery</p>
        </div>
      </section>

      {/* Quick info bar */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-5 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <p className="flex items-center gap-2 font-semibold">
            <Clock className="h-4 w-4 shrink-0 text-accent" /> Open today until 8:00 PM
          </p>
          <p className="flex items-center gap-2">
            <Timer className="h-4 w-4 shrink-0 text-accent" /> Pickup ready in 10–15 min
          </p>
          <p className="flex min-w-0 items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-accent" /> <span className="truncate">{shop.street}</span>
          </p>
          <a href={directionsUrl} className="font-semibold text-accent underline underline-offset-4">
            Get Directions
          </a>
        </div>
      </section>

      {/* Best sellers */}
      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-4">
          <p className="eyebrow">Made to order</p>
          <h2 className="mt-2 text-3xl md:text-4xl">What the neighborhood orders most</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bestSellers.map((item) => (
              <article key={item.name} className="overflow-hidden rounded-2xl bg-card shadow-warm">
                <img src={item.img} alt={item.name} width={800} height={800} loading="lazy" className="h-52 w-full object-cover" />
                <div className="p-5">
                  {item.label && <span className="eyebrow">{item.label}</span>}
                  <h3 className="mt-1 text-xl">{item.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="text-lg font-bold">{item.price}</span>
                    <Link to="/order" className="btn-base btn-secondary px-4 py-2 text-sm">Add to order</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="section-pad bg-secondary">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="max-w-xl text-3xl md:text-4xl">Coffee made with care</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            We source quality beans, prepare every drink to order, and keep a space where people can
            slow down, connect, and feel welcome.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: Zap, title: "Freshly made", body: "Every drink and plate is prepared after you order — never held on a warmer." },
              { icon: Leaf, title: "Locally roasted", body: "Our Alder Street blend is roasted weekly six miles away and delivered by bike." },
              { icon: HandHeart, title: "Made for the neighborhood", body: "Family-owned, pet-friendly, and comfortable enough to stay for the afternoon." },
            ].map(({ icon: Icon, title: t, body }) => (
              <div key={t} className="rounded-2xl bg-card p-6 shadow-warm">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent/12 text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-xl">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand story */}
      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
          <img src={team} alt="Oakline Coffee owners behind the counter" width={1000} height={800} loading="lazy" className="rounded-2xl object-cover shadow-lift" />
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-2 text-3xl md:text-4xl">Started by two neighbors who wanted a better morning</h2>
            <p className="mt-4 text-muted-foreground">
              We opened Oakline in 2018 with one espresso machine and a small oven. Today we bake
              every pastry in-house before sunrise and know most of our regulars by their order.
            </p>
            <Link to="/about" className="btn-base btn-secondary mt-6">Read our story</Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-pad bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-baseline gap-3">
            <span className="flex items-center gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </span>
            <h2 className="text-2xl md:text-3xl">
              {shop.rating} from more than {shop.reviewCount} local customers
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <blockquote key={r.name} className="rounded-2xl bg-primary-foreground/8 p-6">
                <p className="text-sm leading-relaxed">“{r.text}”</p>
                <footer className="mt-4 text-xs opacity-75">
                  {r.name} — {r.meta}
                </footer>
              </blockquote>
            ))}
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Oakline+Coffee+Portland"
            className="mt-8 inline-block text-sm underline underline-offset-4 opacity-90"
          >
            Read all reviews on Google
          </a>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-4">
          <p className="eyebrow">Stay awhile or take it with you</p>
          <h2 className="mt-2 text-3xl md:text-4xl">Inside Oakline</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: interior, alt: "Interior seating with wood tables and plants" },
              { src: patio, alt: "Sidewalk patio seating outside the cafe" },
              { src: beans, alt: "Freshly roasted coffee beans in a paper bag" },
              { src: croissant, alt: "Almond croissant on a ceramic plate" },
            ].map((g) => (
              <img key={g.alt} src={g.src} alt={g.alt} width={1000} height={800} loading="lazy" className="h-56 w-full rounded-2xl object-cover" />
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty */}
      <section className="section-pad bg-leaf text-leaf-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl">Your next coffee should earn you something.</h2>
            <p className="mt-4 opacity-90">
              Join the Coffee Club for 15% off your first online order, a free drink after five
              purchases, and a birthday coffee on us.
            </p>
          </div>
          <form
            className="rounded-2xl bg-background p-6 text-foreground shadow-lift"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="block text-sm font-semibold" htmlFor="loyalty-name">First name</label>
            <input
              id="loyalty-name"
              name="name"
              required
              className="mt-1 w-full rounded-xl border border-input bg-card px-4 py-3 text-base outline-none focus:border-accent"
              placeholder="Alex"
            />
            <label className="mt-4 block text-sm font-semibold" htmlFor="loyalty-email">Email</label>
            <input
              id="loyalty-email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-xl border border-input bg-card px-4 py-3 text-base outline-none focus:border-accent"
              placeholder="alex@email.com"
            />
            <button type="submit" className="btn-base btn-primary mt-5 w-full">Join the Rewards Program</button>
            <p className="mt-3 text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
          </form>
        </div>
      </section>

      {/* Location */}
      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2">
          <div>
            <p className="eyebrow">Find us</p>
            <h2 className="mt-2 text-3xl md:text-4xl">{shop.street}</h2>
            <address className="mt-2 not-italic text-muted-foreground">{fullAddress}</address>
            <ul className="mt-6 space-y-1 text-sm">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between border-b border-border py-2">
                  <span className="font-semibold">{h.day}</span>
                  <span className="text-muted-foreground">{h.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              Street parking on Alder • MAX Green Line two blocks east • Step-free entrance and
              accessible restroom • Free Wi-Fi • Dogs welcome on the patio
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={directionsUrl} className="btn-base btn-primary">Get Directions</a>
              <a href={shop.phoneHref} className="btn-base btn-secondary">Call {shop.phone}</a>
            </div>
          </div>
          <iframe
            title="Map to Oakline Coffee"
            src={mapEmbedUrl}
            loading="lazy"
            className="h-80 w-full rounded-2xl border border-border md:h-full"
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-pad bg-secondary text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl md:text-4xl">Good coffee is only a few clicks away.</h2>
          <p className="mt-3 text-muted-foreground">Order ahead for pickup or visit us today.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/order" className="btn-base btn-primary">Start Your Order</Link>
            <a href={directionsUrl} className="btn-base btn-secondary">Get Directions</a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <MobileBar />
    </div>
  );
}
