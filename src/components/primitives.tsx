import { useEffect, useRef, useState } from "react";
import { useRouter } from "../lib/router";
import { useEnteredViewport, useInView } from "../lib/hooks";
import { hero, type ImgKey } from "../lib/media";
import { cn } from "../utils/cn";

/* ────────────────────────────────────────────────────────────
   MOTION WRAPPERS
   ──────────────────────────────────────────────────────────── */

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "rise",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "rise" | "mask";
  as?: React.ElementType;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(variant === "mask" ? "reveal-mask" : "reveal", inView && "is-in", className)}
    >
      {children}
    </Tag>
  );
}

export function Rule({
  className,
  draw = true,
  delay = 0,
}: {
  className?: string;
  draw?: boolean;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.05, "0px 0px -4% 0px");
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("h-px w-full bg-ink/[0.14]", draw && "draw-x", draw && inView && "is-in", className)}
    />
  );
}

/* ────────────────────────────────────────────────────────────
   TYPE
   ──────────────────────────────────────────────────────────── */

export function Mono({
  children,
  className,
  tone = "faint",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "faint" | "mid" | "strong";
}) {
  const tones = {
    faint: "text-ink/[0.64]",
    mid: "text-ink/[0.78]",
    strong: "text-ink",
  } as const;
  return <span className={cn("mono", tones[tone], className)}>{children}</span>;
}

export function Display({
  children,
  className,
  size = "lg",
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  as?: React.ElementType;
}) {
  const sizes = {
    sm: "text-[clamp(1.6rem,2.4vw,2.6rem)]",
    md: "text-[clamp(2.1rem,3.6vw,3.9rem)]",
    lg: "text-[clamp(2.6rem,5.6vw,6rem)]",
    xl: "text-[clamp(3rem,8vw,8.5rem)]",
    hero: "text-[clamp(3.2rem,11vw,12.5rem)]",
  } as const;
  return <Tag className={cn("display", sizes[size], className)}>{children}</Tag>;
}

/** Editorial paragraph — spacious, light, neutral. */
export function P({
  children,
  className,
  lead = false,
}: {
  children: React.ReactNode;
  className?: string;
  lead?: boolean;
}) {
  return <p className={cn(lead ? "copy-lg" : "copy", className)}>{children}</p>;
}

/* ────────────────────────────────────────────────────────────
   THE 75 / 25 SPATIAL MATRIX
   ──────────────────────────────────────────────────────────── */

export function Matrix({
  children,
  aside,
  className,
  asideClassName,
}: {
  children: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
  asideClassName?: string;
}) {
  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-4", className)}>
      <div className="lg:col-span-3 lg:pr-[clamp(2rem,5vw,5.5rem)]">{children}</div>
      {aside !== undefined && (
        <aside
          className={cn(
            "mt-14 lg:col-span-1 lg:mt-0 lg:pl-[clamp(1.25rem,2.2vw,2.25rem)] lg:hair-l",
            asideClassName,
          )}
        >
          {aside}
        </aside>
      )}
    </div>
  );
}

export function DataList({
  items,
  className,
}: {
  items: { k: string; v: React.ReactNode }[];
  className?: string;
}) {
  return (
    <dl className={className}>
      {items.map((it) => (
        <div key={it.k} className="hair-t flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-[0.75rem]">
          {/* min-w-0 + wrap-value: a long tracked label folds onto two lines
              instead of forcing the row wider than the column. */}
          <dt className="mono wrap-value max-w-full text-ink/[0.62]">{it.k}</dt>
          <dd className="mono-sm wrap-value ml-auto text-right text-ink/[0.9]">{it.v}</dd>
        </div>
      ))}
    </dl>
  );
}

