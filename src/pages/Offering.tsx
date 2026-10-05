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
import { findOffering, offerings, spacePath, spaces } from "../lib/data";
import { useRouter } from "../lib/router";
import { cn } from "../utils/cn";
import NotFound from "./NotFound";

/* One template for every service and amenity page:
   coworking, private office, enterprise, meeting rooms, events, studio, The Yellow Bar, kids playroom. */
export default function Offering({ slug }: { slug: string }) {
  const { navigate } = useRouter();
  const item = findOffering(slug);
  if (!item) return <NotFound />;

  const isService = item.kind === "service";
  const available = item.locations ? spaces.filter((space) => item.locations?.includes(space.slug)) : spaces;
  const related = offerings.filter((offering) => offering.slug !== item.slug).slice(0, 5);

  return (
    <div className="relative">
      <PageHero
        photo={item.heroImage}
        kicker={`${isService ? "Services" : "Amenities"} · ${item.code}`}
        title={item.name}
        intro={item.line}
        compact
        crumbs={[{ label: "Services", to: "/services" }, { label: item.name }]}
      />

      {/* Introduction */}
      <Section className="py-[clamp(4rem,10vh,8rem)]">
        <Matrix
          aside={
            <div className="space-y-8">
              <Mono className="text-accent">{isService ? "Pricing & availability" : "At a glance"}</Mono>
              <DataList
                items={[
                  { k: isService ? "Pricing" : "Details", v: item.price },
                  { k: "Availability", v: item.locations ? `${available.length} locations` : "All 11 locations" },
                  ...(item.contact ?? []).map((contact) => ({
                    k: contact.label,
                    v: (
                      <a href={contact.href} className="underline-fade">
                        {contact.value}
                      </a>
                    ),
                  })),
                ]}
              />
              {item.priceNote && <P className="text-[0.8125rem]">{item.priceNote}</P>}
              <TextLink to="/contact">{isService ? "Enquire now" : "Book a tour"}</TextLink>
            </div>
          }
        >
          <div className="grid grid-cols-1 gap-10 xl:grid-cols-12">
            <div className="xl:col-span-8">
              <Reveal>
                <Mono className="mb-7 block text-accent">{isService ? "Workspace solution" : "Amenity"}</Mono>
                <Display size="md" as="h2">
                  {item.headline}
                </Display>
              </Reveal>
              <Reveal delay={100} className="mt-9 max-w-[56ch]">
                <P lead>{item.intro}</P>
              </Reveal>
            </div>
            <div className="hidden xl:col-span-4 xl:block">
              <Plate src={framed(item.image, item.imageRatio)} ratio={item.imageRatio} alt={item.name} delay={150} />
            </div>
          </div>
        </Matrix>
      </Section>

      {/* Narrative sections */}
      {item.sections.length > 0 && (
        <Section className="pb-[clamp(4rem,10vh,8rem)]">
          {item.sections.map((section, i) => (
            <div
              key={section.title}
              className="hair-t grid grid-cols-1 gap-x-10 gap-y-8 py-[clamp(2.5rem,6vw,4.5rem)] lg:grid-cols-12"
            >
              {section.image ? (
                <>
                  <div
                    className={cn(
                      "lg:col-span-5 lg:row-start-1",
                      i % 2 === 1 ? "lg:col-start-8" : "lg:col-start-1",
                    )}
                  >
                    <Plate
                      src={photo(section.image, 1600, 1000)}
                      ratio="aspect-[16/10]"
                      caption={section.imageAlt}
                      alt={section.imageAlt}
                    />
                  </div>
                  <div
                    className={cn(
                      "lg:col-span-6 lg:row-start-1 lg:self-center",
                      i % 2 === 1 ? "lg:col-start-1" : "lg:col-start-7",
                    )}
                  >
                    <Reveal>
                      <Mono className="text-accent">{String(i + 1).padStart(2, "0")}</Mono>
                      <h2 className="display mt-5 text-[clamp(1.9rem,3.6vw,3.4rem)]">{section.title}</h2>
                    </Reveal>
                    <Reveal delay={100}>
                      <P className="mt-6 max-w-[54ch]">{section.body}</P>
                    </Reveal>
                  </div>
                </>
              ) : (
                <>
                  <Reveal className="lg:col-span-4">
                    <Mono className="text-accent">{String(i + 1).padStart(2, "0")}</Mono>
                    <h2 className="display mt-5 text-[clamp(1.9rem,3.6vw,3.4rem)]">{section.title}</h2>
                  </Reveal>
                  <Reveal delay={100} className="lg:col-span-6 lg:col-start-6">
                    <P lead>{section.body}</P>
                  </Reveal>
                </>
              )}
            </div>
          ))}
          <Rule />
        </Section>
      )}

      {/* Options */}
      {item.options && (
        <Section className="pb-[clamp(4rem,10vh,8rem)]">
          <Rule />
          <div className="flex flex-wrap items-baseline justify-between gap-4 py-6">
            <Mono tone="mid">{item.optionsTitle}</Mono>
            <Mono tone="mid">{String(item.options.length).padStart(2, "0")} options</Mono>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3">
            {item.options.map((option, i) => (
              <div key={option.title}>
                <Plate
                  src={photo(option.image, 1600, 1100)}
                  ratio="aspect-[16/11]"
                  alt={option.title}
                  delay={i * 80}
                  className="gallery-image"
                />
                <Reveal delay={i * 80}>
                  <h3 className="display mt-6 text-[clamp(1.6rem,2.6vw,2.3rem)]">{option.title}</h3>
                  <P className="mt-3 text-[0.9375rem]">{option.body}</P>
                </Reveal>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Steps */}
      {item.steps && (
        <Section className="pb-[clamp(4rem,10vh,8rem)]">
          <Rule />
          <div className="flex items-baseline justify-between py-6">
            <Mono tone="mid">How it works</Mono>
            <Mono tone="mid">{String(item.steps.length).padStart(2, "0")} steps</Mono>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {item.steps.map((step, i) => (
              <Reveal
                key={step.title}
                delay={i * 80}
                className={cn("hair-t py-8 md:pr-8", i > 0 && "md:border-l md:border-ink/10 md:pl-8")}
              >
                <span className="display text-[3rem] text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display mt-4 text-[clamp(1.6rem,2.4vw,2.2rem)]">{step.title}</h3>
                <P className="mt-4 text-[0.9375rem]">{step.body}</P>
              </Reveal>
            ))}
          </div>
          <Rule />
        </Section>
      )}

      {/* Inclusions */}
      <section className="dark-surface relative overflow-hidden py-[clamp(4rem,10vw,7rem)]">
        <div className="px-gutter">
          <Matrix
            aside={
              <div className="space-y-8">
                <Mono className="text-accent">{item.name}</Mono>
                <P className="text-[0.875rem]">
                  {isService
                    ? "Fully managed by our on-site teams, so you can focus on the work."
                    : "Part of the everyday Daftarkhwan experience for members and their teams."}
                </P>
                <TextLink to="/contact">Talk to our team</TextLink>
              </div>
            }
          >
            <Reveal>
              <Mono className="mb-8 block text-accent">{item.inclusionsTitle ?? "What’s included"}</Mono>
            </Reveal>
            <ul className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
              {item.inclusions.map((entry) => (
                <li key={entry} className="hair-t flex items-baseline gap-4 py-4">
                  <span aria-hidden="true" className="mono text-accent">
                    +
                  </span>
                  <span className="copy text-[0.9375rem]">{entry}</span>
                </li>
              ))}
            </ul>
            {item.quote && (
              <Reveal className="mt-14 border-l border-ink/30 pl-8">
                <blockquote>
                  <p className="display max-w-[34ch] text-[clamp(1.6rem,3vw,2.6rem)] italic">“{item.quote.text}”</p>
                  <footer className="mono mt-6 block text-ink/[0.78]">{item.quote.by}</footer>
                </blockquote>
              </Reveal>
            )}
          </Matrix>
        </div>
      </section>

      {/* Availability */}
      <Section className="py-[clamp(4rem,10vh,8rem)]">
        <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6">
          <Mono tone="mid">Where to find it</Mono>
          <Mono tone="mid">
            {item.locations ? `${String(available.length).padStart(2, "0")} locations` : "Across all 11 locations"}
          </Mono>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {available.map((space, i) => (
            <Reveal key={space.slug} delay={i * 40} className="hair-t">
              <button
                type="button"
                onClick={() => navigate(spacePath(space))}
                className="group flex w-full cursor-pointer items-baseline justify-between gap-4 py-5 pr-6 text-left"
              >
                <span className="min-w-0 flex-1">
                  <span className="display block text-[1.6rem] transition-colors duration-500 group-hover:text-accent">
                    {space.name}
                  </span>
                  <span className="mono mt-1 block text-ink/[0.66]">
                    {space.city} · {space.district}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="font-display text-[1.4rem] text-ink/[0.7] transition-transform duration-700 group-hover:translate-x-2"
                >
                  →
                </span>
              </button>
            </Reveal>
          ))}
        </div>
        <Rule />
      </Section>

      {/* Related */}
      <Section className="pb-[clamp(3rem,8vw,6rem)]">
        <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6">
          <Mono tone="mid">Explore more</Mono>
          <TextLink to="/services" tone="faint">
            All services
          </TextLink>
        </div>
        {related.map((offering) => (
          <LinkRow
            key={offering.slug}
            index={offering.code}
            title={offering.name}
            meta={offering.price}
            note={offering.line}
            to={`/services/${offering.slug}`}
          />
        ))}
        <Rule />
      </Section>

      <Rail code="DK" label={item.name} />
    </div>
  );
}
