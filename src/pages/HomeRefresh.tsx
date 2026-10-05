import { useEffect, useState } from "react";
import {
  Counter,
  DataList,
  Display,
  LinkRow,
  LogoCarousel,
  Matrix,
  Mono,
  P,
  Photo,
  Plate,
  Reveal,
  Rule,
  Section,
  SectionHead,
  TextLink,
} from "../components/primitives";
import { Rail, ScrollCue } from "../components/Chrome";
import { img, logoUrl } from "../lib/media";
import { journal, logoMarks, memberWordmarks, metrics, services } from "../lib/data";
import { useRouter } from "../lib/router";
import { cn } from "../utils/cn";

const heroSlides = [
  { src: img.enterpriseFloor, alt: "Enterprise floor at Daftarkhwan Downtown", title: "Downtown · Lahore" },
  { src: img.teamExperience, alt: "Open workspace at Daftarkhwan Boulevard", title: "Boulevard · Lahore" },
  { src: img.conferenceRoom, alt: "Conference room at Daftarkhwan", title: "Meetings · Across the network" },
  { src: img.largeEvent, alt: "Large-scale event at Daftarkhwan", title: "Events · Across the network" },
];

const cityViews = [
  { city: "Lahore", count: "06 locations", image: img.lahore },
  { city: "Islamabad", count: "03 locations", image: img.islamabad },
  { city: "Rawalpindi", count: "02 locations", image: img.rawalpindi },
];

const gallery = [
  { src: img.boulevardLeed, caption: "Daftarkhwan | Boulevard · LEED Gold", meta: "Lahore", ratio: "aspect-[16/10]" },
  { src: img.teamRoom, caption: "A team room at Daftarkhwan", meta: "Workspace", ratio: "aspect-[16/10]" },
  { src: img.studioPodcast, caption: "Daftarkhwan Studio · Podcast setup", meta: "Studio", ratio: "aspect-[16/10]" },
  { src: img.yellowBar, caption: "The Yellow Bar · In-house cafe", meta: "Community", ratio: "aspect-[4/5]" },
];