/** A data table that scrolls horizontally on narrow screens, with a cue. */
export function TableScroll({ children, note }: { children: React.ReactNode; note?: string }) {
  return (
    <div>
      <div className="table-scroll">{children}</div>
      <div className="table-hint mt-4 lg:hidden">
        <span className="mono text-ink/[0.55]">Scroll sideways</span>
        <span aria-hidden="true" className="mono text-ink/[0.55]">
          →
        </span>
        {note && <span className="mono ml-auto text-right text-ink/[0.55]">{note}</span>}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   LINKS  (never a box, never a pill)
   ──────────────────────────────────────────────────────────── */

export function TextLink({
  children,
  to,
  href,
  className,
  tone = "ink",
}: {
  children: React.ReactNode;
  to?: string;
  href?: string;
  className?: string;
  tone?: "ink" | "faint";
}) {
  const { navigate } = useRouter();
  const base = cn(
    "arrow-link mono-sm inline-flex items-baseline gap-3 transition-colors duration-700",
    tone === "faint" ? "text-ink/[0.7] hover:text-ink" : "text-ink",
    className,
  );
  const inner = (
    <>
      <span className="underline-fade">{children}</span>
      <span aria-hidden="true" className="arrow-slide text-[1.15em] leading-none">
        →
      </span>
    </>
  );
  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a className={base} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" className={cn(base, "cursor-pointer text-left")} onClick={() => to && navigate(to)}>
      {inner}
    </button>
  );
}

export function LinkRow({
  index,
  title,
  meta,
  to,
  href,
  note,
  className,
}: {
  index: string;
  title: React.ReactNode;
  meta?: React.ReactNode;
  to?: string;
  href?: string;
  note?: React.ReactNode;
  className?: string;
}) {
  const { navigate } = useRouter();
  const body = (
    <>
      <span className="mono w-14 shrink-0 pt-[0.5rem] text-ink/[0.58]">{index}</span>
      <span className="row-shift min-w-0 flex-1">
        <span className="display block text-[clamp(1.5rem,3.1vw,3rem)] text-ink">{title}</span>
        {note && <span className="copy mt-3 block max-w-[52ch] text-[0.875rem] leading-[1.85]">{note}</span>}
      </span>
      {meta && <span className="mono hidden max-w-[22ch] shrink-0 pt-[0.6rem] text-right text-ink/[0.64] md:block">{meta}</span>}
      <span
        aria-hidden="true"
        className="arrow-slide shrink-0 self-center font-display text-[1.6rem] font-light leading-none text-ink/[0.75]"
      >
        →
      </span>
    </>
  );
  const cls = cn(
    "link-row group hair-t relative flex w-full items-start gap-4 py-7 text-left transition-colors duration-700 hover:bg-ink/[0.025] md:gap-8 md:py-9",
    className,
  );
  if (href) {
    return (
      <a className={cls} href={href} target="_blank" rel="noreferrer">
        {body}
      </a>
    );
  }
  return (
    <button type="button" className={cn(cls, "cursor-pointer")} onClick={() => to && navigate(to)}>
      {body}
    </button>
  );
}

/* ────────────────────────────────────────────────────────────
   IMAGERY
   ──────────────────────────────────────────────────────────── */

/**
 * A framed photograph with the curtain-drop reveal.
 *
 * The frame always occupies its box and the photograph is always laid out
 * inside it — only the decorative curtain panel animates — so an image can
 * never end up blank. `children` render as overlays on top of the photograph
 * and are revealed by the same curtain.
 */
export function Photo({
  src,
  alt = "",
  className,
  frameClassName,
  eager = false,
  children,
}: {
  src: string;
  alt?: string;
  /** Class for the <img>. */
  className?: string;
  /** Class for the frame — set the aspect ratio / height here. */
  frameClassName?: string;
  eager?: boolean;
  children?: React.ReactNode;
}) {
  const { ref, entered } = useEnteredViewport<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn("img-curtain group relative overflow-hidden bg-canvas-2", entered && "is-in", frameClassName)}
    >
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={cn("photo absolute inset-0 h-full w-full object-cover", className)}
      />
      {children}
    </div>
  );
}

export function Plate({
  src,
  caption,
  meta,
  alt,
  ratio = "aspect-[4/5]",
  className,
  rounded = false,
}: {
  src: string;
  caption?: string;
  meta?: string;
  alt?: string;
  ratio?: string;
  className?: string;
  rounded?: boolean;
}) {
  return (
    <figure className={cn("group", className)}>
      <Photo
        src={src}
        alt={alt ?? caption ?? ""}
        frameClassName={cn(ratio, rounded && "img-rounded")}
      />
      {(caption || meta) && (
        <figcaption className="mt-3 flex items-baseline justify-between gap-6">
          {caption && <span className="mono text-ink/[0.72]">{caption}</span>}
          {meta && <span className="mono shrink-0 text-ink/[0.56]">{meta}</span>}
        </figcaption>
      )}
    </figure>
  );
}

type CarouselItem = { type: "mark" | "name"; name: string; url: string };

/**
 * A carousel of published logo marks and member wordmarks.
 *
 * Same behaviour at every width: a single horizontally scrolling track with
 * native swipe on touch, arrow controls on pointer, and slow auto-advance at
 * rest. Auto-advance pauses on hover, on focus and while the pointer is down,
 * and is switched off entirely under reduced motion.
 */
