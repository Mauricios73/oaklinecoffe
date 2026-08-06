import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Check, ShoppingBag, Minus, Plus } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileBar } from "@/components/mobile-bar";
import { menu, shop } from "@/lib/shop";

const title = "Order Online — Pickup or Delivery | Oakline Coffee";
const description =
  "Order ahead from Oakline Coffee in Portland. Pickup ready in 10–15 minutes, guest checkout, and easy customization.";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/order" },
    ],
    links: [{ rel: "canonical", href: "/order" }],
  }),
  component: OrderPage,
});

const upsells = [
  { name: "Add an almond croissant", price: 4.75 },
  { name: "Extra espresso shot", price: 1 },
  { name: "Bag of Alder Street Blend", price: 18 },
];

function priceOf(value: string) {
  return Number(value.replace("$", ""));
}

function OrderPage() {
  const [mode, setMode] = useState<"pickup" | "delivery">("pickup");
  const [cart, setCart] = useState<Record<string, { price: number; qty: number }>>({});
  const [placed, setPlaced] = useState(false);
  const [category, setCategory] = useState(menu[0].category);

  const items = menu.find((g) => g.category === category)?.items ?? [];
  const total = useMemo(
    () => Object.values(cart).reduce((sum, l) => sum + l.price * l.qty, 0),
    [cart],
  );
  const count = Object.values(cart).reduce((s, l) => s + l.qty, 0);

  function add(name: string, price: number) {
    setCart((c) => ({ ...c, [name]: { price, qty: (c[name]?.qty ?? 0) + 1 } }));
  }
  function remove(name: string) {
    setCart((c) => {
      const line = c[name];
      if (!line) return c;
      if (line.qty <= 1) {
        const { [name]: _drop, ...rest } = c;
        return rest;
      }
      return { ...c, [name]: { ...line, qty: line.qty - 1 } };
    });
  }

  if (placed) {
    return (
      <div className="pb-16 md:pb-0">
        <SiteHeader />
        <section className="mx-auto max-w-xl px-4 py-24 text-center">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-leaf text-leaf-foreground">
            <Check className="h-6 w-6" />
          </span>
          <h1 className="mt-6 text-3xl">Order confirmed</h1>
          <p className="mt-3 text-muted-foreground">
            Thanks! Your {mode} order will be ready in 10–15 minutes. Come to the pickup shelf by
            the register at {shop.street} and look for your name.
          </p>
          <Link to="/" className="btn-base btn-primary mt-8">Back to home</Link>
        </section>
        <SiteFooter />
        <MobileBar />
      </div>
    );
  }

  return (
    <div className="pb-28 md:pb-0">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <p className="eyebrow">Ready when you are</p>
        <h1 className="mt-2 text-4xl md:text-5xl">Start your order</h1>

        <div className="mt-6 inline-flex rounded-full border border-border bg-card p-1">
          {(["pickup", "delivery"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={`rounded-full px-5 py-2 text-sm font-bold capitalize transition-colors ${
                mode === m ? "bg-accent text-accent-foreground" : "text-muted-foreground"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          {mode === "pickup"
            ? `Pickup at ${shop.street} — ready in 10–15 minutes.`
            : "Delivery within 3 miles — typically 25–35 minutes."}
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="min-w-0">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {menu.map((g) => (
                <button
                  key={g.category}
                  type="button"
                  onClick={() => setCategory(g.category)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold ${
                    category === g.category ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {g.category}
                </button>
              ))}
            </div>

            <ul className="mt-6 space-y-3">
              {items.map((item) => (
                <li key={item.name} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl bg-card p-5 shadow-warm">
                  <div className="min-w-0">
                    <h2 className="text-lg">{item.name}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    {item.allergens && <p className="mt-1 text-xs text-muted-foreground">Contains: {item.allergens}</p>}
                  </div>
                  <div className="shrink-0 text-right">
                    <span className="block font-bold">{item.price}</span>
                    <button
                      type="button"
                      onClick={() => add(item.name, priceOf(item.price))}
                      className="btn-base btn-secondary mt-2 px-4 py-2 text-xs"
                    >
                      Add
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit rounded-2xl bg-secondary p-6 lg:sticky lg:top-24">
            <h2 className="flex items-center gap-2 text-xl">
              <ShoppingBag className="h-5 w-5" /> Your cart {count > 0 && `(${count})`}
            </h2>

            {count === 0 ? (
              <p className="mt-4 text-sm text-muted-foreground">Your cart is empty. Add something warm.</p>
            ) : (
              <ul className="mt-4 space-y-3">
                {Object.entries(cart).map(([name, line]) => (
                  <li key={name} className="flex items-center gap-3 text-sm">
                    <span className="min-w-0 flex-1 truncate">{name}</span>
                    <button type="button" aria-label={`Remove one ${name}`} onClick={() => remove(name)} className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border">
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-4 text-center font-bold">{line.qty}</span>
                    <button type="button" aria-label={`Add one ${name}`} onClick={() => add(name, line.price)} className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border">
                      <Plus className="h-3 w-3" />
                    </button>
                    <span className="w-14 shrink-0 text-right font-semibold">${(line.price * line.qty).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-6 border-t border-border pt-4">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Popular add-ons</p>
              <ul className="mt-3 space-y-2">
                {upsells.map((u) => (
                  <li key={u.name}>
                    <button
                      type="button"
                      onClick={() => add(u.name, u.price)}
                      className="flex w-full items-center justify-between rounded-xl bg-card px-4 py-3 text-sm"
                    >
                      <span className="min-w-0 truncate text-left">{u.name}</span>
                      <span className="ml-3 shrink-0 font-semibold">+${u.price.toFixed(2)}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
              <span className="font-semibold">Total</span>
              <span className="text-xl font-bold">${total.toFixed(2)}</span>
            </div>
            <button
              type="button"
              disabled={count === 0}
              onClick={() => setPlaced(true)}
              className="btn-base btn-primary mt-4 w-full disabled:opacity-50"
            >
              Checkout as guest
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              Secure checkout • Apple Pay and Google Pay accepted • Allergy notes welcome at
              checkout
            </p>
          </aside>
        </div>
      </section>

      <SiteFooter />
      <MobileBar />
    </div>
  );
}