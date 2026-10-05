import {
  Accordion,
  DataList,
  Display,
  Matrix,
  Mono,
  P,
  PageHero,
  Photo,
  Reveal,
  Rule,
  Section,
  SectionHead,
  TextLink,
} from "../components/primitives";
import { Rail } from "../components/Chrome";
import { framed } from "../lib/media";
import { cityInfo, citySlugs, contactDetails, isCitySlug, spacePath, spaces, startingFrom } from "../lib/data";
import { useRouter } from "../lib/router";
import NotFound from "./NotFound";

const WORDS = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"];

export default function LocationCity({ citySlug }: { citySlug: string }) {
  const { navigate } = useRouter();
  if (!isCitySlug(citySlug)) return <NotFound />;

  const city = cityInfo[citySlug];
  const sites = spaces.filter((space) => space.citySlug === citySlug);
  const others = citySlugs.filter((slug) => slug !== citySlug);

  return (
    <div className="relative">
      <PageHero
        photo={city.image}
        kicker={`Locations · ${city.areas}`}
        title={city.name}
        accent={`${WORDS[sites.length] ?? sites.length} locations.`}
        intro={city.summary}
        crumbs={[{ label: "Locations", to: "/locations" }, { label: city.name }]}
      />

      <Section className="py-[clamp(4rem,10vh,8rem)]">
        <Matrix
          aside={
            <div className="space-y-8">
              <Mono className="text-accent">{city.name} at a glance</Mono>
              <DataList
                items={[
                  { k: "Locations", v: String(sites.length).padStart(2, "0") },
                  { k: "Districts", v: city.areas },
                  { k: "Coworking from", v: `${startingFrom(sites, "coworking")} / mo` },
                  { k: "Private office from", v: `${startingFrom(sites, "privateOffice")} / mo` },
                ]}
              />
              <TextLink to="/contact">Book a tour</TextLink>
            </div>
          }
        >
          <Reveal>
            <Mono className="mb-7 block text-accent">Daftarkhwan in {city.name}</Mono>
            <Display size="md" as="h2">
              {city.tagline}
            </Display>
          </Reveal>
          <Reveal delay={100} className="mt-9 max-w-[54ch]">
            <P lead>{city.intro}</P>
          </Reveal>
        </Matrix>
      </Section>

      <Section className="pb-[clamp(4rem,10vh,8rem)]">
        <SectionHead
          index={`${sites.length} locations`}
          kicker={`${city.name} locations`}
          size="md"
          title={
            <>
              Choose your <span className="italic text-accent">address.</span>
            </>
          }
          aside={
            <P className="text-[0.875rem]">
              Starting rates are per seat and exclusive of sales tax. Electricity and power backup surcharge may apply.
            </P>
          }
        />
        <div className="mt-[clamp(2.5rem,6vw,4.5rem)] grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
          {sites.map((space, i) => (
            <Reveal key={space.slug} delay={i * 80}>
              <button
                type="button"
                onClick={() => navigate(spacePath(space))}
                className="group block w-full cursor-pointer text-left"
              >
                <Photo
                  src={framed(space.image, "aspect-[16/10]")}
                  alt={space.imageAlt}
                  frameClassName="aspect-[16/10] w-full"
                />
                <div className="hair-t mt-5 flex items-baseline justify-between gap-4 pt-4 transition-colors duration-700 group-hover:border-accent">
                  <span className="display text-[clamp(1.8rem,3vw,2.8rem)]">{space.name}</span>
                  <span className="mono shrink-0 text-ink/[0.74]">
                    {space.status === "Open" ? `From ${space.coworking}` : space.status}
                  </span>
                </div>
                <span className="mono mt-3 block text-ink/[0.66]">{space.district}</span>
                <span className="copy mt-4 block max-w-[52ch] text-[0.9375rem]">{space.note}</span>
                <span className="mono-sm mt-6 inline-flex items-baseline gap-3 text-ink">
                  <span className="underline-fade">Explore {space.name}</span>
                  <span aria-hidden="true" className="transition-transform duration-700 group-hover:translate-x-2">
                    →
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pb-[clamp(4rem,10vh,8rem)]">
        <Rule />
        <div className="flex items-baseline justify-between py-6">
          <Mono tone="mid">Frequently asked questions</Mono>
          <Mono tone="mid">{city.name}</Mono>
        </div>
        <Matrix
          aside={
            <div className="space-y-8">
              <Mono className="text-accent">Still have questions?</Mono>
              <DataList
                items={[
                  { k: "Phone", v: <a href={`tel:${contactDetails.tel}`}>{contactDetails.dial}</a> },
                  { k: "WhatsApp", v: <a href={contactDetails.whatsappLink}>{contactDetails.whatsapp}</a> },
                  { k: "Email", v: <a href={`mailto:${contactDetails.salesEmail}`}>{contactDetails.salesEmail}</a> },
                ]}
              />
              <TextLink to="/faqs" tone="faint">
                All FAQs
              </TextLink>
            </div>
          }
        >
          <Accordion items={city.faqs} initial={0} />
        </Matrix>
      </Section>

      <Section className="pb-[clamp(3rem,8vw,6rem)]">
        <Rule />
        <Matrix className="py-[clamp(2.5rem,6vw,4.5rem)]" aside={<Mono className="text-accent">Explore the network</Mono>}>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <Display size="md" as="h2">
              Working across cities?
            </Display>
            <div className="flex flex-wrap gap-8">
              {others.map((slug) => (
                <TextLink key={slug} to={`/locations/${slug}`}>
                  {cityInfo[slug].name}
                </TextLink>
              ))}
              <TextLink to="/locations" tone="faint">
                All locations
              </TextLink>
            </div>
          </div>
        </Matrix>
        <Rule />
      </Section>

      <Rail code="DK" label={city.name} />
    </div>
  );
}
