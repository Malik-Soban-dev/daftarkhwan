import {
  DataList,
  Display,
  LinkRow,
  Matrix,
  Mono,
  P,
  PageHero,
  Plate,
  Reveal,
  Rule,
  Section,
  TextLink,
} from "../components/primitives";
import { Rail } from "../components/Chrome";
import { framed, photo } from "../lib/media";
import { cityInfo, contactDetails, findSpace, spacePath, spaces } from "../lib/data";
import { cn } from "../utils/cn";
import NotFound from "./NotFound";

const SOLUTIONS = [
  {
    key: "coworking",
    name: "Coworking",
    to: "/services/coworking",
    unit: "per seat / month",
    body: "Get full access to shared desks and collaborative spaces equipped with professional amenities.",
  },
  {
    key: "privateOffice",
    name: "Private Office",
    to: "/services/private-office",
    unit: "per seat / month",
    body: "Fully managed, ready-to-move-in workspaces built to accommodate teams of all sizes.",
  },
  {
    key: "meeting",
    name: "Meeting & Events",
    to: "/services/meeting-rooms",
    unit: "",
    body: "Book event spaces, boardrooms, or host brand activations at our premium site.",
  },
] as const;

export default function LocationDetail({ citySlug, slug }: { citySlug: string; slug: string }) {
  const space = findSpace(citySlug, slug);
  if (!space) return <NotFound />;

  const city = cityInfo[space.citySlug];
  const siblings = spaces.filter((item) => item.citySlug === space.citySlug && item.slug !== space.slug);
  const hasUnique = Boolean(space.extras?.length) || Boolean(space.studio);

  const facts = [
    { k: "City", v: space.city },
    { k: "Address", v: space.district },
    { k: "Status", v: space.status === "Open" ? "Open now" : space.status },
    ...(space.hours ? [{ k: "Hours", v: space.hours }] : []),
    ...(space.accessible ? [{ k: "Access", v: "Accessible site" }] : []),
    ...(space.studio ? [{ k: "Studio", v: "Daftarkhwan Studio" }] : []),
  ];

  return (
    <div className="relative">
      <PageHero
        photo={space.heroImage}
        kicker={`Daftarkhwan | ${space.name}`}
        title={space.name}
        intro={space.address}
        compact
        crumbs={[
          { label: "Locations", to: "/locations" },
          { label: city.name, to: `/locations/${city.slug}` },
          { label: space.name },
        ]}
      />

      <Section className="py-[clamp(4rem,10vh,8rem)]">
        <Matrix
          aside={
            <div className="space-y-8">
              <Mono className="text-accent">At a glance</Mono>
              <DataList items={facts} />
              <TextLink to="/contact">Book a tour</TextLink>
            </div>
          }
        >
          <Reveal>
            <Mono className="mb-7 block text-accent">
              {space.city} · {space.district}
            </Mono>
            <Display size="md" as="h2">
              {space.headline}
            </Display>
          </Reveal>
          <Reveal delay={100} className="mt-9 max-w-[56ch]">
            <P lead>{space.intro}</P>
          </Reveal>
        </Matrix>
      </Section>

      <Section className="pb-[clamp(4rem,10vh,8rem)]">
        <Rule />
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 pt-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Plate
              src={framed(space.image, space.imageRatio)}
              ratio="plate-tall"
              caption={space.imageAlt}
              meta={space.city}
              alt={space.imageAlt}
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
            <Reveal>
              <Mono className="mb-6 block text-accent">Discover your business address</Mono>
              <Display size="sm" as="h2">
                Everything your team needs, fully managed.
              </Display>
            </Reveal>
            <Reveal delay={100} className="mt-7">
              <P>{space.detail}</P>
            </Reveal>
            <ul className="mt-9 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
              {space.highlights.map((item) => (
                <li key={item} className="hair-t flex items-baseline gap-4 py-3.5">
                  <span aria-hidden="true" className="mono text-accent">
                    +
                  </span>
                  <span className="mono-sm text-ink/[0.88]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {space.gallery.length > 0 && (
        <Section className="pb-[clamp(4rem,10vh,8rem)]">
          <div
            className={cn(
              "grid grid-cols-1 gap-x-8 gap-y-10",
              space.gallery.length > 1 && "md:grid-cols-2",
              space.gallery.length > 2 && "lg:grid-cols-3",
            )}
          >
            {space.gallery.map((item, i) => (
              <Plate
                key={item.key}
                src={photo(item.key, 1600, 1000)}
                ratio="aspect-[16/10]"
                caption={item.alt}
                meta={String(i + 1).padStart(2, "0")}
                alt={item.alt}
                delay={i * 80}
                className="gallery-image"
              />
            ))}
          </div>
        </Section>
      )}

      <Section className="pb-[clamp(4rem,10vh,8rem)]">
        <Rule />
        <div className="flex flex-wrap items-baseline justify-between gap-4 py-6">
          <Mono tone="mid">Solutions</Mono>
          <Mono tone="mid">Prices starting from</Mono>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {SOLUTIONS.map((item, i) => (
            <Reveal
              key={item.key}
              delay={i * 80}
              className={cn("hair-t py-8 md:pr-8", i > 0 && "md:border-l md:border-ink/10 md:pl-8")}
            >
              <Mono className="text-accent">{item.name}</Mono>
              <p className="display mt-5 text-[clamp(2rem,3.4vw,3rem)] tabular-nums">{space[item.key]}*</p>
              {item.unit && (
                <Mono tone="mid" className="mt-2 block">
                  {item.unit}
                </Mono>
              )}
              <P className="mt-5 text-[0.9375rem]">{item.body}</P>
              <div className="mt-6">
                <TextLink to={item.to} tone="faint">
                  About {item.name.toLowerCase()}
                </TextLink>
              </div>
            </Reveal>
          ))}
        </div>
        <Rule />
        <P className="mt-5 max-w-[80ch] text-[0.8125rem]">
          *Prices are per seat and exclusive of sales tax. Electricity and power backup surcharge may apply. Meeting and
          event rates are exclusive of sales tax.
        </P>
      </Section>

      {hasUnique && (
        <Section className="pb-[clamp(4rem,10vh,8rem)]">
          <Rule />
          <div className="flex flex-wrap items-baseline justify-between gap-4 py-6">
            <Mono tone="mid">Unique to this site</Mono>
            <Mono tone="mid">Daftarkhwan | {space.name}</Mono>
          </div>
          <div className="grid grid-cols-1 gap-x-10 md:grid-cols-3">
            {space.extras?.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="hair-t py-8 md:pr-6">
                <Mono tone="mid">{String(i + 1).padStart(2, "0")}</Mono>
                <h3 className="display mt-4 text-[clamp(1.6rem,2.4vw,2.2rem)]">{item.title}</h3>
                <P className="mt-4 text-[0.9375rem]">{item.body}</P>
              </Reveal>
            ))}
            {space.studio && (
              <Reveal className="hair-t py-8 md:pr-6">
                <Mono className="text-accent">Daftarkhwan Studio</Mono>
                <h3 className="display mt-4 text-[clamp(1.6rem,2.4vw,2.2rem)]">Record podcasts and shoot video on site.</h3>
                <P className="mt-4 text-[0.9375rem]">
                  A dedicated studio with acoustic panels, adjustable lighting, cameras, mics, a teleprompter and a chroma
                  screen.
                </P>
                <div className="mt-6">
                  <TextLink to="/services/daftarkhwan-studio">Explore the studio</TextLink>
                </div>
              </Reveal>
            )}
          </div>
        </Section>
      )}

      <section className="dark-surface relative overflow-hidden py-[clamp(4rem,10vw,7rem)]">
        <div className="px-gutter">
          <Matrix
            aside={
              <div className="space-y-8">
                <Mono className="text-accent">Contact our team</Mono>
                <DataList
                  items={[
                    { k: "Phone", v: <a href={`tel:${contactDetails.tel}`}>042-111-DAFTAR</a> },
                    { k: "Email", v: <a href={`mailto:${contactDetails.salesEmail}`}>{contactDetails.salesEmail}</a> },
                    { k: "WhatsApp", v: <a href={contactDetails.whatsappLink}>{contactDetails.whatsapp}</a> },
                  ]}
                />
              </div>
            }
          >
            <Reveal>
              <Mono className="mb-7 block text-accent">Get in touch</Mono>
              <Display size="lg" as="h2">
                Visit Daftarkhwan | {space.name}.
              </Display>
            </Reveal>
            <Reveal delay={100} className="mt-8 max-w-[50ch]">
              <P lead>We welcome walk-ins. For a more personalized experience, schedule a guided tour with our team.</P>
            </Reveal>
            <div className="mt-10 flex flex-wrap gap-10">
              <TextLink to="/contact">Book a tour</TextLink>
              <TextLink href={space.url} tone="faint">
                View on daftarkhwan.com
              </TextLink>
            </div>
          </Matrix>
        </div>
      </section>

      {siblings.length > 0 && (
        <Section className="pt-[clamp(4rem,10vh,8rem)]">
          <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6">
            <Mono tone="mid">More in {city.name}</Mono>
            <TextLink to={`/locations/${city.slug}`} tone="faint">
              All {city.name} locations
            </TextLink>
          </div>
          {siblings.map((item, i) => (
            <Reveal key={item.slug} delay={i * 60}>
              <LinkRow
                index={item.code}
                title={item.name}
                meta={`From ${item.coworking}`}
                note={`${item.district} — ${item.note}`}
                to={spacePath(item)}
              />
            </Reveal>
          ))}
          <Rule />
        </Section>
      )}

      <Rail code="DK" label={space.name} />
    </div>
  );
}