export default function HomeRefresh() {
  const { navigate } = useRouter();
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setSlide((current) => (current + 1) % heroSlides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  const moveSlide = (direction: number) => {
    setSlide((current) => (current + direction + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="relative">
      <section className="image-surface relative min-h-[100svh] overflow-hidden bg-night">
        <div className="absolute inset-0" aria-hidden="true">
          {heroSlides.map((item, index) => (
            <picture
              key={item.src}
              className={cn("hero-slide hero-slide-picture", index === slide && "is-active")}
            >
              <img
                src={item.src}
                alt=""
                loading="eager"
                decoding="async"
                fetchPriority={index === 0 ? "high" : "auto"}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          ))}
          <div className="hero-shade absolute inset-0" />
        </div>

        <div className="relative z-10 flex min-h-[100svh] flex-col justify-between px-gutter pt-[8.5rem] pb-8 md:pt-[10rem]">
          <div className="max-w-[70rem]">
            <Reveal delay={120}>
              <h1 className="display text-[clamp(3.6rem,10.3vw,10rem)] leading-[0.8] tracking-[-0.045em]">
                Daftarkhwan
              </h1>
            </Reveal>
            <Reveal delay={250} className="mt-8 md:mt-10">
              <p className="font-display text-[clamp(1.5rem,2.9vw,2.65rem)] font-light leading-[1.1] tracking-[-0.015em] text-canvas/90">
                More than just an office.
              </p>
              <P className="mt-5 max-w-[37ch] text-[0.95rem] !text-canvas/90 md:text-[1.05rem]">
                Find your freedom at work. Choose a flexible workspace or customize an office around the
                way your business works.
              </P>
            </Reveal>
            <Reveal delay={390} className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              <TextLink to="/services" className="text-accent">
                Discover your space
              </TextLink>
              <TextLink to="/locations" tone="faint" className="!text-canvas/90">
                Explore locations
              </TextLink>
            </Reveal>
          </div>

          <div className="mt-16 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <ScrollCue />
            <div className="flex w-full flex-col gap-4 sm:w-[min(25rem,58vw)]">
              <div className="flex items-baseline justify-between gap-6">
                <span className="mono text-canvas/90" aria-live="polite">
                  {heroSlides[slide].title}
                </span>
                <span className="mono tabular-nums text-canvas/80">
                  {String(slide + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
                </span>
              </div>
              <div className="flex gap-2" aria-hidden="true">
                {heroSlides.map((item, index) => (
                  <span
                    key={item.src}
                    className={cn("hero-progress h-px flex-1 bg-canvas/60", index === slide && "is-active")}
                  />
                ))}
              </div>
              <div className="flex justify-end gap-5">
                <button
                  type="button"
                  onClick={() => moveSlide(-1)}
                  aria-label="Previous photograph"
                  className="font-display text-[1.5rem] leading-none text-canvas/90 transition-colors hover:text-accent"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => moveSlide(1)}
                  aria-label="Next photograph"
                  className="font-display text-[1.5rem] leading-none text-canvas/90 transition-colors hover:text-accent"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="discover" className="py-[clamp(5rem,12vh,9rem)]">
        <Matrix
          aside={
            <div className="space-y-8">
              <Mono className="text-accent">Daftarkhwan · Pakistan</Mono>
              <DataList
                items={[
                  { k: "Cities", v: "03" },
                  { k: "Locations", v: "11" },
                  { k: "Solutions", v: "06" },
                ]}
              />
              <TextLink to="/about" tone="faint">
                About Daftarkhwan
              </TextLink>
            </div>
          }
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Reveal>
                <Mono className="mb-7 block text-accent">Find your freedom at work</Mono>
                <Display size="lg" as="h2">
                  A workspace that works your way.
                </Display>
              </Reveal>
              <Reveal delay={100} className="mt-9 max-w-[50ch]">
                <P lead>
                  Choose from flexible membership options or customize your workspace with tailored
                  solutions that adapt to your business needs. From a shared desk to a dedicated office,
                  Daftarkhwan brings work, community and support together.
                </P>
                <div className="mt-8 max-w-[46ch]">
                  <P>
                    Work without the hassle: high-speed internet, valet parking, mail handling, kids
                    playrooms, in-house cafes and dedicated administrative and IT support at selected sites.
                  </P>
                </div>
                <div className="mt-10">
                  <TextLink to="/services">Explore workspace solutions</TextLink>
                </div>
              </Reveal>
            </div>
            <Reveal delay={180} className="group lg:col-span-5 lg:mt-16">
              <figure>
                <Photo
                  src={img.executiveOffice}
                  alt="Private office at Daftarkhwan One"
                  frameClassName="aspect-[4/5] w-full"
                />
                <figcaption className="mt-3 flex items-baseline justify-between gap-5">
                  <Mono tone="faint">Daftarkhwan | One</Mono>
                  <Mono tone="faint">Phase 5 · Lahore</Mono>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Matrix>
      </Section>

      <Section id="services" className="pb-[clamp(5rem,12vh,9rem)]">
        <SectionHead
          index="01 — Services"
          kicker="Discover your space"
          size="lg"
          title={
            <>
              Space for the way
              <br />
              <span className="italic text-accent">you work.</span>
            </>
          }
          aside={
            <div className="space-y-7">
              <P className="text-[0.8125rem]">
                From a shared desk to a tailored enterprise floor, find the workspace that fits your team.
              </P>
              <TextLink to="/services">All workspace solutions</TextLink>
            </div>
          }
        />

        <div className="mt-[clamp(2.5rem,6vw,5rem)] grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
          {services.slice(0, 4).map((service, i) => (
            <Reveal key={service.code} delay={i * 90}>
              <button
                type="button"
                onClick={() => navigate(`/services/${service.slug}`)}
                className="group block w-full cursor-pointer text-left"
              >
                <Photo
                  src={img[service.image]}
                  alt={service.name}
                  frameClassName={cn("w-full", service.imageRatio)}
                />
                <div className="hair-t mt-4 flex items-baseline justify-between gap-4 pt-4 transition-colors duration-700 group-hover:border-accent">
                  <span className="display text-[clamp(1.65rem,3vw,2.8rem)]">{service.name}</span>
                  <span className="mono shrink-0 text-accent">{service.code}</span>
                </div>
                <span className="copy mt-3 block max-w-[48ch] text-[0.8125rem]">{service.line}</span>
              </button>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-end">
          <TextLink to="/services" tone="faint">
            View every solution
          </TextLink>
        </div>
      </Section>

      <Section id="locations" className="pb-[clamp(5rem,12vh,9rem)]">
        <SectionHead
          index="02 — Locations"
          kicker="Lahore · Islamabad · Rawalpindi"
          size="lg"
          title={
            <>
              Work from the
              <br />
              <span className="italic text-accent">main street.</span>
            </>
          }
          aside={
            <div className="space-y-7">
              <P className="text-[0.8125rem]">
                Work from prime locations across key corporate districts and join a dynamic supercommunity
                of professionals.
              </P>
              <TextLink to="/locations">Explore all 11 locations</TextLink>
            </div>
          }
        />

        <div className="mt-[clamp(2.5rem,6vw,5rem)] grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 md:gap-x-6">
          {cityViews.map((item, i) => (
            <Reveal key={item.city} delay={i * 100}>
              <button
                type="button"
                onClick={() => navigate(`/locations/${item.city.toLowerCase()}`)}
                className="group block w-full cursor-pointer text-left"
              >
                <Photo
                  src={item.image}
                  alt={`Daftarkhwan workspace in ${item.city}`}
                  frameClassName="aspect-[16/10] w-full"
                />
                <div className="hair-t mt-4 flex items-baseline justify-between gap-4 pt-4 transition-colors duration-700 group-hover:border-accent">
                  <span className="display text-[clamp(1.65rem,2.8vw,2.7rem)]">{item.city}</span>
                  <span className="mono text-ink/45">{item.count}</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pb-[clamp(5rem,12vh,9rem)]">
        <Rule />
        <div className="grid grid-cols-1 gap-8 py-7 lg:grid-cols-4 lg:items-end">
          <div className="lg:col-span-3">
            <Reveal>
              <Mono className="mb-6 block text-accent">The Daftarkhwan supercommunity</Mono>
              <Display size="md" as="h2">
                A place to connect, grow and take the lead.
              </Display>
            </Reveal>
          </div>
          <div className="lg:col-span-1 lg:pl-[clamp(1.25rem,2.2vw,2.25rem)] lg:hair-l">
            <P className="text-[0.8125rem]">
              A dynamic mix of innovators and creators from different industries, abilities and
              backgrounds.
            </P>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-12">
          {gallery.map((plate, i) => (
            <div
              key={plate.meta}
              className={cn(
                i === 0 ? "lg:col-span-7" : "lg:col-span-5",
                i === 1 && "lg:mt-24",
                i === 2 && "lg:col-start-2",
                i === 3 && "lg:mt-16",
              )}
            >
              <Plate
                src={plate.src}
                caption={plate.caption}
                meta={plate.meta}
                ratio={plate.ratio}
                delay={i * 80}
                className="gallery-image"
              />
            </div>
          ))}
        </div>
      </Section>

      <section id="community" className="dark-surface relative overflow-hidden py-[clamp(4rem,10vw,8rem)]">
        <div className="relative px-gutter">
          <Matrix
            aside={
              <div className="space-y-8">
                <Mono className="text-accent">Our community</Mono>
                <DataList
                  items={[
                    { k: "Sites", v: "11" },
                    { k: "Workspace", v: "510,000+ sq ft" },
                    { k: "Members", v: "5,000+" },
                  ]}
                />
              </div>
            }
          >
            <Reveal>
              <Mono className="mb-7 block text-accent">Our supercommunity</Mono>
              <Display size="lg" as="h2">
                More than a place to work.
              </Display>
            </Reveal>
            <Reveal delay={100} className="mt-8 max-w-[52ch]">
              <P lead>
                We are home to a dynamic mix of innovators and creators. Companies such as Careem,
                Reckitt and Starzplay are part of the community that makes Daftarkhwan more than just an
                office.
              </P>
            </Reveal>
          </Matrix>
          <div className="mt-14 border-t border-canvas/15 pt-8">
            <LogoCarousel
              label="Supercommunity & partners"
              marks={logoMarks.map((mark) => ({ ...mark, url: logoUrl(mark.key) }))}
              names={memberWordmarks}
              interval={3200}
            />
            <p className="copy mt-8 max-w-[56ch]">
              Published marks are shown as a single ink set. Companies named in Daftarkhwan&rsquo;s own
              copy are set here as wordmarks.
            </p>
          </div>
        </div>
      </section>

      <Section id="numbers" className="py-[clamp(5rem,12vh,9rem)]">
        <Matrix
          aside={
            <div className="space-y-7">
              <Mono className="text-accent">Across Pakistan</Mono>
              <P className="text-[0.8125rem]">
                A network shaped around the way modern businesses work.
              </P>
            </div>
          }
        >
          <Reveal>
            <Mono className="mb-6 block text-accent">Daftarkhwan, in brief</Mono>
            <Display size="md" as="h2">
              Freedom to grow and scale.
            </Display>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 80} className="hair-t py-7 sm:pr-6">
                <Counter
                  value={m.value}
                  suffix={m.suffix}
                  className="block text-[clamp(2.6rem,8vw,3.6rem)] leading-[1.05] text-accent"
                />
                <Mono tone="mid" className="mt-4 block">
                  {m.label}
                </Mono>
                <span className="mt-2 block font-mono text-[0.58rem] font-light leading-[1.7] tracking-[0.12em] text-ink/40">
                  {m.meta}
                </span>
              </Reveal>
            ))}
          </div>
        </Matrix>
      </Section>

      <Section id="blogs" className="pb-[clamp(4rem,10vh,8rem)]">
        <SectionHead
          index="03 — Blogs"
          kicker="Work trends · Business insights"
          size="md"
          title={
            <>
              What&rsquo;s new at <span className="italic text-accent">Daftarkhwan.</span>
            </>
          }
          aside={
            <div className="space-y-6">
              <P className="text-[0.8125rem]">Ideas and updates from across our supercommunity.</P>
              <TextLink to="/blog">Read the blog</TextLink>
            </div>
          }
        />
        <div className="mt-10">
          {journal.slice(0, 3).map((entry, i) => (
            <Reveal key={entry.issue} delay={i * 60}>
              <LinkRow
                index={entry.issue}
                title={entry.title}
                meta={entry.category}
                note={entry.excerpt}
                href={entry.href}
              />
            </Reveal>
          ))}
          <Rule />
        </div>
      </Section>

      <Section className="pb-[clamp(3rem,9vh,7rem)]">
        <Rule />
        <Matrix
          className="py-[clamp(3rem,7vw,6rem)]"
          aside={
            <div className="space-y-7">
              <Mono className="text-accent">Get in touch</Mono>
              <DataList
                items={[
                  { k: "Phone", v: "042 111-323827" },
                  { k: "Email", v: "hello@daftarkhwan.com" },
                  { k: "Cities", v: "LHE · ISB · RWP" },
                ]}
              />
            </div>
          }
        >
          <Reveal>
            <Mono className="mb-7 block text-accent">Ready to move in?</Mono>
            <Display size="xl" as="h2">
              Join a community
              <br />
              <span className="pl-[8%] italic text-accent">of leaders.</span>
            </Display>
          </Reveal>
          <Reveal delay={100} className="mt-12 max-w-[45ch]">
            <P lead>
              Find a space that empowers you and your business with the freedom to take the lead.
            </P>
            <div className="mt-9 flex flex-wrap gap-10">
              <TextLink to="/contact">Let&rsquo;s connect</TextLink>
              <TextLink to="/locations" tone="faint">
                Find your location
              </TextLink>
            </div>
          </Reveal>
        </Matrix>
        <Rule />
      </Section>

      <Rail code="DK" label="Daftarkhwan" />
    </div>
  );
}