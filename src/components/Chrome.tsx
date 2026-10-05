import { useEffect, useState } from "react";
import { useRouter } from "../lib/router";
import { useProgress, useScrollY } from "../lib/hooks";
import { Mono, Reveal, Rule, TextLink } from "./primitives";
import { hero } from "../lib/media";
import {
  amenities,
  cityInfo,
  citySlugs,
  contactDetails,
  services,
  socialLinks,
  spacePath,
  spaces,
} from "../lib/data";
import { cn } from "../utils/cn";

type MenuKey = "locations" | "services" | "more";

export const NAV: { n: string; label: string; to: string; menu?: MenuKey }[] = [
  { n: "01", label: "Locations", to: "/locations", menu: "locations" },
  { n: "02", label: "Services", to: "/services", menu: "services" },
  { n: "03", label: "Partnerships", to: "/partnerships" },
  { n: "04", label: "Contact", to: "/contact" },
];

export const MORE_LINKS = [
  { label: "About Us", to: "/about" },
  { label: "Careers", to: "/careers" },
  { label: "Blogs", to: "/blog" },
  { label: "FAQs", to: "/faqs" },
  { label: "Landlords", to: "/landlords" },
  { label: "The Yellow Bar", to: "/services/the-yellow-bar" },
  { label: "Kids Playroom", to: "/services/playroom" },
  { label: "Privacy Policy", to: "/privacy-policy" },
];

