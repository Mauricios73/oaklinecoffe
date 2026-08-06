import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileBar } from "@/components/mobile-bar";
import { shop, directionsUrl } from "@/lib/shop";
import team from "@/assets/gallery-team.jpg";
import beans from "@/assets/gallery-beans.jpg";
import interior from "@/assets/gallery-interior.jpg";

const title = "About Oakline Coffee — Family-Owned Café in Portland";
const description =
  "How two neighbors built Oakline Coffee: locally roasted beans, pastries baked before sunrise, and a room made for the neighborhood.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pb-16 md:pb-0">
      <SiteHeader />

      <section className="mx-auto max-w-3xl px-4 py-14">
        <p className="eyebrow">Our story</p>
        <h1 className="mt-2 text-4xl md:text-5xl">A better morning, two blocks from home</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          In 2018 there was nowhere on Alder Street to get a good cup before work. Ana and Marcus —
          neighbors, then business partners — leased a narrow storefront, borrowed an espresso
          machine, and opened with four pastries on the counter.
        </p>
      </section>

      <img src={team} alt="Ana and Marcus, owners of Oakline Coffee, behind the counter" width={1000} height={800} loading="lazy" className="mx-auto w-full max-w-5xl rounded-2xl px-4 object-cover" />

      <section className="mx-auto max-w-3xl space-y-10 px-4 py-14">
        <div>
          <h2 className="text-2xl">Where the coffee comes from</h2>
          <p className="mt-3 text-muted-foreground">
            Our Alder Street blend is roasted weekly six miles from here, from beans bought on
            long-term contracts that pay above Fair Trade minimums. Single origins rotate every few
            weeks, and we'll always tell you exactly what's in the hopper.
          </p>
        </div>
        <img src={beans} alt="Freshly roasted coffee beans spilling from a paper bag" width={1000} height={800} loading="lazy" className="w-full rounded-2xl object-cover" />
        <div>
          <h2 className="text-2xl">What we believe</h2>
          <p className="mt-3 text-muted-foreground">
            Coffee should be excellent and unpretentious. Food should be made from things you can
            name. And a café should be a place where a student, a contractor, and a grandparent can
            all sit down at the same hour and feel like it's theirs.
          </p>
        </div>
        <div>
          <h2 className="text-2xl">In the neighborhood</h2>
          <p className="mt-3 text-muted-foreground">
            We buy bread from Wren Bakehouse, milk from a family dairy in Tillamook, and donate day-
            old pastries to the Alder Street shelter every evening. Our compost and cups are
            commercially compostable.
          </p>
        </div>
        <img src={interior} alt="Guests working and talking inside Oakline Coffee" width={1000} height={800} loading="lazy" className="w-full rounded-2xl object-cover" />
        <div>
          <h2 className="text-2xl">Come by</h2>
          <p className="mt-3 text-muted-foreground">
            We're at {shop.street}, open early every day. Order ahead if you're in a hurry, or take
            the window seat and stay a while.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/order" className="btn-base btn-primary">Order Online</Link>
            <a href={directionsUrl} className="btn-base btn-secondary">Get Directions</a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <MobileBar />
    </div>
  );
}