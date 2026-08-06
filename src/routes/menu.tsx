import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileBar } from "@/components/mobile-bar";
import { menu } from "@/lib/shop";

const title = "Menu — Oakline Coffee, Portland";
const description =
  "Espresso drinks, cold brew, breakfast, lunch, and house-baked pastries with prices, allergens, and vegan options. Order ahead for pickup.";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <div className="pb-16 md:pb-0">
      <SiteHeader />

      <section className="bg-primary py-14 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4">
          <p className="eyebrow">Freshly brewed every day</p>
          <h1 className="mt-2 text-4xl md:text-5xl">Our menu</h1>
          <p className="mt-4 max-w-xl opacity-90">
            Everything is made to order. Prices include tax. Tell us about allergies at the counter
            or in your order notes — we'll take care of it.
          </p>
        </div>
      </section>

      <nav className="sticky top-[57px] z-30 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-4xl gap-4 overflow-x-auto px-4 py-3 text-sm font-semibold">
          {menu.map((group) => (
            <a key={group.category} href={`#${slug(group.category)}`} className="whitespace-nowrap text-muted-foreground hover:text-foreground">
              {group.category}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-4 py-12">
        {menu.map((group) => (
          <section key={group.category} id={slug(group.category)} className="scroll-mt-32 pb-12">
            <h2 className="text-2xl md:text-3xl">{group.category}</h2>
            <ul className="mt-5 space-y-4">
              {group.items.map((item) => (
                <li key={item.name} className="rounded-2xl bg-card p-5 shadow-warm">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                    <div className="min-w-0">
                      <h3 className="text-lg">{item.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                      {item.options && <p className="mt-1 text-xs text-muted-foreground">Options: {item.options}</p>}
                      {item.allergens && <p className="mt-1 text-xs text-muted-foreground">Contains: {item.allergens}</p>}
                      {item.labels && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {item.labels.map((l) => (
                            <span key={l} className="rounded-full bg-leaf/12 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-leaf">
                              {l}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="shrink-0 text-right">
                      <span className="text-lg font-bold">{item.price}</span>
                      <Link to="/order" className="btn-base btn-secondary mt-2 block px-4 py-2 text-xs">Order</Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <div className="rounded-2xl bg-secondary p-8 text-center">
          <h2 className="text-2xl">Ready when you are.</h2>
          <p className="mt-2 text-sm text-muted-foreground">Order ahead and skip the wait — pickup in 10–15 minutes.</p>
          <Link to="/order" className="btn-base btn-primary mt-5">Start Your Order</Link>
        </div>
      </div>

      <SiteFooter />
      <MobileBar />
    </div>
  );
}

function slug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}