export function LogoCarousel({
  marks,
  names,
  label,
  className,
  interval = 3600,
}: {
  marks: { key: string; name: string; url: string }[];
  names?: string[];
  label?: string;
  className?: string;
  interval?: number;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [paused, setPaused] = useState(false);
  const [index, setIndex] = useState(0);

  const items: CarouselItem[] = [
    ...marks.map((mark) => ({ type: "mark" as const, name: mark.name, url: mark.url })),
    ...(names ?? []).map((name) => ({ type: "name" as const, name, url: "" })),
  ];

  const step = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const first = track.querySelector<HTMLElement>(".carousel-item");
    return first ? first.offsetWidth + 16 : Math.max(track.clientWidth * 0.6, 160);
  };

  const go = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const distance = step();
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    const atStart = track.scrollLeft <= 4;
    // Wrapping is a jump, not a journey: the track should never animate
    // all the way back across itself.
    if (dir === 1 && atEnd) {
      track.scrollTo({ left: 0, behavior: "auto" });
      setIndex(0);
      return;
    }
    if (dir === -1 && atStart) {
      track.scrollTo({ left: track.scrollWidth, behavior: "auto" });
      return;
    }
    track.scrollBy({ left: distance * dir, behavior: "smooth" });
  };

  /* Slow auto-advance. Deliberately not a marquee: the track is a real
     scroller, so swipe, trackpad and arrows all operate on the same position. */
  useEffect(() => {
    const track = trackRef.current;
    if (!track || paused) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      const distance = step();
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      if (atEnd) {
        track.scrollTo({ left: 0, behavior: "auto" });
        setIndex(0);
      } else {
        track.scrollBy({ left: distance, behavior: "smooth" });
      }
    }, interval);

    return () => window.clearInterval(id);
    // step() reads the live track, so only these two values need to re-arm it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, interval, items.length]);

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const distance = step();
    if (distance > 0) setIndex(Math.round(track.scrollLeft / distance));
  };

  return (
    <div className={cn("group/carousel", className)}>
      {label && (
        <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6">
          <Mono tone="mid">{label}</Mono>
          <Mono tone="faint">{items.length} shown</Mono>
        </div>
      )}

      {/* The track runs the full width at every breakpoint — controls sit
          beneath it so a phone is never left with a squeezed strip. */}
      <div
        className="carousel-frame"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
        onPointerDown={() => setPaused(true)}
        onPointerUp={() => setPaused(false)}
        onPointerCancel={() => setPaused(false)}
      >
        <div ref={trackRef} onScroll={onScroll} className="carousel-track">
          {items.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className={cn(
                "carousel-item logo-cell h-[clamp(4.75rem,9vw,6.75rem)] w-[54%] px-5 sm:w-[35%] md:w-[26%] lg:w-[19.5%] xl:w-[15.5%]",
              )}
              title={item.name}
            >
              {item.type === "mark" ? (
                <Photo
                  src={item.url}
                  alt={item.name}
                  frameClassName="logo-image h-full w-full"
                  className="logo-mark object-contain"
                />
              ) : (
                <span className="display-roman px-2 text-center text-[clamp(0.85rem,1.5vw,1.25rem)] leading-[1.15] text-ink/[0.62]">
                  {item.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center gap-4">
        <button
          type="button"
          onClick={() => {
            setPaused(true);
            go(-1);
          }}
          aria-label="Previous logos"
          className="carousel-btn shrink-0"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => {
            setPaused(true);
            go(1);
          }}
          aria-label="Next logos"
          className="carousel-btn shrink-0"
        >
          →
        </button>

        {/* Progress hairline — the only ornament, and it doubles as a position cue. */}
        <div className="h-px min-w-0 flex-1 bg-ink/10">
          <div
            className="h-px bg-accent transition-[width] duration-700"
            style={{ width: `${Math.min(100, ((index + 1) / items.length) * 100)}%` }}
          />
        </div>

        <span className="mono shrink-0 text-ink/[0.55]">
          {String(Math.min(index + 1, items.length)).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   PAGE HERO — full-bleed official photograph, dark scrim, light type
   ──────────────────────────────────────────────────────────── */

type Crumb = { label: string; to?: string };

export function PageHero({
  photo,
  kicker,
  title,
  accent,
  intro,
  crumbs,
  compact = false,
  children,
}: {
  photo: ImgKey;
  kicker: string;
  title: React.ReactNode;
  accent?: React.ReactNode;
  intro?: React.ReactNode;
  crumbs?: Crumb[];
  compact?: boolean;
  children?: React.ReactNode;
}) {
  const { navigate } = useRouter();
  return (
    <section className="image-surface relative isolate overflow-hidden bg-night">
      <Photo src={hero(photo)} alt="" eager frameClassName="absolute inset-0 z-0 h-full w-full">
        <div className="scrim absolute inset-0 z-0" />
      </Photo>

      <div
        className={cn(
          "relative z-10 flex flex-col justify-end px-gutter pt-[8.5rem] pb-[clamp(3rem,7vw,5.5rem)] md:pt-[10rem]",
          compact ? "min-h-[clamp(30rem,70svh,44rem)]" : "min-h-[clamp(34rem,86svh,56rem)]",
        )}
      >
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-auto pb-10">
            <ol className="flex flex-wrap items-center gap-x-3 gap-y-2">
              {crumbs.map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-3">
                  {i > 0 && (
                    <span aria-hidden="true" className="mono text-canvas/60">
                      /
                    </span>
                  )}
                  {crumb.to ? (
                    <button
                      type="button"
                      onClick={() => navigate(crumb.to as string)}
                      className="mono cursor-pointer text-canvas/85 transition-colors duration-500 hover:text-accent"
                    >
                      <span className="underline-fade">{crumb.label}</span>
                    </button>
                  ) : (
                    <span aria-current="page" className="mono text-canvas">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <Reveal>
          <span className="mono block text-canvas/90">{kicker}</span>
        </Reveal>
        {/* Headings use a rise, not a clip mask: text must never depend on clip-path to be readable. */}
        <h1
          className={cn(
            "display mt-7",
            compact ? "text-[clamp(2.7rem,7.6vw,7.8rem)]" : "text-[clamp(3rem,9.6vw,10rem)]",
          )}
        >
          <Reveal as="span" delay={120} className="block">
            <span className="block">{title}</span>
          </Reveal>
          {accent && (
            <Reveal as="span" delay={240} className="block">
              <span className="block pl-[8%] font-normal italic text-accent">{accent}</span>
            </Reveal>
          )}
        </h1>
        {intro && (
          <Reveal delay={340} className="mt-8 max-w-[46ch]">
            <p className="copy-lg">{intro}</p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   SECTION HEADER  (kicker · display · technical aside)
   ──────────────────────────────────────────────────────────── */

export function SectionHead({
  index,
  kicker,
  title,
  size = "lg",
  aside,
  className,
}: {
  index: string;
  kicker: string;
  title: React.ReactNode;
  size?: "md" | "lg" | "xl";
  aside?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <Rule />
      <Matrix
        className="pt-5 md:pt-7"
        aside={
          aside ?? (
            <div className="space-y-5">
              <Mono tone="faint">{index}</Mono>
              <Mono tone="faint">{kicker}</Mono>
            </div>
          )
        }
      >
        <div>
          <Mono className="mb-7 block text-accent">{kicker}</Mono>
          <Display size={size}>{title}</Display>
        </div>
      </Matrix>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   ACCORDION
   ──────────────────────────────────────────────────────────── */

export function Accordion({
  items,
  className,
  initial = null,
}: {
  items: { q: string; a: React.ReactNode }[];
  className?: string;
  initial?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(initial);
  return (
    <ul className={cn("hair-b", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q} className="hair-t">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="link-row group flex w-full cursor-pointer items-start gap-6 py-6 text-left transition-colors duration-700 hover:bg-ink/[0.025]"
            >
              <span className="mono w-8 shrink-0 pt-2 text-ink/[0.58]">{String(i + 1).padStart(2, "0")}</span>
              <span className="display row-shift min-w-0 flex-1 text-[clamp(1.3rem,2.4vw,2rem)]">{item.q}</span>
              <span
                aria-hidden="true"
                className={cn(
                  "mt-1 shrink-0 font-display text-[1.5rem] font-light text-ink/[0.75] transition-transform duration-1000",
                  isOpen && "rotate-45",
                )}
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              >
                +
              </span>
            </button>
            <div
              className="grid overflow-hidden transition-all duration-[900ms]"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                opacity: isOpen ? 1 : 0,
                transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              <div className="min-h-0">
                <div className="copy max-w-[62ch] pb-8 pl-14 text-[0.9375rem]">{item.a}</div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

/* ────────────────────────────────────────────────────────────
   COUNTER
   ──────────────────────────────────────────────────────────── */

export function Counter({
  value,
  suffix = "",
  className,
  duration = 1900,
}: {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [n, setN] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 4);
      setN(Math.round(value * eased));
      if (t < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={cn("display tabular-nums", className)}>
      {n.toLocaleString("en-US")}
      {/* The unit is set smaller so a figure like "510,000+ sq ft" fits a
          narrow column instead of overflowing it. */}
      {suffix && (
        <span className="ml-1.5 font-mono text-[0.34em] font-light tracking-[0.14em] whitespace-nowrap">
          {suffix}
        </span>
      )}
    </span>
  );
}

/* ────────────────────────────────────────────────────────────
   SECTION FRAME
   ──────────────────────────────────────────────────────────── */

export function Section({
  children,
  className,
  id,
  bleed = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bleed?: boolean;
}) {
  return (
    <section id={id} className={cn(bleed ? "" : "px-gutter", "relative", className)}>
      {children}
    </section>
  );
}