/* ── persistent technical grid: hairlines at the 0 / 25 / 75 / 100 marks ── */
export function GridOverlay() {
  const marks = ["0%", "25%", "75%", "100%"];
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 hidden lg:block">
      <div className="mx-auto h-full px-gutter">
        <div className="relative h-full w-full">
          {marks.map((left) => (
            <div key={left}>
              <div className="absolute top-0 h-full w-px bg-ink/[0.05]" style={{ left }} />
              <span
                className="absolute top-[5.25rem] -translate-x-1/2 font-mono text-[8px] leading-none text-ink/[0.22]"
                style={{ left }}
              >
                +
              </span>
              <span
                className="absolute bottom-4 -translate-x-1/2 font-mono text-[8px] leading-none text-ink/[0.22]"
                style={{ left }}
              >
                +
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────── NAVIGATION ─────────────────────────────── */

export function Nav() {
  const { path, navigate } = useRouter();
  const y = useScrollY();
  const progress = useProgress();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<MenuKey | null>(null);
  const [mobileSection, setMobileSection] = useState<MenuKey | null>(null);

  const solid = y > 24 || menu !== null;
  const overImage = !solid && !open;

  useEffect(() => {
    setOpen(false);
    setMenu(null);
    setMobileSection(null);
  }, [path]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenu(null);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (to: string) => {
    setMenu(null);
    setOpen(false);
    navigate(to);
  };

  const isActive = (to: string) => path === to || path.startsWith(`${to}/`);

  const linkColor = (active: boolean) =>
    active
      ? overImage
        ? "rgba(245,244,240,1)"
        : "var(--color-accent)"
      : overImage
        ? "rgba(245,244,240,0.86)"
        : "rgba(26,26,24,0.72)";

  return (
    <>
      <div className="fixed left-0 top-0 z-[70] h-px w-full bg-ink/10">
        <div
          className="h-px origin-left bg-accent transition-transform duration-200 ease-out"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <header
        onMouseLeave={() => setMenu(null)}
        className={cn(
          "fixed inset-x-0 top-0 z-[60] transition-[background-color,border-color] duration-700",
          solid ? "border-b border-ink/10 bg-canvas/95 backdrop-blur-[10px]" : "border-b border-transparent",
          overImage ? "image-surface" : "text-ink",
        )}
      >
        <div className="flex h-[4.75rem] items-center justify-between gap-6 px-gutter md:h-[5.25rem]">
          <button
            type="button"
            onClick={() => go("/")}
            aria-label="Daftarkhwan home"
            className="flex cursor-pointer items-baseline gap-4"
          >
            <span className="display text-[clamp(1.2rem,1.6vw,1.55rem)] tracking-[-0.01em]">Daftarkhwan</span>
            <span
              className="mono hidden xl:inline"
              style={{ color: overImage ? "rgba(245,244,240,0.78)" : "rgba(26,26,24,0.62)" }}
            >
              Est. 2016
            </span>
          </button>

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex xl:gap-10">
            {NAV.map((item) => {
              const active = isActive(item.to) || (item.menu !== undefined && menu === item.menu);
              return (
                <button
                  key={item.to}
                  type="button"
                  onMouseEnter={() => setMenu(item.menu ?? null)}
                  onFocus={() => setMenu(item.menu ?? null)}
                  onClick={() => go(item.to)}
                  aria-haspopup={item.menu ? "true" : undefined}
                  aria-expanded={item.menu ? menu === item.menu : undefined}
                  className="mono-sm cursor-pointer transition-colors duration-500"
                  style={{ color: linkColor(active) }}
                >
                  <span className="underline-fade" data-active={isActive(item.to)}>
                    {item.label}
                  </span>
                </button>
              );
            })}
            <button
              type="button"
              onMouseEnter={() => setMenu("more")}
              onClick={() => setMenu((current) => (current === "more" ? null : "more"))}
              aria-haspopup="true"
              aria-expanded={menu === "more"}
              className="mono-sm cursor-pointer transition-colors duration-500"
              style={{ color: linkColor(menu === "more" || MORE_LINKS.some((link) => path === link.to)) }}
            >
              <span className="underline-fade" data-active={menu === "more"}>
                More
              </span>
              <span aria-hidden="true" className="ml-2 inline-block w-2">
                {menu === "more" ? "−" : "+"}
              </span>
            </button>
          </nav>

          <div className="hidden lg:block">
            <TextLink to="/contact">Book a tour</TextLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="mono-sm cursor-pointer lg:hidden"
            style={{ color: overImage ? "#f5f4f0" : "#1a1a18" }}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {menu && <MegaPanel menu={menu} go={go} />}
      </header>

      {/* mobile / tablet overlay */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={cn(
          "surface-light fixed inset-0 z-[59] overflow-y-auto bg-canvas transition-opacity duration-700 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex min-h-full flex-col justify-between gap-12 px-gutter pt-28 pb-10">
          <nav aria-label="Mobile">
            {NAV.map((item) => (
              <div key={item.to} className="border-t border-ink/10">
                <div className="flex items-center justify-between gap-4">
                  <button type="button" onClick={() => go(item.to)} className="flex items-baseline gap-5 py-5 text-left">
                    <span className="mono w-8 text-ink/60">{item.n}</span>
                    <span className="display text-[2.3rem] leading-none">{item.label}</span>
                  </button>
                  {item.menu && (
                    <button
                      type="button"
                      onClick={() => setMobileSection((current) => (current === item.menu ? null : item.menu ?? null))}
                      aria-expanded={mobileSection === item.menu}
                      aria-label={`Show ${item.label} links`}
                      className="mono-sm px-3 py-4 text-ink/80"
                    >
                      {mobileSection === item.menu ? "−" : "+"}
                    </button>
                  )}
                </div>
                {item.menu && mobileSection === item.menu && <MobileLinks menu={item.menu} go={go} />}
              </div>
            ))}
            <div className="border-t border-b border-ink/10">
              <button
                type="button"
                onClick={() => setMobileSection((current) => (current === "more" ? null : "more"))}
                aria-expanded={mobileSection === "more"}
                className="flex w-full items-baseline gap-5 py-5 text-left"
              >
                <span className="mono w-8 text-ink/60">05</span>
                <span className="display text-[2.3rem] leading-none">More</span>
                <span className="mono-sm ml-auto px-3 text-ink/80">{mobileSection === "more" ? "−" : "+"}</span>
              </button>
              {mobileSection === "more" && <MobileLinks menu="more" go={go} />}
            </div>
          </nav>
          <div className="space-y-3">
            <Mono tone="mid" className="block">
              Lahore · Islamabad · Rawalpindi
            </Mono>
            <a href={`tel:${contactDetails.tel}`} className="mono-sm block text-ink">
              {contactDetails.dial}
            </a>
            <a href={`mailto:${contactDetails.email}`} className="mono-sm block text-ink">
              {contactDetails.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function MegaPanel({ menu, go }: { menu: MenuKey; go: (to: string) => void }) {
  return (
    <div className="surface-light menu-panel absolute inset-x-0 top-full border-b border-ink/10 bg-canvas shadow-[0_30px_60px_-30px_rgba(0,0,0,0.3)]">
      <div className="px-gutter py-10">
        {menu === "locations" && (
          <div className="grid grid-cols-4 gap-10">
            {citySlugs.map((slug) => {
              const city = cityInfo[slug];
              const sites = spaces.filter((space) => space.citySlug === slug);
              return (
                <div key={slug}>
                  <button
                    type="button"
                    onClick={() => go(`/locations/${slug}`)}
                    className="group flex cursor-pointer items-baseline gap-3 text-left"
                  >
                    <span className="display text-[2rem] transition-colors duration-500 group-hover:text-accent">
                      {city.name}
                    </span>
                    <span className="mono text-ink/60">{String(sites.length).padStart(2, "0")}</span>
                  </button>
                  <ul className="mt-5 space-y-1 border-t border-ink/10 pt-4">
                    {sites.map((space) => (
                      <li key={space.slug}>
                        <button
                          type="button"
                          onClick={() => go(spacePath(space))}
                          className="group flex w-full cursor-pointer items-baseline justify-between gap-4 py-1.5 text-left"
                        >
                          <span className="mono-sm text-ink/85 transition-colors duration-500 group-hover:text-accent">
                            {space.name}
                          </span>
                          {space.status !== "Open" && <span className="mono text-accent">{space.status}</span>}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
            <div className="border-l border-ink/10 pl-8">
              <Mono className="block">The network</Mono>
              <p className="copy mt-4 text-[0.875rem]">
                Work from prime locations across key corporate districts in Lahore, Islamabad and Rawalpindi.
              </p>
              <div className="mt-6">
                <TextLink to="/locations">All 11 locations</TextLink>
              </div>
            </div>
          </div>
        )}

        {menu === "services" && (
          <div className="grid grid-cols-4 gap-10">
            <div className="col-span-3 grid grid-cols-3 gap-x-10 gap-y-6">
              {services.map((service) => (
                <button
                  key={service.slug}
                  type="button"
                  onClick={() => go(`/services/${service.slug}`)}
                  className="group cursor-pointer border-t border-ink/10 pt-4 text-left"
                >
                  <span className="mono text-ink/60">{service.code}</span>
                  <span className="display mt-2 block text-[1.65rem] transition-colors duration-500 group-hover:text-accent">
                    {service.name}
                  </span>
                  <span className="copy mt-2 block text-[0.8125rem] leading-[1.7]">{service.line}</span>
                </button>
              ))}
            </div>
            <div className="border-l border-ink/10 pl-8">
              <Mono className="block">Amenities</Mono>
              <ul className="mt-5 space-y-3">
                {amenities.map((amenity) => (
                  <li key={amenity.slug}>
                    <button
                      type="button"
                      onClick={() => go(`/services/${amenity.slug}`)}
                      className="mono-sm cursor-pointer text-ink/85 transition-colors duration-500 hover:text-accent"
                    >
                      {amenity.name} →
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <TextLink to="/services">All services</TextLink>
              </div>
            </div>
          </div>
        )}

        {menu === "more" && (
          <div className="grid grid-cols-4 gap-10">
            <div className="col-span-2 grid grid-cols-2 gap-x-10">
              {MORE_LINKS.map((link) => (
                <button
                  key={link.to}
                  type="button"
                  onClick={() => go(link.to)}
                  className="group flex cursor-pointer items-baseline justify-between border-t border-ink/10 py-3.5 text-left"
                >
                  <span className="display text-[1.4rem] transition-colors duration-500 group-hover:text-accent">
                    {link.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-ink/60 transition-transform duration-500 group-hover:translate-x-1.5"
                  >
                    →
                  </span>
                </button>
              ))}
            </div>
            <div className="col-span-2 border-l border-ink/10 pl-8">
              <Mono className="block">Get in touch</Mono>
              <a
                href={`tel:${contactDetails.tel}`}
                className="display mt-4 block text-[2rem] transition-colors duration-500 hover:text-accent"
              >
                {contactDetails.dial}
              </a>
              <a href={`mailto:${contactDetails.email}`} className="copy mt-2 block">
                {contactDetails.email}
              </a>
              <p className="copy mt-4 max-w-[38ch] text-[0.875rem]">{contactDetails.address}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function MobileLinks({ menu, go }: { menu: MenuKey; go: (to: string) => void }) {
  if (menu === "locations") {
    return (
      <div className="space-y-6 pb-6 pl-13">
        {citySlugs.map((slug) => (
          <div key={slug}>
            <button type="button" onClick={() => go(`/locations/${slug}`)} className="mono-sm text-accent">
              {cityInfo[slug].name} →
            </button>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {spaces
                .filter((space) => space.citySlug === slug)
                .map((space) => (
                  <button key={space.slug} type="button" onClick={() => go(spacePath(space))} className="mono-sm text-ink/80">
                    {space.name}
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  const links =
    menu === "services"
      ? [...services, ...amenities].map((item) => ({ label: item.name, to: `/services/${item.slug}` }))
      : MORE_LINKS;

  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-3 pb-6 pl-13">
      {links.map((link) => (
        <button key={link.to} type="button" onClick={() => go(link.to)} className="mono-sm text-left text-ink/80">
          {link.label} →
        </button>
      ))}
    </div>
  );
}

/* ── rotated page marker, far right edge (blends to stay visible on photos and canvas) ── */
export function Rail({ label, code }: { label: string; code: string }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-1/2 right-[0.9rem] z-30 hidden -translate-y-1/2 mix-blend-difference xl:block"
    >
      <div className="flex flex-col items-center gap-6">
        <span className="h-16 w-px bg-white/45" />
        <span className="mono whitespace-nowrap text-white/75" style={{ writingMode: "vertical-rl" }}>
          {code} — {label}
        </span>
        <span className="h-16 w-px bg-white/45" />
      </div>
    </div>
  );
}

export function ScrollCue() {
  return (
    <div aria-hidden="true" className="flex items-center gap-4">
      <span className="mono text-ink/[0.8]">Scroll</span>
      <span className="scroll-cue block h-10 w-px bg-ink/50" />
    </div>
  );
}

/* ─────────────────────────────── FOOTER ─────────────────────────────── */

export function Footer() {
  const { navigate } = useRouter();
  return (
    <footer className="relative mt-[clamp(5rem,12vh,10rem)]">
      <div className="image-surface relative isolate overflow-hidden bg-night">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <img src={hero("coworkingWide")} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
          <div className="scrim absolute inset-0" />
        </div>
        <div className="px-gutter pt-[clamp(4rem,9vw,8rem)] pb-[clamp(2.5rem,5vw,4rem)]">
          <span className="mono block text-canvas/90">Ready to move in?</span>
          <Reveal>
            <h2 className="display mt-6 text-[clamp(3rem,12.5vw,13rem)]">Daftarkhwan</h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
            <p className="copy-lg max-w-[38ch]">
              Join a community of leaders in a space that empowers you with freedom to take the lead.
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              <TextLink to="/contact">Book a tour</TextLink>
              <TextLink to="/locations" tone="faint">
                Find a location
              </TextLink>
            </div>
          </div>
        </div>
      </div>

      <div className="px-gutter">
        <div className="grid grid-cols-1 gap-y-12 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
          <div className="space-y-7">
            <Mono tone="mid">Locations</Mono>
            {citySlugs.map((slug) => (
              <div key={slug}>
                <button
                  type="button"
                  onClick={() => navigate(`/locations/${slug}`)}
                  className="mono-sm cursor-pointer text-accent transition-opacity hover:opacity-80"
                >
                  {cityInfo[slug].name}
                </button>
                <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                  {spaces
                    .filter((space) => space.citySlug === slug)
                    .map((space) => (
                      <li key={space.slug}>
                        <button
                          type="button"
                          onClick={() => navigate(spacePath(space))}
                          className="display cursor-pointer text-[1.15rem] text-ink/85 transition-colors duration-500 hover:text-accent"
                        >
                          {space.name}
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <Mono tone="mid">Services</Mono>
            <ul className="space-y-3">
              {[...services, ...amenities].map((item) => (
                <li key={item.slug}>
                  <TextLink to={`/services/${item.slug}`} tone="faint">
                    {item.name}
                  </TextLink>
                </li>
              ))}
              <li>
                <TextLink to="/partnerships" tone="faint">
                  Partnerships
                </TextLink>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <Mono tone="mid">More</Mono>
            <ul className="space-y-3">
              {MORE_LINKS.filter((link) => !link.to.startsWith("/services")).map((link) => (
                <li key={link.to}>
                  <TextLink to={link.to} tone="faint">
                    {link.label}
                  </TextLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <Mono tone="mid">Let’s connect</Mono>
            <div className="space-y-4">
              <p className="copy text-[0.875rem]">{contactDetails.address}</p>
              <p className="copy text-[0.875rem]">
                <a href={`mailto:${contactDetails.email}`} className="underline-fade">
                  {contactDetails.email}
                </a>
                <br />
                <a href={`tel:${contactDetails.tel}`} className="underline-fade">
                  {contactDetails.dial}
                </a>
                <br />
                <a href={contactDetails.whatsappLink} target="_blank" rel="noreferrer" className="underline-fade">
                  WhatsApp {contactDetails.whatsapp}
                </a>
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-3 pt-2">
                {socialLinks.map((link) => (
                  <TextLink key={link.label} href={link.href} tone="faint">
                    {link.label}
                  </TextLink>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Rule />
        <div className="flex flex-col gap-4 py-8 md:flex-row md:items-baseline md:justify-between">
          <Mono tone="mid">© 2025 Daftarkhwan. All Rights Reserved.</Mono>
          <div className="flex flex-wrap gap-8">
            <button type="button" onClick={() => navigate("/privacy-policy")} className="mono cursor-pointer text-ink/80 underline-fade">
              Privacy Policy
            </button>
            <button type="button" onClick={() => navigate("/faqs")} className="mono cursor-pointer text-ink/80 underline-fade">
              FAQs
            </button>
            <Mono tone="mid">Lahore · Islamabad · Rawalpindi</Mono>
          </div>
        </div>
      </div>
    </footer>
  );
}
