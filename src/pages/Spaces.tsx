import { useMemo, useState } from "react";
import {
  DataList,
  Display,
  Matrix,
  Mono,
  P,
  PageHero,
  Photo,
  Plate,
  Reveal,
  Rule,
  Section,
  SectionHead,
  TableScroll,
  TextLink,
} from "../components/primitives";
import { Rail } from "../components/Chrome";
import { framed } from "../lib/media";
import { cities, cityInfo, citySlugs, spacePath, spaces, startingFrom, type City } from "../lib/data";
import { useRouter } from "../lib/router";
import { cn } from "../utils/cn";

export default function Spaces() {
  const { navigate } = useRouter();
  const [city, setCity] = useState<City | "All locations">("All locations");
  const locations = useMemo(
    () => spaces.filter((space) => city === "All locations" || space.city === city),
    [city],
  );

  return (
    <div className="relative">
      <PageHero
        photo="coworkingWide"
        kicker="Locations · Lahore · Islamabad · Rawalpindi"
        title="Find your"
        accent="space."
        intro="Work from prime locations across key corporate districts that put your business on the main street."
      />

      <section className="relative">
        <div className="px-gutter">
          <Matrix
            className="py-[clamp(3.5rem,8vw,6rem)]"
            aside={
              <div className="space-y-8">
                <Mono className="text-accent">Browse by city</Mono>
                <div className="space-y-3">
                  {(["All locations", ...cities] as const).map((name) => (
                    <button
                      key={name}
                      type="button"
                      onClick={() => setCity(name)}
                      aria-pressed={city === name}
                      className="mono-sm block cursor-pointer text-left transition-colors duration-500"
                      style={{ color: city === name ? "var(--color-accent)" : "rgba(26,26,24,0.72)" }}
                    >
                      <span className="underline-fade" data-active={city === name}>
                        {name}
                      </span>
                    </button>
                  ))}
                </div>
                <DataList
                  items={[
                    { k: "Showing", v: `${String(locations.length).padStart(2, "0")} locations` },
                    { k: "Coworking from", v: `${startingFrom(spaces, "coworking")} / mo` },
                    { k: "Private office from", v: `${startingFrom(spaces, "privateOffice")} / mo` },
                  ]}
                />
              </div>
            }
          >
            <Reveal>
              <Mono className="mb-7 block text-accent">A national network</Mono>
              <Display size="md" as="h2">
                Eleven addresses, one supercommunity.
              </Display>
            </Reveal>
            <Reveal delay={100} className="mt-9 max-w-[54ch]">
              <P lead>
                Become part of a dynamic supercommunity of professionals. Every Daftarkhwan is fully managed and
                designed to help your business work, connect and grow, with flexible plans that scale with your team.
              </P>
            </Reveal>
          </Matrix>
        </div>
      </section>

      <Section className="pb-[clamp(4rem,10vh,8rem)]">
        <Rule />
        <div className="flex items-baseline justify-between py-6">
          <Mono tone="mid">Three cities</Mono>
          <Mono tone="mid">Explore by city</Mono>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
          {citySlugs.map((slug, i) => {
            const info = cityInfo[slug];
            const count = spaces.filter((space) => space.citySlug === slug).length;
            return (
              <Reveal key={slug} delay={i * 90}>
                <button
                  type="button"
                  onClick={() => navigate(`/locations/${slug}`)}
                  className="group block w-full cursor-pointer text-left"
                >
                  <Photo
                    src={framed(info.image, "aspect-[16/10]")}
                    alt={`Daftarkhwan in ${info.name}`}
                    frameClassName="aspect-[16/10] w-full"
                  />
                  <div className="hair-t mt-4 flex items-baseline justify-between gap-4 pt-4 transition-colors duration-700 group-hover:border-accent">
                    <span className="display text-[clamp(1.6rem,2.6vw,2.5rem)]">{info.name}</span>
                    <span className="mono text-ink/[0.72]">{String(count).padStart(2, "0")} locations</span>
                  </div>
                  <span className="copy mt-3 block text-[0.875rem]">{info.summary}</span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="pb-[clamp(3rem,8vw,6rem)]">
        <SectionHead
          index={`${locations.length} addresses`}
          kicker={city === "All locations" ? "The complete network" : `${city} locations`}
          size="md"
          title={
            <>
              Every address has
              <br />
              <span className="italic text-accent">its own character.</span>
            </>
          }
          aside={
            <div className="space-y-6">
              <Mono tone="mid">Rates vary by location</Mono>
              <P className="text-[0.875rem]">
                Published starting rates are per seat, exclusive of sales tax. Electricity and power backup surcharge may
                apply.
              </P>
            </div>
          }
        />

        <div className="mt-[clamp(2.5rem,6vw,5rem)]">
          {locations.map((space, i) => (
            <article key={space.slug} className="hair-t">
              <div className="grid grid-cols-1 lg:grid-cols-4">
                <div className="py-9 lg:col-span-3 lg:pr-[clamp(2rem,5vw,5.5rem)]">
                  <div className="flex items-start gap-6 md:gap-10">
                    <Mono tone="mid" className="w-14 shrink-0 pt-3">
                      {space.code}
                    </Mono>
                    <div>
                      <button
                        type="button"
                        onClick={() => navigate(spacePath(space))}
                        className="cursor-pointer text-left transition-colors duration-500 hover:text-accent"
                      >
                        <Display size="md" as="span" className="block">
                          Daftarkhwan | {space.name}
                        </Display>
                      </button>
                      <Mono tone="mid" className="mt-4 block">
                        {space.city} · {space.district}
                        {space.status !== "Open" ? ` · ${space.status}` : ""}
                      </Mono>
                    </div>
                  </div>
                </div>
                <aside className="pb-9 lg:col-span-1 lg:pt-9 lg:pl-[clamp(1.25rem,2.2vw,2.25rem)] lg:hair-l">
                  <DataList
                    items={[
                      { k: "Coworking", v: `${space.coworking} / mo` },
                      { k: "Private office", v: `${space.privateOffice} / mo` },
                      { k: "Meeting & events", v: space.meeting },
                    ]}
                  />
                </aside>
              </div>

              <div className="grid grid-cols-1 gap-y-10 pb-[clamp(3rem,7vw,5.5rem)] lg:grid-cols-12 lg:gap-x-10">
                <div className={cn("lg:col-span-5", i % 2 === 1 ? "lg:col-start-2" : "lg:col-start-1")}>
                  <Plate
                    src={framed(space.image, space.imageRatio)}
                    ratio="plate-tall"
                    caption={`Daftarkhwan | ${space.name}`}
                    meta={space.city}
                    alt={space.imageAlt}
                  />
                </div>
                <div className={cn("lg:col-span-4", i % 2 === 1 ? "lg:col-start-8" : "lg:col-start-7")}>
                  <div className="space-y-7">
                    <Display size="sm" as="h3">
                      {space.headline}
                    </Display>
                    <P>{space.note}</P>
                    <ul className="flex flex-wrap gap-x-5 gap-y-2">
                      {space.highlights.slice(0, 4).map((item) => (
                        <li key={item} className="mono text-ink/[0.74]">
                          + {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-8 pt-2">
                      <TextLink to={spacePath(space)}>Explore {space.name}</TextLink>
                      <TextLink to="/contact" tone="faint">
                        Book a tour
                      </TextLink>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
          <Rule />
        </div>
      </Section>

      <Section className="pb-[clamp(3rem,8vw,6rem)]">
        <div className="flex items-baseline justify-between pb-6">
          <Mono tone="mid">Location schedule</Mono>
          <Mono tone="mid">Starting rates · PKR</Mono>
        </div>
        <Rule />
        <TableScroll note="11 locations">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                {["City", "Location", "Coworking / seat / mo", "Private office / seat / mo", "Meeting & events"].map(
                  (head) => (
                    <th key={head} className="mono py-4 pr-6 font-normal text-ink/[0.62]">
                      {head}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {locations.map((space) => (
                <tr key={space.slug} className="hair-t transition-colors duration-700 hover:bg-ink/[0.025]">
                  <td className="mono py-5 pr-6 text-ink/[0.72]">{space.city}</td>
                  <td className="py-5 pr-6">
                    <button
                      type="button"
                      onClick={() => navigate(spacePath(space))}
                      className="display cursor-pointer text-[1.3rem] transition-colors duration-500 hover:text-accent"
                    >
                      {space.name}
                    </button>
                    {space.status !== "Open" && <span className="mono ml-3 text-accent">{space.status}</span>}
                  </td>
                  <td className="mono py-5 pr-6 text-ink/[0.82]">{space.coworking}</td>
                  <td className="mono py-5 pr-6 text-ink/[0.82]">{space.privateOffice}</td>
                  <td className="mono py-5 pr-6 text-ink/[0.82]">{space.meeting}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableScroll>
        <P className="mt-5 max-w-[75ch] text-[0.8125rem]">
          Published starting prices. Seat prices exclude sales tax; electricity and power backup surcharge may apply.
        </P>
      </Section>

      <Section className="pb-[clamp(3rem,8vw,6rem)]">
        <Rule />
        <Matrix className="py-[clamp(2.5rem,6vw,5rem)]" aside={<Mono className="text-accent">Plan a visit</Mono>}>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <Display size="md" as="h2">
              Walk in, or book a guided tour.
            </Display>
            <TextLink to="/contact">Book a tour</TextLink>
          </div>
        </Matrix>
        <Rule />
      </Section>

      <Rail code="DK" label="Locations" />
    </div>
  );
}
